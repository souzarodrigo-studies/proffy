import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import back from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
    title: String;
    subTitle?: String;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={back} alt="voltar" />
                </Link>
                <img src={logo} alt="proffy" />
            </div>

            <div className="header-content">
                <strong>{title}</strong>
                {children}
            </div>
        </header>
    );
};

export default PageHeader;
