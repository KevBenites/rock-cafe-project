import { Link } from 'react-router';
import { LoginInputGroup } from '../components/login-input-group';
import { Logo } from '../../../common/components/logo/logo';

export const LoginPage = () => {
  return (
    <div className="flex flex-col font-sans">
      <div className="overflow-hidden p-0 border-[1.5px] border-black/55 shadow-sm rounded-xl">
        <div className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
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
                nameInput="password2"
                required
              />
              <button
                type="submit"
                className="w-full h-9 px-4 py-2 rounded-md text-sm font-medium text-white bg-black/90 cursor-pointer"
              >
                Ingresar
              </button>
              <div className="text-center text-sm">
                ¿No tienes cuenta?{' '}
                <Link
                  to="/auth/register"
                  className="underline underline-offset-4"
                >
                  Registrate
                </Link>
              </div>
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
