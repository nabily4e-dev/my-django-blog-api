import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import axios from 'axios';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getPosts();
  }
  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    axios
      .get('http://127.0.0.1:8000/api/v1/')
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (<div>
      {this.state.posts.map(item => (
        <div key={item.id}>
          {/* <h1>{item.author}</h1> */}
          <h1>{item.title}</h1>
          <span>{item.body}</span>
        </div>
      ))}
    </div>
    );
  }
}

export default App;