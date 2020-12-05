import React from 'react'
import Book from './Book'

const WantToRead = ({ books, shelves, onChange, title, filter }) => {

  console.log(
    "WantToRead | shelves : " + shelves + 
    "onChange : " + onChange
  );

  const wantToRead = books.filter((book) => {
    return book.shelf === filter
  })

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {wantToRead.map((book) => (
              <Book
                  key={book.id}
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