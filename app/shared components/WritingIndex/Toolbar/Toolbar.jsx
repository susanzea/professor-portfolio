import { useEffect, useState } from 'react';
import { compare } from '../../../../utils/sortHelpers';
import CustomSelect from '../../CustomSelect/CustomSelect';
import './Toolbar.scss';

const options = [
  { label: 'all', value: 'all' },
  { label: '2020-present', value: '2020-present' },
  { label: '2010-2019', value: '2010-2019' },
  { label: '2000-2009', value: '2000-2009' },
  { label: '1990-1999', value: '1990-1999' },
  { label: '1980-1989', value: '1980-1989' },
];

const Toolbar = ({ allItems, setShownItems }) => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedSort, setSelectedSort] = useState('desc');

  useEffect(() => {
    let _items = allItems;

    if (selectedYear !== 'all') {
      let [start, end] = selectedYear.split('-');
      if (end === 'present') end = new Date().getFullYear();

      _items = _items.filter((a) => {
        return start <= a.publicationYear && a.publicationYear <= end;
      });
    } else {
      _items = _items.filter((a) => {
        return a;
      });
    }

    const sorted = _items.sort((a, b) =>
      compare(a.publicationYear, b.publicationYear, selectedSort)
    );

    setShownItems(sorted);
  }, [selectedYear, selectedSort, allItems, setShownItems]);

  return (
    <div className="academic-writing-toolbar">
      <div id="year">
        <div className="label">Year</div>
        <CustomSelect
          options={options}
          value={selectedYear}
          onChange={setSelectedYear}
        />
      </div>

      <div id="sort">
        <div className="label">Sort by</div>
        <div>
          <button
            id="new"
            className={selectedSort === 'desc' ? 'selected' : null}
            onClick={() => setSelectedSort('desc')}
          >
            new
          </button>
          <button
            id="old"
            className={selectedSort === 'asc' ? 'selected' : null}
            onClick={() => setSelectedSort('asc')}
          >
            old
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
