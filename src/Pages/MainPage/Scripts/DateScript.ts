export const monthNames: Array<string> = ["January", "February", "March",
                    "April", "May", "June",
                    "July", "August", "September",
                    "October", "November", "December"];

export const Days: Array<string> = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

const getFutureDate = function(days: number){
    let now = new Date();
    return new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + days,
        now.getHours(),
        now.getMinutes(),
        now.getSeconds());
};

export function getCurrentDay(days: number){
    const dateInMonth = getFutureDate(days);
    return dateInMonth.toLocaleDateString('ru-RU').replaceAll('.', '-')
}

export function GetDay(day: string, step: number){
    const date = day.split('-').reverse()
    const newDate = new Date(Number(date[0]), Number(date[1]) - 1, Number(date[2]) + step, 0, 0, 0);
    return newDate.toLocaleDateString('ru-RU').replaceAll('.', '-')
}

export const changeDayText = (delay: number) => {
    switch (delay) {
        case 0:
            return 'Сегодня'
        case 1:
            return 'Завтра'
        case -1:
            return 'Вчера'
        case 2:
            return 'Послезавтра'
        case -2:
            return 'Позавчера'
        default:
            return delay > 2 ? `Через ${delay} дней` : `${Math.abs(delay)} дня назад`;
    }
}

export const findWholeMonth = (delay: number) => {
    const howBefore = [6, 0, 1, 2, 3, 4, 5];
    const mainDay = getFutureDate(delay)
    let arrayDays = [];
    for(let i = howBefore[mainDay.getUTCDay()]; i >= 0; i--) arrayDays.push(getCurrentDay(delay - i))
    for(let i = 1; i <= 28 - howBefore[mainDay.getUTCDay()] - 1; i++) arrayDays.push((getCurrentDay(delay + i)))
    return arrayDays;
}