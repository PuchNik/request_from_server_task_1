import { useEffect, useState } from 'react'
import {userData} from './userData'


export const MockToDo = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        new Promise((resolve) => {
            resolve({json: () => userData})
        })
        .then((loadedData) => loadedData.json())
        .then((loadedUsers) => setUsers(loadedUsers))
    }, [])
    return (
        <div>
            <h1>Список Пользователей</h1>
            <ul>
                {users.map(({id, title, completed}) => (
                    <li key={id}>
                        <div>Закголовок: {title}</div>
                        <div>Состояние: {completed}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}