import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      {userData.loading ? (
        <h1>Loading...</h1>
      ) : userData.err ? (
        <h1>Error: {userData.err}</h1>
      ) : (
        userData.users.map((user) => <div>{user.name}</div>)
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { userData: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return { fetchUsers: () => dispatch(fetchUsers()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
