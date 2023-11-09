// import { useDispatch } from 'react-redux';
// import { RouterProvider } from 'react-router-dom';
import './App.css';
// import { router } from './router';
import HomePage from './global/Home/HomePage';
import SideBar from './global/SideBar/SideBar';

// import * as actions from './redux/actions';

function App() {

  return <div>
    <SideBar />
    <HomePage />
  </div>;

  // return (
  //   <div>
  //     <RouterProvider router={router} />
  //   </div>
  // );
}

export default App;
