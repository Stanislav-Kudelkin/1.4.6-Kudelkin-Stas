import styles from './style.module.scss'

export const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.modal}>
      <div className={styles['modal-content']}>{children}</div>
    </div>
  )
}
