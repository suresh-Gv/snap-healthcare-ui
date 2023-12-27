import React from "react";



const UserDetailView = ({ match }) => {
    const { userId } = match.params;
    return <div>User Detail View for User ID: {userId}</div>;
  };

export default UserDetailView;