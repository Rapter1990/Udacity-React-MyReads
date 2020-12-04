import React, { Component } from 'react'
import Read from './Read';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';

class BookShelf extends Component {

    render() {

        const { shelves, books, onChange } = this.props;

        const shelvesCondition = [
            {
                title: 'Currently Reading',
                shelf: 'currentlyReading',
            },
            {
                title: 'Want To Read',
                shelf: 'wantToRead',
            },
            {
                title: 'Read',
                shelf: 'read',
            },
        ];

        return (
            <div className="list-books-content">
                <div>
                <CurrentlyReading 
                    books={books}
                    title={shelvesCondition[0].title}
                    shelves = {shelves}
                    onChange = {onChange}
                    filter = {shelvesCondition[0].shelf}
                />
                <WantToRead 
                    books={books}
                    title = {shelvesCondition[1].title}
                    shelves = {shelves}
                    onChange = {onChange}
                    filter = {shelvesCondition[1].shelf}
                />
                <Read 
                    books={books}
                    title = {shelvesCondition[2].title}
                    shelves = {shelves}
                    onChange = {onChange}
                    filter = {shelvesCondition[2].shelf}
                /> 
                </div>
            </div>
        )
    }
}

export default BookShelf;