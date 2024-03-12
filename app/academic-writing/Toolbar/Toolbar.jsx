import { useState } from 'react';
import CustomSelect from '../../shared components/CustomSelect/CustomSelect';
import './Toolbar.scss';

const options = [
  { label: 'all', value: 'all' },
  { label: '2020-present', value: '2020-present' },
  { label: '2010-2019', value: '2010-2019' },
  { label: '2000-2009', value: '2000-2009' },
  { label: '1990-1999', value: '1990-1999' },
  { label: '1980-1989', value: '1980-1989' },
];

const Toolbar = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedSort, setSelectedSort] = useState('old');
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
            className={selectedSort === 'new' ? 'selected' : null}
            onClick={() => setSelectedSort('new')}
          >
            new
          </button>
          <button
            id="old"
            className={selectedSort === 'old' ? 'selected' : null}
            onClick={() => setSelectedSort('old')}
          >
            old
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
