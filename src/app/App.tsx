import Pomodoro from "@pages/Pomodoro";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Tasks from "@pages/Tasks/ui/Tasks.tsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pomodoro />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
