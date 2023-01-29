import './index.scss';

interface CalendarProps {
    isOpen: boolean,
}

export default function Calendar({ isOpen }: CalendarProps ) {
    return <div id='calendar' className={isOpen ? 'open' : 'closed'} ></div>;
}
