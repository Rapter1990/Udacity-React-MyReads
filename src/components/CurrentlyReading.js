import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types';

const CurrentlyReading = ({ books, shelves, onChange, title, filter }) => {

  console.log(
    "CurrentlyReading | shelves : " , shelves , 
    "onChange : " , onChange
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

CurrentlyReading.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  flter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  shelves: PropTypes.object.isRequired
};

export default CurrentlyReading;
