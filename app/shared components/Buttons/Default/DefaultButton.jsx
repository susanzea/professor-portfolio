'use client';
import Image from 'next/image';
import classes from './DefaultButton.module.scss';

const icons = {
  download: { src: '/file-arrow-down.svg', alt: 'download file' },
  link: { src: '/chevron-right.svg', alt: 'arrow right link' },
};

const Button = ({
  text = 'add text',
  icon = null, // download, link
  onClick = () => null,
}) => {
  return (
    <button className={`${classes.button} btn`} onClick={onClick}>
      {icon && <div className="left"></div>}

      <span>{text}</span>
      {icon && (
        <Image
          src={icons[icon].src}
          alt={icons[icon].alt}
          height={20}
          width={20}
        />
      )}
    </button>
  );
};

export default Button;
