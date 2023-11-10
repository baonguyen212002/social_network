// import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router';

// import * as actions from './redux/actions';

function App() {

  return <div>
    <div>
      <RouterProvider router={router} />
    </div>
  </div>;

}

export default App;
