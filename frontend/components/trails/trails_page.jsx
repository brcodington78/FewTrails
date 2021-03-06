import { logout } from "../../actions/session_actions";
import React from "react";
import { Link } from "react-router-dom";
import Banner from "./banner";
import RightSideBar from "./rightSideBar/right_side_bar";
import LeftSideBar from './leftSideBar/left_side_bar';
import ShowSearchContainer from "../show_search/show_search_container";


class TrailsPage extends React.Component {
  constructor(props) {
    super(props);
    // console.log('trail',props.trail)
    this.state = {
      park: null,
      trails: null
    };
    
  }

  

  componentDidMount() {
    
    this.props
      .fetchTrails()
      .then(() =>
        this.props.fetchParks()
        
      );
    
  }



  render() {
    
    const { trail} = this.props;
    const {park} = this.props;

    if (!trail || !park) {
      return <div>Loading</div>;
    } else {
      return (
        <div className="trail-page-container">
          <div className="banner-top">
            <p className='location-path'>{`United States  >  California  >  ${park.name}  >  ${trail.name}`}</p>
            <ShowSearchContainer />
          </div>
          <Banner
            name={trail.name}
            difficulty={trail.difficulty}
            photoUrl={trail.photoUrl}
            parkName={park.name}
            parkId={park.id}
            coords={trail.coords}
          />
          <div className="sidebar-container">
            <LeftSideBar trail={trail}/>
            <RightSideBar coords={trail.coords} parkId={park.id} parkName={park.name} trails={this.props.trails} pageTrailName={trail.name}/>
          </div>
        </div>
      );
    }
  }
}

export default TrailsPage;
