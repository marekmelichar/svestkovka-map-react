import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentWillMount() {

  }

  componentDidMount() {

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
