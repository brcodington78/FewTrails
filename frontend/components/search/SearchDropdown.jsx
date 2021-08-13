import React from 'react';
import {Link} from 'react-router-dom';


const SearchDropdown = (props) => {
    

    return (
        <ul className='search-dropdown-list'>
            {props.searchList.map((listItem, index) => {
                // return (
                //     <li className='home-search-list-item' key={`listItem-index${index}`}>
                //         <p>{listItem.name}</p>
                //     </li>
                // )

                if(!listItem.park_id) {
                    return (
                        <li className='home-search-list-item' key={`listItem-index${index}`}>
                            <Link className='search-link' to={`/park/${listItem.id}`}>
                                <div className='home-search-img-container'>
                                    <img className='home-search-trail-svg'  src='https://fewtrails-seeds.s3.us-west-1.amazonaws.com/random_assets/pine-svgrepo-com.svg'/>
                                </div>
                                <p className='list-item-name'>{listItem.name}</p>
                            </Link>
                        </li>
                    )
                } else {
                    return (
                        <li className='home-search-list-item' key={`listItem-index${index}`}>
                            <Link className='search-link' to={`/trail/${listItem.id}`}>
                                <div className='home-search-img-container'>
                                    <img className='home-search-trail-svg' src='https://fewtrails-seeds.s3.us-west-1.amazonaws.com/random_assets/trail-sign-outline-svgrepo-com.svg'/>
                                </div>
                                <p className='list-item-name'>{listItem.name}</p>
                            </Link>
                        </li>
                    )
                }
            })}
        </ul>
    )
}

export default SearchDropdown