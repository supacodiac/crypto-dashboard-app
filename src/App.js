import NewsFeed from './components/NewsFeed'
import CurrencyConverter from './components/CurrencyConverter'

const App = () => {
  return (
    <div className='app'>
      <h1>Crypto DashBoard</h1>
      <CurrencyConverter />
      {/* <NewsFeed /> */}
    </div>
  )
}

export default App
