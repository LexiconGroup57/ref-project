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
import {ThemeContext} from "./contexts/contexts.js";
import Dndkit from "./components/Dndkit.jsx";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient();

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
    {
        path: "/draganddrop",
        Component: Dndkit,
    }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeContext value="dark">
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
      </ThemeContext>
  </StrictMode>,
)
