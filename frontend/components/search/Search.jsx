import React from 'react';

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            query: '',
            filteredTrails: [],
            filteredParks: []

        }
    }

    update(e, field) {
        this.setState({
           [field]: e.currentTarget.value
       });
   }



    render() {
        return (
            <div className='search'>
                <form className='search-form'>
                    <input className='search-type'></input>
                    <input className='search-input' value={this.state.query} onChange={(e) => this.update(e, 'query')}></input>
                </form>
            </div>
        )

    }
}