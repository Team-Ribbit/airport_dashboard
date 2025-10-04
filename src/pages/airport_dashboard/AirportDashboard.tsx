import { AirportMap } from './map/AirportMap';
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
          {/* TODO: Implement AirportList component */}
          <div style={{ border: '1px solid #ccc', padding: '20px', height: '500px' }}>
            <p>Airport table component goes here</p>
            <p>Should show airports visible on map</p>
            <p>Should sync selection with map</p>
          </div>
        </div>
      </div>
    </div>
  );
}