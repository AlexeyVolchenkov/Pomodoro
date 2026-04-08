import type {FC} from "react";
import styles from './Button.module.scss'


interface ButtonProps {
  icon: string;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    icon,
  } = props

  return (
    <button className={styles.button}>
      <img
        width={34}
        height={34}
        src={icon}
        alt="text"
      />
    </button>
  )
}
export default Button
