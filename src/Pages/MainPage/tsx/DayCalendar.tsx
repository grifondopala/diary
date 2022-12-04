import * as React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeSelectedDateAction, task, taskArray} from "../../../store/taskReducer";
import {TaskElement} from "./TaskElement";

import '../css/DayCalendar.css'

interface DayCalendarProps{
    date: string
}


export function DayCalendar(props: DayCalendarProps){

    const dispatch = useDispatch()
    const state: undefined | Array<task> = useSelector((state: any) => state.tasks.tasks.find((el : taskArray) => el.date === props.date)?.tasks)

    function ListTasks(){
        if(state){
            return (
                <div className={'listTask'}>
                    {state.slice(0, 2).map((el, index) => (
                        <TaskElement task={el} daySchedule={false} key={index}></TaskElement>
                    ))}
                </div>
            )
        }
        return (
            <div className={'listTask'}>

            </div>
        )
    }

    return(
        <div className={'dayCalendarDiv'}>
            <ListTasks/>
            <div className={'scheduleBottomDiv'}>
                {state !== undefined && (
                    <label className={'oneMoreTaskLabel'} onClick={() => dispatch(changeSelectedDateAction(props.date))}>{state!.length > 2 ? `Ещё ${state!.length - 2} событие` : ''}</label>
                )}
                <label className={'dayNumberSchedule'}>{Number(props.date.split('-')[0])}</label>
            </div>
        </div>
    )

}