import './Toolbar.scss';
import CustomSelect from '../../shared components/CustomSelect/CustomSelect';

const options = [
  { label: '1990-1999', value: '1990-1999' },
  { label: '2000-2009', value: '2000-2009' },
];

const Toolbar = () => {
  return (
    <div className="academic-writing-toolbar">
      <div className="year">
        <div className="label">Year</div>
        <CustomSelect options={options} value={'2000-2009'} />
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
