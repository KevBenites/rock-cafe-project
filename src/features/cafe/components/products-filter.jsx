import { useSearchParams } from 'react-router';

export default function ProductsFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="w-[90%] mx-auto flex justify-between items-center gap-3">
      <div className="flex justify-center items-center gap-4">
        <label htmlFor="cantidadProductos">N° productos</label>
        <select
          className="border rounded-lg p-1"
          name=""
          id="cantidadProductos"
          onChange={(e) => {
            searchParams.set('limit', e.target.value);
            setSearchParams(searchParams);
          }}
        >
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="24">24</option>
        </select>
      </div>
    </div>
  );
}
