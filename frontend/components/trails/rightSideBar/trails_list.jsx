import React from 'react';
import TrailListItem from './trail_list_item'

const TrailsList = (props) => {
    const filterTrails = (trails) => {
        let newTrailList = []
        for(let i = 0; i < trails.length; i++) {
            if(trails[i].park_id === props.parkId && props.pageTrailName !== trails[i].name) {
                newTrailList.push(trails[i])
            }
        }
        
        return newTrailList
    }
    
    const trailArr = filterTrails(props.trails)


    // console.log('listItems',listItems)
    return (
        <>
            <h2 className='nearby-h2'>Nearby Trails</h2>
            <ul className='trails-list'>
                {/* <li>{listItems}</li> */}
                {trailArr.map((trail) => (
                <TrailListItem key={trail.id} trailId={trail.id} parkName={props.parkName} name={trail.name} difficulty={trail.difficulty} length={trail.length_in_miles} photoUrl={trail.photoUrl}  />
                ))}
            </ul>
        </>
    )
}

export default TrailsList