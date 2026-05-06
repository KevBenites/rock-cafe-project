export const LoginInputGroup = ({
  labelContent,
  placeholderContent,
  idFor,
  required,
  typeInput,
  nameInput,
}) => {
  return (
    <div className="grid gap-2">
      <label className="font-medium text-smb" htmlFor={idFor}>
        {labelContent}
      </label>
      <input
        className="border border-black/70 bg-transparent rounded-lg px-3 py-1 h-9 w-full min-w-0 text-base shadow-xs placeholder:text-gray-600/45 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-gray-800 focus-visible:ring-2"
        id={idFor}
        type={typeInput}
        name={nameInput}
        placeholder={placeholderContent}
        // disabled
        required={required}
      />
    </div>
  );
};
