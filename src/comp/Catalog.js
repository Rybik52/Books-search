import React, { useEffect, useState } from 'react';
import Items from './Items';

export default function Catalog() {
    const [filterText, setFilterText] = useState('');
    const [filterType, setFilterType] = useState('');
    const [books, setBooks] = useState([]);
    const [filtredBooks, setFiltredBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/books')
        .then(response => response.json())
        .then(data => {
            setFiltredBooks(data)
            setBooks(data)
        });
    }, []);

    useEffect(() =>{
        if (!filterText) {
            setFiltredBooks(books)
            return
        }
        setFiltredBooks(books.filter((el) => el.title.toLowerCase().includes(filterText)))
    }, [filterText]);

    useEffect(() =>{
        if (!filterType) {
            setFiltredBooks(books)
            return
        }
        setFiltredBooks(books.filter((el) => el.type.toLowerCase().includes(filterType)))
    }, [filterType]);

    return ( 
            <div className='Catalog__Container'>
                <Items books={filtredBooks} filterType={filterType} setFilterType={setFilterType} filterText={filterText} setFilterText={setFilterText} />
            </div>
    );
}
