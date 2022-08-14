import React from 'react';
import {MdOutlineCancel} from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Chat = () => {
  const { currentColor, cancelClick } = useStateContext();
  return (
    <div className='nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3'>
          <p className='font-semibold text-lg dark:text-gray-200'>Menssagens</p>
          <button className='text-white text-xs rounded p-1 px-2 bg-orange' type='button'>5 New</button>
        </div>
        <button 
          type="button"
          style={{ color: '#000000'}}
          className='p-3 text-2xl hover:drop-shadow-xl'
          onClick={() => cancelClick('chat')}
        >
          {<MdOutlineCancel />}
        </button>
      </div>
      <div className='mt-5'>
        {chatData?.map((item, index) => (
          <div key={index} className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer">
            <div className='relative'>
              <img 
                className='rounded-full h-10 w-10'
                src={item.image}
                alt={item.message}
              />
              <span 
                style={{ background: item.color }}
                className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
              />
            </div>
            <div>
              <p className='font-semibold dark:text-gray-200'>{item.message}</p>
              <p className='text-gray-500 dark:text-gray-400'>{item.desc}</p>
              <p className='text-gray-500 dark:text-gray-400'>{item.time}</p>
            </div>
          </div>
        ))}
        <div className='mt-5'>
          <Button 
            color="White"
            bgColor={currentColor}
            text="Ver todas as menssagens"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  )
}

export default Chat