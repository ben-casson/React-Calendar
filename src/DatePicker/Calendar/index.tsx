import './index.scss';

interface CalendarProps {
    isOpen: boolean;
    selectedDate: string;
}

export default function Calendar({ isOpen, selectedDate }: CalendarProps) {
    let date = new Date();
    console.log(date.toDateString());

    let monthYearText = selectedDate.slice(4, 7) + ' ' + selectedDate.slice(11);

    return (
        <div id='calendar' className={isOpen ? 'open' : 'closed'}>
            <div id='content'>
                <div id='month-year-week-container'>
                    <div id='month-year-container'>
                        <button id='btn-previous-year'></button>
                        <button id='btn-previous-month'></button>
                        <div>{monthYearText}</div>
                        <button id='btn-next-month'></button>
                        <button id='btn-next-year'></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
