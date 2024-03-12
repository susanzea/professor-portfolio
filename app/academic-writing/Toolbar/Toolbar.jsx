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
  const [selectedValue, setSelectedValue] = useState('all');

  return (
    <div className="academic-writing-toolbar">
      <div className="year">
        <div className="label">Year</div>
        <CustomSelect
          options={options}
          value={selectedValue}
          onChange={setSelectedValue}
        />
      </div>

      <div id="sort">
        <div className="label">Sort by</div>
        <div>
          <button>new</button>
          <button>old</button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
