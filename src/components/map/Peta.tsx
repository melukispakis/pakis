'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useState } from 'react';

// Fix icon Leaflet di Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x.src ?? markerIcon2x,
    iconUrl: markerIcon.src ?? markerIcon,
    shadowUrl: markerShadow.src ?? markerShadow,
});

// Data marker dummy (bisa ganti pakai data API juga)
const locations = [
    {
        name: 'Posko Gerotan',
        latlng: [-7.4565676, 110.3838174],
        description: 'Posko KKN Sub Unit Ketundan 1 (Dusun Gerotan).',
    },
    {
        name: 'Posko Semimpen',
        latlng: [-7.4646133, 110.3605943],
        description: 'Posko KKN Sub Unit Ketundan 2 (Dusun Semimpen).',
    },
    {
        name: 'Posko Kragilan',
        latlng: [-7.4422456,110.3775194],
        description: 'Posko KKN Sub Unit Kragilan (Dusun Kragilan).',
    },
];

export default function Peta() {
    const center: [number, number] = [-7.4550846, 110.3764893];
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <MapContainer
            center={center}
            zoom={16}
            scrollWheelZoom={true}
            style={{ height: '500px', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {locations.map((loc, i) => (
                <Marker
                    key={i}
                    position={loc.latlng as [number, number]}
                    eventHandlers={{
                        click: () => setSelected(loc.name),
                    }}
                >
                    <Popup>
                        <strong>{loc.name}</strong>
                        <br />
                        {loc.description}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
