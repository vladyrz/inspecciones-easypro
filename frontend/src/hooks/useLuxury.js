import { useState } from 'react'

export function useLuxury() {
  const SECTION_OPTIONS = [
    { key: "pool", label: "Piscina" },
    { key: "rancho", label: "Rancho / BBQ" },
    { key: "court", label: "Cancha deportiva" },
    { key: "garden", label: "Jardín y paisajismo" },
    { key: "terrace", label: "Terraza / rooftop" },
    { key: "cinema", label: "Sala de cine / entretenimiento" },
    { key: "gym", label: "Gimnasio / área fitness" },
    { key: "office", label: "Oficina / estudio" },
    { key: "sauna", label: "Sauna / baño turco" },
    { key: "masterSuite", label: "Master Suite" },
    { key: "secondaryRooms", label: "Cuartos secundarios" },
    { key: "domotic", label: "Domótica / control inteligente" },
    { key: "security", label: "Seguridad avanzada" },
    { key: "audio", label: "Audio ambiental" },
    { key: "solar", label: "Energía alternativa" },
    { key: "garage", label: "Garaje / estacionamiento" },
    { key: "technicalRoom", label: "Cuarto técnico" },
    { key: "secondaryKitchen", label: "Cocina secundaria / de servicio" },
    { key: "extras", label: "Extras únicos" },
  ]

  const [formData, setFormData] = useState({
    poolType: "",
    poolMaterial: "",
    poolState: "",
    poolFiltration: "",
    poolHeating: "",
    poolObservations: "",

    ranchoCovered: "",
    ranchoGrillType: "",
    ranchoFurnitureState: "",
    ranchoServices: [],

    courtType: "",
    courtSurface: "",
    courtState: "",
    courtLighting: "",

    gardenIrrigation: "",
    gardenPlants: "",
    gardenLighting: "",

    terraceCovered: "",
    terraceFloor: "",
    terraceView: "",
    terraceSecurity: "",

    cinemaAcoustic: "",
    cinemaScreen: "",
    cinemaSeats: "",
    cinemaSound: "",

    gymEquipment: "",
    gymFloorState: "",
    gymVentilation: "",

    officeFurniture: "",
    officeAcoustic: "",
    officeConnections: "",

    saunaType: "",
    saunaMaterial: "",
    saunaState: "",
    saunaHeating: "",

    masterWalkIn: "",
    masterCloset: "",
    masterBathroom: [],
    masterBalcony: "",

    secondaryLinenCloset: "",
    secondaryPrivateBath: "",
    secondaryFinishes: "",

    domoticLights: "",
    domoticBlinds: "",
    domoticTemperature: "",
    domoticApp: "",

    securityCameras: "",
    securitySensors: "",
    securityAccess: "",

    audioZones: "",
    audioControl: "",
    audioQuality: "",

    solarPanels: "",
    solarCapacity: "",
    solarBatteries: "",

    garageType: "",
    garageDoors: "",
    garageEVCharging: "",

    technicalGenerator: "",
    technicalInverters: "",
    technicalMaintenance: "",

    secondaryKitchenLocation: "",
    secondaryKitchenAppliances: "",
    secondaryKitchenFinishes: "",

    extrasLake: "",
    extrasStairs: "",
    extrasCeilings: "",
    extrasDecorations: "",
  })

  const [sections, setSections] = useState(
    SECTION_OPTIONS.reduce((acc, section) => {
      acc[section.key] = false
      return acc
    }, {})
  )

  const toggleSection = (field) => {
    setSections((prev) => ({ ...prev, [field]: !prev[field] }))
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (field, value) => {
    setFormData((prev) => {
      const current = prev[field] || []
      const includes = current.includes(value)
      return {
        ...prev,
        [field]: includes ? current.filter((item) => item !== value) : [...current, value],
      }
    })
  }

  return { SECTION_OPTIONS, toggleSection, handleInputChange, handleCheckboxChange, sections, formData }
}
