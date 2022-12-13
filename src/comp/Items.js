import React from 'react';
import Header from './Header';
import { NavLink } from "react-router-dom";

export default function Items(props) {
    const {books, filterText, setFilterText, filterType, setFilterType} = props;

    return (
        <>
            <Header filterText={filterText} setFilterText={setFilterText} filterType={filterType} setFilterType={setFilterType} />
                <div className='Catalog__Items'>
                    {books.map(item => 
                        <NavLink to={`/book/${item.id}`}>
                            <div key={item.id} className='Book__Container'>
                                <img alt={item.title}
                                    src={
                                        item.img ?? "https://eurostil.su/wp-content/themes/evrostyle/img/noimg.png"
                                    } />
                                <h3>{item.title}</h3>
                                <div className='Book__Caption'>
                                    <span>Автор: {item.autor}</span>
                                    <span>Жанр: {item.type}</span>
                                </div>
                            </div>
                        </NavLink>
                    )}
                </div>
        </>
    );
}
