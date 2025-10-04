import { type Airport } from 'types';

interface AirportCodeNameProps {
    airport: Airport;
}

export const AirportCodeName: React.FC<AirportCodeNameProps> = ({ airport }) => {

    return (
        <div style={{
            fontWeight: 'bold',
            fontSize: '16px',
            marginBottom: '8px',
            color: '#333',
            borderBottom: '1px solid #eee',
            paddingBottom: '4px',
            verticalAlign: 'middle'
        }}>
            {airport.code} - {airport.name}
        </div>
    );
}
