import React from 'react';
import { MdOutlinePushPin, MdCreate, MdDelete } from 'react-icons/md';
import moment from 'moment';  

const NoteCards = ({ title, date, content, tags = [], isPinned, onEdit, onDelete, onPinNote }) => {
  return (
    <div className='border m-[10px] rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out ml-20'>
      <div className='flex items-center justify-between'>
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-slate-500">
            {date ? moment(date).format('Do MMM YYYY') : "No Date"}  
          </span>
        </div>

        <MdOutlinePushPin 
          className={`icon-btn ${isPinned ? 'text-primary' : 'text-slate-300'}`} 
          onClick={onPinNote} 
        />
      </div>

      <p className="text-xs text-slate-600 mt-2">
        {content?.slice(0, 60)}
      </p>

      <div className="flex items-center justify-between mt-2">  
        <div className='text-xs text-slate-500'>
          {tags.length > 0 ? tags.map((tag, index) => (
            <span key={index} className="mr-1">{tags.map((item) => `#${item}`)}</span> 
          )) : "No Tags"}
        </div>

        <div className="flex items-center gap-2">
          <MdCreate className="hover:text-blue-500 cursor-pointer" onClick={onEdit} />
          <MdDelete className="hover:text-red-500 cursor-pointer" onClick={onDelete} />
        </div>
      </div>
    </div>
  );
}

export default NoteCards;  
