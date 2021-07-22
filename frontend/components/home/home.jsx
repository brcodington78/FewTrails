import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
              <Link to='/trail/1'>Trail 1</Link>  
              <Link to='/trail/2'>Trail 2</Link>
              <Link to='/trail/3'>Trail 3</Link>
            </div>
        )
    }
}
