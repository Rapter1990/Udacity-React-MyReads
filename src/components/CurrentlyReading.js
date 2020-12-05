import React from 'react'
import Book from './Book'

const CurrentlyReading = ({ books, shelves, onChange, title, filter }) => {

  console.log(
    "books : " + books +
    "shelves : " + shelves + 
    "onChange : " + onChange +
    "title  : " + title +
    "filter : " + filter
  );

  const currentReading = books.filter((book) => {
    return book.shelf === filter
  })

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {currentReading.map((book) => (
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

export default CurrentlyReading;
