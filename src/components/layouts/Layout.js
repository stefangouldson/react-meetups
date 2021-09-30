import React from 'react';
import MainNavigation from './MainNavigation'

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main style={{margin: '3rem auto', width: '90%', maxWidth: '40rem'}}>
        {props.children}
      </main>
    </>
  )
}

export default Layout
