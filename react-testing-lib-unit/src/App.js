import React from 'react';
import './App.css';
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <AppRouter/>
    </div>
  )
}

// function App() {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState("");
//
//   const handleClick = () => {
//     setToggle(prev => !prev);
//   }
//
//   useEffect(() => {
//     setTimeout(() => {
//       setData({});
//     }, 100);
//   }, []);
//
//   return (
//     <div className="App">
//       <h1>Hello world</h1>
//       <h2>{data && <div className={'red'}>hello world2</div>}</h2>
//       {toggle && <div data-testid="toggle-elem">toggle</div>}
//       <button onClick={handleClick} data-testid="toggle-btn">Click me</button>
//       <input onChange={e => setValue(e.target.value)} type="text" placeholder="enter your name..." />
//       <div data-testid="value-elem">{value}</div>
//     </div>
//   );
// }

export default App;
