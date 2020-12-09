import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Book extends Component {

    render() {

        const { book, shelves, onChange} = this.props;
        const { imageLinks, title, authors, shelf } = book;
        const imageURL = imageLinks ? imageLinks.thumbnail : "";


        console.log(
            "Book | shelves : " + shelves + 
            "onChange : " + onChange
          );

        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128, height: 193,
                            backgroundImage: `url(${imageURL})`
                        }}>
                        <Link className="book-detail-link" to={`book/${book.id}`}></Link>    
                        </div>
                        <div className="book-shelf-changer">
                            <select value={shelf || 'none'} onChange={(e) => onChange(book, e)}> 
                                <option value="move" disabled>Move to...</option>
                                {Object.entries(shelves).map(([shelfKey, displayName], index) => (
                                <option key={index} value={shelfKey}>
                                    {displayName}
                                </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">
                        {authors ? authors.join(',') : 'No authors'}
                    </div>
                </div>
            </li>
        )
    }
}

export default Book;