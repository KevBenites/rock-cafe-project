export const CafeteriaSection = ({ id, title, text, imgUrl, imgAlt }) => {
  return (
    <div
      className={`flex ${id % 2 === 0 ? 'xl:flex-row-reverse' : 'xl:flex-row'} flex-col gap-6 justify-center items-center`}
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-display font-bold">{title}</h3>
        <p className="whitespace-pre-line">{text}</p>
      </div>
      <img className="h-auto lg:h-115 rounded-4xl" src={imgUrl} alt={imgAlt} />
    </div>
  );
};
