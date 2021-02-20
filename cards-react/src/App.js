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
    <div>
      <Card
        title={posts[0].title}
        imageUrl={posts[0].imageUrl}
        userName={posts[0].userName}
        content={posts[0].content}
      />
      <Card
        title={posts[1].title}
        imageUrl={posts[1].imageUrl}
        userName={posts[1].userName}
        content={posts[1].content}
      />
      <Card
        title={posts[2].title}
        imageUrl={posts[2].imageUrl}
        userName={posts[2].userName}
        content={posts[2].content}
      />
    </div>
  );
}

export default App;
