import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';


export default function Book() {
    const params = useParams();
    const [book, setBook] = useState(null);
    
    useEffect(() => {
        fetch(`http://localhost:3001/books?id=${params.id}`).
        then(response => response.json())
        .then((response) => {
            setBook(response[0])
        })
    }, []);

    return (
    <>
        {book && 
            <div key={book.id} className='Product__Wrapper'>
            <NavLink to={'/'}>
                <img 
                    className='BookImg' 
                    alt={book.title} 
                    src={
                        book.img ?? "https://eurostil.su/wp-content/themes/evrostyle/img/noimg.png"
                    }
                />
            </NavLink>
                <div className='Product__Caption'>
                    <h1>{book.title}</h1>
                    <span><b>Автор:</b> {book.autor}</span>
                    <span><b>Жанр:</b> {book.type}</span>
                    <p><b>Описание:</b> {book.caption}</p>
                </div>
            </div>
        }
    </>
    );
}
