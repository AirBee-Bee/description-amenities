import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Title from './Title.jsx';
import Highlights from './Highlights.jsx';
import Description from './Description.jsx';
import Amenities from './Amenities.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state w/ correct data types
    this.state = {
      title: '',
      host: '',
      hostPhoto: '',
      description: '',
      guests: 0,
      rooms: 0,
      beds: 0,
      baths: 0,
      amenities: [],
      highlights: []
    };

    // Bind methods to correct context
    this.fetchListingInfo = this.fetchListingInfo.bind(this);
    this.fetchAmenities = this.fetchAmenities.bind(this);
    this.fetchHighlights = this.fetchHighlights.bind(this);

  }

  // Invoke these functions when App mounts
  componentDidMount() {
    this.fetchListingInfo();
    this.fetchAmenities();
    this.fetchHighlights();
  }

  // GET Listing Info
  fetchListingInfo() {
    axios.get(`${window.location.href}/info`)
      .then((res) => {
        let data = res.data[0];
        this.setState({
          title: data.title,
          host: data.host,
          hostPhoto: data.photo,
          description: data.description,
          guests: data.guests,
          rooms: data.rooms,
          beds: data.beds,
          baths: data.baths
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // GET Listing Amenities
  fetchAmenities() {
    axios.get(`${window.location.href}/amenities`)
      .then((res) => {
        this.setState({
          amenities: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // GET Featured Amenities
  fetchHighlights() {
    axios.get(`${window.location.href}/highlights`)
      .then((res) => {
        this.setState({
          highlights: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <StyledMainDiv>
        <Title info={this.state} />
        <br />
        <Highlights highlights={this.state.highlights} />
        <br />
        <Description desc={this.state.description} />
        <br />
        <Amenities amenities={this.state.amenities} />
      </StyledMainDiv>
    );
  }
}

const StyledMainDiv = styled.div`
  width: 655px;
  font-size: 16px;
  font-weight: 250;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`
export default App;
