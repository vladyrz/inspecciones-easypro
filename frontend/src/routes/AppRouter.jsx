import React, { use } from 'react';
import OwnerInformationForm from '../pages/sections/OwnerInformation.jsx';
import MainPage from '../pages/MainPage';
import { Routes, Route } from "react-router-dom";
import { PersonalFormProvider } from "../context/shared/PersonalFormProvider.jsx"
import Director from "../components/Builder/Director.jsx";
const AppRouter = () => {
    return (
    <PersonalFormProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/inspeccion/:tipo" element={<Director />} />
      </Routes>
    </PersonalFormProvider>
    );
};

export default AppRouter;
