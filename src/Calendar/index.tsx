export default function Calendar() {
    return (
        <div id='calendar-wrapper'>
            <div id='date-picker-container'>
                <button id='btn-previous-day' title='Go to the previous day'></button>
                <button id="btn-selected-day">Today</button>
                <button id='btn-next-day' title='Go to the next day'></button>
            </div>
        </div>
    );
}
