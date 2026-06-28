import {Cars} from "./types";

type CarProps = Readonly<{
    car: Cars;
}>;

export const CarCard = ({car}: CarProps) => {
    return (
        <article className='car-card'>
            <div>
                <section className='car-content'/>
                <h2>Car Details:</h2>
                <h3>ID {car.id}</h3>
                <p>Model: {car.model}</p>
                <p>Serial Number: {car.serialNumber}</p>
                <p>Manufacturer: {car.manufacturer}</p>
                <p>Year Of Manufacture: {car.yearOfManufacture}</p>
            </div>
            <div className='car-container'>
                <img src={car.image} alt={car.model} className={'car-logo'}/>
            </div>
        </article>
    )

};





