import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './index.scss';
import autosize from 'autosize';

interface IPageContent {
    selectedDate: string;
    setSelectedDate: Dispatch<SetStateAction<string>>;
    notesMap: Map<string, string>;
    setNotesMap: Dispatch<SetStateAction<Map<string, string>>>;
}

export default function PageContent({
    selectedDate,
    setSelectedDate,
    notesMap,
    setNotesMap,
}: IPageContent) {
    const [content, setContent] = useState(notesMap.get(selectedDate));

    function onChangeHandler(e: React.FormEvent<HTMLTextAreaElement>) {
        let text = e.currentTarget.value;
        notesMap.set(selectedDate, text);
        setContent(notesMap.get(selectedDate));
        // e.target.style.height = `${e.target.scrollHeight}px`; 
        autosize(e.target as Element)
    }

    return (
        <div id='page-content-container'>
            <h1 id='current-date-title'>{selectedDate}</h1>
            {/* <input
                type='text'
                name='content-input'
                id='content-input'
                value={notesMap.get(selectedDate) ?? `Write something for ${selectedDate}`}
                onChange={(e) => onChangeHandler(e)}
            /> */}
            <textarea
                name=''
                id=''
                onChange={(e) => onChangeHandler(e)}
                value={notesMap.get(selectedDate) ?? ''}
                placeholder={notesMap.get(selectedDate) ? '' : `Write something for ${selectedDate.slice(4)}...`}
            ></textarea>
            {/* <p>{notesMap.get(selectedDate) || `Write something for ${selectedDate}`}</p> */}
        </div>
    );
}
