import { fetchProjects } from '@/lib/fetchProjects';
import { notFound } from 'next/navigation';

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

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!SERVICE_TYPES.includes(slug)) {
    notFound();
  }
  const projects: Project[] = await fetchProjects();
  const filtered = projects.filter(p => p.service_type === slug);

  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 capitalize">Projects for {slug.replace('-', ' ')}</h1>
      <div className="grid gap-6 w-full max-w-2xl">
        {filtered.length === 0 ? (
          <div className="text-gray-500">No projects found for this service type.</div>
        ) : (
          filtered.map(project => (
            <div key={project.id} className="border rounded-lg p-4 shadow bg-white dark:bg-neutral-900">
              <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
              <p className="mb-2 text-gray-700 dark:text-gray-300">{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Visit project</a>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 