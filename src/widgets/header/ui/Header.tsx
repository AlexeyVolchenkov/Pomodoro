import styles from './Header.module.scss'
import Button from "@shared/Button";
import themeLogo from '@/assets/icons/header/theme.svg'
import githubLogo from '@/assets/icons/header/github.svg'
import translateLogo from '@/assets/icons/header/translate.svg'

const Header = () => {
  const handleClick = () => {
    console.log("click")
  }

  return (
    <header className={styles.header}>
      <div className={styles.blockText}>
        <h1 className={styles.title}>Помодоро</h1>
        <span className={styles.subtitle}>Управляйте своим временем волшебным образом!</span>
      </div>
      <div className={styles.buttons}>
        <Button icon={themeLogo} color={'zinc-100'} onClick={handleClick}></Button>
        <Button icon={githubLogo} color={'zinc-100'} onClick={handleClick}></Button>
        <Button icon={translateLogo} color={'zinc-100'} onClick={handleClick}></Button>
      </div>
    </header>
  )
}
export default Header
