import OwnerInformationForm from "../pages/sections/OwnerInformation.jsx";
import Property from "../pages/sections/Property.jsx";
import TerrainInformation from "../pages/sections/TerrainInformation.jsx";
import LuxuryProperties from "../pages/sections/LuxuryPropierties.jsx";

export const flujo = {
  Casa: [
    { id: "owner",   label: "Propietario", component: OwnerInformationForm },
    { id: "property", label: "Inmueble",   component: Property },
    { id: "terrain", label: "Terreno",    component: TerrainInformation },
  ],
  Lote: [
    { id: "owner",   label: "Propietario", component: OwnerInformationForm },
    { id: "terrain", label: "Terreno",    component: TerrainInformation },
  ],
  PropiedadLujo: [
    { id: "owner",   label: "Propietario", component: OwnerInformationForm },
    {id:"terrain",   label:"Terreno", component:TerrainInformation},
    { id: "property",label: "Inmueble",   component: Property },
    { id: "luxury",  label: "Propiedad de lujo",    component: LuxuryProperties },

  ],
  // aquí luego puedes agregar:
  // apartamento: [...]
  // centro-comercial: [...]
};


export function getInspectionFlow(tipo) {
  return flujo[tipo] ?? null;
}
