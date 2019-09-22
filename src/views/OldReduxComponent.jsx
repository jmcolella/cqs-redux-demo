import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    mergedValue: state.someStateValue + ownProps.somePropValue
  }
};

const nonDispatchableAction = (payload) => ({
  type: 'SOME_TYPE',
  payload
});

const mapDispatchToProps = (dispatch) => {
  return {
    someFn: dispatch(nonDispatchableAction)
  };
};

class OldReduxComponent extends React.Component {
  render() {
    const {
      mergedValue,
      someFn
    } = this.props;

    return (
      <React.Fragment>
        <div>{ mergedValue }</div>

        <button
          onClick={() => someFn('some-value')}
        >
          Submit
        </button>
      </React.Fragment>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(OldReduxComponent);
