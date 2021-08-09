import React from 'react';
import {Link} from 'react-router-dom';


const SearchDropdown = (props) => {
    console.log('dropdown console.log', props.searchList)

    return (
        <ul className='search-dropdown-list'>
            {props.searchList.map((listItem, index) => {
                return (
                    <li className='home-search-list-item' key={`listItem-index${index}`}>
                        <p>{listItem.name}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default SearchDropdown