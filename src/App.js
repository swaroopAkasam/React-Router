import React, { Component } from "react";
import UserProfile from "./components/UserProfile";
import "./App.css";

const intialUserList = [
  { id : 1,fName: "John", lName: "Doe", favColor: "blue" },
  { id : 2,fName: "Jane", lName: "Smith", favColor: "green" },
  { id : 3,fName: "Alice", lName: "Johnson", favColor: "red" },
  { id : 4,fName: "Bob", lName: "Brown", favColor: "purple" },
]
class App extends Component {
  state = {
    searchInput : "",
    userList : intialUserList
  }
  onChangeSearchInput = (event) => {
    this.setState({
      searchInput : event.target.value
    })
  }
  onDelete = (id) => {
    const {userList} = this.state
    const filteredUserList = userList.filter(
      each => each.id !== id
    )
    this.setState({
      userList : filteredUserList
    })
  }

  render() {
    const {searchInput, userList} = this.state
    const searchResults = userList.filter((eachUser)=>
      eachUser.fName.toLowerCase().includes(searchInput.toLowerCase()) ||
      eachUser.lName.toLowerCase().includes(searchInput.toLowerCase())
    )
    return (
      <div className="app-container">
        <h1 className="title">User List</h1>
        <input
         className="search-input"
         type="search" 
         onChange={this.onChangeSearchInput}
         value={searchInput}
        />
        <ul className="list-container">
          {
            searchResults.map(user => (
              <li key={user.id}><UserProfile user={user} onDelete={this.onDelete}/></li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default App;