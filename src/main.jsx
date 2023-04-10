import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistices';
import Blog from './components/Blog/Blog';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import loadFeaturedJobs from './loader/loadFeaturedJobs';
import JobDetails from './components/JobDetail/JobDetail';
import Header from './components/Header/header';
import loadJobDetails from './loader/loadJobDetails';
import cartAppliedJobLoader from './loader/cartAppliedJobLoader';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home />, loader: loadFeaturedJobs },
      { path: '/applied-jobs', element: <AppliedJobs />, loader: cartAppliedJobLoader },
      { path: '/blog', element: <Blog /> },
      { path: '/statistics', element: <Statistics /> },
      { path: '/job-details/:id', element: <JobDetails />, loader: loadJobDetails }
    ]

  },
  {
    path: 'header',
    element: <Header />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
