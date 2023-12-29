import React from 'react';
import { connect } from 'react-redux';

const withReduxState = (WrappedComponent) => {
  const mapStateToProps = (state) => ({
    profile: state.session.profileDetails,
    // Add other state properties as needed
  });

  const ConnectedComponent = connect(mapStateToProps)(WrappedComponent);

  return (props) => <ConnectedComponent {...props} />;
};

export default withReduxState;