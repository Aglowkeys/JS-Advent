import podcast from './images/podcast-cover.png';
import Checkbox from './Checkbox'

function App() {

  return (
    <div className="App">
      <div className='div-podcast'>
        <img src={podcast} alt="portada del podcast" />
      </div>
      <div className='div-title'>
        <p>LISTEN TO ALL THE COMPRESSED.FM EPISODES</p>
        <Checkbox
          title='1 || Trailer'
        />
        <Checkbox
          title='2 || James Q Quick Origin Story'
        />
        <Checkbox
          title='3 || Amy Dutton’s Origin Story'
        />
        <Checkbox
          title='4 || Tech Behind the Podcast'
        />
        <Checkbox
          title='5 || Tech Behind SelfTeach.me'
        />
        <Checkbox
          title='6 || Freelancing (Part 1)'
        />
      </div>
    </div>
  )
}

export default App
