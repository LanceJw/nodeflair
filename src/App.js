import React from 'react'


import Navbar from './components/Navbar/Navbar';
import JobsContent from './components/Jobs/JobsContent';

function App() {
  return (
    <div>
      <Navbar/>
      <div style={{height: '105px'}}></div>
      <JobsContent />
    </div>
  );
}

export default App;
