export function Footer() {
  return (
    <footer className="bg-[#271d15]/90 py-8">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row text-white mb-6 gap-8">
          <div className="flex flex-1 flex-col gap-2">
            <span className="text-3xl font-grotesque">Rock Café</span>
            <p>
              Café de especialidad tostado con pasión. Desde el origen hasta tu
              taza.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <p className="uppercase tracking-[1px] text-base font-grotesque mb-1">
              Tienda
            </p>
            <ul>
              <li className="text-sm mb-1">
                <a href="">Café</a>
              </li>
              <li className="text-sm mb-1">
                <a href="">Equipamiento</a>
              </li>
              <li className="text-sm mb-1">
                <a href="">Merchandising</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <p className="uppercase tracking-[1px] text-base font-grotesque mb-1">
              Cursos
            </p>
            <ul>
              <li className="text-sm mb-1">Talleres</li>
              <li className="text-sm mb-1">Curso de Barista</li>
              <li className="text-sm">Catación</li>
            </ul>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <p className="uppercase tracking-[1px] text-base font-grotesque mb-1">
              Contacto
            </p>
            <ul>
              <li className="text-sm mb-1">hola@origencafe.com</li>
              <li className="text-sm mb-1">+51 999 555 234</li>
              <li className="text-sm">Lima, Perú</li>
            </ul>
          </div>
        </div>

        <hr className="text-white/40" />

        <p className="text-center text-white/50 text-xs py-3">
          © 2026 Rock Café - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
