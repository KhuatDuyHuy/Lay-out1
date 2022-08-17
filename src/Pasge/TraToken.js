// import '../Pasge/Gd3.css';
import React from "react";


class TraToken extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userList: [],
        loading: false
      }
      this.getUserList = this.getUserList.bind(this);
    }
   
    getUserList() {
      this.setState({ loading: true });
      fetch('https://reqres.in/api/users/?per_page=5&page=2')
        .then(res => res.json())
        .then(res => {
          setTimeout(() => {
            this.setState({ loading: false, userList: res.data });
          }, 2000);
        })
    }
    render() {
      const { userList, loading } = this.state;
   
      return (
        <div className="container App">
   
          <h4 className="d-inline-block">ReactJS How to call API - fetch then json</h4>
          <button className="btn btn-info float-right" onClick={this.getUserList} disabled={loading}>{loading ? 'Loading...' : 'Show User List'}</button>
          <div className="clearfix"></div>
   
          <table className="table table-striped">
            <thead className="thead-light ">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Avatar</th>
            </thead>
            <tbody>
              {userList.map(row => <tr>
                <td>{row.first_name}</td>
                <td>{row.last_name}</td>
                <td>{row.email}</td>
                <td><img src={row.avatar} width="50" height="50" /></td>
              </tr>)}
              {userList.length == 0 && <tr>
                <td className="text-center" colSpan="4">
                  <b>No data found to display.</b>
                </td>
              </tr>}
            </tbody>
          </table>
   
        </div>
      );
    }
  }
   

export default TraToken;