import React from 'react';

import GiphysIndex from './giphys_index';


class GiphysSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = { searchTerm: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    let searchTerm = document.getElementsByClassName("search-bar")[0].value;
    this.setState({ searchTerm });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchSearchGiphys(this.state.searchTerm);
  }

  render(){
    return (
      <div>

        <form>
          <input className="search-bar"
            type="text"
            onChange={this.handleChange}
            value={this.state.searchTerm}>
          </input>
          <button onClick={this.handleSubmit}>Search Giphy</button>
        </form>

        <GiphysIndex giphys={this.props.giphys}/>

      </div>
    );
  }
}

export default GiphysSearch;
