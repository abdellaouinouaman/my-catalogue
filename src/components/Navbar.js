import React from 'react';

const Navbar = () => {
    const style = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#007BFF',
        color: 'white',
        padding: '10px 20px'
    };

    const ulStyle = { display: 'flex', listStyle: 'none', gap: '20px', margin: 0 };
    const liStyle = { cursor: 'pointer' };

    return (
        <nav style={style}>
            <h2>Catalogue HSE</h2>
            <ul style={ulStyle}>
                <li style={liStyle}>Accueil</li>
                <li style={liStyle}>Produits</li>
                <li style={liStyle}>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;