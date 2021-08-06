import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import HomeTrailList from './HomeTrailList'

class Home extends React.Component {

    constructor(props) {
        super(props);
        console.log('props',props)

    }
    
    componentDidMount() {
        let {fetchParks, fetchTrails} = this.props
        fetchParks()
        .then(() => fetchTrails())

    }

    render() {
        console.log('render', this.props)
        let homePic1 = 'https://fewtrails-seeds.s3.us-west-1.amazonaws.com/home_pics/home_pic_1.jpg'
        let homePic2 = 'https://res.cloudinary.com/whistler/image/upload/w_500,c_scale,dpr_3.0,q_auto/v1/s3/images/header/hiking-header.jpg'
        let homePic3 = 'https://www.parks.ca.gov/pages/29142/images/Hike_pic.png'
        return (
            <div>
                <div className='home-banner'>
                    <img className='home-pic' src={homePic2}/>
                    <div className='home-pic-text'>
                        <h1>Find your next adventure</h1>
                        {/* <SearchBar /> */}
                        
                    </div>
                </div>
                <div className='home-middle-container'>
                    <h2 className='home-middle-header'>Favorite Trails</h2>

                    <HomeTrailList trails={this.props.trails} parks={this.props.parks}/>
                </div>
                <div>
                    <Link to='/trail/1'>Trail 1</Link>  
                    <Link to='/trail/2'>Trail 2</Link>
                    <Link to='/trail/3'>Trail 3</Link>
                </div>
                <div>
                    <Link to='/park/1'>Park 1</Link>  
                    <Link to='/park/2'>Park 2</Link>
                    <Link to='/park/3'>Park 3</Link>
                </div>

            </div>
            

        )
    }
}
export default Home
