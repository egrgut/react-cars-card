import {CarCard} from "./CarCard";
import {data} from "./data";

export const App = () => {
    return (
        <main className='page'>
            <header className='page-header'>
                {/*<p className='page-label'>React + TypeScript</p>*/}
                <h1>Cars Catalogue</h1>
                <p className='page-intro'>Car Information</p>
            </header>
        <div>
            {data.map((car)=>(
                <CarCard
                    key={car.id}
                    car={car}/>
            ))}
        </div>
            <footer className='page-footer'>
                <p>Homework 26 - React</p>
            </footer>
        </main>
    );

};


