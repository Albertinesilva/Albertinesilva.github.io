import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Coordenadas de Santo Antônio de Jesus - BA
const SAJ_COORDS: [number, number] = [-12.9692, -39.2611];

export const LocationMap = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: SAJ_COORDS,
      zoom: 13,
      scrollWheelZoom: false,
      zoomControl: true,
    });

    // Tile layer com filtro escuro via CSS para combinar com o tema
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map);

    // Marcador customizado usando divIcon (sem dependência de imagens)
    const customIcon = L.divIcon({
      className: "custom-map-marker",
      html: `
        <div style="
          width: 28px;
          height: 28px;
          background: hsl(var(--primary));
          border: 3px solid hsl(var(--background));
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 0 16px hsl(var(--primary) / 0.7);
        "></div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 28],
      popupAnchor: [0, -28],
    });

    L.marker(SAJ_COORDS, { icon: customIcon })
      .addTo(map)
      .bindPopup(
        `<strong>Santo Antônio de Jesus - BA</strong><br/>Albert Silva de Jesus`
      )
      .openPopup();

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="bg-card-gradient border border-border rounded-xl p-2 hover-glow transition-smooth shadow-card overflow-hidden">
      <div
        ref={containerRef}
        className="w-full h-[500px] rounded-lg overflow-hidden map-themed"
        aria-label="Mapa de Santo Antônio de Jesus - BA"
      />
    </div>
  );
};
