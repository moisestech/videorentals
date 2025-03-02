import type { TV } from "@/types";
import { TVS } from "@/constants/tvs"

export async function getTvById(id: string): Promise<TV | null> {
  try {
    // For now, we'll use the mock data from constants
    const tv = TVS.find((tv: TV) => tv.id.toString() === id);
    return tv || null;
  } catch (error) {
    console.error('Error fetching TV:', error);
    return null;
  }
}