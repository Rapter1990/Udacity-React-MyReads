import React from 'react'
import Book from './Book'

const Read = ({ books, shelves, onChange, title, filter }) => {

  console.log(
    "Read | shelves : " , shelves , 
    "onChange : " , onChange
  );

  const readBook = books.filter((book) => {
    return book.shelf === filter
  })

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {readBook.map((book) => (
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

export default Read;