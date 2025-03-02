export interface TVImage {
  id: number;
  url: string;
  alt: string;
}

export interface TVAccessory {
  id: number;
  name: string;
  type: 'mount' | 'stand' | 'remote' | 'other';
  images: TVImage[];
}

export interface TV {
  id: number;
  name: string;
  technicalName: string;
  price: string;
  specs: {
    size?: string;
    screenSize: string;
    brand?: string;
    resolution: string;
    displayTechnology: string;
    refreshRate: string;
    specialFeature?: string;
    includedComponents?: string[];
    connectivity?: string[];
    dimensions: {
      width: string;
      height: string;
      depth: string;
    };
  };
  features: string[];
  images: Array<{ id: number; url: string; alt: string; }>;
  accessories: Array<{
    id: number;
    name: string;
    type?: string;
    images: Array<{ id: number; url: string; alt: string; }>;
  }>;
} 