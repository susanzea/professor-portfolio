import Image from 'next/image';
import classes from './iconButton.module.scss';

const icons = {
  hamburger: { src: '/hamburger.svg', alt: 'open nav links menu' },
  close: { src: '/xmark.svg', alt: 'close' },
};

const IconButton = ({
  className = null,
  icon = 'close', //hamburger
  onClick = () => {},
  size = 'default',
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
