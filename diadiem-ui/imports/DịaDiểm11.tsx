import svgPaths from "./svg-wpm40hznwg";
import imgImage5 from "figma:asset/0158398dce39f3540d812ef24aa06f7b6e273c4a.png";
import imgImage72 from "figma:asset/87f115d3a906d6e3c91d9fe61b5114c37f9d6d3c.png";
import imgRectangle241 from "figma:asset/e1f7721aae66257262042cf2408fedab3c772654.png";

function Frame1() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Extra_Bold',sans-serif] font-extrabold gap-[68px] items-center leading-[normal] left-[67.5px] not-italic text-[#fb7104] text-[24px] top-[136px] whitespace-nowrap">
      <p className="relative shrink-0">Trang chủ</p>
      <p className="relative shrink-0">Địa điểm</p>
      <p className="relative shrink-0">Thủ tục/ Giấy phép</p>
      <p className="relative shrink-0">Hỗ trợ thực địa</p>
      <p className="relative shrink-0">Tin tức</p>
      <p className="relative shrink-0">Tài chính</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[37px] items-center left-[1112px] top-[39px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">EN/VI</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">Login</p>
      <div className="relative shrink-0 size-[65px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[12.5%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p16b4a380} fill="var(--fill-0, #49454F)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer />
    </div>
  );
}

function OLc() {
  return (
    <div className="absolute contents left-[40px] top-[416px]" data-name="ô lọc">
      <div className="absolute border border-black border-solid h-[58px] left-[40px] rounded-[12px] top-[416px] w-[387px]" />
      <div className="absolute left-[calc(25%+23px)] overflow-clip size-[24px] top-[433px]" data-name="Component 1">
        <div className="absolute inset-[37%_27.93%_36.98%_28.14%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5416 6.24659">
            <path d={svgPaths.p3c3ab600} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[58px] justify-center leading-[0] left-[60px] not-italic text-[24px] text-black top-[445px] w-[310px]">
        <p className="leading-[normal]">Xã / Phường</p>
      </div>
    </div>
  );
}

function NutXacMinh() {
  return (
    <div className="absolute contents left-[20px] top-[393px]" data-name="nút xác minh">
      <div className="absolute bg-[#e4e8e0] h-[34px] left-[20px] rounded-[12px] top-[393px] w-[133px]" />
      <div className="absolute left-[28px] size-[18px] top-[401px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" fill="var(--fill-0, #4D9271)" id="Ellipse 78" r="9" />
        </svg>
      </div>
      <div className="absolute left-[27px] overflow-clip size-[20px] top-[400px]" data-name="Component 1">
        <div className="absolute inset-[28.81%_20.7%_28.6%_20.74%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7115 8.518">
            <path d={svgPaths.p1f85000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[34px] justify-center leading-[0] left-[55px] not-italic text-[#4d9271] text-[20px] top-[410px] w-[98px]">
        <p className="leading-[normal]">Verified</p>
      </div>
    </div>
  );
}

function BoxDaDim() {
  return (
    <div className="absolute bg-white inset-[69.4%_0_0_67.66%] overflow-clip rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="Box địa điểm">
      <div className="absolute h-[274px] left-0 top-0 w-[446px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle241} />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[45px] justify-center leading-[0] left-[20px] not-italic text-[26px] text-black top-[316.5px] w-[336px]">
        <p className="leading-[normal]">Hang Én</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[54px] justify-center leading-[0] left-[20px] not-italic text-[24px] text-black top-[366px] w-[336px]">
        <p className="leading-[normal]">Bố Trạch, Quảng Bình</p>
      </div>
      <NutXacMinh />
      <button className="absolute block cursor-pointer h-[30.775px] left-[384px] top-[302px] w-[33.35px]" data-name="Click Tim">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3498 30.7748">
          <path d={svgPaths.p3962df00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </button>
    </div>
  );
}

function NutXacMinh1() {
  return (
    <div className="absolute contents left-[20px] top-[393px]" data-name="nút xác minh">
      <div className="absolute bg-[#e4e8e0] h-[34px] left-[20px] rounded-[12px] top-[393px] w-[133px]" />
      <div className="absolute left-[28px] size-[18px] top-[401px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" fill="var(--fill-0, #4D9271)" id="Ellipse 78" r="9" />
        </svg>
      </div>
      <div className="absolute left-[27px] overflow-clip size-[20px] top-[400px]" data-name="Component 1">
        <div className="absolute inset-[28.81%_20.7%_28.6%_20.74%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7115 8.518">
            <path d={svgPaths.p1f85000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[34px] justify-center leading-[0] left-[55px] not-italic text-[#4d9271] text-[20px] top-[410px] w-[98px]">
        <p className="leading-[normal]">Verified</p>
      </div>
    </div>
  );
}

function BoxDaDim1() {
  return (
    <div className="absolute bg-white inset-[37.44%_0_31.96%_67.66%] overflow-clip rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="Box địa điểm">
      <div className="absolute h-[274px] left-0 top-0 w-[446px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle241} />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[45px] justify-center leading-[0] left-[20px] not-italic text-[26px] text-black top-[316.5px] w-[336px]">
        <p className="leading-[normal]">Hang Én</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[54px] justify-center leading-[0] left-[20px] not-italic text-[24px] text-black top-[366px] w-[336px]">
        <p className="leading-[normal]">Bố Trạch, Quảng Bình</p>
      </div>
      <NutXacMinh1 />
      <button className="absolute block cursor-pointer h-[30.775px] left-[384px] top-[302px] w-[33.35px]" data-name="Click Tim">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3498 30.7748">
          <path d={svgPaths.p3962df00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </button>
    </div>
  );
}

function NutXacMinh2() {
  return (
    <div className="absolute contents left-[20px] top-[393px]" data-name="nút xác minh">
      <div className="absolute bg-[#e4e8e0] h-[34px] left-[20px] rounded-[12px] top-[393px] w-[133px]" />
      <div className="absolute left-[28px] size-[18px] top-[401px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" fill="var(--fill-0, #4D9271)" id="Ellipse 78" r="9" />
        </svg>
      </div>
      <div className="absolute left-[27px] overflow-clip size-[20px] top-[400px]" data-name="Component 1">
        <div className="absolute inset-[28.81%_20.7%_28.6%_20.74%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7115 8.518">
            <path d={svgPaths.p1f85000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[34px] justify-center leading-[0] left-[55px] not-italic text-[#4d9271] text-[20px] top-[410px] w-[98px]">
        <p className="leading-[normal]">Verified</p>
      </div>
    </div>
  );
}

function BoxDaDim2() {
  return (
    <div className="absolute bg-white inset-[5.48%_0_63.93%_67.66%] overflow-clip rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="Box địa điểm">
      <div className="absolute h-[274px] left-0 top-0 w-[446px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle241} />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[45px] justify-center leading-[0] left-[20px] not-italic text-[26px] text-black top-[316.5px] w-[336px]">
        <p className="leading-[normal]">Hang Én</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[54px] justify-center leading-[0] left-[20px] not-italic text-[24px] text-black top-[366px] w-[336px]">
        <p className="leading-[normal]">Bố Trạch, Quảng Bình</p>
      </div>
      <NutXacMinh2 />
      <button className="absolute block cursor-pointer h-[30.775px] left-[384px] top-[302px] w-[33.35px]" data-name="Click Tim">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3498 30.7748">
          <path d={svgPaths.p3962df00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </button>
    </div>
  );
}

function NutXacMinh3() {
  return (
    <div className="absolute contents left-[20px] top-[393px]" data-name="nút xác minh">
      <div className="absolute bg-[#e4e8e0] h-[34px] left-[20px] rounded-[12px] top-[393px] w-[133px]" />
      <div className="absolute left-[28px] size-[18px] top-[401px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" fill="var(--fill-0, #4D9271)" id="Ellipse 78" r="9" />
        </svg>
      </div>
      <div className="absolute left-[27px] overflow-clip size-[20px] top-[400px]" data-name="Component 1">
        <div className="absolute inset-[28.81%_20.7%_28.6%_20.74%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7115 8.518">
            <path d={svgPaths.p1f85000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[34px] justify-center leading-[0] left-[55px] not-italic text-[#4d9271] text-[20px] top-[410px] w-[98px]">
        <p className="leading-[normal]">Verified</p>
      </div>
    </div>
  );
}

function BoxDaDim3() {
  return (
    <div className="absolute bg-white inset-[69.4%_33.79%_0_33.87%] overflow-clip rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="Box địa điểm">
      <div className="absolute h-[274px] left-0 top-0 w-[446px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle241} />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[45px] justify-center leading-[0] left-[20px] not-italic text-[26px] text-black top-[316.5px] w-[336px]">
        <p className="leading-[normal]">Hang Én</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[54px] justify-center leading-[0] left-[20px] not-italic text-[24px] text-black top-[366px] w-[336px]">
        <p className="leading-[normal]">Bố Trạch, Quảng Bình</p>
      </div>
      <NutXacMinh3 />
      <button className="absolute block cursor-pointer h-[30.775px] left-[384px] top-[302px] w-[33.35px]" data-name="Click Tim">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3498 30.7748">
          <path d={svgPaths.p3962df00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </button>
    </div>
  );
}

function NutXacMinh4() {
  return (
    <div className="absolute contents left-[20px] top-[393px]" data-name="nút xác minh">
      <div className="absolute bg-[#e4e8e0] h-[34px] left-[20px] rounded-[12px] top-[393px] w-[133px]" />
      <div className="absolute left-[28px] size-[18px] top-[401px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" fill="var(--fill-0, #4D9271)" id="Ellipse 78" r="9" />
        </svg>
      </div>
      <div className="absolute left-[27px] overflow-clip size-[20px] top-[400px]" data-name="Component 1">
        <div className="absolute inset-[28.81%_20.7%_28.6%_20.74%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7115 8.518">
            <path d={svgPaths.p1f85000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[34px] justify-center leading-[0] left-[55px] not-italic text-[#4d9271] text-[20px] top-[410px] w-[98px]">
        <p className="leading-[normal]">Verified</p>
      </div>
    </div>
  );
}

function BoxDaDim4() {
  return (
    <div className="absolute bg-white inset-[37.44%_33.79%_31.96%_33.87%] overflow-clip rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="Box địa điểm">
      <div className="absolute h-[274px] left-0 top-0 w-[446px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle241} />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[45px] justify-center leading-[0] left-[20px] not-italic text-[26px] text-black top-[316.5px] w-[336px]">
        <p className="leading-[normal]">Hang Én</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[54px] justify-center leading-[0] left-[20px] not-italic text-[24px] text-black top-[366px] w-[336px]">
        <p className="leading-[normal]">Bố Trạch, Quảng Bình</p>
      </div>
      <NutXacMinh4 />
      <button className="absolute block cursor-pointer h-[30.775px] left-[384px] top-[302px] w-[33.35px]" data-name="Click Tim">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3498 30.7748">
          <path d={svgPaths.p3962df00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </button>
    </div>
  );
}

function NutXacMinh5() {
  return (
    <div className="absolute contents left-[20px] top-[393px]" data-name="nút xác minh">
      <div className="absolute bg-[#e4e8e0] h-[34px] left-[20px] rounded-[12px] top-[393px] w-[133px]" />
      <div className="absolute left-[28px] size-[18px] top-[401px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" fill="var(--fill-0, #4D9271)" id="Ellipse 78" r="9" />
        </svg>
      </div>
      <div className="absolute left-[27px] overflow-clip size-[20px] top-[400px]" data-name="Component 1">
        <div className="absolute inset-[28.81%_20.7%_28.6%_20.74%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7115 8.518">
            <path d={svgPaths.p1f85000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[34px] justify-center leading-[0] left-[55px] not-italic text-[#4d9271] text-[20px] top-[410px] w-[98px]">
        <p className="leading-[normal]">Verified</p>
      </div>
    </div>
  );
}

function BoxDaDim5() {
  return (
    <div className="absolute bg-white inset-[5.48%_33.79%_63.93%_33.87%] overflow-clip rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" data-name="Box địa điểm">
      <div className="absolute h-[274px] left-0 top-0 w-[446px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle241} />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[45px] justify-center leading-[0] left-[20px] not-italic text-[26px] text-black top-[316.5px] w-[336px]">
        <p className="leading-[normal]">Hang Én</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[54px] justify-center leading-[0] left-[20px] not-italic text-[24px] text-black top-[366px] w-[336px]">
        <p className="leading-[normal]">Bố Trạch, Quảng Bình</p>
      </div>
      <NutXacMinh5 />
      <button className="absolute block cursor-pointer h-[30.775px] left-[384px] top-[302px] w-[33.35px]" data-name="Click Tim">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3498 30.7748">
          <path d={svgPaths.p3962df00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </button>
    </div>
  );
}

function TieuD() {
  return (
    <div className="absolute contents inset-[0_10.08%_0_0]" data-name="Tiêu đề">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[0_10.08%_0_5.17%] justify-center leading-[0] not-italic text-[24px] text-black">
        <p className="leading-[normal]">Không gian xây dựng</p>
      </div>
      <div className="absolute flex inset-[32.35%_96.04%_23.53%_0] items-center justify-center">
        <div className="flex-none h-[15px] rotate-180 w-[15.308px]">
          <div className="overflow-clip relative size-full" data-name="Component 1">
            <div className="absolute inset-[13.35%_8.32%_13.37%_8.32%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7617 10.9918">
                <path d={svgPaths.pa50b800} fill="var(--fill-0, black)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TieuD1() {
  return (
    <div className="absolute contents inset-[0_10.08%_0_0]" data-name="Tiêu đề">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[0_10.08%_0_5.17%] justify-center leading-[0] not-italic text-[24px] text-black">
        <p className="leading-[normal] mb-0">{`Cảnh quan & danh lam`}</p>
        <p className="leading-[normal]">thắng cảnh</p>
      </div>
      <div className="absolute flex inset-[16.67%_96.04%_60.61%_0] items-center justify-center">
        <div className="flex-none h-[15px] rotate-180 w-[15.308px]">
          <div className="overflow-clip relative size-full" data-name="Component 1">
            <div className="absolute inset-[13.35%_8.32%_13.37%_8.32%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7617 10.9918">
                <path d={svgPaths.pa50b800} fill="var(--fill-0, black)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TieuD2() {
  return (
    <div className="absolute contents inset-[0_10.08%_0_0]" data-name="Tiêu đề">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[0_10.08%_0_5.17%] justify-center leading-[0] not-italic text-[24px] text-black">
        <p className="leading-[normal]">không gian công cộng</p>
      </div>
      <div className="absolute flex inset-[32.35%_96.04%_23.53%_0] items-center justify-center">
        <div className="flex-none h-[15px] rotate-180 w-[15.308px]">
          <div className="overflow-clip relative size-full" data-name="Component 1">
            <div className="absolute inset-[13.35%_8.32%_13.37%_8.32%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7617 10.9918">
                <path d={svgPaths.pa50b800} fill="var(--fill-0, black)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TieuD3() {
  return (
    <div className="absolute contents inset-[0_10.08%_0_0]" data-name="Tiêu đề">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[0_10.08%_0_5.17%] justify-center leading-[0] not-italic text-[24px] text-black">
        <p className="leading-[normal] mb-0">Công trình - địa điểm</p>
        <p className="leading-[normal]">nhà nước</p>
      </div>
      <div className="absolute flex inset-[16.67%_96.04%_60.61%_0] items-center justify-center">
        <div className="flex-none h-[15px] rotate-180 w-[15.308px]">
          <div className="overflow-clip relative size-full" data-name="Component 1">
            <div className="absolute inset-[13.35%_8.32%_13.37%_8.32%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7617 10.9918">
                <path d={svgPaths.pa50b800} fill="var(--fill-0, black)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TieuD4() {
  return (
    <div className="absolute contents inset-[0_10.08%_0_0]" data-name="Tiêu đề">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[0_10.08%_0_5.17%] justify-center leading-[0] not-italic text-[24px] text-black">
        <p className="leading-[normal]">{`Studio & Không gian quay dựng`}</p>
      </div>
      <div className="absolute flex inset-[16.67%_96.04%_60.61%_0] items-center justify-center">
        <div className="flex-none h-[15px] rotate-180 w-[15.308px]">
          <div className="overflow-clip relative size-full" data-name="Component 1">
            <div className="absolute inset-[13.35%_8.32%_13.37%_8.32%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7617 10.9918">
                <path d={svgPaths.pa50b800} fill="var(--fill-0, black)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold inset-0 justify-center leading-[0] not-italic text-[16px] text-black text-center">
        <p className="leading-[normal]">Đặt lại bộ lọc</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0 w-full">
      <div className="h-[35px] relative shrink-0 w-[204px]" data-name="Button tìm kiếm">
        <div className="absolute bg-gradient-to-b border border-[#fb7104] border-solid from-[#ff8423] inset-0 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] to-[#e46400]" data-name="Bang 10" />
        <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[26.32%_0_24.56%_0] justify-center leading-[0] not-italic text-[16px] text-center text-white">
          <p className="leading-[normal]">Tìm kiếm</p>
        </div>
      </div>
      <div className="h-[35px] relative shrink-0 w-[204px]" data-name="Hover đặt lại bộ lọc">
        <div className="absolute bg-[#eaeaea] inset-0 rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
        <Group />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
      <div className="h-[34px] relative shrink-0 w-[387px]" data-name="Không gian xây dựng">
        <div className="absolute flex inset-[14.71%_0_14.71%_93.8%] items-center justify-center">
          <div className="flex-none rotate-180 size-[24px]">
            <button className="block cursor-pointer overflow-clip relative size-full" data-name="Component 46">
              <div className="absolute inset-[36.98%_28.03%_37%_28.14%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5175 6.24659">
                  <path d={svgPaths.p2f532800} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <TieuD />
      </div>
      <div className="h-0 relative shrink-0 w-[387px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 387 1">
            <path d="M0 0.5H387" id="Vector 43" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="h-[66px] relative shrink-0 w-[386.998px]" data-name="Cảnh quan và danh lam">
        <div className="absolute flex inset-[10.61%_0_53.03%_93.8%] items-center justify-center">
          <div className="flex-none rotate-180 size-[24px]">
            <button className="block cursor-pointer overflow-clip relative size-full" data-name="Component 45">
              <div className="absolute inset-[36.98%_28.03%_37%_28.14%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5175 6.24659">
                  <path d={svgPaths.p2f532800} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <TieuD1 />
      </div>
      <div className="h-0 relative shrink-0 w-[387px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 387 1">
            <path d="M0 0.5H387" id="Vector 43" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="h-[34px] relative shrink-0 w-[387px]" data-name="Không gian công cộng">
        <div className="absolute flex inset-[14.71%_0_14.71%_93.8%] items-center justify-center">
          <div className="flex-none rotate-180 size-[24px]">
            <button className="block cursor-pointer overflow-clip relative size-full" data-name="Component 46">
              <div className="absolute inset-[36.98%_28.03%_37%_28.14%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5175 6.24659">
                  <path d={svgPaths.p2f532800} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <TieuD2 />
      </div>
      <div className="h-0 relative shrink-0 w-[387px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 387 1">
            <path d="M0 0.5H387" id="Vector 43" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="h-[66px] relative shrink-0 w-[386.998px]" data-name="Công trình địa điểm nhà nước">
        <div className="absolute flex inset-[10.61%_0_53.03%_93.8%] items-center justify-center">
          <div className="flex-none rotate-180 size-[24px]">
            <button className="block cursor-pointer overflow-clip relative size-full" data-name="Component 45">
              <div className="absolute inset-[36.98%_28.03%_37%_28.14%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5175 6.24659">
                  <path d={svgPaths.p2f532800} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <TieuD3 />
      </div>
      <div className="h-0 relative shrink-0 w-[387px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 387 1">
            <path d="M0 0.5H387" id="Vector 43" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="h-[66px] relative shrink-0 w-[386.997px]" data-name="Studio và không gian quay dựng">
        <div className="absolute flex inset-[10.61%_0_53.03%_93.8%] items-center justify-center">
          <div className="flex-none rotate-180 size-[24px]">
            <button className="block cursor-pointer overflow-clip relative size-full" data-name="Component 46">
              <div className="absolute inset-[36.98%_28.03%_37%_28.14%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5175 6.24659">
                  <path d={svgPaths.p2f532800} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <TieuD4 />
      </div>
      <div className="h-0 relative shrink-0 w-[387px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 387 1">
            <path d="M0 0.5H387" id="Vector 43" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="h-[77px] relative shrink-0 w-[387px]" data-name="Phong cách chủ đạo">
        <div className="absolute flex inset-[37.66%_0_31.17%_93.8%] items-center justify-center">
          <div className="flex-none rotate-180 size-[24px]">
            <button className="block cursor-pointer overflow-clip relative size-full" data-name="Component 45">
              <div className="absolute inset-[36.98%_28.03%_37%_28.14%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5175 6.24659">
                  <path d={svgPaths.p2f532800} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[0_14.73%_1.3%_0] justify-center leading-[0] not-italic text-[24px] text-black">
          <p className="leading-[normal]">Phong cách chủ đạo</p>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[387px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 387 1">
            <path d="M0 0.5H387" id="Vector 43" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="h-[76px] relative shrink-0 w-[387px]" data-name="Tìm kiếm nâng cao">
        <div className="absolute flex inset-[38.16%_0_30.26%_93.8%] items-center justify-center">
          <div className="flex-none rotate-180 size-[24px]">
            <button className="block cursor-pointer overflow-clip relative size-full" data-name="Component 46">
              <div className="absolute inset-[36.98%_28.03%_37%_28.14%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5175 6.24659">
                  <path d={svgPaths.p2f532800} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[0_14.73%_0_0] justify-center leading-[0] not-italic text-[24px] text-black">
          <p className="leading-[normal]">Tìm kiếm nâng cao</p>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[20px] top-[604px] w-[427px]">
      <Frame3 />
      <div className="h-[40px] shrink-0 w-[411px]" />
    </div>
  );
}

export default function DaDim() {
  return (
    <div className="bg-white relative size-full" data-name="Địa điểm_1.1">
      <div className="absolute bg-white h-[196px] left-0 overflow-clip top-0 w-[1440px]" data-name="Navigation bar">
        <Frame1 />
        <Frame />
        <div className="absolute bg-[#ffac59] h-[73px] left-[409px] opacity-50 rounded-[50px] top-[35px] w-[643px]" />
        <div className="-translate-y-1/2 absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[424px] size-[53px] top-[calc(50%-24.5px)]" data-name="Icon 1">
          <Container />
        </div>
        <div className="absolute h-[85.085px] left-[45.65px] top-[29.96px] w-[245.706px]" data-name="image 72">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage72} />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[76px] justify-center leading-[0] left-[40px] not-italic text-[32px] text-black top-[234px] w-[330px]">
        <p className="leading-[normal]">BỘ LỌC</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[76px] justify-center leading-[0] left-[40px] not-italic text-[24px] text-black top-[305px] w-[330px]">
        <p className="leading-[normal]">Khu vực</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[76px] justify-center leading-[0] left-[40px] not-italic text-[24px] text-black top-[546px] w-[330px]">
        <p className="leading-[normal]">Loại hình</p>
      </div>
      <OLc />
      <div className="absolute h-0 left-[40px] top-[507px] w-[387px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 387 1">
            <path d="M0 0.5H387" id="Vector 41" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[40px] top-[584px] w-[387px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 387 1">
            <path d="M0 0.5H387" id="Vector 41" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[1461px] left-[40px] top-[234px] w-[1379px]" data-name="Component 32">
        <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold inset-[0_11.39%_95.14%_33.87%] justify-center leading-[0] not-italic text-[0px] text-black">
          <p>
            <span className="leading-[normal] text-[32px]">{`1,245 `}</span>
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[24px]">địa điểm quay phim đã được tìm thấy</span>
          </p>
        </div>
        <button className="absolute block cursor-pointer inset-[7.26%_71.94%_88.77%_0]" data-name="ô lọc/Default">
          <div className="absolute border border-black border-solid inset-0 rounded-[12px]" />
          <div className="absolute inset-[29.31%_5.17%_29.31%_88.63%] overflow-clip" data-name="Component 1">
            <div className="absolute inset-[37%_27.93%_36.98%_28.14%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5416 6.24659">
                <path d={svgPaths.p3c3ab600} fill="var(--fill-0, black)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium inset-[0_14.73%_0_5.17%] justify-center leading-[0] not-italic text-[24px] text-black text-left">
            <p className="leading-[normal]">Tỉnh / Thành phố</p>
          </div>
        </button>
        <BoxDaDim />
        <BoxDaDim1 />
        <BoxDaDim2 />
        <BoxDaDim3 />
        <BoxDaDim4 />
        <BoxDaDim5 />
      </div>
      <Frame4 />
    </div>
  );
}