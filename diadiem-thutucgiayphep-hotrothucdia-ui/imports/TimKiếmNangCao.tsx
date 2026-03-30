import svgPaths from "./svg-u01nwlns84";

export default function TimKimNangCao() {
  return (
    <div className="relative size-full" data-name="Tìm kiếm nâng cao">
      <div className="absolute border border-[rgba(0,0,0,0.5)] border-solid h-[46px] left-0 opacity-50 rounded-[50px] top-[97px] w-[387px]" />
      <div className="-translate-y-1/2 absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[15px] size-[40px] top-[calc(50%+47.5px)]" data-name="Icon 1">
        <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
          <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
              <div className="absolute inset-[12.5%]" data-name="icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <path d={svgPaths.p16b4a380} fill="var(--fill-0, black)" id="icon" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="absolute block cursor-pointer left-[363px] overflow-clip size-[24px] top-[29px]" data-name="Component 45">
        <div className="absolute inset-[36.98%_28.03%_37%_28.14%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5175 6.24659">
            <path d={svgPaths.p2f532800} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </button>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[76px] justify-center leading-[0] left-0 not-italic text-[24px] text-black top-[38px] w-[330px]">
        <p className="leading-[normal]">Tìm kiếm nâng cao</p>
      </div>
      <div className="absolute h-0 left-0 top-[77px] w-[387px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 387 1">
            <path d="M0 0.5H387" id="Vector 41" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[34px] justify-center leading-[0] left-[59px] not-italic text-[20px] text-[rgba(0,0,0,0.5)] top-[120px] w-[327.549px]">
        <p className="leading-[normal]">Nhập từ khóa tìm kiếm</p>
      </div>
    </div>
  );
}