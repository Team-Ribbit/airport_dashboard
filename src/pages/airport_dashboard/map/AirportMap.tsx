import React, { useEffect, useRef, useState } from 'react';
import { Map, View } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import { Style, Circle, Fill, Stroke, Text } from 'ol/style';
import { Overlay } from 'ol';
import 'ol/ol.css';

import { type Airport } from 'types';
import { AirportCoordinates } from '../shared/AirportCoordinates';
import { AirportType, getColorByType } from '../shared/AirportType';
import { AirportCodeName } from '../shared/AirportCodeName';
import '../../../App.css';

interface AirportMapProps {
  airports: Airport[];
  // TODO: Add props for selection and bounds change callbacks
  // selectedAirport?: Airport | null;
  // onAirportSelect?: (airport: Airport | null) => void;
  // onBoundsChange?: (bounds: MapBounds) => void;
}

export const AirportMap: React.FC<AirportMapProps> = ({
  airports,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<Map | null>(null);
  const vectorSourceRef = useRef<VectorSource | null>(null);
  const overlayRef = useRef<Overlay | null>(null);
  
  const [hoveredAirport, setHoveredAirport] = useState<Airport | null>(null);

  // Initialize OpenLayers map
  useEffect(() => {
    if (!mapRef.current || !popupRef.current) return;

    // Create vector source for airport markers
    const vectorSource = new VectorSource();
    vectorSourceRef.current = vectorSource;

    // Create vector layer for airports
    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: createAirportStyle,
    });

    // Create overlay for hover popup
    const overlay = new Overlay({
      element: popupRef.current,
      autoPan: false,
      offset: [0, -15],
      positioning: 'bottom-center',
    });
    overlayRef.current = overlay;

    // Create map instance
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([-98.35, 39.5]), // Center of US
        zoom: 4,
      }),
      overlays: [overlay],
    });

    // Handle mouse hover events
    map.on('pointermove', (evt) => {
      const pixel = map.getEventPixel(evt.originalEvent);
      const feature = map.forEachFeatureAtPixel(pixel, (feature) => feature, {
        layerFilter: (layer) => layer === vectorLayer,
      });

      if (feature) {
        const airport = feature.get('airport') as Airport;
        setHoveredAirport(airport);
        overlay.setPosition(evt.coordinate);
        map.getTargetElement().style.cursor = 'pointer';
      } else {
        setHoveredAirport(null);
        overlay.setPosition(undefined);
        map.getTargetElement().style.cursor = '';
      }
    });

    // Handle mouse leave map
    map.getViewport().addEventListener('mouseleave', () => {
      setHoveredAirport(null);
      overlay.setPosition(undefined);
      map.getTargetElement().style.cursor = '';
    });

    mapInstanceRef.current = map;

    // TODO: Add selection interaction
    // TODO: Add bounds change handling

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  // Update airport markers when airports change
  useEffect(() => {
    if (!vectorSourceRef.current) return;

    const vectorSource = vectorSourceRef.current;
    vectorSource.clear();

    airports.forEach((airport) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([
          airport.coordinates.longitude,
          airport.coordinates.latitude
        ])),
        airport: airport,
      });

      feature.setId(airport.id);
      vectorSource.addFeature(feature);
    });
  }, [airports]);

  // TODO: Handle external selection changes
  // TODO: Implement zoom/bounds filtering logic

  return (
    <div style={{ position: 'relative' }}>
      <div 
        ref={mapRef} 
        className='airports-panel'
      />
      
      {/* Hover popup */}
      <div 
        ref={popupRef}
        style={{
          display: hoveredAirport ? 'block' : 'none',
          backgroundColor: 'white',
          border: '2px solid #333',
          borderRadius: '8px',
          padding: '12px',
          minWidth: '280px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          fontSize: '14px',
          fontFamily: 'Arial, sans-serif',
          zIndex: 1000,
          position: 'absolute',
          pointerEvents: 'none'
        }}
      >
        {hoveredAirport && (
          <div>
            <AirportCodeName airport={hoveredAirport}/>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
              <div>
                <strong>City:</strong> {hoveredAirport.city}
              </div>
              <div>
                <strong>Country:</strong> {hoveredAirport.country}
              </div>
              
              <div>
                <strong>Type:</strong>{' '}
                <AirportType airport={hoveredAirport}/>
              </div>
              <div>
                <strong>Runways:</strong> {hoveredAirport.runways}
              </div>
              
              <div>
                <strong>Elevation:</strong> {hoveredAirport.elevation.toLocaleString()} ft
              </div>
              <div>
                <strong>ID:</strong> {hoveredAirport.id}
              </div>
            </div>
            
            <div style={{ 
              marginTop: '8px', 
              fontSize: '12px', 
              color: '#666',
              borderTop: '1px solid #eee',
              paddingTop: '6px'
            }}>
              <div>
                <strong>Coordinates:</strong>
              </div>
              <AirportCoordinates airport={hoveredAirport} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Style function for airport markers
const createAirportStyle = (feature: any) => {
  const airport = feature.get('airport') as Airport;

  return new Style({
    image: new Circle({
      radius: 8,
      fill: new Fill({
        color: getColorByType(airport.type),
      }),
      stroke: new Stroke({
        color: '#fff',
        width: 2,
      }),
    }),
    text: new Text({
      text: airport.code,
      font: '12px sans-serif',
      fill: new Fill({ color: '#000' }),
      stroke: new Stroke({ color: '#fff', width: 2 }),
      offsetY: -20,
    }),
  });
};

// TODO: Implement selected airport style
// const createSelectedAirportStyle = (feature: Feature) => { ... };