import { useEffect, useState } from 'react'

import styles from './MockToDo.module.css'
import { userData } from './userData'

export const MockToDo = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      new Promise((resolve) => {
        resolve({ json: () => userData })
      })
        .then((loadedData) => loadedData.json())
        .then((loadedUsers) => setUsers(loadedUsers))
        .finally(() => {
          setIsLoading(false)
        })
    }, 3000)
  }, [])

  return (
    <div>
      {isLoading ? (
        <p>Подождите, идет загрузка данных...</p>
      ) : (
        <div>
          <h1>Список дел</h1>
          <ol className={styles['todo-list']}>
            {users.map(({ id, title }) => (
              <li key={id} className={styles['todo-item']}>
                <div>{title}</div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  )
}
