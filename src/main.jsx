import React from "react";
import ReactDOM from "react-dom/client";
import store from "./Store/store.js";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Playlist from "./Playlist/Playlist.jsx";
import Body from "./Body/Body.jsx";
import Songs from "./Songs/Songs.jsx";
import Error from "./error component/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/playlist",
        errorElement: <Error />,
        element: <Playlist />,
      },
      {
        path: "/songlist",
        element: <Songs />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
