import './App.css';

import Card from './components/card/card.component';

const posts = [
  {
    title: 'Neat Tree',
    imageUrl: 'tree.jpeg',
    userName: 'nature',
    content: 'I saw this tree today',
  },
  {
    title: 'Snowy Mountain',
    imageUrl: 'mountain.jpeg',
    userName: 'mountainlover',
    content: 'Here is a pictureof a snowy mountain',
  },
  {
    title: 'Mountatin Biking',
    imageUrl: 'biking.jpeg',
    userName: 'biking12222',
    content: 'I did some biking today',
  },
];

function App() {
  return (
    <div className="App">
      {
        posts.map(({title, imageUrl, userName, content}) => (
          <Card
            key={title}
            title={title}
            imageUrl={imageUrl}
            userName={userName}
            content={content}
          />
        ))
      }
    </div>
  );
}

export default App;
