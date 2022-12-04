const taskDefault = {
    tasks: Array<taskArray>(),
    selectedDate: "",
}

export interface taskArray{
    date: string;
    tasks: Array<task>;
}

export interface task{
    name: string;
    description: string;
    category: string;
    timeBegin: string;
    timeEnd: string;
    color: string;
}

const ADD_NEW_TASK = 'ADD_NEW_TASK'
const CHANGE_SELECTED_DATE = 'CHANGE_SELECTED_DATE'

export function taskReducer(state = taskDefault, action: any){
    switch (action.type){
        default:
            return {...state}
        case ADD_NEW_TASK:
            const index = state.tasks.findIndex((el) => el.date === action.date);
            if(index !== -1) state.tasks[index].tasks.push(action.task)
            else state.tasks.push({date: action.date, tasks: [action.task]})
            return {...state}
        case CHANGE_SELECTED_DATE:
            return {...state, selectedDate: action.date};
    }
}

export const addNewTaskAction = (new_task: task, date: string) => ({type: ADD_NEW_TASK, task: new_task, date})
export const changeSelectedDateAction = (date: string) => ({type: CHANGE_SELECTED_DATE, date})
