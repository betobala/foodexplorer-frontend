import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/user/Home"
import { MealDetails } from "../pages/user/MealDetails"
import { Menu } from "../pages/user/Menu"
import { Favorites } from "../pages/user/Favorites"
import { Order } from "../pages/user/Order"
import { OrderHistory } from "../pages/user/OrderHistory";

export function UserRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/details/:meal_id" element={<MealDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/order" element={<Order />} />
      <Route path="/history" element={<OrderHistory />} />

    </Routes>
  )
}