import { exportSearchIndexes } from '@/lib/export-static-indexes';

export async function loader() {
  return Response.json(await exportSearchIndexes());
}