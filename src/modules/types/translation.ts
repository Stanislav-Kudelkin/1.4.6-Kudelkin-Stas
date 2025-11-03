import { Prioroty, Status } from './types'

export const PriorotyLabels = {
  [Prioroty.LOW]: 'Низкий',
  [Prioroty.MEDIUM]: 'Средний',
  [Prioroty.HIGH]: 'Высокий',
}

export const StatusLabels = {
  [Status.TODO]: 'Сделать',
  [Status.PROGRESS]: 'В прогрессе',
  [Status.DONE]: 'Сделано',
}
