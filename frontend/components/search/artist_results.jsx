import React from 'react';
import { Link } from 'react-router';

class ArtistResults extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.results || 
        this.props.results.length === 0 ||
        this.props.input.value === "") { return (<div></div>); }
    if (this.props.results.length > 0 && this.props.input.value !== "") {
      return (
        <div className="result-box">
          <span>Artists</span>
          <ul>
            {
              this.props.results.map((artist) => (
                <li className="search-item" key={artist.id}>
                  <Link to={`/artist/${artist.id}`}><img src={artist.image_url}/></Link><br/>
                  <span><Link to={`/artist/${artist.id}`}>{artist.name}</Link></span>
                </li>
              ))
            }
          </ul>
        </div>
      );
    }
  }

}

export default ArtistResults;
