import React, { Component } from 'react'

import Greeting from './components/greeting'

class App extends Component {
  // memanggil method constructor
  constructor(props) {
    super(props)

    // membuat state
    this.state = {
      // membuat state dengan properti data
      data: 'Hello World 2',

      // membuat state dengan properti greeting
      greeting: 'Selamat datang di aplikasi React.js',
    }
  }

  // membuat method untuk mengubah state data
  changeText = (event) => {
    // setState adalah method untuk mengubah state
    this.setState({
      data: "Selamat Datang"
    })
  }

  render() {
    // destructuring object
    const { data } = this.state

    return (
      <div className="app">
        {/* render state di class component */}
        <h1>state di class component: {data}</h1>

        {/* button untuk memanggil function changeText */}
        <button onClick={this.changeText}>Change Text</button>

        {/* render component dan forward props */}
        <Greeting {...this.state} changeText={this.changeText} />
      </div>
    )
  }
}

export default App