import './App.css';
import { Link } from 'react-router-dom';

import RoutedModules from './Routing';


function App() {
  return (
    <div>
      <Link to="/elements">Elements</Link>
      <Link to="/collections">Collections</Link>
      <RoutedModules></RoutedModules>
    </div>
  );
}

export default App;
