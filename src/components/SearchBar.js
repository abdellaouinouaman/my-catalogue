import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = e => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    const style = {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0'
    };

    const inputStyle = {
        padding: '10px',
        width: '300px',
        borderRadius: '4px',
        border: '1px solid #ccc'
    };

    return (
        <div style={style}>
            <input
                type="text"
                placeholder="Rechercher un produit..."
                value={query}
                onChange={handleChange}
                style={inputStyle}
            />
        </div>
    );
};

export default SearchBar;