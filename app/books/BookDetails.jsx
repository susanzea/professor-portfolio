/* eslint-disable @next/next/no-img-element */

const BookDetails = ({ selectedBook }) => {
  return (
    <div id="book-details">
      <img
        className="cover"
        alt={'photo of book cover'}
        src={selectedBook.image}
      />

      <div className="text">
        <h2>{selectedBook.title}</h2>
        <span>{selectedBook.description}</span>
      </div>
    </div>
  );
};

export default BookDetails;
