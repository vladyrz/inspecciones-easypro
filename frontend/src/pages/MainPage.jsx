// File: src/pages/MainPage.jsx
"use client";
import React from "react";
import { Building2, Home, Store } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import Footer from "../components/Footer.jsx";
import OwnerInformationForm from "../components/OwnerInformation.jsx";

/**
 * @typedef {"casa" | "lote" | "centro-comercial" | null} PropertyType
 */

function MainPage() {
  // Estado
  /** @type {[PropertyType, React.Dispatch<React.SetStateAction<PropertyType>>]} */
  const [selectedType, setSelectedType] = React.useState(null);
  const navigate = useNavigate();

  const propertyTypes = [
    {
      id: "casa",
      title: "Casa",
      description: "Inspección completa de vivienda residencial",
      icon: Home,
      color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
      enlace: "/lote-vivienda",
    },
    {
      id: "lote",
      title: "Lote",
      description: "Evaluación de terreno y construcción",
      icon: Building2,
      color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
      enlace: "/terreno",
    },
    {
      id: "centro-comercial",
      title: "Centro Comercial",
      description: "Inspección de local comercial",
      icon: Store,
      color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
      enlace: "/local-comercial",
    },
  ];

  const handleTypeSelection = (type) => {
    setSelectedType(type);
  };

  const handleStartInspection = () => {
    if (!selectedType) return;
    const selectedProperty = propertyTypes.find((p) => p.id === selectedType);
    const direccion = selectedProperty ? selectedProperty.enlace : "/";
    if (selectedProperty) navigate("/owner-information", { state: { propertyType: direccion } });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Main */}
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-3 sm:mb-4">
              Sistema de Inspección Inmobiliaria
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Seleccione el tipo de propiedad para iniciar el proceso de inspección profesional
            </p>
          </div>

          {/* Property Type Selection */}
          <div className="max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {propertyTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = selectedType === type.id;

                return (
                  <div
                    key={type.id}
                    className={`cursor-pointer transition-all duration-200 rounded-lg border p-5 sm:p-6 ${type.color} ${
                      isSelected ? "ring-2 ring-blue-500 shadow-lg scale-[1.02]" : "hover:shadow-md"
                    }`}
                    onClick={() => handleTypeSelection(type.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") handleTypeSelection(type.id);
                    }}
                  >
                    <div className="text-center pb-3 sm:pb-4">
                      <div className="mx-auto mb-3 sm:mb-4 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-white shadow-sm">
                        <Icon className={`h-7 w-7 sm:h-8 sm:w-8 ${isSelected ? "text-blue-600" : "text-slate-600"}`} />
                      </div>
                      <h3 className={`text-lg sm:text-xl font-semibold ${isSelected ? "text-blue-800" : "text-slate-800"}`}>
                        {type.title}
                      </h3>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-600 text-sm sm:text-base">{type.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Button */}
            {selectedType && (
              <div className="text-center">
                <button
                  onClick={handleStartInspection}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Iniciar Inspección de {propertyTypes.find((p) => p.id === selectedType)?.title}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <section className="mx-auto mt-16 sm:mt-20 lg:mt-24 scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32 px-4 sm:px-6 lg:px-8 max-w-3xl sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2 w-full bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg p-6 lg:p-8">
              <div className="mb-3 sm:mb-4">
                <h3 className="text-slate-800 flex items-center gap-2 font-semibold text-lg">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  Nota aclaratoria
                </h3>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Este Estudio Estratégico de Valor ha sido desarrollado con estándares profesionales, Tecnología predictiva aplicada al mercado inmobiliario desarrollada por Easypro para el análisis comparativo de mercado y datos oficiales. Este informe proporciona una valoración confiable para fines informativos, estratégicos y comerciales. Para trámites legales, hipotecarios o judiciales, Easypro pone a su disposición a sus peritos registrados, quienes pueden emitir el avalúo oficial correspondiente.
              </p>
            </div>
          </div>
        </section>
      </main>   
    </div>
  );
}

export default MainPage;
