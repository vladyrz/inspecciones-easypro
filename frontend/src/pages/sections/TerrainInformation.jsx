"use client"

import { useState } from "react"
import { Upload , Trees} from "lucide-react"
import  { useTerrain }  from "../../hooks/useTerrain"
function TerrainInformation() {
  const { formData,  handleChange, handleFileChange } = useTerrain()
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <Trees className="w-6 h-6 text-blue-600" />
          3. Terreno
        </h2>
        <div className="w-full h-1 bg-blue-600 rounded-full"></div>
      </div>
      

      <div className="space-y-8">
        {/* 3.1 Tipo de topografía */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">3.1. Tipo de topografía:</h3>
          <div className="space-y-2">
            {["Plana", "Ligeramente inclinada", "Quebrada"].map((option) => (
              <label key={option} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="topography"
                  value={option}
                  checked={formData.topography === option}
                  onChange={(e) => handleChange("topography", e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-gray-700 group-hover:text-gray-900">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200"></div>

        {/* 3.2 Zona Verde */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">3.2. Zona Verde</h3>
          <div className="space-y-2">
            {["Sí", "No"].map((option) => (
              <label key={option} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="greenZone"
                  value={option}
                  checked={formData.greenZone === option}
                  onChange={(e) => handleChange("greenZone", e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-gray-700 group-hover:text-gray-900">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200"></div>

        {/* 3.3 Tipo de calle de acceso */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">3.3. Tipo de calle de acceso:</h3>
          <div className="space-y-2">
            {["Asfaltada", "Inclinada Lastre", "Sin acceso definido"].map((option) => (
              <label key={option} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="accessStreetType"
                  value={option}
                  checked={formData.accessStreetType === option}
                  onChange={(e) => handleChange("accessStreetType", e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-gray-700 group-hover:text-gray-900">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200"></div>

        {/* 3.4 Cerramiento perimetral */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">3.4. Cerramiento perimetral:</h3>
          <div className="space-y-2">
            {["Sí", "No", "Parcial"].map((option) => (
              <label key={option} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="perimeterFencing"
                  value={option}
                  checked={formData.perimeterFencing === option}
                  onChange={(e) => handleChange("perimeterFencing", e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-gray-700 group-hover:text-gray-900">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200"></div>

        {/* 3.5 Presencia de servidumbres o accesos compartidos */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
            3.5. Presencia de servidumbres o accesos compartidos
          </h3>
          <div className="space-y-2">
            {["Sí", "No"].map((option) => (
              <label key={option} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="easements"
                  value={option}
                  checked={formData.easements === option}
                  onChange={(e) => handleChange("easements", e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-gray-700 group-hover:text-gray-900">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200"></div>

        {/* 3.6 Drenajes o posibles riesgos */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">3.6. Drenajes o posibles riesgos</h3>
          <div className="space-y-2">
            {["Sí inundación", "No deslizamiento", "Otro"].map((option) => (
              <label key={option} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="drainageRisks"
                  value={option}
                  checked={formData.drainageRisks === option}
                  onChange={(e) => handleChange("drainageRisks", e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-gray-700 group-hover:text-gray-900">{option}</span>
              </label>
            ))}
          </div>

          {formData.drainageRisks === "Otro" && (
            <div className="mt-3">
              <input
                type="text"
                placeholder="Especifique otro riesgo"
                value={formData.drainageRisksOther}
                onChange={(e) => handleChange("drainageRisksOther", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}
        </div>

        <div className="border-t border-gray-200"></div>

        {/* 3.7 Tipo de vía */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">3.7. Tipo de vía:</h3>
          <div className="space-y-2">
            {["Peatonal", "Cantonal", "Privada", "Rural"].map((option) => (
              <label key={option} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="roadType"
                  value={option}
                  checked={formData.roadType === option}
                  onChange={(e) => handleChange("roadType", e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-gray-700 group-hover:text-gray-900">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200"></div>

        {/* 3.8 Adjuntar Plano Catastrado */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">3.8. Adjuntar Plano Catastrado</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-400 transition-colors">
            <input
              type="file"
              id="cadastralPlan"
              onChange={(e) => handleFileChange(e, "cadastralPlan")}
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png"
            />
            <label htmlFor="cadastralPlan" className="flex flex-col items-center justify-center cursor-pointer">
              <Upload className="w-12 h-12 text-gray-400 mb-3" />
              <p className="text-sm text-gray-600 mb-1">
                {formData.cadastralPlan ? (
                  <span className="text-blue-600 font-medium">{formData.cadastralPlan.name}</span>
                ) : (
                  <>
                    <span className="text-blue-600 font-medium">Seleccionar archivo</span> o arrastrar aquí
                  </>
                )}
              </p>
              <p className="text-xs text-gray-500">PDF, JPG, PNG hasta 10MB</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TerrainInformation