import './App.css';
import Menu from "./components/Menu.jsx";
import {menuItems} from "./siteconfigurations/navigation.js";
import {useState} from "react";
import {Outlet} from "react-router";
import {RefContext, ThemeContext} from "./contexts/contexts.js";
import axios from "axios";



function App() {

    const [theme, setTheme] = useState("light");
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState("");

    const handleLogIn = (email, password) => {
        loggedIn ? logOut() : logIn(email, password);
    }

    const getUser = () => {
        axios.get('/user/current')
            .then(response => {
                setUser(response.data);
            })
    }
    const logIn = (email, password) => {
        axios.post('/user/login?useCookies=true', {
            "email": email,
            "password": password
        })
            .then(response => {
                console.log(response);
                if(response.status === 200) {
                    setLoggedIn(true);
                    getUser();
                }
            });
    }

    const logOut = () => {
        axios.post('/user/logout', {})
            .then(response => {
                console.log(response);
                if(response.status === 200) {
                    setLoggedIn(false);
                    setUser("");
                }
            });
    }
    
  return (
      <RefContext value={{loggedIn, handleLogIn, user}}>
          <ThemeContext value={{theme, setTheme}}>
            <div className="container mx-auto font-[Open_Sans]">
                <Menu entries={menuItems}/>
                <div>
                    <Outlet />
                </div>
            </div>
          </ThemeContext>
      </RefContext>
  )
}

export default App
