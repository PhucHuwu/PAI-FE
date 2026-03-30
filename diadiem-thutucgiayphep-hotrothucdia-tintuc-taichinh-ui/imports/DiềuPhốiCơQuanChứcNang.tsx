import svgPaths from "./svg-udzgr4kd6w";
import imgImage17 from "figma:asset/da6a7e6497908d04c8933fb9b2fab93a95cd57d5.png";
import imgImage5 from "figma:asset/0158398dce39f3540d812ef24aa06f7b6e273c4a.png";
import imgThemTieuD21 from "figma:asset/0cc2640c46d620d6b41eb7ed53406956f72892ae.png";
import imgImage72 from "figma:asset/87f115d3a906d6e3c91d9fe61b5114c37f9d6d3c.png";

function Frame() {
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

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-h-px min-w-px not-italic relative text-[20px] text-center text-white">STT</p>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-h-px min-w-px not-italic relative text-[20px] text-center text-white">Phạm vi hỗ trợ</p>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-h-px min-w-px not-italic relative text-[20px] text-center text-white">Cơ quan phối hợp</p>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-h-px min-w-px not-italic relative text-[20px] text-center text-white">&nbsp;</p>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-h-px min-w-px not-italic relative text-[20px] text-center text-white">Thông tin liên hệ</p>
        </div>
      </div>
    </div>
  );
}

function Row({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-start overflow-clip relative shrink-0 w-full"} data-name=".Row">
      <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[65px]" data-name="Cell">
        <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
        <Content />
      </div>
      <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[386px]" data-name="Cell">
        <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
        <Content1 />
      </div>
      <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[240px]" data-name="Cell">
        <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
        <Content2 />
      </div>
      <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[328px]" data-name="Cell">
        <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
        <Content3 />
      </div>
      <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[298px]" data-name="Cell">
        <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
        <Content4 />
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.3] min-h-px min-w-px not-italic relative text-[20px] text-center text-white">1</p>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.3] min-h-px min-w-px not-italic relative text-[16px] text-center text-white">Hỗ trợ thủ tục bổ sung tại hiện trường</p>
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.3] min-h-px min-w-px not-italic relative text-[16px] text-center text-white">Sở Văn Hóa - Thể Thao và Du Lịch</p>
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-h-px min-w-px not-italic relative text-[#2e7c01] text-[36px] text-center">{` ✓`}</p>
        </div>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-h-px min-w-px not-italic relative text-[20px] text-center text-white">Thông tin liên hệ</p>
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.3] min-h-px min-w-px not-italic relative text-[20px] text-center text-white">2</p>
        </div>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.3] min-h-px min-w-px not-italic relative text-[16px] text-center text-white">Điều phối an ninh - trật tự</p>
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.3] min-h-px min-w-px not-italic relative text-[16px] text-center text-white">Công an địa phương</p>
        </div>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-h-px min-w-px not-italic relative text-[#2e7c01] text-[36px] text-center">{` ✓`}</p>
        </div>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-h-px min-w-px not-italic relative text-[20px] text-center text-white">Thông tin liên hệ</p>
        </div>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.3] min-h-px min-w-px not-italic relative text-[20px] text-center text-white">3</p>
        </div>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.3] min-h-px min-w-px not-italic relative text-[16px] text-center text-white">Phân luồng giao thông khi quay ngoại cảnh</p>
        </div>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.3] min-h-px min-w-px not-italic relative text-[16px] text-center text-white">CSGT (Phân luồng giao thông)</p>
        </div>
      </div>
    </div>
  );
}

function Content18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-h-px min-w-px not-italic relative text-[#2e7c01] text-[36px] text-center">{` ✓`}</p>
        </div>
      </div>
    </div>
  );
}

function Content19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-h-px min-w-px not-italic relative text-[20px] text-center text-white">Thông tin liên hệ</p>
        </div>
      </div>
    </div>
  );
}

function Content20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.3] min-h-px min-w-px not-italic relative text-[20px] text-center text-white">4</p>
        </div>
      </div>
    </div>
  );
}

function Content21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.3] min-h-px min-w-px not-italic relative text-[16px] text-center text-white">Giảm sát bảo vệ môi trường</p>
        </div>
      </div>
    </div>
  );
}

function Content22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.3] min-h-px min-w-px not-italic relative text-[16px] text-center text-white">Ban quản lý di tích / danh thắng</p>
        </div>
      </div>
    </div>
  );
}

function Content23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-h-px min-w-px not-italic relative text-[#2e7c01] text-[36px] text-center">{` ✓`}</p>
        </div>
      </div>
    </div>
  );
}

function Content24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-h-px min-w-px not-italic relative text-[20px] text-center text-white">Thông tin liên hệ</p>
        </div>
      </div>
    </div>
  );
}

function Content25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.3] min-h-px min-w-px not-italic relative text-[20px] text-center text-white">5</p>
        </div>
      </div>
    </div>
  );
}

function Content26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.3] min-h-px min-w-px not-italic relative text-[16px] text-center text-white">Làm việc với ban quản lý khu bảo tồn</p>
        </div>
      </div>
    </div>
  );
}

function Content27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-center text-white">
            <p className="leading-[1.3]">Kiểm lâm (rừng - vườn quốc gia)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-h-px min-w-px not-italic relative text-[#2e7c01] text-[36px] text-center">{` ✓`}</p>
        </div>
      </div>
    </div>
  );
}

function Content29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] min-h-px min-w-px not-italic relative text-[20px] text-center text-white">Thông tin liên hệ</p>
        </div>
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] relative rounded-[16px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Row />
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[49px] items-start overflow-clip relative shrink-0 w-full" data-name=".Row">
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[65px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content5 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[386px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content6 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[240px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content7 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[328px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content8 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[298px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content9 />
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-start overflow-clip relative shrink-0 w-full" data-name=".Row">
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[65px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content10 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[386px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content11 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[240px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content12 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[328px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content13 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[298px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content14 />
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[49px] items-start overflow-clip relative shrink-0 w-full" data-name=".Row">
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[65px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content15 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[386px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content16 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[240px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content17 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[328px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content18 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[298px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content19 />
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-start overflow-clip relative shrink-0 w-full" data-name=".Row">
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[65px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content20 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[386px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content21 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[240px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content22 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[328px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content23 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[298px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content24 />
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[49px] items-start overflow-clip relative shrink-0 w-full" data-name=".Row">
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[65px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content25 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[386px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content26 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[240px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content27 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[328px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content28 />
          </div>
          <div className="bg-[rgba(251,113,4,0.6)] content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[298px]" data-name="Cell">
            <div aria-hidden="true" className="absolute border-[#b9b9b9] border-l border-solid border-t inset-0 pointer-events-none" />
            <Content29 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b9b9b9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Table1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[291px] items-start left-[64px] rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[calc(40%+111px)] w-[1317px]" data-name="Table 1">
      <Table />
    </div>
  );
}

function Frame1() {
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

function Frame4() {
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

function Frame2() {
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

function Frame3() {
  return (
    <div className="absolute h-[196px] left-[-3.5px] overflow-clip top-0 w-[1440px]">
      <div className="absolute bg-white h-[196px] left-0 top-0 w-[1440px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[277px] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Địa điểm</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[462px] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Thủ tục/ Giấy phép</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[742px] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Hỗ trợ thực địa</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[977px] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Tin tức</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[1118px] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Tài chính</p>
      <Frame1 />
      <div className="absolute bg-[#ffac59] h-[73px] left-[409px] opacity-50 rounded-[50px] top-[35px] w-[643px]" />
      <div className="-translate-y-1/2 absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[424px] size-[53px] top-[calc(50%-24.5px)]" data-name="Icon 1">
        <Container1 />
      </div>
      <div className="absolute h-[91px] left-0 top-[28px] w-[325px]" data-name="Thêm tiêu đề (2) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThemTieuD21} />
      </div>
      <div className="absolute bg-white h-[196px] left-0 overflow-clip top-0 w-[1440px]" data-name="Navigation bar">
        <Frame4 />
        <Frame2 />
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

function Optine() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-144px] w-[328px]" data-name="optine">
      <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="tỉnh thành">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[10px] relative size-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[20px] text-black text-center whitespace-nowrap">Tỉnh Thái Nguyên</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="tỉnh thành">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[10px] relative size-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[20px] text-black text-center whitespace-nowrap">TP Hà Nội</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="tỉnh thành">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[10px] relative size-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[20px] text-black text-center whitespace-nowrap">TP Hồ Chí Minh</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="tỉnh thành">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[10px] relative size-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[20px] text-black text-center whitespace-nowrap">TP Quảng Ninh</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TnhThanh() {
  return (
    <div className="absolute bg-[#f99c51] content-stretch flex gap-[10px] h-[48px] items-center justify-center left-0 p-[10px] top-0 w-[328px]" data-name="tỉnh thành">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[20px] text-center text-white w-[122px]">Tỉnh / Thành</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Component 1">
        <div className="absolute inset-[37%_27.93%_36.98%_28.14%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5416 6.24659">
            <path d={svgPaths.p3c3ab600} fill="var(--fill-0, #414853)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function DiuPhiCQuanChcNang() {
  return (
    <div className="bg-white relative size-full" data-name="Điều phối cơ quan chức năng">
      <div className="absolute h-[812px] left-[-75px] opacity-80 top-0 w-[1583px]" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage17} />
      </div>
      <div className="absolute bg-[rgba(246,243,238,0.9)] h-[812px] left-0 opacity-80 top-0 w-[1440px]" />
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[277px] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Địa điểm</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[75px] not-italic text-[0px] text-black top-[calc(20%+56px)] whitespace-nowrap">
        <span className="leading-[normal] text-[24px] text-[rgba(0,0,0,0.5)]">Trang chủ</span>
        <span className="leading-[normal] text-[24px]">{` / `}</span>
        <span className="leading-[normal] text-[32px]">{`Hỗ trợ thực địa `}</span>
      </p>
      <div className="absolute bg-gradient-to-t from-[rgba(217,217,217,0)] h-[415px] left-[25px] to-[rgba(251,113,4,0.7)] top-[calc(40%+32px)] w-[1390px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[75px] not-italic text-[40px] text-black top-[calc(20%+119px)] whitespace-nowrap">ĐIỀU PHỐI CƠ QUAN CHỨC NĂNG</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[64px] not-italic text-[20px] text-white top-[calc(40%+70px)] whitespace-nowrap">Phối hợp với các sở, ban, ngành để đảm bảo quá trình ghi hình diễn ra thuận lợi, an toàn , đúng quy định pháp luật tại địa phương</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(25%+102px)] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Thủ tục/ Giấy phép</p>
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[90px] left-[60px] not-italic text-[40px] text-white top-[calc(100%+43px)] whitespace-nowrap">34 TỈNH THÀNH</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%+22px)] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Hỗ trợ thực địa</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(50%+257px)] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Tin tức</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[calc(75%+38px)] not-italic text-[#fb7104] text-[24px] top-[134px] whitespace-nowrap">Tài chính</p>
      <Frame />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[64px] not-italic text-[16px] text-white top-[calc(100%+91px)] w-[428px]">{`Đến đây, ngoài việc đứng trên các đồi chè ngắm nhìn khung cảnh rộng lớn, xanh miết thì bạn cũng có thể mua vé đi thuyền hoặc xuồng máy `}</p>
      <div className="absolute bg-[#ffac59] h-[73px] left-[calc(25%+49px)] opacity-50 rounded-[50px] top-[35px] w-[643px]" />
      <div className="-translate-y-1/2 absolute content-stretch cursor-pointer flex flex-col items-center justify-center left-[calc(25%+64px)] size-[53px] top-[-365.5px]" data-name="Icon 1">
        <Container />
      </div>
      <div className="absolute h-[91px] left-[-1px] top-[28px] w-[325px]" data-name="Thêm tiêu đề (2) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThemTieuD21} />
      </div>
      <Table1 />
      <Frame3 />
      <button className="absolute block cursor-pointer h-[269px] left-[calc(50%+37px)] overflow-clip top-[calc(40%+112px)] w-[326px]" data-name="Tỉnh/thành dropdown">
        <Optine />
        <TnhThanh />
      </button>
    </div>
  );
}