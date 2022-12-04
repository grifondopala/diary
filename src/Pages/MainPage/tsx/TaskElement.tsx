import * as React from 'react'
import {task} from "../../../store/taskReducer";

import '../css/TaskElement.css'

interface TaskElementProps{
    task: task,
    daySchedule: boolean,
}

function hexToRGB(hex: string, alpha: number) {
    const r = parseInt(hex.slice(1, 3), 16),
          g = parseInt(hex.slice(3, 5), 16),
          b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`
}

export function TaskElement(props: TaskElementProps){

    const [fullInformation, setFullInformation] = React.useState(false)

    return(
        <div className={fullInformation ? 'TaskElementDiv activate' : 'TaskElementDiv'} style={{backgroundColor: hexToRGB(props.task.color, 0.75)}}
             onClick={() => { if(props.daySchedule) setFullInformation(state => !state)}}>
            <div style={{backgroundColor: props.task.color, width: '10px'}}></div>
            <div>
                <p className={'nameTask'}>{props.task.name}</p>
                {fullInformation && (
                    <div>
                        <p>{props.task.description}</p>
                        <p>Категория: {props.task.category}</p>
                    </div>
                )}
                <p className={'timeTask'}>{props.task.timeBegin}-{props.task.timeEnd}</p>
            </div>
        </div>
    )

}