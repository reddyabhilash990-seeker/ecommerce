import { Link } from 'react-router';
import './header.css';
import { useState } from 'react';

export function Header({ cart = [], products = [], setFilteredProducts }) {
    let totalQuantity = 0;

    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;

    });
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredProducts(filtered);
    };








    return (

        <div className="header">
            <div className="left-section">
                <Link to="/" className="header-link" onClick={() => setFilteredProducts(products)}>
                    <img className="logo"
                        src='/images/house.png' alt="logo" />
                </Link>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }} />

                <button className="search-button"     onClick={handleSearch}>
                    <img className="search-icon" src="images/icons/search-icon.png" />
                </button>
            </div>

            <div className="right-section">
                <Link className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </Link>

                <Link className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src="images/icons/cart-icon.png" />
                    <div className="cart-quantity">{totalQuantity}</div>
                    <div className="cart-text">Cart</div>
                </Link>
            </div>
        </div>
    );
}