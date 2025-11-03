import classNames from 'classnames'
import { DeleteIcon, EditIcon } from '@/UI/icons'
import { CircularProgressBar } from '@/UI/components'
import styles from './style.module.scss'
import { Task } from '@/modules/data'
import { PriorotyLabels, StatusLabels } from '@/modules/types'

type TaskCardProps = {
  task: Task
  onDelete: () => void
  onEdit: () => void
}

export const TaskCard = ({ task, onDelete, onEdit }: TaskCardProps) => {
  return (
    <div className={styles['task-card']}>
      <div className="flex w-100">
        <span className={styles['task-title']}>Задача</span>
        <span className={styles['task']}>{task.title}</span>
      </div>
      <div className="flex">
        <span className={styles['priority-title']}>Приоритет</span>
        <span
          className={classNames(
            styles[`priority--${task.priority}`],
            styles.priority
          )}
        >
          {PriorotyLabels[task.priority]}
        </span>
      </div>
      <div className={styles['task-status-wrapper']}>
        <button
          className={classNames(
            styles[`status--${task.status}`],
            styles.status
          )}
        >
          {StatusLabels[task.status]}
        </button>
      </div>
      <div className={styles.progress}>
        <CircularProgressBar
          strokeWidth={2}
          sqSize={24}
          percentage={task.progress}
        />
      </div>
      <div className={styles.actions}>
        <EditIcon className="mr-20 cp" onClick={onEdit} />
        <DeleteIcon className="cp" onClick={onDelete} />
      </div>
    </div>
  )
}
