import ReactDOM from 'react-dom/client'
import { Box, color } from '@chakra-ui/react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import mapboxgl, { Popup } from 'mapbox-gl'
import ky from 'ky'
import './popup.css'
import { api } from '../utils/api'
import { useContext } from 'react'
import { PropertyContext } from '../../App'
import { Otro } from './Otro'

export const Test = () => {
  const { properties, setProperties } = useContext(PropertyContext)
  const map = useRef(null)
  let markers = []
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
    } else {
      if (properties.length === 0) return
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
              <h4 class="card__name"> ${property.name}</h4>
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
        markers.push(marker)
      })
    }

    return () => {
      markers.forEach((element) => {
        element.getElement().removeEventListener('click', () => {
          map.current.flyTo({
            center: [property.longitude, property.latitude],
            essential: true,
            zoom: 10,
          })
        })
        element.remove()
      })
    }
  }, [properties])

  return <div style={{ width: '100%' }} id="map" ref={mapContainer}></div>
}

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )