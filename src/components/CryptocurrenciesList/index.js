// Write your JS code here

import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {blogList} = this.props

    return (
      <div className="crypto-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-img"
        />
        <div className="currncy-list-container">
          <div className="headers-cointainer">
            <h1 className="headers">Coin Type</h1>
            <div className="currency-type-container">
              <h1 className="usd">USD</h1>
              <h1 className="euro">EURO</h1>
            </div>
          </div>

          <ul className="list-item-container">
            {blogList.map(eachList => (
              <CryptocurrencyItem eachList={eachList} key={eachList.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
