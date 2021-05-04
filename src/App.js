import Card from './components/Card'
import './App.sass';

const profiles = [{
  id: 1,
  name: 'Jake Gyllenhaal'
}, {
  id: 2,
  name: 'Joaquin Phoenix'
}, {
  id: 3,
  name: 'Mads Mikkelsen'
}, ]

const App = () => (
  <div className="wrapper">
    { profiles.map(profile => (
      <Card key={ profile.id } name={ profile.name } />
    )) }
  </div>
)

export default App