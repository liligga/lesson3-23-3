import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

const EditTodo = () => {
    const [title, setTitle] = useState()
    const dispatch = useDispatch()
    const {id} = useParams()
    const nav = useNavigate()

    const buttonClick = () => {
        dispatch({
            type: 'EDIT_TODOS',
            payload: {
                id: Number(id),
                title: title
            }
        })
        // nav(-1)
    }

    return (
        <div>
            <input type="text" placeholder="title" 
            value={title} 
            onChange={e => setTitle(e.target.value)}/>
            <button onClick={buttonClick}>Изменить</button>
        </div>
    )
}
export default EditTodo