import { useState } from 'react';

import { Logo } from '../../../common/components/logo/logo';
import { LoginInputGroup } from '../components/login-input-group';
import { useNavigate } from 'react-router';
import { useAuthStore } from '../store/auth-store';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuthStore();
  const [isPosting, setIsPosting] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setIsPosting(true);

      const formData = new FormData(e.target);
      const email = formData.get('email');
      const password = formData.get('password');
      const nombre = formData.get('nombre');
      const apellido = formData.get('apellido');

      const response = await register({
        email,
        password,
        nombre,
        apellido,
      });

      if (!response.ok) {
        alert(response.message);
        return;
      }

      navigate('/auth/login');
    } catch (error) {
      console.log(error);

      alert('Ocurrió un error inesperado');
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="flex flex-col font-sans">
      <div className="overflow-hidden p-0 border-[1.5px] border-black/55 shadow-sm rounded-xl">
        <div className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleRegister}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col items-center text-center">
                <Logo subtitle="Café" size="3xl" />

                <p className="text-base text-balance text-gray-500 mt-2">
                  Bienvenido a Rock Café
                </p>
                <p className="text-sm text-balance text-gray-500">
                  Ingrese a nuestra aplicación
                </p>
              </div>

              <LoginInputGroup
                labelContent="Correo"
                placeholderContent="mail@google.com"
                idFor="email"
                typeInput="email"
                nameInput="email"
                required
              />

              <LoginInputGroup
                labelContent="Contraseña"
                placeholderContent="Contraseña"
                idFor="password"
                typeInput="password"
                nameInput="password"
                required
              />

              <LoginInputGroup
                labelContent="Nombre"
                placeholderContent="Primer nombre"
                idFor="nombre"
                typeInput="nombre"
                nameInput="nombre"
                required
              />

              <LoginInputGroup
                labelContent="Apellido"
                placeholderContent="Apellido paterno"
                idFor="apellido"
                typeInput="apellido"
                nameInput="apellido"
                required
              />
              <button
                type="submit"
                disabled={isPosting}
                className={`
                w-full h-9 px-4 py-2 rounded-md text-sm font-medium text-white
                transition-all duration-200
                ${
                  isPosting
                    ? 'bg-red-500 cursor-not-allowed opacity-70'
                    : 'bg-black/90 hover:bg-black cursor-pointer'
                }
              `}
              >
                {isPosting ? 'Registrando...' : 'Registrar'}
              </button>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/img/Imagen-Login.png"
              alt="Image"
              className="absolute inset-0 h-full w-full dark:brightness-[1.1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
