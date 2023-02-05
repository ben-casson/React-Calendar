import './Day.scss';

interface IDayProps {
    number: number;
}

export default function Day({ number }: IDayProps) {
    return <button className='btn-day'>{number}</button>;
}
