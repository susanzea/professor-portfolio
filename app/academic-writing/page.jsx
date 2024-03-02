'use client';
import Image from 'next/image';
import classes from './academicWriting.module.scss';
import IconButton from '../shared components/IconButton/iconButton';
import { useEffect, useState, useCallback } from 'react';
import NoSsr from '../NoSSR';

const mockData = [
  {
    title: 'Title',
    publicationYear: 2021,
    description:
      'Lorem ipsum dolor Lorem ipsum dolor s Lorem ipsum Lorem ipsum dolor s Lorem ipsum dolor s dolor s Lorem ipsum dolor s sfldklkmvlkmdflvmit  joidfjio ame',
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
      <div>
        <h2 className={classes.itemHeader}>
          <span>{itemData.title}</span>
          <span className={classes.pubYear}>
            &nbsp;- {itemData.publicationYear}
          </span>
        </h2>
        <p>{itemData.description}</p>
      </div>
      <IconButton
        className={classes.iconButton}
        icon="download"
        onClick={() => console.log('download')}
      />
    </div>
  );
};

const AcademicWriting = () => {
  let [nearBottom, setNearBottom] = useState(false);

  const onScroll = useCallback(
    (event) => {
      const { innerHeight, scrollY } = window;
      const distanceFromBottomOfPage =
        document.body.scrollHeight - innerHeight - scrollY;

      if (!nearBottom && distanceFromBottomOfPage < 150) {
        console.log('unstick');
        console.log(nearBottom);

        setNearBottom(true);
      }
    },
    [nearBottom, setNearBottom]
  );

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true });
    };
  });

  useEffect(() => {
    console.log('hi');
    const distanceToBottom =
      document.body.scrollHeight - window.innerHeight - window.scrollY;

    if (distanceToBottom < 100) setNearBottom = true;
  }, []);

  return (
    <NoSsr>
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
        <button className={classes.toTop}>
          <Image
            src="circle-chevron-up.svg"
            alt="up arrow"
            height={40}
            width={40}
          />
        </button>
      </div>
    </NoSsr>
  );
};

export default AcademicWriting;
