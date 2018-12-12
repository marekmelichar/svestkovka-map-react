import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

const L = window.L

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentWillMount() {

  }

  componentDidMount() {

    const mymap = L.map('interactive_map').setView([50.478378, 13.837630], 11.4);
    
    L.tileLayer('https://mapserver.mapy.cz/base-m/{z}-{x}-{y}?s=0.2&dm=Luminosity', {
      attribution: ''
    }).addTo(mymap);

    const pointer = L.marker([50.502861, 13.639820]).addTo(mymap)

    const socket = io('https://api.singlecube.cz:7778');

    let vzdalenost,
      cas,
      marker,
      cilbod,
      center,
      data;

    socket.on('traindata', function(data) {
      console.log('data', data);

      vzdalenost=parseFloat(data.speed)
      cas=parseFloat(data.timeMillis)

      marker=L.latLng(parseFloat(data.lat),parseFloat(data.long))

      if (marker!=null){
        // cilbod=marker
        center=[parseFloat(data.lat),parseFloat(data.long)]
      }

      // if we dont want to center the map and keep it static, leave this commented:
      // mymap.setView(center, 13)

      pointer.setLatLng(center)

      // data = data

      // data.poi.map(itm => {
      //   L.marker([itm.lat, itm.lan]).addTo(mymap)
      // })
      //
      // mymap.eachLayer(function (layer) {
      //   console.log('layer', layer);
      //   // if (layer.options.name === 'XXXXX') {
      //   //   layer.setLatLng([newLat,newLon])
      //   // }
      // });

      // L.marker([50.502861, 13.639820]).addTo(mymap)
      // .bindPopup(pois[i].properties.description).openPopup();
    })
  }

  componentDidUpdate() {

  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <div>
        ahoj
      </div>
    );
  }
}

// reading data from the state, sending them inside as a props
const mapStateToProps = state =>
    // whatever is returned here, gets in as a prop
    ({
      // fetched_data: state.fetch_data || [],
    });


export default connect(mapStateToProps, actions)(App);
