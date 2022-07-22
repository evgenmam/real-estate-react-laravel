import { useEffect, useRef, useState, useContext } from 'react'
import mapboxgl, { Popup } from 'mapbox-gl'
import { Box } from '@chakra-ui/react'
import { PropertyContext } from '../../App'
import { Marker } from './Marker'

export const MapView = () => {
  const { properties, setProperties } = useContext(PropertyContext)
  const map = useRef(null)
  const markers = useRef([])
  const mapContainer = useRef(null)

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-85, 12.96],
      zoom: 7,
    })

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      })
    )

    return () => {
      map.current.remove()
    }
  }, [])

  // useEffect(() => {
  //   properties.forEach((property) => {
  //     const propertyPopup = new Popup().setHTML(
  //       `<div class="card">
  //         <div class="card__body">
  //           <span class="card__price">$${property.price}/mo</span>
  //           <img
  //             src="${property.image_url}"
  //             alt=""
  //             class="card__img"
  //           />
  //           <div class="card__info">
  //             <h4 class="card__name"> ${property.name}</h4>
  //             <span class="card__description">
  //             ${property.description}
  //             </span>
  //           </div>
  //         </div>
  //         <div class="card_">rooms:${property.rooms} bathrooms:${property.bathrooms}</div>
  //       </div>`
  //     )

  //     const marker = new mapboxgl.Marker({ color: '#3347D2' })
  //       .setLngLat([property.longitude, property.latitude])
  //       .setPopup(propertyPopup)
  //       .addTo(map.current)

  //     marker.getElement().addEventListener('click', () => {
  //       map.current.flyTo({
  //         center: [property.longitude, property.latitude],
  //         essential: true,
  //         zoom: 12,
  //       })
  //     })
  //     markers.current.push(marker)
  //   })

  //   return () => {
  //     markers.current.forEach((el) => {
  //       el.remove()
  //     })
  //   }
  // }, [properties])

  return (
    <Box width="full" ref={mapContainer}>
      {properties.map((property, index) => (
        <Marker key={index} property={property} map={map} />
      ))}
    </Box>
  )
}
