import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { UserRoutes } from "./user.routes";
import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth()

  return (
    <BrowserRouter>
      {user ?
            (user.isAdmin ? <AdminRoutes /> : <UserRoutes />)
            : <AuthRoutes />}
    </BrowserRouter>
  )
}