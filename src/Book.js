import React from 'react';
const Book = ({ title, author, image }) => {
  // const { title, author, image } = props;
  <h2>{title}</h2>;
  const buttonClick = (e) => {
    alert("Welcome");
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={buttonClick}>
        Submit
      </button>
    </article>
  );
};
export default Book;