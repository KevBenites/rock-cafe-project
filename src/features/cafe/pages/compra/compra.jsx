import { useState } from 'react';
import { useCart } from './hook/use-cart';
import { useCreateOrder } from './hook/use-create-order';
import { useRemoveCartItem } from './hook/use-remove-cart-item';
import { useUpdateCartItem } from './hook/use-update-cart-item';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

export const CompraPage = () => {
  const navigate = useNavigate();
  const [shippingType, setShippingType] = useState('retiro');

  const [address, setAddress] = useState('');

  const { data: cart, isLoading, error } = useCart();

  const removeItemMutation = useRemoveCartItem();

  const updateItemMutation = useUpdateCartItem();

  const createOrderMutation = useCreateOrder();

  const shippingCost =
    shippingType === 'retiro' ? 0 : shippingType === 'lima' ? 15 : 25;

  const total = Number(cart?.summary?.total_productos || 0) + shippingCost;

  const handleRemoveItem = (itemId) => {
    removeItemMutation.mutate(itemId);
  };

  const handleIncreaseQuantity = (item) => {
    updateItemMutation.mutate({
      itemId: item.id,
      cantidad: item.cantidad + 1,
    });
  };

  const handleDecreaseQuantity = (item) => {
    if (item.cantidad === 1) {
      return;
    }

    updateItemMutation.mutate({
      itemId: item.id,
      cantidad: item.cantidad - 1,
    });
  };

  const handleCreateOrder = () => {
    if (shippingType !== 'retiro' && !address.trim()) {
      toast.error('Debes ingresar una dirección');

      return;
    }

    createOrderMutation.mutate(
      {
        tipo_envio: shippingType,
        direccion_envio: address,
        costo_envio: shippingCost,
        total,
      },
      {
        onSuccess: () => {
          toast.success('¡Compra realizada correctamente ☕!');

          setAddress('');

          setShippingType('retiro');

          navigate('/');
        },

        onError: () => {
          toast.error('Ocurrió un error al procesar la compra');
        },
      },
    );
  };

  if (isLoading) {
    return (
      <div className="w-full h-[70vh] flex items-center justify-center">
        <span className="text-3xl font-bold">Cargando ☕...</span>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="w-[90%] max-w-7xl mx-auto mt-40 mb-20 flex flex-col gap-10 lg:flex-row">
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-8">Mi Carrito</h1>

        {cart.items.length === 0 ? (
          <div className="border rounded-xl p-10 text-center">
            <p
              className="
                  text-lg
                "
            >
              El carrito está vacío
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table
              className="
                  w-full
                  border
                "
            >
              <thead>
                <tr
                  className="
                      border-b
                      bg-gray-100
                    "
                >
                  <th className="p-4">Producto</th>

                  <th className="p-4">Precio</th>

                  <th className="p-4">Cantidad</th>

                  <th className="p-4">Subtotal</th>

                  <th className="p-4">Acción</th>
                </tr>
              </thead>

              <tbody>
                {cart.items.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-4">
                      <div className="flex gap-4 items-center">
                        <img
                          src={item.producto.imagen_url}
                          alt={item.producto.nombre}
                          className="w-20 h-20 object-cover rounded-lg"
                        />

                        <div>
                          <p className="font-semibold">
                            {item.producto.nombre}
                          </p>

                          {item.variante.nombre && (
                            <p className="text-sm text-gray-500">
                              {item.variante.nombre}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>

                    <td className="p-4 text-center">
                      S/{item.variante.precio}
                    </td>

                    <td className="p-4">
                      <div className="flex justify-center items-center gap-3">
                        <button
                          onClick={() => handleDecreaseQuantity(item)}
                          disabled={updateItemMutation.isPending}
                          className="w-8 h-8 border rounded-full cursor-pointer"
                        >
                          -
                        </button>

                        <span>{item.cantidad}</span>

                        <button
                          onClick={() => handleIncreaseQuantity(item)}
                          disabled={updateItemMutation.isPending}
                          className="w-8 h-8 border rounded-full cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="p-4 text-center font-semibold">
                      ${item.subtotal}
                    </td>

                    <td className="p-4 text-center">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        disabled={removeItemMutation.isPending}
                        className="text-red-500 hover:text-red-700 font-bold"
                      >
                        {removeItemMutation.isPending ? '...' : 'X'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="w-full lg:w-95">
        <div className="border rounded-xl p-6 sticky top-28">
          <h2 className="text-2xl font-bold mb-6">Resumen</h2>

          {cart.items.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Tipo de envío</h3>

              <div className="flex flex-col gap-2">
                <label>
                  <input
                    type="radio"
                    name="shipping"
                    value="retiro"
                    checked={shippingType === 'retiro'}
                    onChange={(e) => setShippingType(e.target.value)}
                  />

                  <span className="ml-2">Recojo en local</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="shipping"
                    value="lima"
                    checked={shippingType === 'lima'}
                    onChange={(e) => setShippingType(e.target.value)}
                  />

                  <span className="ml-2">Lima Metropolitana</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="shipping"
                    value="provincia"
                    checked={shippingType === 'provincia'}
                    onChange={(e) => setShippingType(e.target.value)}
                  />

                  <span className="ml-2">Provincia</span>
                </label>
              </div>
            </div>
          )}

          {shippingType !== 'retiro' && (
            <div className="mb-6">
              <label className="block font-semibold mb-2">Dirección</label>

              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border rounded-lg p-3"
                rows={4}
              />
            </div>
          )}

          <div className="flex flex-col gap-3 mb-6">
            <div className="flex justify-between">
              <span>Productos</span>

              <span>${cart.summary.total_productos}</span>
            </div>

            <div className="flex justify-between">
              <span>Envío</span>

              <span>S/{shippingCost}</span>
            </div>

            <div className="flex justify-between text-xl font-bold border-t pt-4">
              <span>Total</span>

              <span>${total}</span>
            </div>
          </div>

          <button
            onClick={handleCreateOrder}
            disabled={cart.items.length === 0 || createOrderMutation.isPending}
            className="w-full bg-black text-white py-4 rounded-xl font-semibold disabled:opacity-50 cursor-pointer"
          >
            {createOrderMutation.isPending
              ? 'Procesando compra...'
              : 'Finalizar Compra'}
          </button>
        </div>
      </div>
    </section>
  );
};
