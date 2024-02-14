type GradientShadowButtonProps = { children: React.ReactNode };

const GradientShadowButton = ({ children }: GradientShadowButtonProps) => {
  return (
    <div className="relative transition-transform duration-300 group w-fit active:scale-95">
      <button className="relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 duration-300 group-hover:scale-110">
        <span className="block px-4 font-semibold duration-300 rounded-md bg-slate-950 text-slate-100 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">
          {children}
        </span>
      </button>
      <span className="absolute z-0 transition-all duration-300 pointer-events-none -inset-4 transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-30 blur-xl group-hover:opacity-90 group-active:opacity-50" />
    </div>
  );
};

export default GradientShadowButton;
