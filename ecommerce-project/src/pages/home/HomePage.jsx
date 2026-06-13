import axios from 'axios';
import { useEffect, useState} from 'react';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';

import './Homepage.css';





export function HomePage({ cart, loadCart }) {
    const[products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    



    useEffect(() => {
        const getHomeData = async () => {
            const response = await axios.get('https://ecommerce-r441.onrender.com/api/products');
            setProducts(response.data);
            setFilteredProducts(response.data);
        };
        

        getHomeData();
    }, []); 




    return (

        <>

            <Header cart={cart} products={products} setFilteredProducts={setFilteredProducts} />
            <title>Ecommerce Project</title>
            <div className="home-page">
                <ProductsGrid products={filteredProducts} loadCart={loadCart} />
            </div>
        </>

    );

}