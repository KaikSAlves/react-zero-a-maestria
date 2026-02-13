
const CarDetails = ({keyCar, brand, km, color, newCar}) => {
    return (
       <p>Detalhes do carro: keyCar: {keyCar}, Marca:
         {brand}, Km: {km}, Color: {color}, Carro novo? {newCar? "Sim" : "Não"}</p>
    );
};

export default CarDetails;