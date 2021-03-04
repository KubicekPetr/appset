import './App.css';

const App = () => {
  const images = [
    {
      title: 'Table setup',
      url: 'https://images.unsplash.com/photo-1605918321755-0b5ffd8a796a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80',
    },
    {
      title: 'Flower setup',
      url: 'https://images.unsplash.com/photo-1611175694989-4870fafa4494?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODV8fHF1YW50dW0lMjBwcm9ncmFtbWluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Coffee setup',
      url: 'https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODh8fHF1YW50dW0lMjBwcm9ncmFtbWluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Apple setup',
      url: 'https://images.unsplash.com/photo-1611485916153-fce531587fe0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE4fHxxdWFudHVtJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Drug setup',
      url: 'https://images.unsplash.com/photo-1536786506364-50dc273a824f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTI2fHxxdWFudHVtJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];

  return (
    <div className="App">
      <nav>
        <div className="pagination">
          {
            images.map((image, idx) => {
              return (
                <li key={idx} className="page-item">
                  <a className="page-link">{idx + 1}</a>
                </li>
              );
            })
          }
        </div>
      </nav>
    </div>
  );
}

export default App;
