
const CarDetails = ({brand, km, color, newCar}) => {
    return (
        <div>
            <h1>
                Detalhes do carro:
            </h1>
            <ul>
                <li>Marca: {brand}</li>
                <li>Km: {km}</li>
                <li>Cor: {color}</li>
            </ul>
            {newCar && <p>Novo!</p>}
            {!newCar && <p>Antigo!</p>}
        </div>
    );
};

export default CarDetails;