import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  count: state.count,
});


class DisplayCount extends React.Component {
  render() {
    const { 
      count,
     } = this.props;

     return (
       <div>

        <p>Current count is still <span style={{ color: 'red' }}>{ count }</span></p>
      </div>
     )
  }
};

export default connect(mapStateToProps)(DisplayCount);
