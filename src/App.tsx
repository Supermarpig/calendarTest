import Single from './components/single'
import Range from './components/range'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='max-w-[350px]'>
          <Single />
        </div>

        <div className='max-w-[350px]'>
          <Range />
        </div>
      </header>
    </div>
  );
}

export default App;