export default function Luzes() {
  return (
    <div className="w-[20px] h-[78px] absolute right-0 top-13 flex flex-col justify-between">
      {/* PISCA-PISCA */}
      <div className="bg-[#232323] w-full h-4.5 rounded-tl-xl rounded-bl-xl border-[3px] border-r-0 border-[#232323]">
        <div
          className={`${
            ligar === 1
              ? "bg-[#33ff00] w-full h-full rounded-tl-xl rounded-bl-xl animate-pulse delay-75"
              : "bg-[#232323]"
          }`}
        ></div>
      </div>
      <div className="bg-[#000000] w-full h-4.5 rounded-tl-xl rounded-bl-xl border-[3px] border-r-0 border-[#232323]">
        <div
          className={`${
            ligar === 1
              ? "bg-[#fbff00] w-full h-full rounded-tl-xl rounded-bl-xl animate-pulse delay-150"
              : "bg-[#232323]"
          }`}
        ></div>
      </div>
      <div className="bg-[#000000] w-full h-4.5 rounded-tl-xl rounded-bl-xl border-[3px] border-r-0 border-[#232323]">
        <div
          className={`${
            ligar === 1
              ? "bg-[#ff0000] w-full h-full rounded-tl-xl rounded-bl-xl animate-pulse delay-150"
              : "bg-[#232323]"
          }`}
        ></div>
      </div>
    </div>
  );
}
