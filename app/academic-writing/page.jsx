'use client';
import Image from 'next/image';
import classes from './academicWriting.module.scss';
import IconButton from '../shared components/IconButton/iconButton';

const mockData = [
  {
    title: 'Title',
    publicationYear: 2021,
    description: 'Lorem ipsum dolor sit ame',
  },
  {
    title: 'Title',
    publicationYear: 1990,
    description: 'Lorem ipsum dolor sit ame',
  },
  {
    title: 'Title',
    publicationYear: 1990,
    description: 'Lorem ipsum dolor sit ame',
  },
  {
    title: 'Title',
    publicationYear: 1989,
    description: 'Lorem ipsum dolor sit ame',
  },
  {
    title: 'Title',
    publicationYear: 2007,
    description: 'Lorem ipsum dolor sit ame',
  },
  {
    title: 'Title',
    publicationYear: 2012,
    description: 'Lorem ipsum dolor sit ame',
  },
  {
    title: 'Title',
    publicationYear: 1997,
    description: 'Lorem ipsum dolor sit ame',
  },
  {
    title: 'Title',
    publicationYear: 2001,
    description: 'Lorem ipsum dolor sit ame',
  },
  {
    title: 'Title',
    publicationYear: 1990,
    description: 'Lorem ipsum dolor sit ame',
  },
  {
    title: 'Title',
    publicationYear: 2020,
    description: 'Lorem ipsum dolor sit ame',
  },
  {
    title: 'Title',
    publicationYear: 1995,
    description: 'Lorem ipsum dolor sit ame',
  },
  {
    title: 'Title',
    publicationYear: 1990,
    description: 'Lorem ipsum dolor sit ame',
  },
  {
    title: 'Title',
    publicationYear: 1990,
    description: 'Lorem ipsum dolor sit ame',
  },
  {
    title: 'Title',
    publicationYear: 1990,
    description: 'Lorem ipsum dolor sit ame',
  },
  {
    title: 'Title',
    publicationYear: 2008,
    description: 'Lorem ipsum dolor sit ame',
  },
];

const Item = ({ itemData }) => {
  return (
    <div className={classes.item}>
      <h2 className={classes.itemHeader}>
        <span>{itemData.title}</span>
        <span className={classes.pubYear}>
          &nbsp;- {itemData.publicationYear}
        </span>
      </h2>
      <p>{itemData.description}</p>
      <IconButton icon="download" onClick={() => console.log('download')} />
    </div>
  );
};

const AcademicWriting = () => {
  return (
    <div className={`${classes.academicWriting} page`}>
      <div
        className={`${classes.header} header`}
        style={{ width: '101vw', position: 'absolute' }}
      >
        <Image
          alt="A bookshelf with a picture of Aníbal, a statuette of the letter 'A' and books."
          src="/bookshelf.jpeg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={`${classes.contentContainer} content-container`}>
        <div className="index">
          {mockData.map((itemData, i) => {
            return <Item key={i} itemData={itemData} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AcademicWriting;
