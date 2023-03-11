import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import Users from "./users/Users";

// function App() {
//   const [data, setData] = useState<null | {}>(null);
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState("");
//
//   const onClick = () => setToggle(prev => !prev)
//
//   useEffect(() => {
//     setTimeout(() => {
//       setData({})
//     }, 100);
//   }, []);
//
//   return (
//     <div className="App">
//       <h1 data-testid="value-title">{value}</h1>
//       {toggle && (
//         <div data-testid="toggle-elem">toggle</div>
//       )}
//       {data && (
//         <div style={{color: 'red'}}>data</div>
//       )}
//       <h1>Hello world!</h1>
//       <button data-testid="toggle-button" onClick={onClick}>Click me</button>
//       <input onChange={(e) => setValue(e.target.value)} type="text" placeholder="input value...." />
//     </div>
//   );
// }

// integration tests with react router dom v6
const App = () => {
  return(
    <div>
      <Link data-testid="main-link" to="/">Main</Link>{" "}
      <Link data-testid="about-link" to="/about">About</Link>{" "}
      <Link data-testid="users-link" to="/users">Users</Link>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<UserDetailsPage />}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}

export default App;
