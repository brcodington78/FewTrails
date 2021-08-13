import React from 'react';
import SearchDropdown from './SearchDropdown';
import {Link} from 'react-router-dom'

class Search extends React.Component {
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
        let everything = this.props.trails.concat(this.props.parks);
        let result = []
        everything.forEach((item, index) => {
            
            if(item.name.toLowerCase().includes(query)){
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

    }
    
    handleSubmit(event) {
        alert('A search query was submitted: ' + this.state.query);
        event.preventDefault();
    }



    render() {
        
        
        let dropdown;
        if (this.state.results){
            dropdown = <SearchDropdown searchList={this.state.results}/>
        }

        let ele = '/#/';
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
            <>
                <form className='search-form'>
                    {/* <input className='search-type'></input> */}
                    <img className='magnifying-glass-pic' src='https://fewtrails-seeds.s3.us-west-1.amazonaws.com/random_assets/magnifying_glass.png'/>
                    <input className='search-input' placeholder ='Search by park or trail name' value={this.state.query} onChange={(e) => this.handleChange(e)}></input>
                    <Link to={ele} className='home-search-button'>
                        <img className='home-search-right-arrow' src='https://fewtrails-seeds.s3.us-west-1.amazonaws.com/random_assets/right-arrow-svgrepo-com.svg'/>
                    </Link>
                </form>
                {dropdown}
                
            </>
        )

    }
}

export default Search