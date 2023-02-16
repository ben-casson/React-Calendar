import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { DaysInMonth, DaysOfWeek } from '../../enums';
import { months, daysOfWeek } from '../../App';
import Day from './Day';
import './index.scss';

interface ICalendarProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    daysArray: Array<JSX.Element>;
    setDaysArray: Dispatch<SetStateAction<Array<JSX.Element>>>;
    changeYear: Function;
    changeMonth: Function;
    selectedDate: string;
    setSelectedDate: Dispatch<SetStateAction<string>>;
    calendarDisplayDate: string;
    setCalendarDisplayDate: Dispatch<SetStateAction<string>>;
    createDays: Function;
}

type Day = {
    date: string;
    number: number;
    content: string;
};

export function Calendar({
    isOpen,
    setIsOpen,
    daysArray,
    setDaysArray,
    changeYear,
    changeMonth,
    selectedDate,
    setSelectedDate,
    calendarDisplayDate,
    setCalendarDisplayDate,
    createDays,
}: ICalendarProps) {
    const [dayStyle, setDayStyle] = useState('btn-day');
    // const [selectedDay, setSelectedDay] = useState(selectedDate);

    // function handleClick(number: number, date: string) {
    //     // setIsOpen(!isOpen)
    //     let month = calendarDisplayDate.slice(4, 7);
    //     let year = calendarDisplayDate.slice(11);
    //     let day = number < 10 ? '0' + number.toString() : number;
    //     let dayofWeek = daysOfWeek[new Date(`${day} ${month} ${year}`).getDay()];
    //     setSelectedDate(`${dayofWeek + ' ' + month + ' ' + day + ' ' + year}`);
    //     // setDayStyle('btn-day selected');
    //     console.log('selected day' + number);
    //     console.log('1: ' + new Date().toDateString());
    //     console.log('2: ' + calendarDisplayDate);
    //     setSelectedDay(date)
    // }

    // let dayOfWeek = calendarDisplayDate.slice(0, 3);
    // let currentMonth = calendarDisplayDate.slice(4, 7);
    // let currentYear = calendarDisplayDate.slice(11);
    // let monthLength = DaysInMonth[currentMonth as keyof typeof DaysInMonth];
    // monthLength = currentMonth === 'Feb' && isLeapYear(parseInt(currentYear)) ? 29 : monthLength;
    // let firstDayOfMonth = new Date(`01 ${currentMonth} ${currentYear}`).getDay();
    // console.log('firstDayOfMonth ' + firstDayOfMonth);

    // useEffect(() => {
    //     // let tempArray = [...daysArray];
    //     let tempArray = []
    //     for (let i = 0; i <= monthLength + firstDayOfMonth - 1; i++) {
    //         if (i < firstDayOfMonth) {
    //             tempArray.push(<div key={i}></div>);
    //         } else {
    //             tempArray.push(
    //                 <Day
    //                     key={i}
    //                     isOpen={isOpen}
    //                     setIsOpen={setIsOpen}
    //                     dayStyle={dayStyle}
    //                     setDayStyle={setDayStyle}
    //                     number={i - firstDayOfMonth + 1}
    //                     selectedDate={selectedDate}
    //                     setSelectedDate={setSelectedDate}
    //                     calendarDisplayDate={calendarDisplayDate}
    //                     handleClick={handleClick}
    //                     selectedDay={selectedDay}
    //                     setSelectedDay={setSelectedDay}
    //                 />
    //             );
    //         }
    //     }
    //     setDaysArray(tempArray);
    //     console.log(daysArray);
    // }, [selectedDate, calendarDisplayDate]); //, isOpen

    useEffect(() => {
        createDays()
    }, [selectedDate])

    let monthYearText = calendarDisplayDate.slice(4, 7) + ' ' + calendarDisplayDate.slice(11);

    return (
        <div id='calendar' className={isOpen ? 'open' : 'closed'}>
            <div id='content'>
                <div id='month-year-week-container'>
                    <div id='month-year-container'>
                        <button
                            id='btn-previous-year'
                            onClick={() => changeYear('previous')}
                        ></button>
                        <button
                            id='btn-previous-month'
                            onClick={() => changeMonth('previous')}
                        ></button>
                        <div>{monthYearText}</div>
                        <button id='btn-next-month' onClick={() => changeMonth('next')}></button>
                        <button id='btn-next-year' onClick={() => changeYear('next')}></button>
                    </div>
                    <div id='week-container'>
                        <div className='week'>Sun</div>
                        <div className='week'>Mon</div>
                        <div className='week'>Tue</div>
                        <div className='week'>Wed</div>
                        <div className='week'>Thu</div>
                        <div className='week'>Fri</div>
                        <div className='week'>Sat</div>
                    </div>
                </div>
                <div id='days-container'>{daysArray.map((element) => element)}</div>
            </div>
        </div>
    );
}

export function isLeapYear(year: number): boolean {
    if (year % 4 !== 0) {
        return false;
    } else if (year % 100 !== 0) {
        return true;
    } else if (year % 400 !== 0) {
        return false;
    } else {
        return true;
    }
}
