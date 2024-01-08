import { IThumbnailCard } from "@data/interfaces/Card";
import styles from "./ThumbnailCard.module.css";
import { Heading } from "@components/Heading/Heading";
const ThumbnailCard = ({
  name,
  position,
  clientPhoto,
  company,
  handleClick,
  isSelected,
}: IThumbnailCard) => {
  return (
    <button
      className={`${styles.thumbnailCard} ${
        isSelected ? `${styles.selected}` : ""
      }`}
      onClick={() => handleClick({ name, clientPhoto, position, company })}
    >
      <header className={styles.imgWrapper}>
        <img src={clientPhoto} alt={name} />
      </header>
      <main className={styles.contentWrapper}>
        <Heading text={name} level={1} weight="bold" classList={styles.title} />
        <Heading
          text={`${position} at ${company}`}
          level={2}
          classList={styles.secondary}
        />
      </main>
    </button>
  );
};

export default ThumbnailCard;
