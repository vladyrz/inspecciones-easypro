// src/context/FormContext.js
import { createContext, useContext, useState } from "react"

const FormContext = createContext()

export const PersonalFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    cedula: "",
    telefono: "",
    email: "",
    isRegisteredOwner: "",
    tipoRelacion: "",
    otraRelacion: "",
    acuerdoExclusivo: "",
    confidencialidad: "",
    propositoInmueble: "",
    datumFile: null,
    pruebaPago: null,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    setFormData((prev) => ({ ...prev, [name]: value }))

  }

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, [fieldName]: file }))
  }

  return (
    <FormContext.Provider
      value={{ formData, setFormData, handleInputChange, handleFileChange }}
    >
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)
