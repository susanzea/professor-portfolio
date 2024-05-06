import Link from 'next/link';
import Button from '../shared components/Buttons/Default/DefaultButton';
import Image from 'next/image';
import classes from './home.module.scss';

const Fiction = () => {
  return (
    <div>
      <div className="page">
        <div className={`${classes.contentContainer} content-container`}>
          <Image
            className={classes.img}
            src="/aniaram.jpg"
            alt={'photo of book cover'}
            height={500}
            width={350}
            style={{ objectFit: 'cover' }}
          />
          <div className="right">
            <p>
              Lo menos que imaginaba Daniel, el “astronauta perdido”, era que
              tras enamorarse de una mujer de una civilización más avanzada iba
              a acabar de náufrago en un planeta desolado. Y el alienígena
              Aqetilpateq no anticipaba que rescatar aquel náufrago lo llevaría
              a descubrir el valor de la amistad humana. Menos aún pensaban los
              tripulantes de la nave Curiosidad que en su viaje al centro de la
              galaxia tendrían el primer contacto con una civilización de Nivel
              Cinco. Novela pastoril en el cosmos, relato de aventuras,
              vagabundeo galáctico en el tiempo y el espacio, Aniaram narra una
              fábula sobre la vastedad del universo y la tenacidad del amor.
              Aníbal González (Puerto Rico, 1956) es Profesor de Literatura
              Hispanoamericana Moderna de una de las grandes universidades del
              planeta Tierra. Es astrónomo aficionado, y cuando no está
              explicando a Bolaño, Borges o Samanta Schweblin en el salón de
              clase, le gusta irse de noche a un campo abierto a ver caer los
              meteoritos.
            </p>
            <div className={classes.actions}>
              <Link
                target="_blank"
                href="https://www.amazon.com/Aniaram-Novela-Spanish-An%C3%ADbal-Gonz%C3%A1lez/dp/B0BQ9JB3JX/ref=sr_1_1?crid=BNIENV5Y672O&dib=eyJ2IjoiMSJ9.qpd0N_u3d8ePLyszo-XvxgcvAdO_HFctrYlHzx4O5QwEy4j0AOEGqfXHVwV3_ePl8m29ioYjA-KlmrHffIlZ9JYfy0R1jcyKwvLSXnbq7JxKIO00UI4ANZLma9qJlsr2__QggHYny_McByMT8gBtijU3IggWGZoWZkIHuEzfFNhIfGZUwR44rxsjU4-o5xX2u3O9SNDMEFFH9RE_KLN51xH9OYJc24ua3gtvP1VLzwM.xHo19-sBaEd5wAki54drXWe75hGaq8dmvHiE0UNdOt8&dib_tag=se&keywords=aniaram+anibal+gonzalez&qid=1715020500&sprefix=aniaram+anibal+gonzalez%2Caps%2C96&sr=8-1"
                rel="noopener noreferrer"
              >
                <Button text={'Buy on Amazon'} icon={'link'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fiction;
