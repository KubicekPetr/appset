import './App.css';

import Card from './components/card/card.component';

function App() {
  return (
    <div>
      <Card />
      <Card />
      <Card />
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="tree.jpeg" alt="tree" />
          </figure>
        </div>

        <div class="card-content">
          <div class="media-content">
            <p class="title is-4">Neat tree</p>
            <p class="subtitle is-6">@nature</p>
          </div>
          <div class="content">
            Saw this awesome tree during my hike today.
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
