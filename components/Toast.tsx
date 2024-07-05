export function Toast({
  children,
  showModal,
  setShowModal,
}: ModalProps) {
  return (
    <div
      className={`${
        showModal ? "translate-x-0" : "translate-x-full"
      } fixed z-[99999999999999999] transition-transform ease-in border shadow-lg text-lg sm:text-xl top-0 right-0 bg-white px-2 py-4 w-full max-w-md h-fit flex justify-between items gap-4`}
    >
      {children}
      <i
        className="ri-close-circle-line cursor-pointer"
        onClick={() => setShowModal?.(false)}
      ></i>
    </div>
  );
}
