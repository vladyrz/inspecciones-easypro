import { useState, useEffect } from "react";
import GeolocationCr from "../services/GeolocationCr";

export function useLocation() {
  const [provincias, setProvincias] = useState([]);
  const [cantones, setCantones] = useState([]);
  const [distritos, setDistritos] = useState([]);

  const [provinciaId, setProvinciaId] = useState("");
  const [cantonId, setCantonId] = useState("");
  const [distritoId, setDistritoId] = useState("");
  
  useEffect(() => {
    const cargarProvincias =  async () => {
      const res =  await GeolocationCr.getProvincia();
      const lista = res.data.map((item) => ({
        idProvincia: item.idProvincia,
        descripcion: item.descripcion,
      }));
      setProvincias(lista);
    };
    cargarProvincias();
  }, []);

  useEffect(() => {
    if (!provinciaId) {
      setCantones([]);
      setDistritos([]);
      return;
    }
     let idNum = Number(provinciaId);
    idNum = idNum === 4 ? 3 : idNum === 3 ? 4 : idNum;
    GeolocationCr.getCantones(idNum).then((res) => {
        try {
            const lista = res.data.map((item) => ({
                idCanton: item.idCanton,
                descripcion: item.descripcion,
            }));
            setCantones(lista);
        } catch (error) {
            console.error("Error al mapear cantones:", error);
            setCantones([]);
        }
    });
  }, [provinciaId]);

  
  useEffect(() => {
    if (!cantonId) {
      setDistritos([]);
      return;
    }

    GeolocationCr.getDistritos(cantonId).then((res) => {
        try {
            const lista = res.data.map((item) => ({
                idDistrito: item.idDistrito,
                descripcion: item.descripcion,
            }));
            setDistritos(lista);
        } catch (error) {
            console.error("Error al mapear distritos:", error);
            setDistritos([]);
        }
    });
  }, [cantonId]);

  return {
    provincias,
    cantones,
    distritos,

    provinciaId,
    cantonId,
    distritoId,

    setDistritoId,
    setProvinciaId,
    setCantonId,
  };
}
