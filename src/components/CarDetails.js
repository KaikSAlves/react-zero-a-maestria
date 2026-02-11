
const CarDetails = ({brand, km, color, newCar}) => {
    return (
       <p>Detalhes do carro: Marca: 
        {brand}, Km: {km}, Color: {color}, Carro novo? {newCar? "Sim" : "Não"}</p>
    );
};

export default CarDetails;