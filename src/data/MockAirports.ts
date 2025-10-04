import { type Airport } from 'types';

export const mockAirports: Airport[] = [
  {
    id: '1',
    code: 'LAX',
    name: 'Los Angeles International Airport',
    city: 'Los Angeles',
    country: 'USA',
    coordinates: { latitude: 33.9425, longitude: -118.4081 },
    elevation: 125,
    runways: 4,
    type: 'international'
  },
  {
    id: '2',
    code: 'SFO',
    name: 'San Francisco International Airport',
    city: 'San Francisco',
    country: 'USA',
    coordinates: { latitude: 37.7749, longitude: -122.4194 },
    elevation: 13,
    runways: 4,
    type: 'international'
  },
  {
    id: '3',
    code: 'JFK',
    name: 'John F. Kennedy International Airport',
    city: 'New York',
    country: 'USA',
    coordinates: { latitude: 40.6413, longitude: -73.7781 },
    elevation: 13,
    runways: 4,
    type: 'international'
  },
  {
    id: '4',
    code: 'ORD',
    name: 'O\'Hare International Airport',
    city: 'Chicago',
    country: 'USA',
    coordinates: { latitude: 41.9742, longitude: -87.9073 },
    elevation: 672,
    runways: 7,
    type: 'international'
  },
  {
    id: '5',
    code: 'ATL',
    name: 'Hartsfield-Jackson Atlanta International Airport',
    city: 'Atlanta',
    country: 'USA',
    coordinates: { latitude: 33.6407, longitude: -84.4277 },
    elevation: 1026,
    runways: 5,
    type: 'international'
  },
  {
    id: '6',
    code: 'DEN',
    name: 'Denver International Airport',
    city: 'Denver',
    country: 'USA',
    coordinates: { latitude: 39.8561, longitude: -104.6737 },
    elevation: 5431,
    runways: 6,
    type: 'international'
  },
  {
    id: '7',
    code: 'SEA',
    name: 'Seattle-Tacoma International Airport',
    city: 'Seattle',
    country: 'USA',
    coordinates: { latitude: 47.4502, longitude: -122.3088 },
    elevation: 131,
    runways: 3,
    type: 'international'
  },
  {
    id: '8',
    code: 'PHX',
    name: 'Phoenix Sky Harbor International Airport',
    city: 'Phoenix',
    country: 'USA',
    coordinates: { latitude: 33.4484, longitude: -112.0740 },
    elevation: 1135,
    runways: 3,
    type: 'international'
  },
  {
    id: '9',
    code: 'MIA',
    name: 'Miami International Airport',
    city: 'Miami',
    country: 'USA',
    coordinates: { latitude: 25.7617, longitude: -80.1918 },
    elevation: 8,
    runways: 4,
    type: 'international'
  },
  {
    id: '10',
    code: 'BUR',
    name: 'Hollywood Burbank Airport',
    city: 'Burbank',
    country: 'USA',
    coordinates: { latitude: 34.2007, longitude: -118.3585 },
    elevation: 778,
    runways: 2,
    type: 'domestic'
  },
  {
    id: '11',
    code: 'SBA',
    name: 'Santa Barbara Airport',
    city: 'Santa Barbara',
    country: 'USA',
    coordinates: { latitude: 34.4262, longitude: -119.8403 },
    elevation: 13,
    runways: 1,
    type: 'regional'
  },
  {
    id: '12',
    code: 'SMO',
    name: 'Santa Monica Airport',
    city: 'Santa Monica',
    country: 'USA',
    coordinates: { latitude: 34.0158, longitude: -118.4513 },
    elevation: 177,
    runways: 1,
    type: 'private'
  }
];