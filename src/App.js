import React, { Component } from 'react'

import './app.css'

import Greeting from './components/greeting'
import Information from './components/information'
import InputName from './components/input-name'
import InputAge from './components/input-age'

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

      // membuat state is information show dengan default value false
      isInformationShow: false,

      // membuat state person
      person: {
        name: 'Bagus', age: 25
      }
    }
  }

  // membuat method untuk mengubah state data
  changeText = (event) => {
    // setState adalah method untuk mengubah state
    this.setState({
      data: "Selamat Datang"
    })
  }

  // membuat fungsi untuk mengubah state isInformationShow
  showInformation = (event) => {
    this.setState({
      isInformationShow: !this.state.isInformationShow
    })
  }

  changePerson = (event, property) => {
    this.setState({
      person: {
        ...this.state.person,
        [property]: event.target.value
      }
    })
  }

  render() {
    // destructuring object
    const { data, isInformationShow, person } = this.state

    return (
      <div className="app">
        {/* render state di class component */}
        <h1 id="judul">state di class component: {data}</h1>

        {/* button untuk memanggil function changeText */}
        <button onClick={this.changeText}>Change Text</button>

        {/* render component dan forward props */}
        <Greeting {...this.state} changeText={this.changeText} />

        {/* render component information */}
        <Information isInformationShow={isInformationShow} showInformation={this.showInformation} />

        <br>
        </br>

        <InputName person={person} changePerson={this.changePerson} />
        <InputAge person={person} changePerson={this.changePerson} />
      </div>
    )
  }
}

export default App