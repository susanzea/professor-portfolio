import Image from 'next/image';

const BookDetails = ({ selectedBook }) => {
  return (
    <div id="book-details">
      <Image
        className="cover"
        src={selectedBook.image}
        alt={'photo of book cover'}
        height={500}
        width={350}
        style={{ objectFit: 'cover' }}
      />
      <div className="text">
        <h2>{selectedBook.title}</h2>
        <p>{selectedBook.description}</p>
      </div>
    </div>
  );
};

export default BookDetails;
