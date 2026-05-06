export default function ProductsFilter({ buttonItems }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {buttonItems.map((item) => (
        <button
          key={item.btnId}
          className="bg-[#9a5326] text-white text-sm font-medium rounded-4xl py-2 px-5 cursor-pointer hover:bg-[#9a5326] hover:text-white"
        >
          {item.btnContent}
        </button>
      ))}
    </div>
  );
}
