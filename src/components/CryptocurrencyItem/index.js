// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachList} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = eachList

  return (
    <li className="crypto-item-container">
      <div className="coin-logo-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="curency-valu-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
