import styles from './button.module.scss'

export default function Button() {
  return (
    <div className={styles.button}>
      <label>Button label</label>
      <button>Button text</button>
    </div>
  )
}
