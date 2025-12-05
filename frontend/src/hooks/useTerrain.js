import { useState } from 'react'

export function useTerrain() {
  const [formData, setFormData] = useState({
    topography: "",
    greenZone: "",
    accessStreetType: "",
    perimeterFencing: "",
    easements: "",
    drainageRisks: "",
    drainageRisksOther: "",
    roadType: "",
    cadastralPlan: null,
  })

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e, field) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, [field]: file }))
    }
  }

  return { formData, handleChange, handleFileChange }
}
