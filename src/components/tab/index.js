import React from 'react';
import './style.css';

function TabView({setClickedTab, clickedTab, setOpen}) {
  const tabList = [
    "All",
    "Asia",
    "Europe"
  ]
  return (
    <div className='flex justify-between borderclass'>
      <div className='flex gap-7 mobile-nav'>
        {
          tabList?.map((tab, index) => (
            <ul key={index} onClick={() => {
              setClickedTab(tab)
              setOpen(false)
            }} className='tab-header-new'>
              <li
                className={(clickedTab === tab) ? 'select-none active' : ''}
              >
                {tab}
              </li>
            </ul>
          ))
        }
      </div>
    </div>
  );
}

export default TabView;
