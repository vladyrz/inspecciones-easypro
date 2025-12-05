import React,{useState} from "react";
import { getInspectionFlow } from "../../modules/Flujo.js";   
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "../Navigation.jsx";
function Director () {
  const { tipo } = useParams();
  const navigate = useNavigate();
  const [stepIndex, setStepIndex] = useState(0);
  const flujo= getInspectionFlow(tipo);
  const totalSteps = flujo.length;
  const isFirst = stepIndex === 0;
  const isLast  = stepIndex === totalSteps - 1;
  const StepComponent = flujo[stepIndex].component;

  
  const handleBack = () => {
    if (!isFirst) {
      setStepIndex(stepIndex - 1);
    }else{ 
      navigate('/');
    }
  };

  const handleNext = () => {
    if (!isLast) {
      setStepIndex(stepIndex + 1);
    }else{
      console.log("Inspección completada");
      navigate('/');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  return(
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800">
            Inspección: {tipo=== "PropiedadLujo" ? "Propiedad de lujo" : tipo}
          </h2>
          <p className="text-sm text-slate-500">
            Paso {stepIndex + 1} de {totalSteps} · {flujo[stepIndex].label}
          </p>
        </div>

        {/* Opcional: barra de pasos */}
        <ul className="flex flex-wrap gap-2 mb-4">
          {flujo.map((step, index) => (
            <li
              key={step.id}
              className={`px-3 py-1 rounded-full text-xs sm:text-sm ${
                index === stepIndex
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {index + 1}. {step.label}
            </li>
          ))}
        </ul>
         <form onSubmit={handleSubmit} className="space-y-4">
          <StepComponent tipo={tipo} stepId={flujo[stepIndex].id} />
          <Navigation
            onBack={handleBack}
            isFirst={isFirst}
            isLast={isLast}
            backLabelFirst="Volver al Menú Principal"
            backLabel="Anterior"
            nextLabel="Continuar"
            finishLabel="Finalizar"
          />
        </form> 
      </div>
    </div>
  );  
}
export default Director;