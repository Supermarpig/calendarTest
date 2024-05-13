import Single from './components/single'
import Range from './components/range'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='flex flex-col items-center justify-start'>

          <div className='max-w-[350px]'>
            <Single />
          </div>

          <div className='max-w-[350px]'>
            <Range />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;