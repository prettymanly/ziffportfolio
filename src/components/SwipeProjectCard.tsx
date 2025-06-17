import Image from "next/image";

export type CardVariant = 1 | 2 | 3 | 4 | 5;

export interface SwipeProjectCardProps {
  idx: number; // 1-based index
  client: string;
  title: string;
  blurb: string;
  img?: string;
  variant?: CardVariant; // choose layout
}

export default function SwipeProjectCard(props: SwipeProjectCardProps) {
  const { idx, client, title, blurb, img, variant = 1 } = props;

  // helpers
  const ImgBlock = (
    <div className="h-full w-full bg-[#d9d9d9] rounded-[15px]">
      {img && (
        <Image
          src={img}
          alt="project image"
          width={600}
          height={450}
          className="object-cover h-full w-full rounded-[15px]"
        />
      )}
    </div>
  );

  /** Variant layouts **/
  switch (variant) {
    // Variant 1 – Left text, right image (default)
    case 1:
      return (
        <article className="bg-white rounded-[15px] h-[552px] w-[902px] shrink-0 overflow-hidden snap-start flex flex-col lg:flex-row gap-5 p-[50px]">
          <div className="flex-1 flex flex-col gap-10">
            <p className="font-mono text-[#404b51] text-[16px] tracking-[-0.8px]">
              {idx.toString().padStart(2, "0")} | CLIENT: {client}
            </p>
            <h2 className="font-bold text-[50px] leading-[45px] tracking-[-2.5px] text-[#404b51]">
              {title}
            </h2>
            <p className="text-[18px] leading-[22px] tracking-[-0.9px] text-[#404b51]">
              {blurb}
            </p>
            <p className="font-bold text-[23px] leading-[31px] text-[#404b51]">
              Swipe to read the case →
            </p>
          </div>
          <div className="flex-1 min-h-[452px]">{ImgBlock}</div>
        </article>
      );

    // Variant 2 – Full-bleed image hero with overlay text
    case 2:
      return (
        <article className="bg-white rounded-[15px] h-[552px] w-[902px] shrink-0 overflow-hidden snap-start relative">
          {ImgBlock}
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
            <h2 className="text-[#ffffff] text-[50px] leading-[50px] tracking-[-2.5px] font-light max-w-[700px]">
              {title}
            </h2>
          </div>
        </article>
      );

    // Variant 3 – 3:5 Image Content (image left, body copy right)
    case 3:
      return (
        <article className="bg-white rounded-[15px] h-[552px] w-[902px] shrink-0 overflow-hidden snap-start flex flex-col gap-5 p-[50px]">
          {/* overline / meta */}
          <p className="font-mono text-[#404b51] text-[16px] tracking-[-0.8px]">
            {idx.toString().padStart(2, "0")} | CLIENT: {client}
          </p>
          {/* content row */}
          <div className="flex-1 flex gap-5">
            <div className="w-72 h-full">{ImgBlock}</div>
            <div className="flex-1 overflow-y-auto">
              <p className="text-[18px] leading-[22px] tracking-[-0.9px] text-[#404b51] whitespace-pre-line">
                {blurb}
              </p>
            </div>
          </div>
        </article>
      );

    // Variant 4 – Two-column text, no image
    case 4:
      return (
        <article className="bg-white rounded-[15px] h-[552px] w-[902px] shrink-0 overflow-hidden snap-start flex flex-col gap-5 p-[50px]">
          <p className="font-mono text-[#404b51] text-[16px] tracking-[-0.8px]">
            {idx.toString().padStart(2, "0")} | CLIENT: {client}
          </p>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5 overflow-y-auto">
            <p className="text-[18px] leading-[22px] tracking-[-0.9px] text-[#404b51]">
              {blurb}
            </p>
            <p className="text-[18px] leading-[22px] tracking-[-0.9px] text-[#404b51]">
              {title}
            </p>
          </div>
        </article>
      );

    // Variant 5 – 3:5 Content Col (narrow copy left, rich copy right)
    case 5:
      return (
        <article className="bg-white rounded-[15px] h-[552px] w-[902px] shrink-0 overflow-hidden snap-start flex flex-col gap-5 p-[50px]">
          {/* overline / meta */}
          <p className="font-mono text-[#404b51] text-[16px] tracking-[-0.8px]">
            {idx.toString().padStart(2, "0")} | CLIENT: {client}
          </p>

          {/* content row */}
          <div className="flex-1 flex gap-5 overflow-y-auto">
            <div className="w-72 text-[18px] leading-[22px] tracking-[-0.9px] text-[#404b51] whitespace-pre-line">
              {blurb}
            </div>
            <div className="flex-1 text-[18px] leading-[22px] tracking-[-0.9px] text-[#404b51] whitespace-pre-line">
              {title}
            </div>
          </div>
        </article>
      );
  }
} 