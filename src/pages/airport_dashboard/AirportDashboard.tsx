import { AirportMap } from './map/AirportMap';
import { AirportList } from './list/AirportList';
import { mockAirports } from 'data/MockAirports';
import { type Airport } from 'types';
import { useState } from 'react';

export function AirportDashboard() {
  const [extentAirports, setExtentAirports] = useState<Airport[]>([]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Airport Dashboard</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <AirportMap airports={mockAirports} onExtentAirportsChanged={setExtentAirports} />
        </div>
        <div style={{ flex: 1 }}>
          <AirportList airports={extentAirports ?? []} />
          <p>Should sync selection with map</p>
        </div>
      </div>
    </div>
  );
}