import * as React from 'react'
import {addNewTaskAction, task} from "../../../store/taskReducer";
import {useDispatch} from "react-redux";

import '../css/AddEvent.css'

interface AddEventProps{
    show: boolean;
}

const dataReducer = (state: any, action: any) => {
    let text = (action.e.target as HTMLInputElement).value;
    switch (action.type){
        default:
            return state
        case 'name':
            return {...state, name: text};
        case 'description':
            return {...state, description: text}
        case 'date':
            return {...state, date: text}
        case 'category':
            return {...state, category: text}
        case 'timeBegin':
            return {...state, timeBegin: text}
        case 'timeEnd':
            return {...state, timeEnd: text}
        case 'color':
            return {...state, color: text}
    }
}

export function AddEvent(props: AddEventProps){

    const [data, dispatchData] = React.useReducer(dataReducer, {name: '', description: '', date: '', category: '', timeBegin: '', timeEnd: '', color: ''})

    const dispatch = useDispatch()

    const addNewTask = () => {
        const newTask: task = (({  date,...o }) => o)(data)
        dispatch(addNewTaskAction(newTask, data.date.split('-').reverse().join('-')))
    }

    return(
        <div id={'addEventMainDiv'} className={props.show ? 'active' : 'inactive'}>
            <h1 style={{textAlign: "center"}}>Добавить событие</h1>
            <div className="form-group mt-3">
                <label htmlFor="name">Название:</label>
                <input type="text" className="form-control" id="name" value={data.name} onInput={(e) => dispatchData({type: 'name', e})}/>
            </div>
            <div className="form-group mt-2">
                <label htmlFor="description">Описание:</label>
                <textarea className="form-control" rows={5} id="description" style={{resize: "none"}} value={data.description} onInput={(e) => dispatchData({type: 'description', e})}></textarea>
            </div>
            <div className="form-group mt-2">
                <label htmlFor="date">Дата:</label>
                <input type="date" className="form-control" id="date" value={data.date} onInput={(e) => dispatchData({type: 'date', e})}/>
            </div>
            <div className="form-group mt-2">
                <label htmlFor="category">Категория:</label>
                <input type="text" className="form-control" id="category" value={data.category} onInput={(e) => dispatchData({type: 'category', e})}/>
            </div>
            <div className="input-group mt-3">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Время:</span>
                    </div>
                    <input type="time" className="form-control" onInput={(e) => dispatchData({type: 'timeBegin', e})}/>
                    <input type="time" className="form-control" onInput={(e) => dispatchData({type: 'timeEnd', e})}/>
                </div>
            </div>
            <div className="form-group mt-2">
                <label htmlFor="color">Цвет:</label>
                <input type="color" className="form-control" id="color" style={{height: "40px"}} onInput={(e) => dispatchData({type: 'color', e})}/>
            </div>
            <button className={'btn btn-success'} id={'addEventBtnLocal'} onClick={addNewTask}>Добавить событие</button>
        </div>
    )

}