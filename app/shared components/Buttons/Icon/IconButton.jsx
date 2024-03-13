import Image from 'next/image';
import classes from './iconButton.module.scss';

const icons = {
  hamburger: { src: '/hamburger.svg', alt: 'open nav links menu' },
  close: { src: '/xmark.svg', alt: 'close' },
  download: { src: '/file-arrow-down.svg', alt: 'download file' },
};

const IconButton = ({
  className = null,
  icon = 'close', //close, hamburger, download
  onClick = () => {},
}) => {
  const { src, alt } = icons[icon];

  return (
    <button
      className={`${classes.button} ${classes[icon]} ${className}`}
      onClick={onClick}
    >
      <Image src={src} alt={alt} height={25} width={25} />
    </button>
  );
};

export default IconButton;
