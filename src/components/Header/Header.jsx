import React from 'react';
import {useSelector} from "react-redux";
import './Header.css'

const Header = () => {
    const currency = useSelector(store => store.currency)

    return (
        <header className="header">
            <div className="header-inner">
                <span><strong>EUR</strong> - {currency.currency?.EUR}</span>
                <span><strong>USD</strong> - {currency.currency?.USD}</span>
            </div>
        </header>
    );
};

export default Header;