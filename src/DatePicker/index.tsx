import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Calendar, isLeapYear } from './Calendar';
import { months, daysOfWeek } from '../App';
import { DaysInMonth } from '../enums';
import Day from './Calendar/Day';
import './index.scss';

interface IDatePickerProps {
    notes: { date: string; text: string }[];
    setNotes: Dispatch<SetStateAction<{ date: string; text: string }[]>>;
    selectedDate: string;
    setSelectedDate: Dispatch<SetStateAction<string>>;
    calendarDisplayDate: string;
    setCalendarDisplayDate: Dispatch<SetStateAction<string>>;
}

export default function DatePicker({
    notes,
    setNotes,
    selectedDate,
    setSelectedDate,
    calendarDisplayDate,
    setCalendarDisplayDate,
}: IDatePickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [daysArray, setDaysArray] = useState(Array<JSX.Element>);
    const [selectedDay, setSelectedDay] = useState(selectedDate);

    let monthDayText = selectedDate.slice(4, 7) + ' ' + selectedDate.slice(8, 10);

    // function changeDay(timeDirection: 'previous' | 'next') {
    //     let day = selectedDate.slice(8, 10);
    //     let dayNumber = parseInt(day);
    //     let month = selectedDate.slice(4, 7);
    //     let year = selectedDate.slice(11);
    //     let dayOfWeek: number = new Date(`${day} ${month} ${year}`).getDay();
    //     if (timeDirection === 'previous') {
    //         if (day === '01') {
    //             changeMonth('previous');
    //             if (month === 'Jan') changeYear('previous');
    //             let newDayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    //             // setSelectedDate(daysOfWeek[newDayOfWeek] +
    //             //     months[calendarDisplayDate.slice(3, 8) +
    //             //     months.findIndex(
    //             //         (element) => element.month == month
    //             //     ) - 1].days +
    //             //         months[months.length - 1] +
    //             //         calendarDisplayDate.slice(10)
    //             // );
    //             console.log('selected date: ' + selectedDate);
    //         } else {
    //             dayNumber--;
    //             dayOfWeek = dayOfWeek === 0 ? 6 : --dayOfWeek;
    //             setSelectedDate(
    //                 `${daysOfWeek[dayOfWeek]} ${month} ${
    //                     dayNumber < 10 ? '0' + dayNumber.toString() : dayNumber
    //                 } ${year}`
    //             );
    //             console.log('selected date: ' + selectedDate);
    //         }
    //     }
    // }

    function changeMonth(timeDirection: 'previous' | 'next') {
        setDaysArray([]);
        let currentMonth = months.findIndex(
            (element) => element.month == `${calendarDisplayDate.slice(4, 7)}`
        );
        let newMonth;
        let newYear;
        if (timeDirection === 'previous') {
            newMonth = currentMonth === 0 ? months.length - 1 : currentMonth - 1;
            newYear =
                currentMonth === 0
                    ? parseInt(calendarDisplayDate.slice(11)) - 1
                    : calendarDisplayDate.slice(11);
        } else {
            newMonth = currentMonth === months.length - 1 ? 0 : currentMonth + 1;
            newYear =
                currentMonth === months.length - 1
                    ? parseInt(calendarDisplayDate.slice(11)) + 1
                    : calendarDisplayDate.slice(11);
        }
        let tempDate =
            calendarDisplayDate.slice(0, 4) +
            months[newMonth].month +
            calendarDisplayDate.slice(7, 11) +
            newYear;
        setCalendarDisplayDate(tempDate);
        console.log(calendarDisplayDate);
    }

    function changeYear(timeDirection: 'previous' | 'next') {
        setDaysArray([]);
        let newYear =
            timeDirection === 'previous'
                ? parseInt(calendarDisplayDate.slice(11)) - 1
                : parseInt(calendarDisplayDate.slice(11)) + 1;
        let dayOfWeek: number = new Date(
            `01 ${calendarDisplayDate.slice(4, 7)} ${newYear}`
        ).getDay();
        console.log('dayOfWeek ' + dayOfWeek);
        let firstDayOfMonth = daysOfWeek[dayOfWeek];
        console.log('firstDayOfMonth ' + firstDayOfMonth);
        console.log('newYear ' + newYear);
        // let tempDate = firstDayOfMonth + ' ' + calendarDisplayDate.slice(4, 7) + ' 01 ' + newYear;
        let tempDate = calendarDisplayDate.slice(0, 11) + newYear;
        console.log('tempDate ' + tempDate);
        setCalendarDisplayDate(tempDate);
    }

    function toggleCalendarDisplay() {
        setIsOpen(!isOpen);
        // if (
        //     !isOpen &&
        //     (calendarDisplayDate.slice(4, 7) !== selectedDate.slice(4, 7) ||
        //         calendarDisplayDate.slice(11) !== selectedDate.slice(11))
        // ) {
        //     // setDaysArray([]);
        //     // setCalendarDisplayDate(selectedDate);
        //     setCalendarDisplayDate(new Date().toDateString())
        // }
        // else {
        //     // setCalendarDisplayDate(new Date().toDateString())
        // }
        setTimeout(() => {
            setCalendarDisplayDate(new Date().toDateString());
        }, 200);
    }

    function handleClick(number: number, date: string) {
        // setIsOpen(!isOpen)
        let month = calendarDisplayDate.slice(4, 7);
        let year = calendarDisplayDate.slice(11);
        let day = number < 10 ? '0' + number.toString() : number;
        let dayofWeek = daysOfWeek[new Date(`${day} ${month} ${year}`).getDay()];
        setSelectedDate(`${dayofWeek + ' ' + month + ' ' + day + ' ' + year}`);
        // setDayStyle('btn-day selected');
        console.log('selected day' + number);
        console.log('1: ' + new Date().toDateString());
        console.log('2: ' + calendarDisplayDate);
        setSelectedDay(date);
    }

    let dayOfWeek = calendarDisplayDate.slice(0, 3);
    let currentMonth = calendarDisplayDate.slice(4, 7);
    let currentYear = calendarDisplayDate.slice(11);
    let monthLength = DaysInMonth[currentMonth as keyof typeof DaysInMonth];
    monthLength = currentMonth === 'Feb' && isLeapYear(parseInt(currentYear)) ? 29 : monthLength;
    let firstDayOfMonth = new Date(`01 ${currentMonth} ${currentYear}`).getDay();

    function createDays() {
        // let tempArray = [...daysArray];
        let tempArray = [];
        for (let i = 0; i <= monthLength + firstDayOfMonth - 1; i++) {
            if (i < firstDayOfMonth) {
                tempArray.push(<div key={i}></div>);
            } else {
                tempArray.push(
                    <Day
                        key={i}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        number={i - firstDayOfMonth + 1}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                        calendarDisplayDate={calendarDisplayDate}
                        handleClick={handleClick}
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}
                    />
                );
            }
        }
        setDaysArray(tempArray);
        console.log(daysArray);
    }

    useEffect(() => {
        createDays();
    }, [selectedDate, calendarDisplayDate]);

    return (
        <section>
            <div id='wrapper-date-picker'>
                <div id='btn-container'>
                    <button
                        id='btn-previous-day'
                        // onClick={() => changeDay('previous')}
                        title='Go to the previous day'
                    ></button>
                    <button id='btn-selected-day' onClick={() => toggleCalendarDisplay()}>
                        {monthDayText}
                    </button>
                    <button id='btn-next-day' title='Go to the next day'></button>
                </div>
                <Calendar
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    daysArray={daysArray}
                    setDaysArray={setDaysArray}
                    changeYear={changeYear}
                    changeMonth={changeMonth}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    calendarDisplayDate={calendarDisplayDate}
                    setCalendarDisplayDate={setCalendarDisplayDate}
                    createDays={createDays}
                />
            </div>
        </section>
    );
}
