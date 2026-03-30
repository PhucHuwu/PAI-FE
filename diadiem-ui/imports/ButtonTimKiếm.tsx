export default function ButtonTimKim() {
  return (
    <button className="block cursor-pointer relative size-full" data-name="Button tìm kiếm">
      <div className="absolute bg-gradient-to-b from-[#ffdd32] inset-0 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] to-[rgba(255,221,50,0.17)]" data-name="Bang 10" />
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[26.32%_0_24.56%_0] justify-center leading-[0] not-italic text-[#ba252e] text-[26px] text-center">
        <p className="leading-[normal]">Tìm kiếm</p>
      </div>
    </button>
  );
}