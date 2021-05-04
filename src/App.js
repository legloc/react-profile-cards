import Card from './components/Card'

import JakeGyllenhaalImage from './images/JakeGyllenhaal.jpg'
import JoaquinPhoenixImage from './images/JoaquinPhoenix.jpg'
import MadsMikkelsenImage from './images/MadsMikkelsen.jpg'

import './App.sass';

const profiles = [{
  id: 1,
  name: 'Jake Gyllenhaal',
  image: JakeGyllenhaalImage
}, {
  id: 2,
  name: 'Joaquin Phoenix',
  image: JoaquinPhoenixImage
}, {
  id: 3,
  name: 'Mads Mikkelsen',
  image: MadsMikkelsenImage
}, ]

const App = () => (
  <div className="wrapper">
    { profiles.map(profile => (
      <Card key={ profile.id } name={ profile.name } image={ profile.image } />
    )) }
  </div>
)

export default App