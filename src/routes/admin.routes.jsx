import { Routes, Route } from "react-router-dom";

import { HomeAdmin } from "../pages/admin/HomeAdmin"
import { EditMealAdmin } from "../pages/admin/EditMealAdmin";
import { MealDetailsAdmin } from "../pages/admin/MealDetailsAdmin"
import { MenuAdmin } from "../pages/admin/MenuAdmin"
import { NewMealAdmin } from "../pages/admin/NewMealAdmin"

export function AdminRoutes(){
  return(
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/new" element={<NewMealAdmin />} />
      <Route path="/edit/:meal_id" element={<EditMealAdmin />} />
      <Route path="/details/:meal_id" element={<MealDetailsAdmin />} />
      <Route path="/menu" element={<MenuAdmin />} />
    </Routes>
  )
}