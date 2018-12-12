import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import Link from './Link';
import { FEED_SEARCH_QUERY } from '../queries/queries';

class Search extends Component {
  state = {
    links: [],
    filter: ''
  }
  render(){
    return(
      <div>
        <div>
          Search:
          <input
            type="text"
            onChange={e => this.setState({filter: e.target.value})}
          />
          <button onClick={()=> this._executeSearch()}>OK</button>
        </div>
        {this.state.links.map((link,index)=> (
          <Link key={link.id} link={link} index={index} />
        ))}
      </div>
    )
  }

  _executeSearch = async() => {
    const { filter } = this.state
    const results = await this.props.client.query({
      query: FEED_SEARCH_QUERY,
      variables: { filter }
    })
    const links = results.data.feed.links
    this.setState({links})
  }
}

export default withApollo(Search)