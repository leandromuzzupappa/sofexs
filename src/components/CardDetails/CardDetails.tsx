import { ICardDetails } from "@data/interfaces/Card";
import styles from "./CardDetails.module.css";
import { Text } from "@components/Text/Text";
import { Heading } from "@components/Heading/Heading";
const CardDetails = ({
  logo,
  company,
  quote,
  feedback,
  name,
  position,
}: ICardDetails) => {
  return (
    <article className={styles.cardDetails}>
      <header className={styles.imgWrapper}>
        <img src={logo} alt={company} />
      </header>
      <main className={styles.content}>
        <blockquote className={styles.quote}>&quot;{quote}&quot;</blockquote>
        <Text text={feedback} weight={"regular"} classList={styles.text} />
        <div className={styles.clientInfo}>
          <Heading
            text={name}
            level={1}
            weight={"bold"}
            classList={styles.title}
          />
          <Heading
            text={`${position} at ${company}`}
            level={2}
            classList={styles.secondary}
          />
        </div>
      </main>
    </article>
  );
};
export default CardDetails;
