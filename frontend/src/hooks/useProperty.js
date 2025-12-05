import { useState } from 'react'
export function useProperty() {
  const [formData, setFormData] = useState({
    propertyType: "",
    otherPropertyType: "",
    provincia: "",
    canton: "",
    distrito: "",
    direccion: "",
    niveles: "",
    areaTerreno: "",
    areaConstruccion: "",
    anoConstruccion: "",
    anoRemodelacion: "",
    habitaciones: "",
    banos: "",
    parqueos: "",
    tieneCocina: "",
    cuartoPilas: "",
    tipoConstruccion: "",
    otraConstruccion: "",
    informeRegistral: null,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({
      ...prev,
      [fieldName]: file,
    }))
  }

  return { formData, handleInputChange, handleFileChange }
}
