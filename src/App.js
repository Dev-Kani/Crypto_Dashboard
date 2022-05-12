import axios from 'axios';
import { useEffect, useState } from 'react'
import Coin from './components/Coin';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

const App = () => {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setCoins(res.data)
      })
      .catch((err) => {
      })
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder='Search'
            className='coin-input'
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin key={coin.id} coin={coin} />
        )
      })}
    </div>
  );
}

export default App;
