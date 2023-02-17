import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css';

const Header: React.FC = () => {
    const currency = useSelector((store: any) => store.currency);

    return (
        <header className="header">
            <h2>Logo</h2>
            <div className="header-inner">
        <span>
          <strong>EUR</strong> - {currency.currency?.EUR}
        </span>
                <span>
          <strong>USD</strong> - {currency.currency?.USD}
        </span>
            </div>
        </header>
    );
};

export default Header;