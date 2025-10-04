export interface Airport {
  id: string;
  code: string; // IATA code (e.g., "LAX", "SFO")
  name: string;
  city: string;
  country: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  elevation: number; // feet above sea level
  runways: number;
  type: 'international' | 'domestic' | 'regional' | 'private';
}

export interface MapBounds {
  north: number;
  south: number;
  east: number;
  west: number;
}