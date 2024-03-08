import './CustomSelect.scss';
import { useState, useCallback, useRef, useEffect } from 'react';

const isSafari = () => {
  const chromeInAgent = navigator.userAgent.indexOf('Chrome') > -1;
  const safariInAgent = navigator.userAgent.indexOf('Safari') > -1;
  return safariInAgent && !chromeInAgent;
};

const registerOpenDropdownHandlers = ({
  options,
  optionsLength,
  activeIndex,
  setActiveIndex,
  select,
  namespace,
}) => {
  const keyDownCallback = (e) => {
    e.preventDefault();
    console.log(e);
    switch (e.key) {
      case 'Up':
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex(activeIndex <= 0 ? optionsLength - 1 : activeIndex - 1);
        return;
      case 'Down':
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex(activeIndex + 1 === optionsLength ? 0 : activeIndex + 1);
        return;
      case 'Enter':
      case ' ': // Space
        e.preventDefault();
        select(options[activeIndex].value);
        return;
      case 'Esc':
      case 'Escape':
        e.preventDefault();
        select(false);
        return;
      case 'PageUp':
      case 'Home':
        e.preventDefault();
        setActiveIndex(0);
        return;
      case 'PageDown':
      case 'End':
        e.preventDefault();
        setActiveIndex(options.length - 1);
        return;
    }
  };

  const onClick = (e) => {
    const matchesNamespace = (e) =>
      e.dataset && e.dataset.namespace === namespace + '-dropdown-root';
    if (!e.composedPath().find(matchesNamespace)) {
      // Did not found in the path, closing
      e.preventDefault();
      select(false);
    }
  };

  document.addEventListener('keydown', keyDownCallback);
  document.addEventListener('click', onClick);
  return () => {
    document.removeEventListener('keydown', keyDownCallback);
    document.removeEventListener('click', onClick);
  };
};

const registerClosedDropdownHandlers = ({ setIsDropdownOpen }) => {
  const keyDownCallback = (e) => {
    switch (e.key) {
      case 'Up':
      case 'ArrowUp':
      case 'Down':
      case 'ArrowDown':
      case ' ': // Space
      case 'Enter':
        e.preventDefault();
        setIsDropdownOpen(true);
    }
  };
  document.addEventListener('keydown', keyDownCallback);
  return () => {
    document.removeEventListener('keydown', keyDownCallback);
  };
};

const useAccessibleDropdown = ({ options, value, onChange, namespace }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const listRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFocus, setIsFocus] = useState(false);

  const select = useCallback(
    (value) => {
      if (value) {
        console.log(`selected value: ${value}`);
        onChange && onChange(value);
      }
      setIsDropdownOpen(false);
    },
    [onChange]
  );

  useEffect(() => {
    if (isDropdownOpen) {
      console.log('dropdown open');
      return registerOpenDropdownHandlers({
        options,
        activeIndex,
        setActiveIndex,
        optionsLength: options.length,
        select,
        namespace,
      });
    } else {
      return isFocus
        ? registerClosedDropdownHandlers({
            setIsDropdownOpen,
          })
        : undefined;
    }
  }, [isDropdownOpen, activeIndex, isFocus, namespace, options.length, select]);

  return {
    isDropdownOpen,
    setIsDropdownOpen,
    activeIndex,
    setActiveIndex,
    select,
    setIsFocus,
    listRef,
  };
};

const CustomSelect = ({
  options,
  value,
  namespace = 'default_select_namespace',
  onChange,
  label,
}) => {
  const {
    isDropdownOpen,
    setIsDropdownOpen,
    activeIndex,
    setActiveIndex,
    select,
    setIsFocus,
    dropdownRootRef,
    listRef,
  } = useAccessibleDropdown({ options, value, onChange, namespace });
  const chosen = options.find((o) => o.value === value);
  console.log(`chosen: ${JSON.stringify(chosen)}`);

  return (
    <>
      <label className="select-label" id={`${namespace}_label`}>
        {label}
      </label>
      <div
        className="select-container"
        data-namespace={`${namespace}-dropdown-root`}
      >
        <button
          className="select-button"
          label="label"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          role="combobox"
          aria-autocomplete="none"
          aria-label="Choose your favourite Ninjago character"
          aria-haspopup="listbox"
          aria-controls={`${namespace}_dropdown`}
          aria-expanded={isDropdownOpen}
          aria-activedescendant={`${namespace}_element_${value}`}
        >
          {console.log(chosen)}
          Selected: {chosen.label}
          <span className="chevron">▾</span>
        </button>
        <ul
          className="select-dropdown"
          ref={listRef}
          role="listbox"
          id={`${namespace}_dropdown`}
          tabIndex={-1}
        >
          {options.map(({ label, value: optionValue, tag }, index) => {
            return (
              <li
                key={optionValue}
                id={`${namespace}_element_${optionValue}`}
                aria-selected={index === activeIndex}
                role="option"
                onMouseOver={() => setActiveIndex(index)}
              >
                <label>
                  <input
                    type="radio"
                    name={`${namespace}_radio`}
                    value={optionValue}
                    className={
                      chosen.value === optionValue ? 'checked' : 'unchecked'
                    }
                    checked={chosen.value === optionValue}
                    onChange={() => select(optionValue)}
                  />
                  <span>{label}</span>
                  <div>
                    {tag && (
                      <span className="tag">
                        <span className="visuallyHidden">; Labeled:</span>
                        {tag}
                      </span>
                    )}
                  </div>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

// const options = [
//   {
//     value: 'kai',
//     label: 'Kai',
//     tag: 'Fire',
//   },
//   {
//     value: 'nya',
//     label: 'Nya',
//     tag: 'Water',
//   },
//   {
//     value: 'lloyd',
//     label: 'Lloyd',
//     tag: 'Life',
//   },
//   {
//     value: 'zane',
//     label: 'Zane',
//     tag: 'Ice',
//   },
//   {
//     value: 'cole',
//     label: 'Cole',
//     tag: 'Earth',
//   },
//   {
//     value: 'jay',
//     label: 'Jay',
//   },
//   {
//     value: 'garmadon',
//     label: 'Garmadon',
//   },
// ];

// const Wrapper = () => {
//   const [v, setV] = useState('lloyd');
//   return (
//     <CustomSelect
//       options={options}
//       value={v}
//       onChange={setV}
//       label="Pick your favourite Ninjago character: "
//     />
//   );
// };

export default CustomSelect;
