//Layouts
import { HeaderOnly } from "~/components/Layout";
import Home from "~/pages/Following";
import Following from "~/pages/Home";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";

// Public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile, layout: null },
  { path: "/upload", component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
