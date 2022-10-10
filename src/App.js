import './App.css';
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "*",
          element: <h1>404 Not Found</h1>,
        }
      ]
    },
  ]);
  return (
    <div className="App">
      {/* <Main></Main> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
