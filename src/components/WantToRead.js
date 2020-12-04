import React from 'react'
import Book from './Book'

const WantToRead = (books, shelves , onChange, title) => {


    const currentReading = books.filter((book) => {
      return book.shelf === "wantToRead"
    })
  
    return (
     <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {currentReading.map((book) => (
                <Book
                    book={book}
                    shelves={shelves}
                    onChange={onChange}
                />
            ))}

          </ol>
        </div>
      </div>
    )
  }
  
  export default WantToRead;