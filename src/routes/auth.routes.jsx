import { Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/auth/SignIn"
import { SignUp } from "../pages/auth/SignUp"


export function AuthRoutes(){
  return(
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  )
}