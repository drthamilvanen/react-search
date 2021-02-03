import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {books} from './books.js'
import Book from './Book'

function BookList(){
  return (
    <section className="bookList">
      {books.map((book) => {
        const { title, author, image } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}






ReactDOM.render(<BookList />, document.getElementById("root"));