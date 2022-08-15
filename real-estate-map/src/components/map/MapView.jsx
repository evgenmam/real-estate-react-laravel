import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import { Box } from '@chakra-ui/react'
import useMapStore from '../../store/MapStore'
import { Marker } from './Marker'

export const MapView = () => {
  const properties = useMapStore((state) => state.properties)
  const setMap = useMapStore((state) => state.setMap)
  const map = useMapStore((state) => state.map)
  const mapContainer = useRef(null)

  useEffect(() => {
    const mapEl = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-84, 12.96],
      zoom: 7,
    })

    mapEl.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      })
    )

    setMap(mapEl)

    return () => {
      mapEl.remove()
    }
  }, [])

  return (
    <Box width="full" ref={mapContainer}>
      {map &&
        properties.map((property) => (
          <Marker key={property.id} property={property} />
        ))}
    </Box>
  )
}
