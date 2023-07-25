// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    blogList: [],
    isLoading: true,
    id: '',
  }

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(eachBlog => ({
      currencyName: eachBlog.currency_name,
      usdValue: eachBlog.usd_value,
      euroValue: eachBlog.euro_value,
      currencyLogo: eachBlog.currency_logo,
      id: eachBlog.id,
    }))

    console.log(updatedData)

    this.setState({
      blogList: updatedData,
      isLoading: false,
      id: updatedData.map(eachItem => eachItem.id),
    })
  }

  render() {
    const {blogList, isLoading, id} = this.state

    const testId = isLoading ? 'loader' : ''

    return (
      <div data-testid={testId} className="tracker-container">
        {isLoading ? (
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        ) : (
          <CryptocurrenciesList blogList={blogList} key={id} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
