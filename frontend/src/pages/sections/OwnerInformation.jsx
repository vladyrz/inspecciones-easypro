import { User, Phone, Mail, FileText, Upload } from "lucide-react"
import { useFormContext } from "../../context/shared/PersonalFormProvider.jsx"
function OwnerInformationForm() {
    const { formData, handleInputChange, handleFileChange } = useFormContext()
    return (

        <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <User className="w-6 h-6 text-blue-600" />
                    1. Información del Propietario
                </h2>
                <div className="w-full h-1 bg-blue-600 rounded-full"></div>
            </div>

            <div className="space-y-8" >
                {/* 1.1 Información Personal */}
                <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                        1.1. Información Personal
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo del propietario *</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    name="nombreCompleto"
                                    value={formData.nombreCompleto}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder="Ingrese el nombre completo"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Número de cédula o identificación jurídica *
                            </label>
                            <div className="relative">
                                <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    name="cedula"
                                    value={formData.cedula}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder="Ej: 1-1234-5678"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono de contacto *</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="number"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder="Ej: 8888-8888"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico *</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder="ejemplo@correo.com"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 1.2 Propietario Registral */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                        1.2. ¿Es usted el propietario registral del inmueble?
                    </h3>

                    <div className="flex gap-6">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="isRegisteredOwner"
                                value="si"
                                checked={formData.isRegisteredOwner === "si"}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                required
                            />
                            <span className="ml-2 text-gray-700">Sí</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="isRegisteredOwner"
                                value="no"
                                checked={formData.isRegisteredOwner === "no"}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-gray-700">No</span>
                        </label>
                    </div>
                </div>

                {/* 1.3 Tipo de Relación */}
                {formData.isRegisteredOwner === "no" && (
                    <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800">1.3. Si no lo es, indique el tipo de relación:</h3>

                        <div className="space-y-3">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="tipoRelacion"
                                    value="apoderado"
                                    checked={formData.tipoRelacion === "apoderado"}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                    required
                                />
                                <span className="ml-2 text-gray-700">Apoderado legal</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="tipoRelacion"
                                    value="familiar"
                                    checked={formData.tipoRelacion === "familiar"}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-gray-700">Familiar autorizado</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="tipoRelacion"
                                    value="otro"
                                    checked={formData.tipoRelacion === "otro"}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-gray-700">Otro:</span>
                            </label>

                            {formData.tipoRelacion === "otro" && (
                                <div className="ml-6">
                                    <input
                                        type="text"
                                        name="otraRelacion"
                                        value={formData.otraRelacion}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Especifique la relación"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* 1.4 Acuerdo de Corretaje */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                        1.4. ¿Está dispuesto a firmar un acuerdo de corretaje exclusivo con la agencia?
                    </h3>

                    <div className="flex flex-wrap gap-6">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="acuerdoExclusivo"
                                value="si"
                                checked={formData.acuerdoExclusivo === "si"}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                required
                            />
                            <span className="ml-2 text-gray-700">Sí</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="acuerdoExclusivo"
                                value="no"
                                checked={formData.acuerdoExclusivo === "no"}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-gray-700">No</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="acuerdoExclusivo"
                                value="depende"
                                checked={formData.acuerdoExclusivo === "depende"}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-gray-700">Depende de las condiciones</span>
                        </label>
                    </div>
                </div>

                {/* 1.5 Confidencialidad */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                        1.5. ¿Desea mantener confidencial su información personal en publicaciones?
                    </h3>

                    <div className="flex gap-6">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="confidencialidad"
                                value="si"
                                checked={formData.confidencialidad === "si"}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                required
                            />
                            <span className="ml-2 text-gray-700">Sí</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="confidencialidad"
                                value="no"
                                checked={formData.confidencialidad === "no"}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                required
                            />
                            <span className="ml-2 text-gray-700">No</span>
                        </label>
                    </div>
                </div>

                {/* 1.6 Propósito de la Propiedad */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                        1.6. ¿Desea vender, alquilar o ambas opciones?
                    </h3>

                    <div className="flex flex-wrap gap-6">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="propositoInmueble"
                                value="vender"
                                checked={formData.propositoInmueble === "vender"}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                required
                            />
                            <span className="ml-2 text-gray-700">Vender</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="propositoInmueble"
                                value="alquilar"
                                checked={formData.propositoInmueble === "alquilar"}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                required
                            />
                            <span className="ml-2 text-gray-700">Alquilar</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="propositoInmueble"
                                value="ambas"
                                checked={formData.propositoInmueble === "ambas"}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                required
                            />
                            <span className="ml-2 text-gray-700">Ambas</span>
                        </label>
                    </div>
                </div>

                {/* 1.7 y 1.8 Adjuntar Archivos */}
                <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                        1.7. y 1.8. Documentos Requeridos
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">1.7. Adjuntar Datum *</label>
                            <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                <input
                                    type="file"
                                    name="datumFile"
                                    onChange={(e) => handleFileChange(e, "datumFile")}
                                    className="absolute inset-0 h-full w-full opacity-0 cursor-pointer"
                                    id="datum-file"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    required
                                />
                                <label htmlFor="datum-file" className="cursor-pointer">
                                    <span className="text-sm text-gray-600">
                                        {formData.datumFile ? formData.datumFile.name : "Haga clic para seleccionar archivo"}
                                    </span>
                                    <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (máx. 10MB)</p>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                1.8. Adjuntar comprobante de pago *
                            </label>
                            <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                <input
                                    type="file"
                                    name="pruebaPago"
                                    onChange={(e) => handleFileChange(e, "pruebaPago")}
                                    id="payment-file"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    className="absolute inset-0 h-full w-full opacity-0 cursor-pointer"
                                    required
                                />
                                <label htmlFor="payment-file" className="cursor-pointer">
                                    <span className="text-sm text-gray-600">
                                        {formData.pruebaPago ? formData.pruebaPago.name : "Haga clic para seleccionar archivo"}
                                    </span>
                                    <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (máx. 10MB)</p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OwnerInformationForm;