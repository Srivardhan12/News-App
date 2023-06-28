

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/AllNews';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer';

const App = () => {
  const pageSize = 8;
  const apiKey = "c57cac9af0924c5393dce894e5624482"
  // const apiKey = "29ca7a229f534d31844684528ea24228"
  // const apiKey = "a2bea113ca204171b5d41cf8888ecbee"
  const [progress, setProgress] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          height={4}
          color="#E21818"
          progress={progress} />
        <Routes>
          {/* // eslint-disable-line */}
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
        </Routes>
        <Routes>
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
        </Routes>
        <Routes>
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
        </Routes>
        <Routes>
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
        </Routes>
        <Routes>
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
        </Routes>
        <Routes>
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
        </Routes>
        <Routes>
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )

}

export default App;