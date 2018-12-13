import React, { Component } from 'react';
const L = window.L

class Pointer extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  renderMarker = () => {
    // const map = document.getElementById('interactive_map')
    // return L.marker([this.props.lat, this.props.lng]).addTo(map)
    return this.props.pointer.setLatLng(this.props.pointerPosition)
  }

  render() {
    return(
      this.renderMarker()
    )
  }
}

export default Pointer;
