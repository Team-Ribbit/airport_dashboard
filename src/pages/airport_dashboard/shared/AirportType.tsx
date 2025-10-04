import { type Airport } from 'types';

interface AirportTypeProps {
    airport: Airport;
}

export const AirportType: React.FC<AirportTypeProps> = ({ airport }) => {

    return (
        <span style={{
            backgroundColor: getColorByType(airport.type),
            color: 'white',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '12px',
            textTransform: 'capitalize'
        }}>
            {airport.type}
        </span>
    );
}

export const getColorByType = (type: Airport['type']) => {
    switch (type) {
        case 'international': return '#4CAF50';
        case 'domestic': return '#2196F3';
        case 'regional': return '#FF9800';
        case 'private': return '#9C27B0';
        default: return '#757575';
    }
};