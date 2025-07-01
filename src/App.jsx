import React from 'react'
import {Header, Category, Types, Services, Banner, Reviews, Insta, Productsgrid, Footer} from './sections'


const App = () => {
  return (
    <>
    <Header />
    
    <Category/>
    <Types />
    <Services />
    <Productsgrid/>
    <Banner/>
    <Reviews/>
    <Insta/>
    <Footer/>
    </>
  )
}

export default App