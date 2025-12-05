import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css';
import App from './App.jsx'
import {createBrowserRouter} from "react-router";
import { RouterProvider } from "react-router";
import Search from "./pages/Search.jsx";
import Home from "./pages/Home.jsx";
import Saved from "./pages/Saved.jsx";
import Dndkit from "./components/Dndkit.jsx";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Login from "./pages/Login.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
      children: [
          {
              path: "/home",
              Component: Home
          },
          {
              path: "/search",
              Component: Search
          },
          {
              path: "/saved",
              Component: Saved
          },
          {
              path: "/login",
              Component: Login
          }
      ]

  },
    {
        path: "/draganddrop",
        Component: Dndkit,
    }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
  </StrictMode>,
)
