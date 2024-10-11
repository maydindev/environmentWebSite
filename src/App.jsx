import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="signup" element={<SignUp/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
      <Dashboard />
    </BrowserRouter>
  );
}

export default App;
