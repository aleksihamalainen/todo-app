import React from "react";
import axios from "axios";
import NewActivityForm from "./components/NewActivityForm";
import DisplayTodo from "./components/DisplayTodo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      newActivity: ""
    };
  }

  componentDidMount() {
    const url = "/api/activities";
    axios
      .get(url)
      .then(response => this.setState({ activities: response.data }));
  }

  addActivity = event => {
    const url = "/api/activities";
    event.preventDefault();
    const newTodo = {
      content: this.state.newActivity,
      completed: false
    };
    axios.post(url, newTodo).then(response =>
      this.setState({
        activities: this.state.activities.concat(response.data),
        newActivity: ""
      })
    );
  };

  deleteActivity = event => {
    const url = "/api/activities";
    const id = event.target.getAttribute("id");
    axios.delete(`${url}/${id}`).then(response => {
      this.setState({
        activities: this.state.activities.filter(
          todo => todo.id.toString() !== id
        )
      });
    });
  };

  handleInputChange = event => {
    this.setState({ newActivity: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Todo-app</h1>
        <NewActivityForm
          addActivity={this.addActivity}
          handleInputChange={this.handleInputChange}
          newActivity={this.state.newActivity}
        />
        {this.state.activities.map(activity => (
          <DisplayTodo
            activity={activity}
            key={activity.id}
            deleteActivity={this.deleteActivity}
          />
        ))}
      </div>
    );
  }
}

export default App;
