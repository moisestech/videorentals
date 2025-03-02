import { getTvById } from '@/lib/data';

// COMPONENTS
import TvDetails from '@/components/panels/TvDetails';

// CONSTANTS
import { TVS } from '@/constants/tvs';

interface PageProps {
  params: { tvId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function TvPage({
  params,
  searchParams,
}: PageProps) {
  const tv = await getTvById(params.tvId);
  
  if (!tv) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">TV not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <TvDetails tv={tv} isPage />
    </div>
  );
}

// Generate static params for all TVs
export async function generateStaticParams() {
  return TVS.map((tv) => ({
    tvId: tv.id.toString(),
  }));
} 