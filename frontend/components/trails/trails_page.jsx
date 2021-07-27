import { logout } from "../../actions/session_actions";
import React from "react";
import { Link } from "react-router-dom";
import Banner from "./banner";
import RightSideBar from "./rightSideBar/right_side_bar";
import LeftSideBar from './leftSideBar/left_side_bar'


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
    console.log('props',this.props)
    this.props
      .fetchTrails()
      .then(() =>
        this.props
          .fetchPark(this.props.trail.park_id)
          .then((data) => this.setState({park: data.park}))
      );
    
  }

//   filterTrails = () => {
//       console.log('filter being hit')
//       this.props.fetchTrails().then((data) => data.filter(trail => {
//           trail.park_id === this.state.park.id && !(this.props.trail.name !== trail.name)
//       }))
//   }


  render() {
    console.log("render");
    console.log('trails', this.props.trails)
    const { trail} = this.props;
    const {park} = this.state;

    if (!trail || !park) {
      return <div>Loading</div>;
    } else {
      return (
        <div className="trail-page-container">
          <div className="banner-top">
        <p className='location-path'>{`United States  >  California  >  ${park.name}  >  ${trail.name}`}</p>
            {/* <SearchBar /> */}
          </div>
          <Banner
            name={trail.name}
            difficulty={trail.difficulty}
            photoUrl={trail.photoUrl}
            parkName={park.name}
            coords={trail.coords}
          />
          <div className="sidebar-container">
            <LeftSideBar trail={trail}/>
            {console.log('right-side-bar', trail, park)}
            <RightSideBar coords={trail.coords} parkId={park.id} parkName={park.name} trails={this.props.trails} pageTrailName={trail.name}/>
          </div>
        </div>
      );
    }
  }
}

export default TrailsPage;
