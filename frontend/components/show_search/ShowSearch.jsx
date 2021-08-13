import React from 'react';
import ShowSearchDropdown from './ShowSearchDropdown';
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';

class ShowSearch extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            query: '',
            filteredTrails: [],
            filteredParks: [],
            results: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.filterSearch = this.filterSearch.bind(this);
        
        
    }

    filterSearch(query) {
        console.log('trails', this.props.trails)
        console.log('park', this.props.parks)
        let everything = this.props.trails.concat(this.props.parks);
        let result = []
        everything.forEach((item, index) => {
            console.log('item',item)
            if(item.name.toLowerCase().includes(query)){
                console.log('pushed item', item)
                result.push(item)
            }
        })
        return result
    }


    handleChange(event) {
        
        this.setState({query: event.target.value}, () => {
            if (this.state.query !== ''){
                const results = this.filterSearch(this.state.query)

                
                this.setState({results})
            } else {
                this.setState({results: null})
            }
            
        });
        // console.log('query', this.state.query)
        
    }
    
    handleSubmit(event) {

        // let firstPick = this.state.results[0]
        // if (firstPick) {
        //     if (firstPick.park_id) {
        //         console.log('trail hitting')
        //         useHistory().push(`/trail/${firstPick.id}`)
        //     } else {
        //         history.push(`/park/${firstPick.id}`)
        //     }
        // }
        
        

        event.preventDefault();
    }

    render() {
        let dropdown;
        if (this.state.results) {
            dropdown = <ShowSearchDropdown searchList={this.state.results}/>
        }
        let ele = null;

        
        if (this.state.results) {
            let firstPick = this.state.results[0];
            if (firstPick !== undefined) {
                if(firstPick.park_id){
                    
                    ele = `/trail/${firstPick.id}`
                } else {
                    ele = `/park/${firstPick.id}`
                }
                
            }
        }

        return (
            <div className='show-search-container'>
                <form className='show-search-form'>
                
                    <input className='show-search-input' placeholder ='Search by park or trail name' value={this.state.query} onChange={(e) => this.handleChange(e)}></input>
                    {/* <button className='show-search-button' onClick={this.handleSubmit}>
                        <img className='show-search-right-arrow' src='https://fewtrails-seeds.s3.us-west-1.amazonaws.com/random_assets/right-arrow-svgrepo-com.svg'/>
                    </button> */}
                    <Link to={ele} className='show-search-button'>
                        <img className='show-search-right-arrow' src='https://fewtrails-seeds.s3.us-west-1.amazonaws.com/random_assets/right-arrow-svgrepo-com.svg'/>
                    </Link>
                </form>
                {dropdown}
            </div>
        )
    }


}

export default ShowSearch