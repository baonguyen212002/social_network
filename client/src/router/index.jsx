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
import UpdateProfile from "../pages/UpdateProfile/inedex";


export const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<RootPage />}>

        <Route element={<HomePage />} path="" />
        <Route element={<HomePage />} path="/home" />
        <Route element={<ExplorePage />} path="explore" />
        <Route element={<UpdateProfile />} path="update/user" />
        <Route element={<SearchPage />} path="search" />
        <Route element={<ProfilePage />} path="profile" />
        <Route element={<MessagesPage />} path="messages" />
        <Route element={<NotificationsPage />} path="notifications" />
        <Route element={<CreatesPage />} path="creates" />
      </Route>
  )
);
