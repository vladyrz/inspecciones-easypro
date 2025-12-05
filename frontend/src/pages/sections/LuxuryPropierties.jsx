import React from "react"
import { Warehouse } from "lucide-react"
import { useLuxury } from "../../hooks/useLuxury"
function LuxuryProperties({ onNext, onBack }) {
  // Obtener funciones/estado desde el hook "useLuxury"
  const { SECTION_OPTIONS, toggleSection, handleInputChange, handleCheckboxChange, sections, formData } = useLuxury()

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <Warehouse className="w-6 h-6 text-blue-600" />
          4. Propiedades de lujo
        </h2>
        <div className="w-full h-1 bg-blue-600 rounded-full" />
      </div>

      <div className="p-8 space-y-8">
        {/* Selector de áreas que tiene la propiedad */}
        <div className="mb-6 space-y-2">
          <p className="text-sm font-medium text-gray-700">
            Seleccione qué áreas aplica para esta propiedad (solo se mostrarán las seleccionadas):
          </p>
            <div className="flex flex-wrap gap-3">
            {SECTION_OPTIONS.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => toggleSection(key)}
                className={`px-4 py-2 text-xs font-medium rounded-full border transition
                  ${
                    sections[key]
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* 4.1 Exteriores y Áreas Recreativas */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">4.1. Exteriores y Áreas Recreativas</h2>

          {/* 4.1.1 Piscina */}
          {sections.pool && (
            <div className="space-y-4 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">4.1.1. Piscina</h3>

              <div className="space-y-3 pl-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Tipo:</p>
                  <div className="space-y-2">
                    {["Enterrada", "Elevada", "Infantil", "Infinita"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="poolType"
                          value={option}
                          checked={formData.poolType === option}
                          onChange={(e) => handleInputChange("poolType", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Material:</p>
                  <div className="space-y-2">
                    {["Concreto", "Fibra", "Azulejo"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="poolMaterial"
                          value={option}
                          checked={formData.poolMaterial === option}
                          onChange={(e) => handleInputChange("poolMaterial", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estado general</label>
                  <textarea
                    value={formData.poolState}
                    onChange={(e) => handleInputChange("poolState", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa el estado general"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Sistema de filtrado:</p>
                  <div className="flex space-x-4">
                    {["Sí", "No"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="poolFiltration"
                          value={option}
                          checked={formData.poolFiltration === option}
                          onChange={(e) => handleInputChange("poolFiltration", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">¿Tiene calefacción?:</p>
                  <div className="flex space-x-4">
                    {["Sí", "No"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="poolHeating"
                          value={option}
                          checked={formData.poolHeating === option}
                          onChange={(e) => handleInputChange("poolHeating", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Observaciones</label>
                  <textarea
                    value={formData.poolObservations}
                    onChange={(e) => handleInputChange("poolObservations", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Observaciones adicionales"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 4.1.2 Rancho / BBQ */}
          {sections.rancho && (
            <div className="space-y-4 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">4.1.2. Rancho / BBQ</h3>

              <div className="space-y-3 pl-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Área techada:</p>
                  <div className="flex space-x-4">
                    {["Sí", "No"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="ranchoCovered"
                          value={option}
                          checked={formData.ranchoCovered === option}
                          onChange={(e) => handleInputChange("ranchoCovered", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Tipo de parrilla:</p>
                  <div className="space-y-2">
                    {["Carbón", "Gas", "Eléctrica"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="ranchoGrillType"
                          value={option}
                          checked={formData.ranchoGrillType === option}
                          onChange={(e) => handleInputChange("ranchoGrillType", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estado del mobiliario y mesones
                  </label>
                  <textarea
                    value={formData.ranchoFurnitureState}
                    onChange={(e) => handleInputChange("ranchoFurnitureState", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa el estado"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Servicios disponibles:</p>
                  <div className="space-y-2">
                    {["Agua", "Electricidad", "Fregadero"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.ranchoServices.includes(option)}
                          onChange={() => handleCheckboxChange("ranchoServices", option)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500 rounded"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4.1.3 Cancha deportiva */}
          {sections.court && (
            <div className="space-y-4 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">4.1.3. Cancha deportiva</h3>

              <div className="space-y-3 pl-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de cancha</label>
                  <input
                    type="text"
                    value={formData.courtType}
                    onChange={(e) => handleInputChange("courtType", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ej: Tenis, Fútbol, Baloncesto"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Superficie:</p>
                  <div className="space-y-2">
                    {["Concreto", "Sintética", "Grama natural"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="courtSurface"
                          value={option}
                          checked={formData.courtSurface === option}
                          onChange={(e) => handleInputChange("courtSurface", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estado general</label>
                  <textarea
                    value={formData.courtState}
                    onChange={(e) => handleInputChange("courtState", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa el estado"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Iluminación nocturna:</p>
                  <div className="flex space-x-4">
                    {["Sí", "No"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="courtLighting"
                          value={option}
                          checked={formData.courtLighting === option}
                          onChange={(e) => handleInputChange("courtLighting", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4.1.4 Jardín y paisajismo */}
          {sections.garden && (
            <div className="space-y-4 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">4.1.4. Jardín y paisajismo</h3>

              <div className="space-y-3 pl-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Sistema de riego automático:</p>
                  <div className="flex space-x-4">
                    {["Sí", "No"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="gardenIrrigation"
                          value={option}
                          checked={formData.gardenIrrigation === option}
                          onChange={(e) => handleInputChange("gardenIrrigation", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de plantas y mantenimiento
                  </label>
                  <textarea
                    value={formData.gardenPlants}
                    onChange={(e) => handleInputChange("gardenPlants", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa las plantas y el mantenimiento"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Iluminación decorativa:</p>
                  <div className="flex space-x-4">
                    {["Sí", "No"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="gardenLighting"
                          value={option}
                          checked={formData.gardenLighting === option}
                          onChange={(e) => handleInputChange("gardenLighting", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4.1.5 Terraza o rooftop */}
          {sections.terrace && (
            <div className="space-y-4 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">4.1.5. Terraza o rooftop</h3>

              <div className="space-y-3 pl-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Cubierta:</p>
                  <div className="flex space-x-4">
                    {["Sí", "No"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="terraceCovered"
                          value={option}
                          checked={formData.terraceCovered === option}
                          onChange={(e) => handleInputChange("terraceCovered", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Piso y barandas</label>
                  <textarea
                    value={formData.terraceFloor}
                    onChange={(e) => handleInputChange("terraceFloor", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa el piso y barandas"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vista panorámica / mobiliario
                  </label>
                  <textarea
                    value={formData.terraceView}
                    onChange={(e) => handleInputChange("terraceView", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa la vista y mobiliario"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Seguridad (altura, protección, etc.)
                  </label>
                  <textarea
                    value={formData.terraceSecurity}
                    onChange={(e) => handleInputChange("terraceSecurity", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa las medidas de seguridad"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 my-8" />

        {/* 4.2 Interiores Especiales */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">4.2. Interiores Especiales</h2>

          {/* 4.2.1 Sala de cine o entretenimiento */}
          {sections.cinema && (
            <div className="space-y-4 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">4.2.1. Sala de cine o entretenimiento</h3>

              <div className="space-y-3 pl-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Aislamiento acústico:</p>
                  <div className="flex space-x-4">
                    {["Sí", "No"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="cinemaAcoustic"
                          value={option}
                          checked={formData.cinemaAcoustic === option}
                          onChange={(e) => handleInputChange("cinemaAcoustic", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Pantalla y proyector:</p>
                  <div className="flex space-x-4">
                    {["Instalado", "No instalado"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="cinemaScreen"
                          value={option}
                          checked={formData.cinemaScreen === option}
                          onChange={(e) => handleInputChange("cinemaScreen", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Asientos especiales:</p>
                  <div className="flex space-x-4">
                    {["Sí", "No"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="cinemaSeats"
                          value={option}
                          checked={formData.cinemaSeats === option}
                          onChange={(e) => handleInputChange("cinemaSeats", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Sistema de sonido:</p>
                  <div className="flex space-x-4">
                    {["Sí", "No"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="cinemaSound"
                          value={option}
                          checked={formData.cinemaSound === option}
                          onChange={(e) => handleInputChange("cinemaSound", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4.2.2 Gimnasio / área fitness */}
          {sections.gym && (
            <div className="space-y-4 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">4.2.2. Gimnasio / área fitness</h3>

              <div className="space-y-3 pl-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Equipamiento presente:</p>
                  <div className="flex space-x-4">
                    {["Sí", "No"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="gymEquipment"
                          value={option}
                          checked={formData.gymEquipment === option}
                          onChange={(e) => handleInputChange("gymEquipment", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estado del piso</label>
                  <textarea
                    value={formData.gymFloorState}
                    onChange={(e) => handleInputChange("gymFloorState", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa el estado del piso"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ventilación e iluminación</label>
                  <textarea
                    value={formData.gymVentilation}
                    onChange={(e) => handleInputChange("gymVentilation", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa la ventilación e iluminación"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 4.2.3 Oficina / estudio privado */}
          {sections.office && (
            <div className="space-y-4 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">4.2.3. Oficina / estudio privado</h3>

              <div className="space-y-3 pl-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de mobiliario</label>
                  <textarea
                    value={formData.officeFurniture}
                    onChange={(e) => handleInputChange("officeFurniture", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa el mobiliario"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nivel de aislamiento acústico</label>
                  <textarea
                    value={formData.officeAcoustic}
                    onChange={(e) => handleInputChange("officeAcoustic", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa el aislamiento acústico"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Conexiones eléctricas y red</label>
                  <textarea
                    value={formData.officeConnections}
                    onChange={(e) => handleInputChange("officeConnections", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa las conexiones"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 4.2.4 Sauna / baño turco */}
          {sections.sauna && (
            <div className="space-y-4 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">4.2.4. Sauna / baño turco</h3>

              <div className="space-y-3 pl-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo</label>
                  <input
                    type="text"
                    value={formData.saunaType}
                    onChange={(e) => handleInputChange("saunaType", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ej: Sauna seco, Baño turco"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Material de revestimiento</label>
                  <input
                    type="text"
                    value={formData.saunaMaterial}
                    onChange={(e) => handleInputChange("saunaMaterial", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ej: Madera de cedro, azulejo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estado general</label>
                  <textarea
                    value={formData.saunaState}
                    onChange={(e) => handleInputChange("saunaState", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa el estado"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sistema de calefacción / vapor
                  </label>
                  <textarea
                    value={formData.saunaHeating}
                    onChange={(e) => handleInputChange("saunaHeating", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa el sistema"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 my-8" />

        {/* 4.3 Habitaciones y Suites */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">4.3. Habitaciones y Suites</h2>

          {/* 4.3.1 Master Suite */}
          {sections.masterSuite && (
            <div className="space-y-4 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">4.3.1. Master Suite</h3>

              <div className="space-y-3 pl-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Walk-in closet:</p>
                  <div className="flex space-x-4">
                    {["Sí", "No"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="masterWalkIn"
                          value={option}
                          checked={formData.masterWalkIn === option}
                          onChange={(e) => handleInputChange("masterWalkIn", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Closet:</p>
                  <div className="space-y-2">
                    {["Simple", "Doble", "Con isla central"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="masterCloset"
                          value={option}
                          checked={formData.masterCloset === option}
                          onChange={(e) => handleInputChange("masterCloset", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Baño tipo spa:</p>
                  <div className="space-y-2">
                    {["Tina", "Ducha lluvia", "Doble lavamanos"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.masterBathroom.includes(option)}
                          onChange={() => handleCheckboxChange("masterBathroom", option)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500 rounded"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Balcón privado:</p>
                  <div className="flex space-x-4">
                    {["Sí", "No"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="masterBalcony"
                          value={option}
                          checked={formData.masterBalcony === option}
                          onChange={(e) => handleInputChange("masterBalcony", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4.3.2 Cuartos secundarios */}
          {sections.secondaryRooms && (
            <div className="space-y-4 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">4.3.2. Cuartos secundarios</h3>

              <div className="space-y-3 pl-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Closet de blancos</label>
                  <input
                    type="text"
                    value={formData.secondaryLinenCloset}
                    onChange={(e) => handleInputChange("secondaryLinenCloset", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa el closet de blancos"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Baño privado:</p>
                  <div className="flex space-x-4">
                    {["Sí", "No"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="secondaryPrivateBath"
                          value={option}
                          checked={formData.secondaryPrivateBath === option}
                          onChange={(e) => handleInputChange("secondaryPrivateBath", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Acabados especiales</label>
                  <textarea
                    value={formData.secondaryFinishes}
                    onChange={(e) => handleInputChange("secondaryFinishes", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa los acabados especiales"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 my-8" />

        {/* 4.4 Tecnología y Automatización */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">4.4. Tecnología y Automatización</h2>

          {/* 4.4.1 Domótica / Control Inteligente */}
          {sections.domotic && (
            <div className="space-y-4 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">4.4.1. Domótica / Control Inteligente</h3>

              <div className="space-y-3 pl-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Control de luces</label>
                  <input
                    type="text"
                    value={formData.domoticLights}
                    onChange={(e) => handleInputChange("domoticLights", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa el control de luces"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Control de persianas</label>
                  <input
                    type="text"
                    value={formData.domoticBlinds}
                    onChange={(e) => handleInputChange("domoticBlinds", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa el control de persianas"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Control de temperatura</label>
                  <input
                    type="text"
                    value={formData.domoticTemperature}
                    onChange={(e) => handleInputChange("domoticTemperature", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa el control de temperatura"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">App funcional</label>
                  <input
                    type="text"
                    value={formData.domoticApp}
                    onChange={(e) => handleInputChange("domoticApp", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa la app funcional"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 4.4.2 Seguridad avanzada */}
          {sections.security && (
            <div className="space-y-4 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">4.4.2. Seguridad avanzada</h3>

              <div className="space-y-3 pl-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cámaras instaladas</label>
                  <input
                    type="text"
                    value={formData.securityCameras}
                    onChange={(e) => handleInputChange("securityCameras", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa las cámaras instaladas"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sensores de movimiento</label>
                  <input
                    type="text"
                    value={formData.securitySensors}
                    onChange={(e) => handleInputChange("securitySensors", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa los sensores de movimiento"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Control de acceso (huella, tarjeta, app)
                  </label>
                  <input
                    type="text"
                    value={formData.securityAccess}
                    onChange={(e) => handleInputChange("securityAccess", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa el control de acceso"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 4.4.3 Audio ambiental / sonido */}
          {sections.audio && (
            <div className="space-y-4 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">4.4.3. Audio ambiental / sonido</h3>

              <div className="space-y-3 pl-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Zonas con sonido integrado</label>
                  <input
                    type="text"
                    value={formData.audioZones}
                    onChange={(e) => handleInputChange("audioZones", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa las zonas con sonido"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Control independiente por área</label>
                  <input
                    type="text"
                    value={formData.audioControl}
                    onChange={(e) => handleInputChange("audioControl", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa el control por área"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Calidad del sistema</label>
                  <input
                    type="text"
                    value={formData.audioQuality}
                    onChange={(e) => handleInputChange("audioQuality", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa la calidad del sistema"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 4.4.4 Energía alternativa */}
          {sections.solar && (
            <div className="space-y-4 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">4.4.4. Energía alternativa</h3>

              <div className="space-y-3 pl-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Paneles solares:</p>
                  <div className="flex space-x-4">
                    {["Sí", "No"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="solarPanels"
                          value={option}
                          checked={formData.solarPanels === option}
                          onChange={(e) => handleInputChange("solarPanels", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Capacidad instalada</label>
                  <input
                    type="text"
                    value={formData.solarCapacity}
                    onChange={(e) => handleInputChange("solarCapacity", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ej: 5kW"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Baterías o inversores:</p>
                  <div className="flex space-x-4">
                    {["Sí", "No"].map((option) => (
                      <label key={option} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="solarBatteries"
                          value={option}
                          checked={formData.solarBatteries === option}
                          onChange={(e) => handleInputChange("solarBatteries", e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 my-8" />

        {/* 4.5 Cocheras y Áreas de Servicio */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">4.5. Cocheras y Áreas de Servicio</h2>

          {/* 4.5.1 Garaje / estacionamiento */}
          {sections.garage && (
            <div className="space-y-4 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">4.5.1. Garaje / estacionamiento</h3>

              <div className="space-y-3 pl-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cerrado o abierto</label>
                  <input
                    type="text"
                    value={formData.garageType}
                    onChange={(e) => handleInputChange("garageType", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ej: Cerrado, Abierto, Semi-cubierto"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Puertas eléctricas</label>
                  <input
                    type="text"
                    value={formData.garageDoors}
                    onChange={(e) => handleInputChange("garageDoors", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa las puertas"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estación de carga para vehículos eléctricos
                  </label>
                  <input
                    type="text"
                    value={formData.garageEVCharging}
                    onChange={(e) => handleInputChange("garageEVCharging", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa la estación de carga"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 4.5.2 Cuarto técnico */}
          {sections.technicalRoom && (
            <div className="space-y-4 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">4.5.2. Cuarto técnico</h3>

              <div className="space-y-3 pl-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Planta eléctrica</label>
                  <input
                    type="text"
                    value={formData.technicalGenerator}
                    onChange={(e) => handleInputChange("technicalGenerator", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa la planta eléctrica"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sistema de inversores / UPS</label>
                  <input
                    type="text"
                    value={formData.technicalInverters}
                    onChange={(e) => handleInputChange("technicalInverters", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa el sistema"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estado y mantenimiento</label>
                  <textarea
                    value={formData.technicalMaintenance}
                    onChange={(e) => handleInputChange("technicalMaintenance", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa el estado y mantenimiento"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 4.5.3 Cocina secundaria / de servicio */}
          {sections.secondaryKitchen && (
            <div className="space-y-4 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">4.5.3. Cocina secundaria / de servicio</h3>

              <div className="space-y-3 pl-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ubicación y uso</label>
                  <input
                    type="text"
                    value={formData.secondaryKitchenLocation}
                    onChange={(e) => handleInputChange("secondaryKitchenLocation", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa la ubicación y uso"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estado de electrodomésticos</label>
                  <textarea
                    value={formData.secondaryKitchenAppliances}
                    onChange={(e) => handleInputChange("secondaryKitchenAppliances", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa el estado de los electrodomésticos"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Acabados</label>
                  <textarea
                    value={formData.secondaryKitchenFinishes}
                    onChange={(e) => handleInputChange("secondaryKitchenFinishes", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describa los acabados"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 my-8" />

        {/* 4.6 Extras únicos (si aplica) */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">4.6. Extras únicos (si aplica)</h2>

          {sections.extras && (
            <div className="space-y-3 pl-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lago artificial</label>
                <input
                  type="text"
                  value={formData.extrasLake}
                  onChange={(e) => handleInputChange("extrasLake", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describa el lago artificial"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Escaleras arquitectónicas</label>
                <input
                  type="text"
                  value={formData.extrasStairs}
                  onChange={(e) => handleInputChange("extrasStairs", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describa las escaleras"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Techos artesonados</label>
                <input
                  type="text"
                  value={formData.extrasCeilings}
                  onChange={(e) => handleInputChange("extrasCeilings", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describa los techos artesonados"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Decoraciones integradas</label>
                <input
                  type="text"
                  value={formData.extrasDecorations}
                  onChange={(e) => handleInputChange("extrasDecorations", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describa las decoraciones"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LuxuryProperties
