'use client';
import Image from 'next/image';
import classes from './academicWriting.module.scss';
import IconButton from '../shared components/Buttons/Icon/IconButton';
import { useEffect, useState, useCallback } from 'react';
import { mockData } from './mockData';
import ScrollToTopButton from '../shared components/Buttons/ScrollToTop/ScrollToTopButton';
import NoSsr from '../NoSSR';

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

const Toolbar = () => {
  return (
    <div id="toolbar">
      <div id="year">
        <div>Year</div>
        <select>
          <option>1990-1999</option>
        </select>
      </div>

      <div id="sort">
        <div>Sort by</div>
        <div>
          <button>old</button>
          <button>new</button>
        </div>
      </div>
    </div>
  );
};

const AcademicWriting = () => {
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
          <Toolbar />
          <div className="index">
            {mockData.map((itemData, i) => {
              return <Item key={i} itemData={itemData} />;
            })}
          </div>
        </div>
        <ScrollToTopButton />
      </div>
    </NoSsr>
  );
};

export default AcademicWriting;
