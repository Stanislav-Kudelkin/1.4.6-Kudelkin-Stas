import classNames from 'classnames'
import { CloseIcon } from '@/UI/icons'
import { Button, Input, Modal } from '@/UI/components'
import styles from './style.module.scss'
import { useState } from 'react'
import { Task } from '@/modules/data'

type AddEditTaskModalProps = {
  mode: 'add' | 'edit'
  task?: Task | null
  onClose: () => void
  onAddTask: (title: string, priority: string) => void
  onEditTask: (id: string, title: string, priority: string) => void
}

export const AddEditTaskModal = ({
  onClose,
  onAddTask,
  mode,
  task,
  onEditTask,
}: AddEditTaskModalProps) => {
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [prioritySelection, setPrioritySelection] = useState('')

  return (
    <Modal>
      <form>
        <div className={styles['add-edit-modal']}>
          <div className="flx-between">
            <span className={styles['modal-title']}>
              {mode === 'edit' ? 'Редактировать задачу' : 'Добавить задачу'}
            </span>
            <CloseIcon className="cp" onClick={onClose} />
          </div>
          <Input
            label="Задача"
            placeholder="Введите текст.."
            onChange={(event) => {
              setNewTaskTitle(event.currentTarget.value)
            }}
            name="title"
            value={newTaskTitle}
          />
          <div className={styles['modal-priority']}>
            <span>Приоритет</span>
            <ul className={styles['priority-buttons']}>
              {['high', 'medium', 'low'].map((priority) => (
                <li
                  key={priority}
                  onClick={() => {
                    setPrioritySelection(priority)
                  }}
                  className={classNames(
                    prioritySelection === priority &&
                      styles[`${priority}-selected`],
                    styles[priority]
                  )}
                >
                  {priority}
                </li>
              ))}
            </ul>
          </div>
          <div className="flx-right mt-50">
            <Button
              title={mode === 'edit' ? 'Сохранить' : 'Добавить'}
              onClick={(event) => {
                event.preventDefault()
                if (newTaskTitle.trim() === '') {
                  return
                }
                if (mode === 'edit' && task) {
                  onEditTask(task.id, newTaskTitle, prioritySelection)
                } else {
                  onAddTask(newTaskTitle, prioritySelection)
                }
                onClose()
              }}
            />
          </div>
        </div>
      </form>
    </Modal>
  )
}
