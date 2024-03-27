'use client';
import { useState } from 'react';
import IconButton from '../Buttons/Icon/IconButton';
import Toolbar from './Toolbar/Toolbar';
import ScrollToTopButton from '../Buttons/ScrollToTop/ScrollToTopButton';
import NoSsr from '../../NoSsr';
import './_WritingIndex.scss';

const Item = ({ itemData }) => {
  return (
    <div className="item">
      <div>
        <h2 className="header">
          <span>{itemData.title}</span>
          <span className="pub-year">&nbsp;- {itemData.publicationYear}</span>
        </h2>
        <p>{itemData.description}</p>
      </div>
      <IconButton
        className="icon-button"
        icon="download"
        onClick={() => console.log('download')}
      />
    </div>
  );
};

const WritingIndex = ({
  allItems,
  includeToolbar = true,
  includeScrollToTop = true,
}) => {
  const [shownItems, setShownItems] = useState(allItems);

  return (
    <>
      <NoSsr>
        <div className="writing-index-container">
          {includeToolbar && (
            <Toolbar allItems={allItems} setShownItems={setShownItems} />
          )}
          <div className="index">
            {shownItems.map((itemData, i) => {
              return <Item key={i} itemData={itemData} />;
            })}
          </div>
        </div>
      </NoSsr>

      {includeScrollToTop && <ScrollToTopButton />}
    </>
  );
};

export default WritingIndex;
