import { logout } from "../../actions/session_actions";
import React from "react";
import { Link } from "react-router-dom";
import Banner from "./banner";

class TrailsPage extends React.Component {
  constructor(props) {
    super(props);
    // console.log('trail',props.trail)
  }

  componentDidMount() {
    this.props.fetchTrail(this.props.trailId).then(
        () => (this.props.fetchPark(this.props.trail.park_id))
    )
    
  }

//   componentDidUpdate() {
    
//   }

  render() {
    
   
    const { trail, park } = this.props;
    if (!trail || !park) {
      return <div>Loading</div>;
    } else {
        return (
          <div className='trail-page-container'>
            <div className='banner-top'>
              <p>{`United States > California > ${park.name} > ${trail.name}`}</p>
              {/* <SearchBar /> */}
            </div>
            <Banner
              name={trail.name}
              difficulty={trail.difficulty}
              photoUrl={trail.photoUrl}
              parkName={park.name}
              coords={trail.coords}
            />
            {/* <NearbyTrails />
                <TrailDescription />
                <TrailNav /> */}
          </div>
        );
      }
    }
}

export default TrailsPage;
