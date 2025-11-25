import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/Menu.jsx";
import {menuItems} from "./siteconfigurations/navigation.js";
import {useState} from "react";
import {Outlet} from "react-router";
import Container from "react-bootstrap/Container";
import {RefContext, ThemeContext} from "./contexts/contexts.js";
import axios from "axios";



function App() {

    const [theme, setTheme] = useState("light");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogIn = () => {
        loggedIn ? logOut() : logIn();
    }

    const logIn = () => {
        axios.post('/user/login?useCookies=true', {
            "email": "tobias@lexicon.se",
            "password": "Group57%"
        })
            .then(response => {
                console.log(response);
                if(response.status === 200) {
                    setLoggedIn(true);
                }
            });
    }

    const logOut = () => {
        axios.post('/user/logout', {})
            .then(response => {
                console.log(response);
                if(response.status === 200) {
                    setLoggedIn(false);
                }
            });
    }


  return (
      <RefContext value={{loggedIn, handleLogIn}}>
          <ThemeContext value={{theme, setTheme}}>
            <Container>
                <Menu entries={menuItems}/>
                <div>
                    <Outlet />


                </div>


            </Container>
          </ThemeContext>
      </RefContext>
  )
}

export default App
