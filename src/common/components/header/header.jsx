import { Link, NavLink, useLocation } from 'react-router';
import { Logo } from '../logo/logo';
import { useAuthStore } from '../../../features/auth/store/auth-store';

export function Header() {
  const location = useLocation();

  const isShopActive = location.pathname.startsWith('/shop');

  const { authStatus, isAdmin, logout, user } = useAuthStore();

  return (
    <header className="h-auto lg:fixed static top-0 left-0 right-0 z-50 bg-[#f9f7f5]/60 pt-4 pb-2 px-8 backdrop-blur-md">
      <nav className="navbar flex flex-col lg:flex-row gap-2.5 lg:gap-0 justify-between items-center">
        <Logo subtitle="Café" size="3xl" />

        <ul className="flex flex-col lg:flex-row items-center justify-center text-center gap-1 xl:gap-15 lg:gap-10">
          <li className="group flex flex-col font-bold font-grotesque-mono relative">
            <div
              className={`uppercase text-base tracking-[2px] p-4 text-[#5a4a42] hover:text-[#90775b] cursor-pointer ${
                isShopActive ? 'border-b-4' : ''
              }`}
            >
              Shop
            </div>
            <ul className="overflow-hidden max-h-0 flex flex-col items-center transition-all duration-500 ease-in-out group-hover:max-h-40 group-hover:pt-2">
              <NavLink
                to="/shop/nuestro-cafe"
                className={({ isActive }) =>
                  `text-sm text-[#6b5b52] py-2.5 cursor-pointer ${isActive ? 'bg-amber-800/80 text-white font-medium rounded-2xl px-2' : 'hover:text-[#6f4e37]'}`
                }
              >
                Nuestros cafés
              </NavLink>
              <NavLink
                to="/shop/merchandising"
                className={({ isActive }) =>
                  `text-sm text-[#6b5b52] py-2.5 cursor-pointer ${isActive ? 'bg-amber-800/80 text-white font-medium rounded-2xl px-2' : 'hover:text-[#6f4e37]'}`
                }
              >
                Merchandising
              </NavLink>
              <NavLink
                to="/shop/accesorios"
                className={({ isActive }) =>
                  `text-sm text-[#6b5b52] py-2.5 cursor-pointer ${isActive ? 'bg-amber-800/80 text-white font-medium rounded-2xl px-2' : 'hover:text-[#6f4e37]'}`
                }
              >
                Accesorios
              </NavLink>
            </ul>
          </li>

          <NavLink
            to="/nuestras-cafeterias"
            className={({ isActive }) =>
              `group flex flex-col font-bold font-grotesque-mono relative uppercase tracking-[2px] text-base p-4 text-[#5a4a42] hover:text-[#90775b] py-2.5 cursor-pointer ${
                isActive ? 'border-b-4' : ''
              }`
            }
          >
            Cafeterias
          </NavLink>

          <div className="flex gap-6 justify-center items-center">
            {authStatus === 'not-authenticated' ? (
              <Link
                to="/auth/login"
                className="font-bold font-grotesque-mono uppercase tracking-[2px] text-sm px-3 py-2 text-white bg-[#5a4a42] rounded-2xl hover:bg-[#5a4a42]/70"
              >
                Login
              </Link>
            ) : (
              <>
                <div className="p-4 border-gray-200">
                  <div className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer">
                    <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold uppercase">
                      {`${user?.nombre.substring(0, 1)}${user.apellido.substring(0, 1)}`}
                    </div>
                  </div>
                </div>
                <button
                  onClick={logout}
                  variant="outline"
                  size="sm"
                  className="font-bold font-grotesque-mono uppercase tracking-[2px] text-sm px-3 py-2 text-white bg-red-700/90 rounded-2xl hover:bg-red-700/70 cursor-pointer"
                >
                  Cerrar sesion
                </button>
              </>
            )}

            {isAdmin() && (
              <Link
                to="/admin"
                className="font-bold font-grotesque-mono uppercase tracking-[2px] text-sm px-3 py-2 text-white bg-red-700/90 rounded-2xl hover:bg-red-700/70 cursor-pointer"
              >
                Admin
              </Link>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
}
