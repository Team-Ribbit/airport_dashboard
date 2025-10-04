import { AirportMap } from './map/AirportMap';
import { AirportList } from './list/AirportList';
import { mockAirports } from 'data/MockAirports';

export function AirportDashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Airport Dashboard</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <AirportMap airports={mockAirports} />
        </div>
        <div style={{ flex: 1 }}>
          <AirportList airports={mockAirports} />
          <p>Should show airports visible on map</p>
          <p>Should sync selection with map</p>
        </div>
      </div>
    </div>
  );
}