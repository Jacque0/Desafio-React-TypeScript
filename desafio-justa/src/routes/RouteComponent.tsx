import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailsPage from '../pages/DetailsPage/DetailsPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import HomePage from '../pages/HomePage/HomePage'


export default function RouteComponent() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/details/:name' element={<DetailsPage/>} />
            <Route path='*' element={<ErrorPage/>} />
          </Routes>
      </BrowserRouter>
    )
  }