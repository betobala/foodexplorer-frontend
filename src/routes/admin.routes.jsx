import { Routes, Route } from "react-router-dom";

import { HomeAdmin } from "../pages/admin/HomeAdmin"
import { EditMealAdmin } from "../pages/admin/EditMealAdmin";
import { MealDetailsAdmin } from "../pages/admin/MealDetailsAdmin"
import { MenuAdmin } from "../pages/admin/MenuAdmin"
import { NewMealAdmin } from "../pages/admin/NewMealAdmin"
import { OrderHistoryAdmin } from "../pages/admin/OrderHistoryAdmin";
import { SearchResultsAdmin } from "../pages/admin/SearchResultsAdmin"

export function AdminRoutes(){
  return(
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/new" element={<NewMealAdmin />} />
      <Route path="/edit/:meal_id" element={<EditMealAdmin />} />
      <Route path="/details/:meal_id" element={<MealDetailsAdmin />} />
      <Route path="/menu" element={<MenuAdmin />} />
      <Route path="/history" element={<OrderHistoryAdmin />} />
      <Route path="/search" element={<SearchResultsAdmin />} />
    </Routes>
  )
}