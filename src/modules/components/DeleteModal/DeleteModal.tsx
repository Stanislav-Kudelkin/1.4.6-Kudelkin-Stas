import { Button, Modal } from '@/UI/components'
import styles from './style.module.scss'

type deleteModalProps = {
  onExit: () => void
  onRemoveTask: () => void
}

export const DeleteModal = ({ onExit, onRemoveTask }: deleteModalProps) => {
  return (
    <Modal>
      <div className={styles['delete-modal']}>
        <p>Точно удалить задачу?</p>
        <div className={styles['delete-modal__actions']}>
          <Button title="Удалить" onClick={onRemoveTask} />
          <Button title="Выйти" outline onClick={onExit} />
        </div>
      </div>
    </Modal>
  )
}
