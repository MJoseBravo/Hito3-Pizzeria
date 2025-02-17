import React, { useState } from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import napolitana from '../assets/imgs/napolitana.png'
import española from '../assets/imgs/española.png'
import pepperoni from '../assets/imgs/pepperoni.png'
import pizzas from '../components/pizzas'


const Home = () => {
    const [totalPizzas, setTotalPizzas] = useState(pizzas)
    


    return (
        <div className="tarjetas-home">
            <Header />
            <div className="row mt-5 gap-5">
                {totalPizzas.map(pizza => (
                <CardPizza key={pizza.id} 
                img={pizza.img}
                name={pizza.name} 
                price={pizza.price}
                ingredientes={pizza.ingredients}
                />
                ))}
                
            </div>
        </div>
    )
}
export default Home