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

    // marker.getElement().addEventListener('click', () => {
    //   map.current.flyTo({
    //     center: [property.longitude, property.latitude],
    //     essential: true,
    //     zoom: 16,
    //   })
    // })

    return () => {
      // marker.getElement().removeEventListener('click', () => {})
      marker.current.remove()
    }
  })

  return (
    <Portal containerRef={elRef}>
      <Popup
        name={property.name}
        description={property.description}
        price={property.price}
        image_url={property.image_url}
        rooms={property.rooms}
        bathrooms={property.bathrooms}
      />
    </Portal>
  )
}
