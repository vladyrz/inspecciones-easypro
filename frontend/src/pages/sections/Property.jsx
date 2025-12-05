"use client"

import { useState,useEffect } from "react"
import { Building2, MapPin, Ruler, Calendar, Upload } from "lucide-react"
import { useProperty } from "../../hooks/useProperty"
import { useLocation } from "../../hooks/useLocation"
function Property() {
  const { formData, handleInputChange, handleFileChange} = useProperty()
   const {
    provincias,
    cantones,
    distritos,

    provinciaId,
    cantonId,
    distritoId,
    setProvinciaId,
    setCantonId,
    setDistritoId,
  } = useLocation();

  useEffect(() => {
  console.log("formData actualizado:", formData);
  }, [formData]);

  const handleProvinciaChange = (e) => {          
    setProvinciaId(e.target.value); 
    const selected = provincias.find((p) => String(p.idProvincia) === String(e.target.value)); 
    handleInputChange({
      target: {
        name: "provincia",
        value: selected?.descripcion || "",
      },
    })
  };

  const handleCantonChange = (e) => {            
    setCantonId(e.target.value); 
    const selected = cantones.find((c) => String(c.idCanton) === String(e.target.value))
    handleInputChange({
      target: {
        name: "canton",
        value: selected?.descripcion || "",
      },
    }) 
  };

  const handleDistritoChange = (e) => {
    setDistritoId(e.target.value);
    const selected = distritos.find((d) => String(d.idDistrito) === String(e.target.value))
    handleInputChange({
      target: {
        name: "distrito",
        value: selected?.descripcion || "",
      },
    })              
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <Building2 className="w-6 h-6 text-blue-600" />
          2. Información General del Inmueble
        </h2>
        
        <div className="w-full h-1 bg-blue-600 rounded-full"></div>
      </div>

      <div className="space-y-8" >
        {/* 2.1 Tipo de Propiedad */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">2.1. Tipo de propiedad</h3>

          <div className="space-y-3">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="propertyType"
                value="casa"
                checked={formData.propertyType === "casa"}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Casa</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="propertyType"
                value="apartamento"
                checked={formData.propertyType === "apartamento"}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Apartamento</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="propertyType"
                value="local"
                checked={formData.propertyType === "local"}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Local comercial</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="propertyType"
                value="lote"
                checked={formData.propertyType === "lote"}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Lote con construcción</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="propertyType"
                value="otro"
                checked={formData.propertyType === "otro"}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Otro:</span>
            </label>

            {formData.propertyType === "otro" && (
              <div className="ml-6">
                <input
                  type="text"
                  name="otherPropertyType"
                  value={formData.otherPropertyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Especifique el tipo de propiedad"
                />
              </div>
            )}
          </div>
        </div>

        {/* 2.2 Ubicación */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">2.2. Ubicación</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Provincia *</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  name="provincia"
                  value={provinciaId}
                  onChange={handleProvinciaChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors focus:outline-none"
                >
                  <option value="">Seleccione provincia</option>
                  {provincias.map((provincia) => (
                  <option key={provincia.idProvincia} value={provincia.idProvincia}>
                    {provincia.descripcion}
                  </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cantón *</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  name="canton"
                  value={cantonId}
                  onChange={handleCantonChange}
                  disabled={!provinciaId}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors focus:outline-none"
                >
                  <option value="">Seleccione cantón</option>
                  {cantones.map((canton) => (
                    <option key={canton.idCanton} value={canton.idCanton}>
                      {canton.descripcion}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Distrito *</label>
              <select
                name="distrito"
                value={distritoId}
                onChange={handleDistritoChange}
                disabled={!cantonId}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors outline-none focus:outline-none focus-visible:outline-none
"

              >
                <option value="">Seleccione distrito</option>
                {distritos.map((distrito) => (
                  <option key={distrito.idDistrito} value={distrito.idDistrito}>
                    {distrito.descripcion}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Dirección exacta *</label>
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Ingrese la dirección completa"
              />
            </div>
          </div>
        </div>

        {/* 2.3 Cantidad de Niveles */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
            2.3. Cantidad de niveles en la construcción
          </h3>

          <div className="flex flex-wrap gap-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="niveles"
                value="1"
                checked={formData.niveles === "1"}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">1 nivel</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="niveles"
                value="2"
                checked={formData.niveles === "2"}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">2 niveles</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="niveles"
                value="3+"
                checked={formData.niveles === "3+"}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">3 niveles o más</span>
            </label>
          </div>
        </div>

        {/* 2.4 y 2.5 Áreas */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
            2.4. y 2.5. Medidas del Inmueble
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">2.4. Área del terreno (m²) *</label>
              <div className="relative">
                <Ruler className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  name="areaTerreno"
                  value={formData.areaTerreno}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Ej: 250"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">2.5. Área de construcción (m²) *</label>
              <div className="relative">
                <Ruler className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  name="areaConstruccion"
                  value={formData.areaConstruccion}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Ej: 180"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2.6 Año de Construcción */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
            2.6. Año de construcción / Año de remodelaciones
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Año de construcción *</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  name="anoConstruccion"
                  value={formData.anoConstruccion}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Ej: 2010"
                  min="1900"
                  max="2025"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Año de remodelación (opcional)</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  name="anoRemodelacion"
                  value={formData.anoRemodelacion}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Ej: 2020"
                  min="1900"
                  max="2025"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2.7 Habitaciones */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
            2.7. Cantidad total de habitaciones
          </h3>
          <p className="text-sm text-gray-600">Activa un bloque de inspección por habitación</p>

          <div className="flex flex-wrap gap-6">
            {["1", "2", "3", "4", "5+"].map((num) => (
              <label key={num} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="habitaciones"
                  value={num}
                  checked={formData.habitaciones === num}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">{num === "5+" ? "5 o más" : num}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 2.8 Baños */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
            2.8. Cantidad total de baños
          </h3>
          <p className="text-sm text-gray-600">
            Activa un bloque por baño para inspección de grifería, estado, ducha, etc.
          </p>

          <div className="flex flex-wrap gap-6">
            {["1", "2", "3", "4+"].map((num) => (
              <label key={num} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="banos"
                  value={num}
                  checked={formData.banos === num}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">{num === "4+" ? "4 o más" : num}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 2.9 Parqueos */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
            2.9. Cantidad de espacios de parqueo
          </h3>

          <div className="flex flex-wrap gap-6">
            {["0", "1", "2", "3+"].map((num) => (
              <label key={num} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="parqueos"
                  value={num}
                  checked={formData.parqueos === num}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">{num === "3+" ? "3 o más" : num}</span>
              </label>
            ))}
          </div>
        </div>

        {/* 2.10 Cocina */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
            2.10. ¿Tiene cocina construida?
          </h3>
          <p className="text-sm text-gray-600">
            Si "Sí", activa bloque de inspección de cocina: tipo de muebles, grifería, materiales, ventilación, etc.
          </p>

          <div className="flex gap-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="tieneCocina"
                value="si"
                checked={formData.tieneCocina === "si"}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Sí</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="tieneCocina"
                value="no"
                checked={formData.tieneCocina === "no"}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* 2.11 Cuarto de Pilas */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
            2.11. ¿Cuenta con cuarto de pilas / lavandería?
          </h3>

          <div className="flex gap-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="cuartoPilas"
                value="si"
                checked={formData.cuartoPilas === "si"}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Sí</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="cuartoPilas"
                value="no"
                checked={formData.cuartoPilas === "no"}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* 2.12 Tipo de Construcción */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
            2.12. Tipo de construcción predominante
          </h3>

          <div className="space-y-3">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="tipoConstruccion"
                value="bloque"
                checked={formData.tipoConstruccion === "bloque"}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Bloque</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="tipoConstruccion"
                value="prefabricado"
                checked={formData.tipoConstruccion === "prefabricado"}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Prefabricado</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="tipoConstruccion"
                value="mixto"
                checked={formData.tipoConstruccion === "mixto"}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Mixto</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="tipoConstruccion"
                value="otro"
                checked={formData.tipoConstruccion === "otro"}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Otro:</span>
            </label>

            {formData.tipoConstruccion === "otro" && (
              <div className="ml-6">
                <input
                  type="text"
                  name="otraConstruccion"
                  value={formData.otraConstruccion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Especifique el tipo de construcción"
                />
              </div>
            )}
          </div>
        </div>

        {/* 2.13 Adjuntar Informe Registral */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
            2.13. Adjuntar Informe Registral
          </h3>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "informeRegistral")}
              className="hidden"
              id="informe-file"
              accept=".pdf,.jpg,.jpeg,.png"
            />
            <label htmlFor="informe-file" className="cursor-pointer">
              <span className="text-sm text-gray-600">
                {formData.informeRegistral ? formData.informeRegistral.name : "Haga clic para seleccionar archivo"}
              </span>
              <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (máx. 10MB)</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Property