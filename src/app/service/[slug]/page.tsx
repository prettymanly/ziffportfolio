import { fetchProjects } from '@/lib/fetchProjects';
import { notFound } from 'next/navigation';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

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
  
  const projects: Project[] = await fetchProjects();
  const filtered = projects.filter(p => p.service_type === slug);
  const serviceTitle = SERVICE_TITLES[slug as keyof typeof SERVICE_TITLES];
  const serviceColor = SERVICE_COLORS[slug as keyof typeof SERVICE_COLORS];

  return (
    <div className="min-h-screen bg-[#cbd2c6] text-foreground flex flex-col items-center p-4 sm:p-8">
      {/* Header */}
      <div className="w-full max-w-[902px] mx-auto mb-8">
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <a href="/" className="font-mono text-[16px] tracking-[-0.8px] text-[#404b51] hover:text-[#5e7c72]">
                ← BACK TO HOME
              </a>
              <div className="font-mono text-[16px] tracking-[-0.8px] text-[#5e7c72]">
                PROJECTS
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Service Title */}
      <div className="w-full max-w-[902px] mx-auto mb-12">
        <Card style={{ backgroundColor: serviceColor }} className="text-[#e5eddf]">
          <CardContent className="p-12 text-center">
            <h1 className="text-[50px] font-bold leading-[45px] tracking-[-2.5px] mb-4">
              {serviceTitle}
            </h1>
            <p className="text-[18px] font-mono tracking-[-0.8px]">
              {filtered.length} PROJECT{filtered.length !== 1 ? 'S' : ''}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-[902px] mx-auto">
        {filtered.length === 0 ? (
          <Card className="bg-white">
            <CardContent className="p-12 text-center">
              <div className="text-[#404b51] text-[24px] font-semibold mb-4">
                No projects yet
              </div>
              <p className="text-[#5e7c72] font-mono text-[16px] tracking-[-0.8px]">
                Projects for this service will be added soon.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-8">
            {filtered.map((project, index) => (
              <Card key={project.id} className="bg-white">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-mono text-[16px] tracking-[-0.8px] text-[#5e7c72] mb-2">
                        _{String(index + 1).padStart(2, '0')}
                      </div>
                      <h2 className="text-[30px] font-bold leading-[32px] tracking-[-1.5px] text-[#404b51] mb-4">
                        {project.name}
                      </h2>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[18px] leading-[24px] text-[#404b51] mb-6">
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-mono text-[16px] tracking-[-0.8px] text-[#5e7c72] hover:text-[#404b51] underline"
                    >
                      VIEW PROJECT →
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="w-full max-w-[902px] mx-auto mt-16">
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between font-mono text-[16px] tracking-[-0.8px] text-[#5e7c72]">
              <div>
                INTERESTED IN THIS TYPE OF WORK?
              </div>
              <div>
                ZIFF.LAU@GMAIL.COM
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 