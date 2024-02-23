import React, { useRef, useEffect } from "react";

function useClickAway(ref, onClickAway = () => alert("clicked outside")) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickAway();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function ClickAway(props) {
  const wrapperRef = useRef(null);
  useClickAway(wrapperRef, props.onClickAway);

  return <div ref={wrapperRef}>{props.children}</div>;
}

// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
