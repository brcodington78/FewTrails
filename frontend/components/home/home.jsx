import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
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
