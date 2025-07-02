import React from 'react'
import {Header, Hero, Category, Types, Services, Banner, Reviews, Insta, Productsgrid, Footer} from './sections'


const App = () => {
  return (
    <>
    <Header />
      <Hero />
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