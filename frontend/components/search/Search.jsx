import React from 'react';

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
        console.log('search props', this.props)
        
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
        this.setState({query: event.target.value});
        this.setState({results: this.filterSearch(this.state.query)})
        console.log('handleChange', this.state.results)
    }
    
    handleSubmit(event) {
        alert('A search query was submitted: ' + this.state.query);
        event.preventDefault();
    }



    render() {
        console.log('search props 2', this.props)
        return (
            <div className='search'>
                <form className='search-form'>
                    {/* <input className='search-type'></input> */}
                    <input className='search-input' value={this.state.query} onChange={this.handleChange}></input>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )

    }
}

export default Search