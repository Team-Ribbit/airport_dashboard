import { type Airport } from 'types';

interface AirportCoordinateProps {
    airport: Airport;
}

export const AirportCoordinates: React.FC<AirportCoordinateProps> = ({ airport }) => {

    return (
        <div style={{ fontFamily: 'monospace', fontSize: '11px' }}>
            Lat: {airport.coordinates.latitude.toFixed(4)}°<br />
            Lon: {airport.coordinates.longitude.toFixed(4)}°
        </div>
    );
}
