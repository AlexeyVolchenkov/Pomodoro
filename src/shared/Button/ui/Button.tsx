import type {FC, ReactNode} from "react";
import styles from './Button.module.scss'
import {colorMap} from "@shared/utils/mapping.ts";


interface ButtonProps {
  children?: ReactNode;
  icon?: string;
  color: 'lime' | 'cyan' | 'zinc-100';
  onClick: () => void;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    icon,
    color,
    onClick,
  } = props

  if (icon) {
    return (
      <button
        className={styles.iconButton}
        onClick={onClick}
      >
        <img
          width={34}
          height={34}
          src={icon}
          alt="text"
        />
      </button>
    )
  }

  return (
    <button
      style={{
        '--color-button': colorMap[color],
      }}
      className={styles.contentButton}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button
