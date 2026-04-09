import styles from './MainCard.module.scss'
import type {ReactNode} from "react";

interface MainCardProps {
  children: ReactNode;
  title: string;
  subTitle: string;
}

const MainCard = (props: MainCardProps) => {
  const {
    children,
    title,
    subTitle,
  } = props

  return (
    <div className={styles.mainCard}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <h3>{subTitle}</h3>
      </div>
      <div className={styles.main}>
        {children}
      </div>
    </div>
  )
}
export default MainCard
