import React from 'react';
import { ToDoPage } from './Components/pages/ToDoPage';

import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import InfoPage from './Components/pages/infoPage';

const App: React.FC = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ToDoPage />
      ),
    },
    {
      path: "info",
      element: <InfoPage />
    },

    // return (
    //   <>
    //  <Router>
    //   <Switch></Switch>
    //  </Router>

    //     <ToDoPage />
    //   </>
    // );
    // }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App;
