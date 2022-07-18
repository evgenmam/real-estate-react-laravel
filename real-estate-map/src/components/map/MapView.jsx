import { useEffect, useRef, useState } from 'react'
import mapboxgl, { Popup } from 'mapbox-gl'
import './popup.css'
import { useContext } from 'react'
import { PropertyContext } from '../../App'
import { Box } from '@chakra-ui/react'

export const MapView = () => {
  const { properties, setProperties } = useContext(PropertyContext)
  const map = useRef(null)
  const markers = useRef([])
  const [mark, setMark] = useState([])
  const mapContainer = useRef(null)
  useEffect(() => {
    if (!map.current) {
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
    }
    properties.forEach((property) => {
      const propertyPopup = new Popup().setHTML(
        `<div class="card">
          <div class="card__body">
            <span class="card__price">$${property.price}/mo</span>
            <img
              src="http://127.0.0.1:8000/storage/${property.img_path}"
              alt=""
              class="card__img"
            />
            <div class="card__info">
              <h4 class="card__name"> ${property.type}</h4>
              <span class="card__description">
              ${property.description}
              </span>
            </div>
          </div>
          <div>rooms:${property.rooms} bathrooms:${property.bathrooms}</div>
        </div>`
      )

      const marker = new mapboxgl.Marker({ color: '#3347D2' })
        .setLngLat([property.longitude, property.latitude])
        .setPopup(propertyPopup)
        .addTo(map.current)

      marker.getElement().addEventListener('click', () => {
        map.current.flyTo({
          center: [property.longitude, property.latitude],
          essential: true,
          zoom: 10,
        })
      })
      markers.current.push(marker)
      setMark((mark) => [...mark, marker])
      // setMark([...mark, marker])
      // markers.push(marker)
    })

    return () => {
      markers.current.forEach((el) => {
        el.remove()
      })
    }
  }, [properties])

  console.log(markers)

  return <Box width="full" ref={mapContainer}></Box>
}
