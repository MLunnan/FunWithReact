import React, { useState } from 'react'
import './App.css'
import { Product } from './components/export'
import data from './data.json'

function App() {
    const [itemsBought, setItemsBought] = useState(0)

    const onBuyItem = (clicks: number) => {
        const totalItemsBought = itemsBought + clicks
        setItemsBought(totalItemsBought)
    }
    return (
        <div className="App">
            <h2>My React ts App</h2>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {data.map((item) => (
                    <Product
                        imgSrc={item.imgSrc}
                        name={item.name}
                        description={item.description}
                    />
                ))}
                <Product
                    imgSrc={data[0].imgSrc}
                    name={data[0].name}
                    description={data[0].description}
                    buttonText={'buy'}
                />
            </div>
            <div>Items bought: {itemsBought}</div>
        </div>
    )
}

export default App
