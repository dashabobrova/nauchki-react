import React from "react";
import { NavLink } from "react-router-dom";
import childPlaceholder from '../../img/childCardPlaceholder.jpg';

export const ChildCard = ({ child }) => {
  return (
    <NavLink to={`/personalArea/${child.id}`}>
    <li>
      <div className="personalArea_addedChildren-children">
          <div className='personalArea_addedChildren-wrapper'>
      <img className='childPlaceholder' src={childPlaceholder} alt={"childPlaceholder"}/> 
        <div className='personalArea_addedChildren-info'>
          <p className='personalArea_addedChildren-name'>{child.name}</p>
          <p className='personalArea_addedChildren-name'>{child.dateOfBirth}</p>
        </div>
        </div>
      </div>
    </li>
    </NavLink>
  );
};
