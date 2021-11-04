import React from 'react'
import { useSelector } from 'react-redux';

export const Themes = ({currentTag, setCurrentTag}) => {
    const tags = useSelector((state) => state.posts.tags);
    
    return (
        <div className="themes">
          <div className="themes__title" onClick={()=> setCurrentTag('')}>Темы</div>
          <div className="themes__line"></div>
          <ul className="themes__taggsList">
            {
                tags && tags.map((tag, index) => <li onClick={()=> setCurrentTag({tag})} key={`${tag}_${index}`}>{tag}</li>)
            }
          </ul>
        </div>
    )
}

