import './App.css'
import Menu from "./components/Menu.jsx";
import {menuItems} from "./siteconfigurations/navigation.js";
import {useState} from "react";
import {Outlet} from "react-router";
import Container from "react-bootstrap/Container";
import {RefContext, ThemeContext} from "./contexts/contexts.js";



function App() {

    const [theme, setTheme] = useState("light");


  return (
      <RefContext value="Tobias">
          <ThemeContext value={theme}>
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
