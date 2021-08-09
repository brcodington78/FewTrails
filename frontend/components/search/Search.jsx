import React from 'react';
import SearchDropdown from './SearchDropdown'

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
        
        console.log('event.target.value', event.target.value)
        this.setState({query: event.target.value});
        console.log('skipping?')
        if (this.state.query !== ''){
            this.setState({results: this.filterSearch(this.state.query)})
        } else {
            this.setState({results: null})
        }
        console.log('query', this.state.query)
        console.log('results', this.state.results)
    }
    
    handleSubmit(event) {
        alert('A search query was submitted: ' + this.state.query);
        event.preventDefault();
    }



    render() {
        // console.log('search props 2', this.props)
        
        let dropdown;
        if (this.state.results){
            dropdown = <SearchDropdown searchList={this.state.results.slice(5)}/>
        } 

        
        return (
            <div className='search'>
                <form className='search-form'>
                    {/* <input className='search-type'></input> */}
                    <img className='magnifying-glass-pic' src='https://fewtrails-seeds.s3.us-west-1.amazonaws.com/random_assets/magnifying_glass.png'/>
                    <input className='search-input' placeholder ='Search by park or trail name' value={this.state.query} onChange={this.handleChange}></input>
                    <button className='home-search-button' onClick={this.handleSubmit}>
                        <img className='home-search-right-arrow' src='https://fewtrails-seeds.s3.us-west-1.amazonaws.com/random_assets/right-arrow-svgrepo-com.svg'/>
                    </button>
                </form>
                {dropdown}
                
            </div>
        )

    }
}

export default Search