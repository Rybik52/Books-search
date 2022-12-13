import React from 'react';


export default function Header(props) {
    const {filterText, setFilterText, filterType ,setFilterType} = props;

    return (
        <header>
            <input 
            type='text' 
            placeholder='Поиск...' 
            value={filterText} 
            onChange={(e) => setFilterText(e.target.value)}
            />
            <input
            type='text' 
            placeholder="Жанр..."
            value={filterType} 
            onChange={(e) => setFilterType(e.target.value)}
            />
        </header>
    );
}
