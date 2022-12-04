import * as React from 'react'

import '../css/DaySchedule.css'
import {useDispatch, useSelector} from "react-redux";
import {GetDay, monthNames} from "../Scripts/DateScript";
import {changeSelectedDateAction, task, taskArray} from "../../../store/taskReducer";
import {TaskElement} from "./TaskElement";

export function DaySchedule(){

    const dispatch = useDispatch()

    const selectedDate: string = useSelector((state: any) => state.tasks.selectedDate);
    const daySchedule: undefined | Array<task> = useSelector((state: any) => state.tasks.tasks.find((el : taskArray) => el.date === selectedDate)?.tasks)

    const convertDateToString = (date: string) => {
        const day = date.split('-')
        return `${day[0]} ${monthNames[Number(day[1]) - 1]}, ${day[2]}`;
    }

    const changeDayDelay = (delay: number) => { dispatch(changeSelectedDateAction(GetDay(selectedDate, delay)))}

    return(
        <div id={'dayScheduleDiv'}>
            <div id={'selectedDayDiv'}>
                <h4 id={'selectedDay'}>{convertDateToString(selectedDate)}</h4>
                <div id={'changeSelectedDayDiv'}>
                    <button className={'changeSelectedDayBtn'} onClick={() => changeDayDelay(-1)}>L</button>
                    <button className={'changeSelectedDayBtn'} onClick={() => changeDayDelay(1)}>R</button>
                </div>
            </div>
            <div>
                {daySchedule?.map((el, index) => (
                    <TaskElement task={el} daySchedule={true} key={index}/>
                ))}
            </div>
        </div>
    )
}