// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onAddLetters = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-cont">
        <div className="cal-desc">
          <h1 className="main-heading">
            Calculate the <br /> Letters you <br /> enter
          </h1>
          <label htmlFor="textInput" className="para2">
            Enter the phrase
          </label>
          <br />
          <input
            className="cal-input"
            type="text"
            id="textInput"
            onChange={this.onAddLetters}
            placeholder="Enter the phrase"
          />
          <div className="noofletters-cont">
            <p className="para">No.of letters: {count}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="cal-image"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
