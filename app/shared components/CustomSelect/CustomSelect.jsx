import './CustomSelect.scss';

const CustomSelect = ({ options, value }) => {
  const selected = options.find((o) => o.value === value);

  return (
    <div className="select-container">
      <button className="select-button">Selected: {selected.label}</button>
      <ul className="select-dropdown">
        {options.map(({ label, value: optionValue }, i) => (
          <li key={i}>
            <label>
              <input type="radio" checked={value === optionValue} />
              {label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSelect;
