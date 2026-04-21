import styles from './Input.module.scss'

interface InputProps {
  placeholder: string;
  inputValue: string;
  setInputValue: (newValue: string) => void;
}

const Input = (props: InputProps) => {
  const {
    placeholder,
    inputValue,
    setInputValue,
  } = props

  return (
    <div
      className={styles.inputWrapper}
    >
      <input
        id="taskInput"
        name="taskName"
        className={styles.input}
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={(event) => setInputValue(event.target.value)}
      />
      {inputValue && (
        <button
          className={styles.inputButton}
          type="button"
          onClick={() => setInputValue("")}
        >
          x
        </button>
      )}
    </div>
  )
}
export default Input
