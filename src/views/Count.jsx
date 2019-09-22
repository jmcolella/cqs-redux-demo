import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { incrementCount } from '../store/actions/count';

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  incrementCount: () => dispatch(incrementCount())
});

class Count extends React.Component {
  render() {
    const { 
      count,
      incrementCount
     } = this.props;

     return (
       <div>

        <p>Current count is <span style={{ color: 'red' }}>{ count }</span></p>

        <button
          onClick={incrementCount}
        >
          Increment 
        </button>

        <br />
        <Link to="/display">Next</Link>
      </div>
     )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
