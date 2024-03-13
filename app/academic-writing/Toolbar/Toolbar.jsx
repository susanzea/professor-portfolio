import { useEffect, useState } from 'react';
import CustomSelect from '../../shared components/CustomSelect/CustomSelect';
import './Toolbar.scss';
import { compare } from '../../../utils/sortHelpers';

const options = [
  { label: 'all', value: 'all' },
  { label: '2020-present', value: '2020-present' },
  { label: '2010-2019', value: '2010-2019' },
  { label: '2000-2009', value: '2000-2009' },
  { label: '1990-1999', value: '1990-1999' },
  { label: '1980-1989', value: '1980-1989' },
];

const Toolbar = ({ allArticles, setShownArticles }) => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedSort, setSelectedSort] = useState('desc');

  useEffect(() => {
    let _articles = allArticles;

    if (selectedYear !== 'all') {
      let [start, end] = selectedYear.split('-');
      if (end === 'present') end = new Date().getFullYear();

      _articles = _articles.filter((a) => {
        return start <= a.publicationYear && a.publicationYear <= end;
      });
    } else {
      _articles = _articles.filter((a) => {
        return a;
      });
    }

    const sorted = _articles.sort((a, b) =>
      compare(a.publicationYear, b.publicationYear, selectedSort)
    );

    setShownArticles(sorted);
  }, [selectedYear, selectedSort, allArticles, setShownArticles]);

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
