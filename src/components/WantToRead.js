import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types';

const WantToRead = ({ books, shelves, onChange, title, filter }) => {


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

WantToRead.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  shelves: PropTypes.object.isRequired
};

export default WantToRead;