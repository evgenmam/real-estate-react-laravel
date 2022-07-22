import { Portal } from '@chakra-ui/react'
import mapboxgl from 'mapbox-gl'
import { useEffect, useRef } from 'react'
import { useContext } from 'react'
import { PropertyContext } from '../../App'
import { Popup } from './Popup'

export const Marker = ({ property, map }) => {
  const elRef = useRef(document.createElement('div'))

  useEffect(() => {
    const marker = new mapboxgl.Marker({ color: '#3347D2' })
      .setLngLat([property.longitude, property.latitude])
      .setPopup(new mapboxgl.Popup().setDOMContent(elRef.current))
      .addTo(map.current)

    marker.getElement().addEventListener('click', () => {
      map.current.flyTo({
        center: [property.longitude, property.latitude],
        essential: true,
        zoom: 16,
      })
    })

    return () => {
      console.log('se desmonto')
      marker.getElement().removeEventListener('click', console.log('funciono'))
      marker.remove()
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
