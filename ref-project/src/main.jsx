import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter} from "react-router";
import { RouterProvider } from "react-router";
import Edit from "./pages/Edit.jsx";
import File from "./pages/File.jsx";
import Format from "./pages/Format.jsx";
import View from "./pages/View.jsx";
import Window from "./pages/Window.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
      children: [
          {
              path: "/edit",
              Component: Edit,
              children: [
                  {
                      path: ":id",
                      element: <h2>Test</h2>,
                  }
              ]
          },
          {
              path: "/file",
              Component: File
          },
          {
              path: "/format",
              Component: Format
          },
          {
              path: "/view",
              Component: View
          },
          {
              path: "/window",
              Component: Window
          }
      ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
