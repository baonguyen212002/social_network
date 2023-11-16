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
import Login from "../auth/Login/";
import Register from "../auth/Register/";
import UpdateProfile from "../pages/UpdateProfile/inedex";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/*" element={<RootPage />}>

        <Route element={<HomePage />} index path="" />
        <Route element={<ExplorePage />} path="explore" />
        <Route element={<UpdateProfile />} path="update/user" />
        <Route element={<SearchPage />} path="search" />
        <Route element={<ProfilePage />} path="profile" />
        <Route element={<MessagesPage />} path="messages" />
        <Route element={<NotificationsPage />} path="notifications" />
        <Route element={<CreatesPage />} path="creates" />
      </Route>
    </Route>
  )
);
