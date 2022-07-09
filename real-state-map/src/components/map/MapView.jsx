import { Box, color } from '@chakra-ui/react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import mapboxgl, { Popup } from 'mapbox-gl'
import ky from 'ky'
import './popup.css'
import { api } from '../utils/api'

export const MapView = () => {
  const [properties, setProperties] = useState([])
  const map = useRef(null)
  const marker = useRef(null)
  const mapContainer = useRef(null)

  useLayoutEffect(() => {
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
      console.log(properties)
      properties.forEach((property) => {
        console.log(property)
        const propertyPopup = new Popup().setHTML(
          `<div class="card">
          <div class="card__body">
            <span class="card__price">$${property.price}/mo</span>
            <img
              src="http://127.0.0.1:8000/storage/${property.photos}"
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

        new mapboxgl.Marker({ color: '#3347D2' })
          .setLngLat([property.longitude, property.latitude])
          .setPopup(propertyPopup)
          .addTo(map.current)
      })
    }
  }, [properties])

  useEffect(() => {
    api
      .get('properties')
      .json()
      .then(({ data }) => {
        setProperties(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return <div style={{ width: '100%' }} id="map" ref={mapContainer}></div>
}
