import './App.css';
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import QuizDetails from './components/QuizDetails/QuizDetails';
import ErrorRoute from './components/ErrorRoute/ErrorRoute';
import Topics from './components/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz")
        },
        {
          path: "/topics",
          element: <Topics></Topics>,
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz")
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "quiz/:quizId",
          element: <QuizDetails></QuizDetails>,
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        {
          path: "topics/quiz/:quizId",
          element: <QuizDetails></QuizDetails>,
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        {
          path: "*",
          element: <ErrorRoute></ErrorRoute>,
        },
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
