import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <SearchIcon />
        </div>
        <div className='items'>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className='counter'></div>
          </div>
          <div className="item">
            <img 
              src="https://s3-alpha-sig.figma.com/img/0b7d/dead/270613ec07e31b96acbc3a664717b0aa?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OpBAUG3Le9LHyNmS2bYZwY-xQ9nU8b3eGIDaiytMc7G8FSVyYzSUe19TZQA~FF7Joy5QpGYtENH7o7MTxVG1JOzuRB5eJ-RkoA1vV~JJ7KPkX9m6kPfZeTa~ukEgiWH0Kpp~XS40j9o6q6Cwq-7cApHFkaEpUN3FUt8MoJOplF8IJrWj9FcR3V6niz99WdsUzKDh4o75aTXOgptxfaBMGM6ZBXIH3kRvuF3tusFL-l9eIfcFaFXSKuCTqzuvHv6ytSDzpoaCmWI9C4CZe9DdN-~AsNDhnlJ7d9kxKkxSdbQOTUHRSlDtiun7lTRYuhsCNlUz1~rR14WH3u7kkW33VA__" 
              alt="" 
              className='avatar' 
            />
            <span className='userName' onClick={toggleDropdown}>Young Daineal</span>
            {isOpen && (
              <div className='dropdown'>
                <ul>
                  <li>Profile</li>
                  <li>Settings</li>
                  <li>Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
