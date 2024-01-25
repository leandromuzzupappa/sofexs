import { Button } from "@components/Button/Button";
import { Text } from "@components/Text/Text";
import { IconNames } from "@data/interfaces/Icons";
import styles from "./ProjectsCard.module.css";
import { IProjectsCardProps } from "@data/interfaces/Card";
const ProjectsCard = ({
  projectTitle,
  projectDescription,
  projectUrl,
  projectInfoUrl,
  projectPictureUrl,
  carDirection,
}: IProjectsCardProps) => {
  const isReversed = carDirection === "reversed";

  return (
    <article className={styles.projectsCard}>
      <div
        className={`${styles.cardContainer} ${
          isReversed ? styles.reversed : styles.normal
        }`}
      >
        <div className={`${styles.infoWrapper}`}>
          <Text
            text={projectTitle}
            align={"left"}
            classList={styles.title}
            color={"black"}
            weight={"bold"}
          />
          <Text
            text={projectDescription}
            align={"left"}
            classList={styles.secondary}
            color={"black"}
          />
          <div className={styles.actionButtons}>
            <Button
              text={"Ver más"}
              color={"black"}
              icon={IconNames.RIGHTARROW}
              iconPosition={"right"}
              href={projectUrl}
              variant={"filled"}
              classList={`${styles.btnPrimary} ${styles.desktop}`}
            />
            <Button
              text={"Ver"}
              color={"black"}
              icon={IconNames.RIGHTARROW}
              iconPosition={"right"}
              href={projectUrl}
              variant={"filled"}
              classList={`${styles.btnPrimary} ${styles.mobile}`}
            />
            <Button
              text={"ir a la web"}
              color={"black"}
              href={projectInfoUrl}
              variant={"outlined"}
              classList={styles.btnSecondary}
            />
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src={projectPictureUrl}
            alt={projectTitle}
            title={projectTitle}
          />
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;
