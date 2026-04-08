import styles from './Header.module.scss'
import Button from "@shared/Button";
import themeLogo from '@/assets/icons/header/theme.svg'
import githubLogo from '@/assets/icons/header/github.svg'
import translateLogo from '@/assets/icons/header/translate.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.blockText}>
        <h1 className={styles.title}>Помодоро</h1>
        <span className={styles.subtitle}>Управляйте своим временем волшебным образом!</span>
      </div>
      <div className={styles.buttons}>
        <Button icon={themeLogo}></Button>
        <Button icon={githubLogo}></Button>
        <Button icon={translateLogo}></Button>
      </div>
    </header>
  )
}
export default Header
