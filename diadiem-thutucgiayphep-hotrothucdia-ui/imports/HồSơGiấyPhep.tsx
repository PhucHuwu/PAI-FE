import svgPaths from "./svg-244btzughu";
import imgImage17 from "figma:asset/2b46a5a72ff784cac2033e17283829520423620f.png";
import imgImage5 from "figma:asset/0158398dce39f3540d812ef24aa06f7b6e273c4a.png";
import imgThemTieuD21 from "figma:asset/0cc2640c46d620d6b41eb7ed53406956f72892ae.png";
import imgImage72 from "figma:asset/87f115d3a906d6e3c91d9fe61b5114c37f9d6d3c.png";

function Frame() {
  return (
    <div className="absolute border border-[#d5d5d5] border-solid h-[43.4px] left-[calc(75%+23px)] overflow-clip rounded-bl-[8px] rounded-tl-[8px] top-[calc(60%+379.8px)] w-[39.2px]">
      <div className="absolute left-[10px] overflow-clip size-[18px] top-[12px]" data-name="Component 1">
        <div className="absolute inset-[28.14%_37%_27.96%_36.98%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.68494 7.90186">
            <path d={svgPaths.pa1f9600} fill="var(--fill-0, #414853)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute border border-[#d5d5d5] border-solid h-[43.4px] left-[calc(75%+242.8px)] overflow-clip rounded-br-[8px] rounded-tr-[8px] top-[calc(60%+379.8px)] w-[39.2px]">
      <div className="absolute flex items-center justify-center left-[9.2px] size-[18px] top-[12px]">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[18px]" data-name="Component 1">
            <div className="absolute inset-[22.08%_33.75%_22.08%_34.17%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.775 10.05">
                <path d={svgPaths.p1c675c00} fill="var(--fill-0, #414853)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#ffd0a2] border border-[#d5d5d5] border-solid h-[43.4px] left-[calc(75%+60.8px)] overflow-clip top-[calc(60%+379.8px)] w-[39.2px]">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium inset-[calc(16.13%-0.68px)_calc(14.28%-0.71px)_calc(12.9%-0.74px)_calc(14.29%-0.71px)] justify-center leading-[0] not-italic text-[20px] text-black text-center">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute border border-[#d5d5d5] border-solid h-[43.4px] left-[calc(75%+98.6px)] overflow-clip top-[calc(60%+379.8px)] w-[145.6px]">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[calc(16.13%-0.68px)_calc(2.89%-0.94px)_calc(12.9%-0.74px)_calc(2.88%-0.94px)] justify-center leading-[0] not-italic text-[20px] text-black text-center">
        <p className="leading-[normal]">1 of 4 pages</p>
      </div>
    </div>
  );
}

function DiuHng() {
  return (
    <div className="absolute contents left-[calc(75%+23px)] top-[calc(60%+379.8px)]" data-name="Điều hướng">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[37px] items-center left-[calc(75%+32px)] top-[39px]">
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

function Group() {
  return (
    <div className="absolute contents left-[800px] top-[98px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[29px] leading-[normal] left-[830px] not-italic text-[24px] text-black top-[98px] w-[86px]">{`Tải về `}</p>
      <div className="absolute left-[800px] overflow-clip size-[24px] top-[99px]" data-name="Component 7">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
            <path d={svgPaths.p11d5480} fill="var(--fill-0, #414853)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white h-[150px] relative rounded-[10px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[88px] not-italic text-[30px] text-black top-[30px] whitespace-nowrap">Mẫu đơn đề nghị cấp phép</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[88px] not-italic text-[24px] text-black top-[67px] whitespace-nowrap">Biểu mẫu đơn đề nghị cấp phép quay phim mới nhất</p>
        <div className="absolute left-[14px] overflow-clip size-[70px] top-[30px]" data-name="Component 1">
          <div className="absolute inset-[8.33%_16.67%_8.28%_16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.6667 58.3676">
              <path d={svgPaths.p3b3b9840} fill="var(--fill-0, #AD5700)" id="Vector" />
            </svg>
          </div>
        </div>
        <Group />
        <div className="absolute h-[58px] left-[722px] top-[30px] w-[259px]" data-name="Xem chi tiết">
          <div className="absolute bg-[#fb7104] inset-0 rounded-[8px]" />
          <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[24.14%_10.04%_25.86%_18.92%] justify-center leading-[0] not-italic text-[24px] text-center text-white whitespace-nowrap">
            <p className="leading-[normal] whitespace-pre">{`Xem chi tiết     >`}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bfbfbf] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1007px]">
      <Frame8 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[800px] top-[98px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[29px] leading-[normal] left-[830px] not-italic text-[24px] text-black top-[98px] w-[86px]">{`Tải về `}</p>
      <div className="absolute left-[800px] overflow-clip size-[24px] top-[99px]" data-name="Component 7">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
            <path d={svgPaths.p11d5480} fill="var(--fill-0, #414853)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white h-[150px] relative rounded-[10px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[88px] not-italic text-[30px] text-black top-[30px] whitespace-nowrap">Mẫu đơn đề nghị cấp phép</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[88px] not-italic text-[24px] text-black top-[67px] whitespace-nowrap">Biểu mẫu đơn đề nghị cấp phép quay phim mới nhất</p>
        <div className="absolute left-[14px] overflow-clip size-[70px] top-[30px]" data-name="Component 1">
          <div className="absolute inset-[8.33%_16.67%_8.28%_16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.6667 58.3676">
              <path d={svgPaths.p3b3b9840} fill="var(--fill-0, #AD5700)" id="Vector" />
            </svg>
          </div>
        </div>
        <Group1 />
        <div className="absolute h-[58px] left-[722px] top-[30px] w-[259px]" data-name="Xem chi tiết">
          <div className="absolute bg-[#fb7104] inset-0 rounded-[8px]" />
          <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[24.14%_10.04%_25.86%_18.92%] justify-center leading-[0] not-italic text-[24px] text-center text-white whitespace-nowrap">
            <p className="leading-[normal] whitespace-pre">{`Xem chi tiết     >`}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bfbfbf] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[165px] w-[1007px]">
      <Frame9 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[800px] top-[98px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[29px] leading-[normal] left-[830px] not-italic text-[24px] text-black top-[98px] w-[86px]">{`Tải về `}</p>
      <div className="absolute left-[800px] overflow-clip size-[24px] top-[99px]" data-name="Component 7">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
            <path d={svgPaths.p11d5480} fill="var(--fill-0, #414853)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white h-[150px] relative rounded-[10px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[88px] not-italic text-[30px] text-black top-[30px] whitespace-nowrap">Mẫu đơn đề nghị cấp phép</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[88px] not-italic text-[24px] text-black top-[67px] whitespace-nowrap">Biểu mẫu đơn đề nghị cấp phép quay phim mới nhất</p>
        <div className="absolute left-[14px] overflow-clip size-[70px] top-[30px]" data-name="Component 1">
          <div className="absolute inset-[8.33%_16.67%_8.28%_16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.6667 58.3676">
              <path d={svgPaths.p3b3b9840} fill="var(--fill-0, #AD5700)" id="Vector" />
            </svg>
          </div>
        </div>
        <Group2 />
        <div className="absolute h-[58px] left-[722px] top-[30px] w-[259px]" data-name="Xem chi tiết">
          <div className="absolute bg-[#fb7104] inset-0 rounded-[8px]" />
          <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[24.14%_10.04%_25.86%_18.92%] justify-center leading-[0] not-italic text-[24px] text-center text-white whitespace-nowrap">
            <p className="leading-[normal] whitespace-pre">{`Xem chi tiết     >`}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bfbfbf] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[330px] w-[1007px]">
      <Frame10 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[800px] top-[98px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[29px] leading-[normal] left-[830px] not-italic text-[24px] text-black top-[98px] w-[86px]">{`Tải về `}</p>
      <div className="absolute left-[800px] overflow-clip size-[24px] top-[99px]" data-name="Component 7">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
            <path d={svgPaths.p11d5480} fill="var(--fill-0, #414853)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white h-[150px] relative rounded-[10px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[88px] not-italic text-[30px] text-black top-[30px] whitespace-nowrap">Mẫu đơn đề nghị cấp phép</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[88px] not-italic text-[24px] text-black top-[67px] whitespace-nowrap">Biểu mẫu đơn đề nghị cấp phép quay phim mới nhất</p>
        <div className="absolute left-[14px] overflow-clip size-[70px] top-[30px]" data-name="Component 1">
          <div className="absolute inset-[8.33%_16.67%_8.28%_16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.6667 58.3676">
              <path d={svgPaths.p3b3b9840} fill="var(--fill-0, #AD5700)" id="Vector" />
            </svg>
          </div>
        </div>
        <Group3 />
        <div className="absolute h-[58px] left-[722px] top-[30px] w-[259px]" data-name="Xem chi tiết">
          <div className="absolute bg-[#fb7104] inset-0 rounded-[8px]" />
          <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[24.14%_10.04%_25.86%_18.92%] justify-center leading-[0] not-italic text-[24px] text-center text-white whitespace-nowrap">
            <p className="leading-[normal] whitespace-pre">{`Xem chi tiết     >`}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bfbfbf] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[495px] w-[1007px]">
      <Frame11 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[800px] top-[98px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[29px] leading-[normal] left-[830px] not-italic text-[24px] text-black top-[98px] w-[86px]">{`Tải về `}</p>
      <div className="absolute left-[800px] overflow-clip size-[24px] top-[99px]" data-name="Component 7">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
            <path d={svgPaths.p11d5480} fill="var(--fill-0, #414853)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white h-[150px] relative rounded-[10px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[88px] not-italic text-[30px] text-black top-[30px] whitespace-nowrap">Mẫu đơn đề nghị cấp phép</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[88px] not-italic text-[24px] text-black top-[67px] whitespace-nowrap">Biểu mẫu đơn đề nghị cấp phép quay phim mới nhất</p>
        <div className="absolute left-[14px] overflow-clip size-[70px] top-[30px]" data-name="Component 1">
          <div className="absolute inset-[8.33%_16.67%_8.28%_16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.6667 58.3676">
              <path d={svgPaths.p3b3b9840} fill="var(--fill-0, #AD5700)" id="Vector" />
            </svg>
          </div>
        </div>
        <Group4 />
        <div className="absolute h-[58px] left-[722px] top-[30px] w-[259px]" data-name="Xem chi tiết">
          <div className="absolute bg-[#fb7104] inset-0 rounded-[8px]" />
          <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[24.14%_10.04%_25.86%_18.92%] justify-center leading-[0] not-italic text-[24px] text-center text-white whitespace-nowrap">
            <p className="leading-[normal] whitespace-pre">{`Xem chi tiết     >`}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bfbfbf] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[660px] w-[1007px]">
      <Frame12 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[800px] top-[98px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[29px] leading-[normal] left-[830px] not-italic text-[24px] text-black top-[98px] w-[86px]">{`Tải về `}</p>
      <div className="absolute left-[800px] overflow-clip size-[24px] top-[99px]" data-name="Component 7">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
            <path d={svgPaths.p11d5480} fill="var(--fill-0, #414853)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white h-[150px] relative rounded-[10px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[88px] not-italic text-[30px] text-black top-[30px] whitespace-nowrap">Mẫu đơn đề nghị cấp phép</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[88px] not-italic text-[24px] text-black top-[67px] whitespace-nowrap">Biểu mẫu đơn đề nghị cấp phép quay phim mới nhất</p>
        <div className="absolute left-[14px] overflow-clip size-[70px] top-[30px]" data-name="Component 1">
          <div className="absolute inset-[8.33%_16.67%_8.28%_16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.6667 58.3676">
              <path d={svgPaths.p3b3b9840} fill="var(--fill-0, #AD5700)" id="Vector" />
            </svg>
          </div>
        </div>
        <Group5 />
        <div className="absolute h-[58px] left-[722px] top-[30px] w-[259px]" data-name="Xem chi tiết">
          <div className="absolute bg-[#fb7104] inset-0 rounded-[8px]" />
          <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[24.14%_10.04%_25.86%_18.92%] justify-center leading-[0] not-italic text-[24px] text-center text-white whitespace-nowrap">
            <p className="leading-[normal] whitespace-pre">{`Xem chi tiết     >`}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bfbfbf] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[825px] w-[1007px]">
      <Frame13 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[800px] top-[98px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[29px] leading-[normal] left-[830px] not-italic text-[24px] text-black top-[98px] w-[86px]">{`Tải về `}</p>
      <div className="absolute left-[800px] overflow-clip size-[24px] top-[99px]" data-name="Component 7">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
            <path d={svgPaths.p11d5480} fill="var(--fill-0, #414853)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white h-[150px] relative rounded-[10px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[88px] not-italic text-[30px] text-black top-[30px] whitespace-nowrap">Mẫu đơn đề nghị cấp phép</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[88px] not-italic text-[24px] text-black top-[67px] whitespace-nowrap">Biểu mẫu đơn đề nghị cấp phép quay phim mới nhất</p>
        <div className="absolute left-[14px] overflow-clip size-[70px] top-[30px]" data-name="Component 1">
          <div className="absolute inset-[8.33%_16.67%_8.28%_16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.6667 58.3676">
              <path d={svgPaths.p3b3b9840} fill="var(--fill-0, #AD5700)" id="Vector" />
            </svg>
          </div>
        </div>
        <Group6 />
        <div className="absolute h-[58px] left-[722px] top-[30px] w-[259px]" data-name="Xem chi tiết">
          <div className="absolute bg-[#fb7104] inset-0 rounded-[8px]" />
          <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[24.14%_10.04%_25.86%_18.92%] justify-center leading-[0] not-italic text-[24px] text-center text-white whitespace-nowrap">
            <p className="leading-[normal] whitespace-pre">{`Xem chi tiết     >`}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#bfbfbf] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[990px] w-[1007px]">
      <Frame14 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute h-[1140px] left-[calc(25%+21px)] top-[calc(20%+69.6px)] w-[1007px]">
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame5() {
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

function StateLayer1() {
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

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer1 />
    </div>
  );
}

function Frame22() {
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

function Frame6() {
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

function StateLayer2() {
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

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[196px] left-[-1px] overflow-clip top-0 w-[1440px]">
      <div className="absolute bg-white h-[196px] left-0 top-0 w-[1440px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[277px] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Địa điểm</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[462px] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Thủ tục/ Giấy phép</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[742px] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Hỗ trợ thực địa</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[977px] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Tin tức</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[1118px] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Tài chính</p>
      <Frame5 />
      <div className="absolute bg-[#ffac59] h-[73px] left-[409px] opacity-50 rounded-[50px] top-[35px] w-[643px]" />
      <div className="-translate-y-1/2 absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[424px] size-[53px] top-[calc(50%-24.5px)]" data-name="Icon 1">
        <Container1 />
      </div>
      <div className="absolute h-[91px] left-0 top-[28px] w-[325px]" data-name="Thêm tiêu đề (2) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThemTieuD21} />
      </div>
      <div className="absolute bg-white h-[196px] left-0 overflow-clip top-0 w-[1440px]" data-name="Navigation bar">
        <Frame22 />
        <Frame6 />
        <div className="absolute bg-[#ffac59] h-[73px] left-[409px] opacity-50 rounded-[50px] top-[35px] w-[643px]" />
        <div className="-translate-y-1/2 absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[424px] size-[53px] top-[calc(50%-24.5px)]" data-name="Icon 1">
          <Container2 />
        </div>
        <div className="absolute h-[85.085px] left-[45.65px] top-[29.96px] w-[245.706px]" data-name="image 72">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage72} />
        </div>
      </div>
    </div>
  );
}

function ChanTrang() {
  return (
    <div className="absolute contents left-0 top-[calc(80%+50.4px)]" data-name="Chân trang">
      <div className="absolute bg-[rgba(255,255,255,0.8)] h-[383px] left-0 top-[calc(80%+50.4px)] w-[1440px]" />
      <div className="absolute h-[123px] left-0 top-[calc(80%+147.4px)] w-[439px]" data-name="Thêm tiêu đề (2) 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThemTieuD21} />
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(25%+126px)] not-italic text-[#414853] text-[24px] top-[calc(80%+200.4px)] whitespace-nowrap">Khám phá</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[71px] not-italic text-[#414853] text-[16px] top-[calc(80%+285.4px)] whitespace-nowrap">
        <p className="leading-[normal] mb-0">Được bảo trợ bởi Học viện Công nghệ Bưu chính</p>
        <p className="leading-[normal]">Viễn thông và Hiệp hội Xúc tiến Điện ảnh Việt Nam</p>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(25%+326px)] not-italic text-[#414853] text-[24px] top-[calc(80%+200.4px)] whitespace-nowrap">Sản xuất</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%+171px)] not-italic text-[#414853] text-[24px] top-[calc(80%+200.4px)] whitespace-nowrap">Khám phá</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(75%+31px)] not-italic text-[#414853] text-[24px] top-[calc(80%+200.4px)] whitespace-nowrap">Liên hệ</p>
      <div className="absolute left-[calc(50%+24px)] overflow-clip size-[51px] top-[calc(80%+321.4px)]" data-name="Component 2">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.5 42.5">
            <path d={svgPaths.pd07dcf0} fill="var(--fill-0, #414853)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(25%+185px)] overflow-clip size-[51px] top-[calc(80%+321.4px)]" data-name="Component 3">
        <div className="absolute inset-[8.33%_29.17%_8.33%_27.54%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0787 42.5001">
            <path d={svgPaths.pa65b6f0} fill="var(--fill-0, #414853)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(50%+121px)] overflow-clip size-[54px] top-[calc(80%+321.4px)]" data-name="Component 4">
        <div className="absolute inset-[17.74%_4.15%_17.8%_4.13%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.5312 34.8048">
            <path d={svgPaths.p160b0100} fill="var(--fill-0, #414853)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(25%+273px)] overflow-clip size-[65px] top-[calc(80%+314.4px)]" data-name="Component 1">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.1667 43.3333">
            <path d={svgPaths.p3cd0ea00} fill="var(--fill-0, #414853)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function HSGiyPhep() {
  return (
    <div className="bg-white relative size-full" data-name="Hồ sơ giấy phép">
      <div className="absolute h-[755px] left-[-17px] opacity-80 top-0 w-[1473px]" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage17} />
      </div>
      <div className="absolute h-[843px] left-[-30px] top-[calc(60%+285.8px)] w-[1500px]" data-name="image 60">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage17} />
      </div>
      <div className="absolute h-[843px] left-[-30px] top-[calc(20%+321.6px)] w-[1500px]" data-name="image 61">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage17} />
      </div>
      <div className="absolute bg-[rgba(246,243,238,0.9)] h-[2156px] left-0 opacity-80 top-[11px] w-[1440px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[277px] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Địa điểm</p>
      <div className="-translate-x-1/2 absolute h-[1403px] left-[calc(12.5%+69px)] top-[279px] w-[426px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 426 1403">
          <path d={svgPaths.p2292f380} fill="url(#paint0_linear_7_6217)" id="Rectangle 257" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_6217" x1="-18.4318" x2="-18.4318" y1="1366.13" y2="-36.8671">
              <stop stopColor="#D9D9D9" stopOpacity="0" />
              <stop offset="0.692308" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute bg-white h-[1472px] left-[calc(62.5%-20px)] rounded-br-[10px] rounded-tr-[10px] top-[279px] w-[1050px]" />
      <DiuHng />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[80px] not-italic text-[32px] text-black top-[314px] whitespace-nowrap">BỘ LỌC</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(25%+102px)] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Thủ tục/ Giấy phép</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%+22px)] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Hỗ trợ thực địa</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%+257px)] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Tin tức</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(75%+38px)] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Tài chính</p>
      <Frame4 />
      <div className="absolute bg-[#ffac59] h-[73px] left-[calc(25%+49px)] opacity-50 rounded-[50px] top-[35px] w-[643px]" />
      <div className="-translate-y-1/2 absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[calc(25%+64px)] size-[53px] top-[-365.5px]" data-name="Icon 1">
        <Container />
      </div>
      <div className="absolute h-[91px] left-[-1px] top-[28px] w-[325px]" data-name="Thêm tiêu đề (2) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThemTieuD21} />
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[calc(25%+58px)] not-italic text-[35px] text-black top-[297px] whitespace-nowrap">Mẫu đơn / Biểu mẫu</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[calc(25%+107px)] not-italic text-[28px] text-black top-[calc(20%+13.6px)] whitespace-nowrap">Văn bản liên quan đến quy trình cấp phép</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[calc(25%+58px)] not-italic text-[#fb7104] text-[35px] top-[calc(20%+6.6px)] whitespace-nowrap">14</p>
      <div className="absolute h-0 left-[355px] top-[calc(20%-13.4px)] w-[1049px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1049 1">
            <line id="Line 24" stroke="var(--stroke-0, #9D1111)" x2="1049" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[80px] not-italic text-[20px] text-black top-[381px] whitespace-nowrap">Vị trí</p>
      <div className="absolute left-[90px] overflow-clip size-[24px] top-[calc(20%+153.6px)]" data-name="Component 1">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p5859780} fill="var(--fill-0, #414853)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[121px] not-italic text-[20px] text-black top-[calc(20%+200.6px)] whitespace-nowrap">Đơn đăng ký</p>
      <div className="absolute bg-[rgba(251,113,4,0.2)] h-[49px] left-[35px] top-[calc(20%+142.6px)] w-[320px]" />
      <div className="absolute left-[90px] overflow-clip size-[24px] top-[calc(20%+200.6px)]" data-name="Component 4">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p5859780} fill="var(--fill-0, #414853)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[121px] not-italic text-[20px] text-black top-[calc(20%+153.6px)] whitespace-nowrap">Đơn xin cấp phép</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[calc(25%+58px)] not-italic text-[24px] text-black top-[346px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">Các biểu mẫu, đơn từ cần thiết cho việc xin giấy phép</p>
        <p className="leading-[normal]">và sản xuất phim tại Việt Nam</p>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[121px] not-italic text-[20px] text-black top-[calc(20%+247.6px)] whitespace-nowrap">Đơn cam kết</p>
      <div className="absolute left-[90px] overflow-clip size-[24px] top-[calc(20%+247.6px)]" data-name="Component 5">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p5859780} fill="var(--fill-0, #414853)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[121px] not-italic text-[20px] text-black top-[calc(20%+290.6px)] whitespace-nowrap">Đơn đề nghị khác</p>
      <div className="absolute left-[90px] overflow-clip size-[24px] top-[calc(20%+290.6px)]" data-name="Component 25">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p5859780} fill="var(--fill-0, #414853)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[305px] overflow-clip size-[24px] top-[381px]" data-name="Component 1">
        <div className="absolute inset-[36.98%_28.03%_37%_28.14%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5175 6.24659">
            <path d={svgPaths.p2f532800} fill="var(--fill-0, #414853)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.9)] h-[49px] left-[71px] rounded-[10px] top-[calc(20%-13.4px)] w-[258px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[90px] not-italic text-[20px] text-black top-[calc(20%-0.4px)] whitespace-nowrap">Tỉnh / Thành phố</p>
      <div className="absolute flex items-center justify-center left-[293px] size-[24px] top-[calc(20%-0.4px)]">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[24px]" data-name="Component 2">
            <div className="absolute inset-[36.98%_28.03%_37%_28.14%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5175 6.24659">
                <path d={svgPaths.p2f532800} fill="var(--fill-0, #414853)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.9)] h-[49px] left-[71px] rounded-[10px] top-[calc(20%+63.6px)] w-[258px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[90px] not-italic text-[20px] text-black top-[calc(20%+76.6px)] whitespace-nowrap">Xã / Phường</p>
      <div className="absolute flex items-center justify-center left-[293px] size-[24px] top-[calc(20%+76.6px)]">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[24px]" data-name="Component 3">
            <div className="absolute inset-[36.98%_28.03%_37%_28.14%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5175 6.24659">
                <path d={svgPaths.p2f532800} fill="var(--fill-0, #414853)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[39px] not-italic text-[0px] text-[rgba(0,0,0,0.3)] top-[218px] whitespace-nowrap">
        <span className="leading-[normal] text-[24px]">{`Trang chủ / Thủ tục & Giấy phép / `}</span>
        <span className="leading-[normal] text-[32px] text-black">Văn bản pháp luật</span>
      </p>
      <div className="-translate-x-1/2 absolute h-[1358px] left-[calc(12.5%+15.5px)] top-[279px] w-[319px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 319 1358">
          <path d={svgPaths.p1a212000} fill="url(#paint0_linear_7_5717)" id="Rectangle 266" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_5717" x1="-13.8022" x2="-13.8023" y1="1322.32" y2="-35.6847">
              <stop stopColor="#D9D9D9" stopOpacity="0" />
              <stop offset="1" stopColor="#FB7104" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Frame23 />
      <Frame7 />
      <ChanTrang />
    </div>
  );
}