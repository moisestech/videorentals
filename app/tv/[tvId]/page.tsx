import { getTvById } from '@/lib/data'; // We'll need to create this

// COMPONENTS
import TvDetails from '@/components/panels/TvDetails';

export default async function TvPage({ params }: { params: { tvId: string } }) {
  const tv = await getTvById(params.tvId);
  
  if (!tv) {
    return <div>TV not found</div>;
  }

  return <TvDetails tv={tv} isPage />;
} 