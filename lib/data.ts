import type { TV } from "@/types";
import { TVS } from "@/constants/tvs"

export async function getTvById(id: string): Promise<TV | null> {
  // For now, we'll use the mock data from constants
  const tv = TVS.find((tv: TV) => tv.id.toString() === id);
  return tv || null;
}