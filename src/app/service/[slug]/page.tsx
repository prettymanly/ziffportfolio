import { fetchProjects as fetchSupabaseProjects } from '../../../../lib/supabase.ts/fetchProjects';
import { notFound } from 'next/navigation';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import SwipeProjectCard from "@/components/SwipeProjectCard";

interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  service_type: string;
}

const SERVICE_TYPES = [
  'service-design',
  'futures',
  'creative-tech',
  'facilitation',
];

const SERVICE_TITLES = {
  'service-design': 'Service Design + Research',
  'futures': 'Futures + Foresight',
  'creative-tech': 'Generative AI + Automation',
  'facilitation': 'Teaching, Facilitation + Capability Building',
};

const SERVICE_COLORS = {
  'service-design': '#6a8f7b',
  'futures': '#547068',
  'creative-tech': '#37494c',
  'facilitation': '#2f3a41',
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  if (!SERVICE_TYPES.includes(slug)) {
    notFound();
  }
  
  // fetch dynamic project slides from Supabase
  const slides = await fetchSupabaseProjects();
  const filtered = slides.filter((p: any) => p.service_type === slug && p.project_number === 1);
  const serviceTitle = SERVICE_TITLES[slug as keyof typeof SERVICE_TITLES];
  const serviceColor = SERVICE_COLORS[slug as keyof typeof SERVICE_COLORS];

  // Only redesigned for service-design for now
  if (slug !== "service-design") {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#6a8f7b] text-[#e5eddf] pb-32">
      {/* Header */}
      <header className="mx-auto max-w-[902px] pt-[60px] flex justify-between font-mono text-[16px] tracking-[-0.8px] text-[#404b51]">
        <nav>
          <p className="text-[#5e7c72]">ELSEWHERE</p>
          <a href="/" className="block">ABOUT ZIFF</a>
          <a href="/" className="block">BLOG</a>
          <a href="/" className="block">LINKEDIN</a>
        </nav>
        <div>
          <p className="text-[#5e7c72]">CONTACT</p>
          <a href="mailto:ziff.lau@gmail.com">ZIFF.LAU@GMAIL.COM</a>
          <p>+9322 7317</p>
        </div>
      </header>

      {/* Intro */}
      <section className="mx-auto max-w-[902px] mt-[60px] flex flex-col lg:flex-row gap-[38px]">
        <div className="bg-white rounded-[15px] h-[436px] w-[432px] flex flex-col justify-between p-[49px]">
          <p className="font-mono text-[16px] text-[#404b51] tracking-[-0.8px]">_INTRO</p>
          <h1 className="text-[20px] leading-[22px] tracking-[-1px] text-[#404b51] font-bold">
            ZIFF LAU <br />
            <span className="font-normal">SERVICE DESIGNER</span>
          </h1>
        </div>
        <div className="bg-[#d9d9d9] rounded-[15px] h-[436px] w-[432px]" />
      </section>

      {/* About */}
      <section className="mx-auto max-w-[902px] mt-[60px]">
        <h2 className="text-[50px] font-bold tracking-[-2.5px] leading-[45px] mb-6 text-[#e5eddf]">
          What this work looks like in practice
        </h2>
        <p className="text-[30px] leading-normal text-[#e5eddf]">
          You're here because something needs fixing or figuring out: a product, a service, a process, or maybe just a hunch.
          <br />
          <br />
          This is where I help teams slow down, look deeper, and build solutions that actually work in practice. I work with startups and orgs to uncover how people actually think, decide, and behave and turn that into clear, actionable design direction.
          <br />
          <br />
          Below are examples of past work: from mapping invisible household labor, to decoding why insurance customers drop off, to helping subsidiaries act like one team.
        </p>
      </section>

      {/* Projects Carousel */}
      <section
        className="w-screen mt-[60px] flex gap-10 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 px-[calc(50vw-451px)]"
      >
        {filtered.map((slide: any, i: number) => {
          const VARIANT_MAP: Record<string, number> = {
            "Project Cover": 1,
            "Design Question": 2,
            "3-5 Image Content": 3,
            "1-1 Content Column": 4,
            "3-5 Content Col": 5,
          };

          const variantNumber = (VARIANT_MAP[slide.variant] ?? 1) as 1 | 2 | 3 | 4 | 5;

          const cardProps = {
            idx: slide.project_number ?? 1,
            client: slide.overline?.split("CLIENT:")[1]?.trim() ?? "Client",
            title: slide.title ?? slide.hmw_line ?? "",
            blurb: slide.copy ?? "",
            img: slide.cover_image_url || slide.project_image_url || undefined,
            variant: variantNumber,
          } as const;

          return <SwipeProjectCard key={i} {...cardProps} />;
        })}
      </section>
    </main>
  );
} 