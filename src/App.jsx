import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalContext from "./contexts/GlobalContext";
import MasterLayout from "./layouts/MasterLayout";
import Homepage from "./pages/Homepage";
import DetailPage from "./pages/DetailPage";


function App() {

  const [activePage, setActivePage] = useState("about");
  const [isLoading, setIsLoading] = useState(false)

  return (
    <GlobalContext.Provider value={{ activePage, setActivePage, isLoading, setIsLoading }}>
      <HashRouter>
        <Routes>
          <Route element={<MasterLayout />}>
            <Route index element={<Homepage />} />
            <Route path="projects/:id" element={<DetailPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </GlobalContext.Provider>
  )
}

export default App
