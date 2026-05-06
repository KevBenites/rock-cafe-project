export function History() {
  return (
    <section className="w-[90%] mx-auto py-20">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <h2 className="font-grotesque-mono text-5xl font-bold text-center mb-6">
            Nuestra Historia
          </h2>
          <p className="font-grotesque font-normal">
            Nuestra historia nace de la fusión entre dos pasiones: el café de
            especialidad y la energía del rock. Inspirados en los paisajes del
            Perú y en la autenticidad de la música que rompe esquemas, creamos
            un espacio donde cada taza tiene carácter, intensidad y
            personalidad. Más que una cafetería, somos un punto de encuentro
            para quienes disfrutan lo auténtico, lo artesanal y los momentos que
            se viven sin prisa, pero con actitud.
          </p>
        </div>
        <img
          className="flex-1 object-cover h-90 rounded-4xl"
          src="/img/Nuestra-Historia.png"
          alt="Foto de la Historia de Cafe Rock"
        />
      </div>
    </section>
  );
}
