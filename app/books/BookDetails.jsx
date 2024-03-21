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
        <h4>{selectedBook.title}</h4>
        <p>{selectedBook.description}</p>
      </div>
    </div>
  );
};

export default BookDetails;
