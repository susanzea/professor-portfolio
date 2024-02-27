import Image from 'next/image';
import Button from '../shared components/Button/Button';
import classes from './home.module.scss';

const Home = () => {
  return (
    <div className={`${classes.home} page`}>
      <div className={`${classes.contentContainer} content-container`}>
        <Image
          src={'/headshot.jpeg'}
          alt={'photo of Aníbal González'}
          height={400}
          width={400}
          style={{ objectFit: 'cover', maxWidth: '60%' }}
        />
        <div className="right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Academic Writing
            Academic Writing
          </p>
          <div className={classes.actions}>
            <Button text={'Curriculum Vitae'} icon={'download'} />
            <Button text={'Faculty Page'} icon={'link'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
