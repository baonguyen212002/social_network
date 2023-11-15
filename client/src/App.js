// import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router';

import * as actions from './redux/actions/message';
import  io  from 'socket.io-client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messageState$ } from './redux/selectors';

// "undefined" means the URL will be computed from the `window.location` object
const URL =  'http://localhost:5001/';
const socket = io.connect(URL)
// const [isConnected, setIsConnected] = useState(socket.connected);
//   socket.emit('mess',"a")

function App() {
  // const dispatch =useDispatch()
  // const messages = useSelector(messageState$);
  //   socket.on('receiver', (data)=>{
  //     console.log(messages.data.push(data));
  //   });
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
