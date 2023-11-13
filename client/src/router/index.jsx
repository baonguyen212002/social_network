import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import CreatesPage from "../pages/creates";
import ExplorePage from "../pages/explore";
import HomePage from "../global/Home";
import MessagesPage from "../pages/messages";
import NotificationsPage from "../pages/notifications";
import ProfilePage from "../pages/Profile";
import RootPage from "../global/root";
import SearchPage from "../pages/search";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ForgotPass from "../auth/ForgotPass";

// kiểm tra trạng thái login
const isLoggedIn = false;
//chỉnh sửa isLoggedIn bằng true false nếu login thành công hoặc thất bại/ chưa login

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {isLoggedIn ? (
        // Nếu login thành công thì HomePage sẽ là trang mặc định
        <Route element={<RootPage />} path="/">
          <Route element={<HomePage />} index path="" />
          <Route element={<ExplorePage />} path="explore" />
          <Route element={<SearchPage />} path="search" />
          <Route element={<ProfilePage />} path="profile" />
          <Route element={<MessagesPage />} path="messages" />
          <Route element={<NotificationsPage />} path="notifications" />
          <Route element={<CreatesPage />} path="creates" />
        </Route>
      ) : (
        // Nếu không login thành công thì Login sẽ là trang mặc định
        <Route path="/" >
          <Route element={<Login />} index path=""/>
          <Route element={<Register />} path="register" />
          <Route element={<ForgotPass />} path="forgotpass" />
        </Route>
      )}
    </Route>
  )
);
