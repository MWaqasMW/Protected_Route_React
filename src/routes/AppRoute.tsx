import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import MainPaitient from "../pages/paitient/Main";
import MainProvider from "../pages/provider/Main";
import ProviderDashborad from "../pages/provider/Dashborad";
import PaitientDashborad from "../pages/paitient/Dashborad";
import Login from "../pages/Login";
import Path from "./Path";
import NotFound from "../pages/NotFound";

// Define an array of route objects
const routes = [
  {
    path: Path.PAITIANTMAIN,
    roles: ["patient"],
    element: <MainPaitient />,
  },
  {
    path: Path.PAITIANTDASH,
    roles: ["patient"],
    element: <PaitientDashborad />,
  },
  {
    path: Path.PROVIDERMAIN,
    roles: ["provider"],
    element: <MainProvider />,
  },
  {
    path: Path.PROVIDERDASH,
    roles: ["provider"],
    element: <ProviderDashborad />,
  },
  {
    path: Path.LOGIN,
    roles: [],
    element: <Login />,
  },
];

function AppRouter() {
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);

  return (
    <Router>
      <Routes>
        {user && (
          <Route
            path={Path.LOGIN}
            element={
              <Navigate
                to={
                  user.role === "patient"
                    ? Path.PAITIANTMAIN
                    : user.role === "provider"
                    ? Path.PROVIDERMAIN
                    : Path.HOME
                }
              />
            }
          />
        )}

        {routes.map(({ path, roles, element }, index) => (
          <Route
            key={index}
            path={path}
            element={<ProtectedRoute roles={roles}>{element}</ProtectedRoute>}
          />
        ))}
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default AppRouter;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
// import MainPaitient from "../pages/paitient/Main";
// import MainProvider from "../pages/provider/Main";
// import ProviderDashborad from "../pages/provider/Dashborad";
// import PaitientDashborad from "../pages/paitient/Dashborad";
// import Path from "./Path";
// import Login from "../pages/Login";

// function AppRouter() {
//   const userString = localStorage.getItem("user");
//   const user = JSON.parse(userString);

//   return (
//     <Router>
//       <Routes>
//         {/* Redirect to main route if user is already logged in */}
//         {user && (
//           <Route
//             path={Path.LOGIN}
//             element={
//               <Navigate
//                 to={
//                   user.role === "patient"
//                     ? Path.PAITIANTMAIN
//                     : Path.PROVIDERMAIN
//                 }
//               />
//             }
//           />
//         )}

//         <Route
//           path={Path.PAITIANTMAIN}
//           element={
//             <ProtectedRoute roles={["patient"]}>
//               <MainPaitient />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path={Path.PAITIANTDASH}
//           element={
//             <ProtectedRoute roles={["patient"]}>
//               <PaitientDashborad />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path={Path.PROVIDERMAIN}
//           element={
//             <ProtectedRoute roles={["provider"]}>
//               <MainProvider />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path={Path.PROVIDERDASH}
//           element={
//             <ProtectedRoute roles={["provider"]}>
//               <ProviderDashborad />
//             </ProtectedRoute>
//           }
//         />
//         <Route path={Path.LOGIN} element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default AppRouter;
