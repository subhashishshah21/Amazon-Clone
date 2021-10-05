import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

export default function Header() {
    const [{ basket }, dispact] = useStateValue();
    return (
        <div className='header'>
            <Link to="/">
                <img className="head-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon Logo" />
            </Link>
            <div className="header-search">
                <input type="text" className="header-search-bar" />
                <SearchIcon className="header-search-icon" />
            </div>
            <div className="header-navbar">
                <Link to="/login">
                    <div className="items">

                        <span className="header-line-one">Hello</span>
                        <span className="header-line-two">Sign In</span>

                    </div>
                </Link>
                <div className="items">
                    <span className="header-line-one">Return</span>
                    <span className="header-line-two">& Orders</span>

                </div>
                <div className="items">
                    <span className="header-line-one">Your</span>
                    <span className="header-line-two">Prime</span>
                </div>
            </div>
            <Link to="/checkout">
                <div className="header-cart-logo">
                    <ShoppingBasketIcon />
                    <span className="header-line-two basket-count">{basket?.length}</span>
                </div>
            </Link>
        </div>
    )
}
