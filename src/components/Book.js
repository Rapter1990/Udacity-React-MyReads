import React, { Component } from 'react'

class Book extends Component {

    render() {

        const { book, shelves, onChange } = this.props;
        const { imageLinks, title, authors, shelf } = book;
        const imageURL = imageLinks ? imageLinks.thumbnail : "";


        console.log(
            "books : " + book +
            "shelves : " + shelves + 
            "onChange : " + onChange +
            "imageLinks : " + imageLinks +
            "title : " + title +
            "authors : " + authors +
            "shelf : " + shelf +
            "imageURL : " + imageURL
        );

        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128, height: 193,
                            backgroundImage: `url(${imageURL})`
                        }}></div>
                        <div className="book-shelf-changer">
                            <select value={shelf} onChange={onChange}>
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