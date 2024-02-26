import Image from 'next/image';
import classes from './home.module.scss';

const Home = () => {
  return (
    <div className={`${classes.home} page`}>
      <Image
        src={'/headshot.jpeg'}
        alt={'photo of Aníbal González'}
        height={300}
        width={300}
        style={{ objectFit: 'cover', maxWidth: '60%' }}
      />
    </div>
  );
};

export default Home;
