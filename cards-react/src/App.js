import './App.css';

import Card from './components/card/card.component';

const posts = [
  { 
    title: 'Neat Tree',
    imageUrl: 'assets/tree.jpeg', 
    userName: 'nature',
    content: 'I saw this tree today', 
  },
  { 
    title: 'Snowy Mountain',
    imageUrl: 'assets/mountain.jpeg', 
    userName: 'mountainlover',
    content: 'Here is a pictureof a snowy mountain', 
  },
  { 
    title: 'Mountatin Biking',
    imageUrl: 'assets/biking.jpeg', 
    userName: 'biking12222',
    content: 'I did some biking today', 
  },
];

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

export default App;
