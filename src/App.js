import React from 'react'
import Navbar from './components/header/Navbar';
import Navitems from './components/header/Navitems';
import Dropdown from './components/header/Dropdown';
function App() {
  return (
    <>
    <Navbar>
      <Navitems name="👍">
      <Dropdown/>
      </Navitems>
      <Navitems name="✌️">
      <Dropdown/>
      </Navitems>
      <Navitems name="👌">
      <Dropdown/>
      </Navitems>
      <Navitems name="🤞">
        <Dropdown/>
      </Navitems>
    </Navbar>
    </>
  );
}

export default App;
