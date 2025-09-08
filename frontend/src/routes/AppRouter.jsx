import React, { use } from 'react';
import OwnerInformationForm from '../components/OwnerInformation';
import MainPage from '../pages/MainPage';
import LoteVivienda from '../pages/LoteVivienda';
import CentroComercial from '../pages/CentroComercial';
import Terreno from '../pages/Terreno';
import { Routes, Route } from "react-router-dom";
import { PersonalFormProvider } from "../context/shared/PersonalFormProvider.jsx"
const AppRouter = () => {
    return (
    <PersonalFormProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lote-vivienda" element={<LoteVivienda />} />
        <Route path="/local-comercial" element={<CentroComercial />} />
        <Route path="/terreno" element={<Terreno />} />
        <Route path="/owner-information" element={<OwnerInformationForm />} />
      </Routes>
    </PersonalFormProvider>
    );
};

export default AppRouter;
