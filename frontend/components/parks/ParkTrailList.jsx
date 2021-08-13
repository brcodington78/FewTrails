import React from 'react'
import ParkTrailItem from './ParkTrailItem'

const ParkTrailList = (props) => {
    
    return(
        <div>
            <h2 className='park-trail-list-header'>{`Trails (${props.trails.length})`}</h2>
            {props.trails.map((trail,index) => {
                return <ParkTrailItem key={`trail-${index}`} trail={trail} parkName={props.parkName}/>
            })}
            

        </div>
    )
}

export default ParkTrailList