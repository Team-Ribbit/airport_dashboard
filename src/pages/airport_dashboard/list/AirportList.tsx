import { type Airport } from 'types';
import { AirportCoordinates } from '../shared/AirportCoordinates';
import { AirportType } from '../shared/AirportType';
import { AirportCodeName } from '../shared/AirportCodeName';
import '../../../App.css';

interface AirportListProps {
    airports: Airport[];
}

export const AirportList: React.FC<AirportListProps> = ({
    airports,
}) => {
    if (airports.length === 0) {
        return (
            <div className='airports-panel'
                style={{
                    overflow: 'auto',
                    padding: '12px',
                    fontSize: '14px',
                    fontFamily: 'Arial, sans-serif'
                }}>
                <div>
                    <strong>No airports in range. Try a different location on the map!</strong>
                </div>
            </div>
        );
    }

    return (
        <div className='airports-panel'
            style={{
                overflow: 'auto',
                padding: '12px',
                fontSize: '14px',
                fontFamily: 'Arial, sans-serif'
            }}>
            <table>
                <thead style={{
                    padding: '8px 12px'
                }}>
                    <tr>
                        <th>Name</th>
                    <th>City</th>
                        <th>Country</th>
                        <th>Type</th>
                        <th>Runways</th>
                        <th>Elevation</th>
                        <th>ID</th>
                        <th>Coordinates</th>
                    </tr>
                </thead>
                <tbody>
                    {airports.map((airport) => (
                        <tr key={airport.id}>
                            <td>
                                <AirportCodeName airport={airport} />
                            </td>
                            <td>
                                <div style={{ textAlign: 'center' }}>
                                    {airport.city}
                                </div>
                            </td>
                            <td>
                                <div style={{ textAlign: 'center' }}>
                                    {airport.country}
                                </div>
                            </td>
                            <td>
                                <div style={{ textAlign: 'center' }}>
                                    <AirportType airport={airport} />
                                </div>
                            </td>
                            <td>
                                <div style={{ textAlign: 'center' }}>
                                    {airport.runways}
                                </div>
                            </td>
                            <td>
                                <div style={{ textAlign: 'center' }}>
                                    {airport.elevation.toLocaleString()} ft
                                </div>
                            </td>
                            <td>
                                <div style={{ textAlign: 'center' }}>
                                    {airport.id}
                                </div>
                            </td>
                            <td>
                                <div style={{
                                    marginTop: '8px',
                                    fontSize: '12px',
                                    color: '#666',
                                    borderTop: '1px solid #eee',
                                    paddingTop: '6px',
                                    textAlign: 'center'
                                }}>
                                    <AirportCoordinates airport={airport} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
