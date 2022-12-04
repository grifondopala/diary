import * as React from "react";
import '../css/MainPage.css'
import {changeDayText, Days, findWholeMonth, getCurrentDay, monthNames} from "../Scripts/DateScript";
import {DayCalendar} from "./DayCalendar";
import {DaySchedule} from "./DaySchedule";
import {AddEvent} from "./AddEvent";
import {useDispatch} from "react-redux";
import {changeSelectedDateAction} from "../../../store/taskReducer";



export function MainPage(){

    const dispatch = useDispatch()

    const [chosenDay, setChosenDay] = React.useState<string>('')
    const [dayDelay, setDayDelay] = React.useState<number>(0)
    const [dayText, setDayText] = React.useState<string>('')
    const [wholeMonth, setWholeMonth] = React.useState<Array<string>>([])
    const [addEventShow, setAddEventShow] = React.useState<boolean>(false)

    React.useEffect(()=> {
        const day = getCurrentDay(dayDelay).split('-')
        setChosenDay(`${day[0]} ${monthNames[Number(day[1]) - 1]}, ${day[2]}`);
        setDayText(changeDayText(dayDelay));
    }, [dayDelay])

    React.useEffect(() => {
        setWholeMonth(findWholeMonth(0))
        dispatch(changeSelectedDateAction(getCurrentDay(0)))
    }, [])

    const changeDayDelay = (delay: number) => {setDayDelay((state) => state + delay)}

    return(
        <div id={'mainPageDiv'}>
            <div id={'calendarDiv'}>
                <label id={'dayText'}>{dayText}</label>
                <div id={'buttonsNavMainDiv'}>
                    <h1>{chosenDay}</h1>
                    <div id={'changeDayButtonsDiv'}>
                        <button className={'changeDayBtn'} onClick={() => changeDayDelay(-1)}>L</button>
                        <button className={'changeDayBtn'} onClick={() => changeDayDelay(1)}>R</button>
                    </div>
                    <div id={'controlButtonsDiv'}>
                        <button id={'addEventBtn'} onClick={() => setAddEventShow(true)}>+ Добавить Cобытие</button>
                    </div>
                </div>
                <div id={'calendar'}>
                    <div id={'calendarTitle'}>
                        {Days.map((day) => (
                            <p key={day} className={'dayTitle'}>{day}</p>
                        ))}
                    </div>
                    <div>
                        <div className={'daysRowDiv'}>
                            {wholeMonth.slice(0, 7).map((day) => ( <DayCalendar date={day} key={day}/>))}
                        </div>
                        <div className={'daysRowDiv'} style={{marginTop: '3px'}}>
                            {wholeMonth.slice(7, 14).map((day) => ( <DayCalendar date={day} key={day}/>))}
                        </div>
                        <div className={'daysRowDiv'} style={{marginTop: '3px'}}>
                            {wholeMonth.slice(14, 21).map((day) => ( <DayCalendar date={day} key={day}/>))}
                        </div>
                        <div className={'daysRowDiv'} style={{marginTop: '3px'}}>
                            {wholeMonth.slice(21, 28).map((day) => (<DayCalendar date={day} key={day}/>))}
                        </div>
                    </div>
                </div>
            </div>
            <DaySchedule/>
            <div id={'overlay'} style={{visibility: addEventShow ? 'visible' : 'hidden'}} onClick={() => setAddEventShow(false)}/>
            <AddEvent show={addEventShow}/>
        </div>
    )

}