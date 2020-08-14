import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import Title from './Title.jsx';
import Highlights from './Highlights.jsx';
import Description from './Description.jsx';
import Amenities from './Amenities.jsx';
import Modal from './Modal.jsx';

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
      highlights: [],
      readMore: false,
      modal: false
    };

    // Bind methods to correct context
    this.fetchListingInfo = this.fetchListingInfo.bind(this);
    this.fetchAmenities = this.fetchAmenities.bind(this);
    this.fetchHighlights = this.fetchHighlights.bind(this);
    this.showFullDescription = this.showFullDescription.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

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

  showFullDescription() {
    this.setState({ readMore: true });
  }

  openModal() {
    this.setState({ modal: true });
  }

  closeModal() {
    this.setState({ modal: false });
  }

  render() {
    return (
      <StyledMainDiv>
        <Title info={this.state} />
        <br/>
        <Highlights highlights={this.state.highlights}
                    host={this.state.host}
        />
        <br/>
        <Description desc={this.state.description}
                     readMore={this.state.readMore}
                     showFullDescription={this.showFullDescription}
        />
        <br/>
        <Amenities amenities={this.state.amenities}
                   openModal={this.openModal}
        />
        <ReactModal isOpen={this.state.modal}
                    onRequestClose={this.closeModal}
                    style={{
                      overlay: {
                        backgroundColor: 'rgba(0, 0, 0, .5)',
                      },
                      content: {
                        width: '780px',
                        margin: 'auto',
                        borderRadius: '15px'
                      }
                    }}
        >
          <Modal style={{
            width: '500px'
          }}
          />
        </ReactModal>
      </StyledMainDiv>
    );
  }
}

const StyledMainDiv = styled.div`
  color: #222222;
  width: 655px;
  font-size: 16px;
  font-weight: 250;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`
export default App;
