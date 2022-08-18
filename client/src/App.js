import React from 'react';
import { AppShell, Navbar, NavLink, Header } from '@mantine/core'; import './App.css';
import './App.css';
function App() {
  return (

    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 300 }} height={1000} p="xs" className='NavBar'>{
        <>
          <NavLink icon={<p>Home</p>} className='NavLink' />
          <NavLink icon={<p>About</p>} className='NavLink' />
          <NavLink icon={<p>Products</p>} className='NavLink' />
          <NavLink icon={<p>Contact Us</p>} className='NavLink' />
        </>
      }</Navbar>}
      header={<Header height={82}>{
        <h1>K Surf</h1>

        
      }</Header>

      }
      className='App'
    >

    
    </AppShell>




  );
}

export default App;
