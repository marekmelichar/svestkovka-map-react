// import React, { Component } from 'react';
// import { connect } from 'react-redux';
//
// import * as actions from '../actions';
//
// const L = window.L
//
// class App extends Component {
//
//   constructor(props) {
//     super(props);
//
//     this.state = {
//
//     };
//   }
//
//   componentWillMount() {
//
//   }
//
//   componentDidMount() {
//
//     const mymap = L.map('interactive_map').setView([50.478378, 13.837630], 11.4);
//
//     L.tileLayer('https://mapserver.mapy.cz/base-m/{z}-{x}-{y}?s=0.2&dm=Luminosity', {
//       attribution: ''
//     }).addTo(mymap);
//
//     const pointer = L.marker([50.502861, 13.639820]).addTo(mymap)
//
//     const socket = io('https://api.singlecube.cz:7778');
//
//     let vzdalenost,
//       cas,
//       marker,
//       cilbod,
//       center,
//       data;
//
//     socket.on('traindata', function(data) {
//       console.log('data', data);
//
//       vzdalenost=parseFloat(data.speed)
//       cas=parseFloat(data.timeMillis)
//
//       marker=L.latLng(parseFloat(data.lat),parseFloat(data.long))
//
//       if (marker!=null){
//         // cilbod=marker
//         center=[parseFloat(data.lat),parseFloat(data.long)]
//       }
//
//       // if we dont want to center the map and keep it static, leave this commented:
//       // mymap.setView(center, 13)
//
//       pointer.setLatLng(center)
//
//       // data = data
//
//       // data.poi.map(itm => {
//       //   L.marker([itm.lat, itm.lan]).addTo(mymap)
//       // })
//       //
//       // mymap.eachLayer(function (layer) {
//       //   console.log('layer', layer);
//       //   // if (layer.options.name === 'XXXXX') {
//       //   //   layer.setLatLng([newLat,newLon])
//       //   // }
//       // });
//
//       // L.marker([50.502861, 13.639820]).addTo(mymap)
//       // .bindPopup(pois[i].properties.description).openPopup();
//     })
//   }
//
//   componentDidUpdate() {
//
//   }
//
//   componentWillReceiveProps(nextProps) {
//
//   }
//
//   render() {
//     return (
//       <div>
//         ahoj
//       </div>
//     );
//   }
// }
//
// // reading data from the state, sending them inside as a props
// const mapStateToProps = state =>
//     // whatever is returned here, gets in as a prop
//     ({
//       // fetched_data: state.fetch_data || [],
//     });
//
//
// export default connect(mapStateToProps, actions)(App);


















// import React, { Component } from 'react';
//
// // import { connect } from 'react-redux';
// //
// // import * as actions from '../actions';
//
// // import { render } from 'react-dom'
// // import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
// const { Map: LeafletMap, TileLayer, Marker, Popup } = window.ReactLeaflet
//
// const position = [50.478378, 13.837630]
//
// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       lat: 51.505,
//       lng: -0.09,
//       zoom: 13
//     }
//   }
//
//   render() {
//     const position = [this.state.lat, this.state.lng];
//     return (
//       <Map center={position} zoom={this.state.zoom}>
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//         />
//         <Marker position={position}>
//           <Popup>
//             A pretty CSS3 popup. <br/> Easily customizable.
//           </Popup>
//         </Marker>
//       </Map>
//     );
//   }
// }

































import React, { Component } from 'react';
const L = window.L

import Pointer from '../components/Pointer/Pointer';

// import { connect } from 'react-redux';
//
// import * as actions from '../actions';

// import { render } from 'react-dom'
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
// const { Map: LeafletMap, TileLayer, Marker, Popup } = window.ReactLeaflet

// const position = [50.478378, 13.837630]

window.mymap = L.map('interactive_map').setView([50.478378, 13.837630], 11.4);
window.pointer = L.marker([50.502861, 13.639820]).addTo(window.mymap)

L.tileLayer('https://mapserver.mapy.cz/base-m/{z}-{x}-{y}?s=0.2&dm=Luminosity', {
  attribution: ''
}).addTo(window.mymap);

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    }
  }

  componentDidMount() {

    // const mymap = L.map('interactive_map').setView([50.478378, 13.837630], 11.4);



    // this.pointer = L.marker([50.502861, 13.639820]).addTo(window.mymap)

    const socket = io('https://api.singlecube.cz:7778');

    let vzdalenost,
      cas,
      marker,
      cilbod,
      pointerPosition,
      data;

    socket.on('traindata', function(data) {
      console.log('data', data);

      vzdalenost=parseFloat(data.speed)
      cas=parseFloat(data.timeMillis)

      marker=L.latLng(parseFloat(data.lat),parseFloat(data.long))

      if (marker!=null){
        // cilbod=marker
        pointerPosition=[parseFloat(data.lat),parseFloat(data.long)]
      }

      // if we dont want to center the map and keep it static, leave this commented:
      // mymap.setView(center, 13)

      // pointer.setLatLng(pointerPosition)

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

      this.setState({
        pointerPosition
      })
    })
  }

  renderPointer = () => {
    const {pointerPosition} = this.state
    return window.pointer.setLatLng([50.478378, 13.837630])
  }

  render() {
    return (
      // <Map center={position} zoom={this.state.zoom}>
      //   <TileLayer
      //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      //     url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      //   />
      //   <Marker position={position}>
      //     <Popup>
      //       A pretty CSS3 popup. <br/> Easily customizable.
      //     </Popup>
      //   </Marker>
      // </Map>
      // <Pointer
      //   // lat={50.502861}
      //   // lng={13.639820}
      //   // mymap={window.mymap}
      //   pointer={this.pointer}
      //   position={pointerPosition}
      // />

      this.renderPointer()
    )
  }
}
