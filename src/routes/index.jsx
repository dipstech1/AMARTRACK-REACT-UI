import React, { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
// import AuthGuard from "../guard/authguard";
// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <Suspense fallback={<div></div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // {
    //   path: "/role-management",
    //   element: (
    //     <AuthGuard background={true}>
    //       <RolemanagementIndex />
    //     </AuthGuard>
    //   ),
    // },
    {
      path: "/our-story",
      element: <OurStoryIndex />,
    },
    {
      path: "/",
      element: <HomeIndex />,
    },
    {
      path: "/",
      element: <Navigate to={"/"} replace />,
    },

    { path: "*", element: <Navigate to="/" replace /> },
  ]);
}

const OurStoryIndex = Loadable(lazy(() => import("../pages/Ourstory")));
const HomeIndex = Loadable(lazy(() => import("../pages/Home")));
