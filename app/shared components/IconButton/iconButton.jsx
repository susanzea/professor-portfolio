import Image from 'next/image';
import classes from './iconButton.module.scss';

const icons = {
  hamburger: { src: '/hamburger.svg', alt: 'open nav links menu' },
};

const IconButton = ({
  className,
  icon = 'close', //hamburger
  onClick = () => {},
  size = 'default',
}) => {
  const { src, alt } = icons[icon];
  console.log(className);

  return (
    <button className={`${classes.button} ${className}`} onClick={onClick}>
      <Image src={src} alt={alt} height={25} width={25} />
    </button>
  );
};

export default IconButton;
