import { Portal } from '@chakra-ui/react'
import mapboxgl from 'mapbox-gl'
import { useEffect, useRef } from 'react'
import useMapStore from '../../store/MapStore'
import { Popup } from './Popup'

export const Marker = ({ property }) => {
  const elRef = useRef(document.createElement('div'))
  const map = useMapStore((state) => state.map)
  const marker = useRef(null)

  useEffect(() => {
    marker.current = new mapboxgl.Marker({ color: '#3347D2' })
      .setLngLat([property.longitude, property.latitude])
      .setPopup(new mapboxgl.Popup().setDOMContent(elRef.current))
      .addTo(map)

    return () => {
      marker.current.remove()
    }
  })

  return (
    <Portal containerRef={elRef}>
      <Popup {...property} />
    </Portal>
  )
}
