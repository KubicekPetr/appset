import React, { useState } from 'react';
import './App.css';

const App = () => {
  let [currentPage, setCurrentPage] = useState(0);
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
          <li onClick={() => setCurrentPage(prev => prev - 1)} className={`page-item ${currentPage <= 0 ? 'disabled' : ''}`}>
            <a className="page-link">Previous</a>
          </li>
          {
            images.map((image, idx) => {
              if (idx < 5) {
                return (
                  <li
                    key={idx}
                    className={`page-item ${idx === currentPage ? 'active' : ''}`}
                    onClick={() => setCurrentPage(idx)}
                  >
                    <a className="page-link">{idx + 1}</a>
                  </li>
                );
              }
            })
          }
          <li onClick={() => setCurrentPage(prev => prev + 1)} className={`page-item ${currentPage >= images.length - 1 ? 'disabled' : ''}`}>
            <a className="page-link">Next</a>
          </li>
        </div>
      </nav>
      {
        images[currentPage] ?
          (<div>
            <h4>{images[currentPage].title}</h4>
            <img src={images[currentPage].url} height="680" alt={images[currentPage].title} />
          </div>) :
          null
      }
    </div>
  );
}

export default App;
