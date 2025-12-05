class GeolocationCr {
    async getProvincia(){
        const response = await fetch('https://api-geo-cr.vercel.app/provincias');
        const data = await response.json();
        console.log(data);
        return data;
    }


    async getCantones(provinciaId){
        const response = await fetch(`https://api-geo-cr.vercel.app/provincias/${provinciaId}/cantones`);
        const data = await response.json();
        console.log(data);
        return data;
    }

    async getDistritos(cantonId){
        const response = await fetch(`https://api-geo-cr.vercel.app/cantones/${cantonId}/distritos`);
        const data = await response.json();
        console.log(data);
        return data;
    }
}
export default new GeolocationCr();