import { AddIcon } from '@/UI/icons'
import { Button } from '@/UI/components'
import { TaskCard, DeleteModal, AddEditTaskModal } from '@/modules/components'
import { taskList } from '@/modules/data'
import styles from './style.module.scss'
import { useState } from 'react'
import { Task } from '@/modules/data'
import { Prioroty, Status } from '@/modules'

export const TodoList = () => {
  const [showAddEditModal, setShowAddEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [tasks, setTasks] = useState(taskList)
  const [deleteTask, setDeleteTask] = useState('')
  const [editTask, setEditTask] = useState<Task | null>(null)

  const createNewTask = (title: string, priority: string): Task => {
    return {
      id: Date.now().toString(),
      title,
      priority: priority as Prioroty,
      status: Status.TODO,
      progress: 0,
    }
  }

  const handleAddTask = (title: string, priority: string) => {
    const newTask = createNewTask(title, priority)
    setTasks([newTask, ...tasks])
  }

  const handleEditTask = (id: string, title: string, priority: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, title, priority: priority as Prioroty }
          : task
      )
    )
  }

  return (
    <>
      <div className={styles['page-wrapper']}>
        <div className={styles['top-title']}>
          <h2>Список задач</h2>
          <Button
            title="Добавить задачу"
            icon={<AddIcon />}
            onClick={() => {
              setEditTask(null)
              setShowAddEditModal(true)
            }}
          />
        </div>
        <div className={styles['task-container']}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={() => {
                setShowDeleteModal(true)
                setDeleteTask(task.id)
              }}
              onEdit={() => {
                setEditTask(task)
                setShowAddEditModal(true)
              }}
            />
          ))}
        </div>
      </div>

      {showAddEditModal && (
        <AddEditTaskModal
          onClose={() => setShowAddEditModal(false)}
          onAddTask={handleAddTask}
          onEditTask={handleEditTask}
          mode={editTask ? 'edit' : 'add'}
          task={editTask}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          onExit={() => setShowDeleteModal(false)}
          onRemoveTask={() => {
            setTasks(tasks.filter((task) => task.id !== deleteTask))
            setShowDeleteModal(false)
          }}
        />
      )}
    </>
  )
}
