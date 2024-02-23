import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../App.css"

function NYT() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
            )
            // setBooks(res.data.results.books)
            setBooks(res.data.results.books)
            console.log(res.data.results.books)
        }
        fetchAPI()
    }, [])


  return (
    <div className='book__container'>
      <div className='books__map'>
        {books.map((book) => {
            const {title, author, description, book_image} = book
            return (
                <div className='exact__div--book'>
                <h3 className='title'>{title}</h3>
                <p className='desc'>{description}</p>
                <p className='author'>written by: {author}</p>
                <img src={book_image} alt="" />
                </div>
            )
        })}
      </div>

    </div>
  )
}

export default NYT