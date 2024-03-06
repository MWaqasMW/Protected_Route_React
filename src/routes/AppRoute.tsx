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
// import Login from "../pages/Login";
// import Path from './Path';
// import NotFound from "../pages/NotFound";
// import Home from '../pages/Home';

// // Define an array of route objects
// const routes = [
//   {
//     path: Path.PAITIANTMAIN,
//     roles: ["patient"],
//     element: <MainPaitient />,
//   },
//   {
//     path: Path.PAITIANTDASH,
//     roles: ["patient"],
//     element: <PaitientDashborad />,
//   },
//   {
//     path: Path.PROVIDERMAIN,
//     roles: ["provider"],
//     element: <MainProvider />,
//   },
//   {
//     path: Path.PROVIDERDASH,
//     roles: ["provider"],
//     element: <ProviderDashborad />,
//   },
//   {
//     path: Path.LOGIN,
//     element: <Login />,
//   },
//   {
//     path: Path.HOME,
//     element: <Home />,
//   },
// ];

// function AppRouter() {
//   const userString = localStorage.getItem("user");
//   const user = JSON.parse(userString);

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             user ? (
//               user.role === "patient" ? (
//                 <Navigate to={Path.PAITIANTDASH} />
//               ) : user.role === "provider" ? (
//                 <Navigate to={Path.PROVIDERDASH} />
//               ) : (
//                 <Navigate to={Path.HOME} />
//               )
//             ) : (
//               <Navigate to={Path.LOGIN} />
//             )
//           }
//         />

//         {routes.map(({ path, roles, element }, index) => (
//           <Route
//             key={index}
//             path={path}
//             element={<ProtectedRoute roles={roles}>{element}</ProtectedRoute>}
//           />
//         ))}
//         <Route path="*" element={<NotFound />} />
//         <Route path={Path.LOGIN} element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default AppRouter;

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

// AppRouter.js
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import MainPatient from "../pages/paitient/Main";
import MainProvider from "../pages/provider/Main";
import ProviderDashboard from "../pages/provider/Dashborad";
import PatientDashboard from "../pages/paitient/Dashborad";
import Login from "../pages/Login";
import Path from "./Path";
import Home from "../pages/Home";

const routes = [
  { path: Path.PAITIANTMAIN, roles: ["patient"], component: MainPatient },
  { path: Path.PAITIANTDASH, roles: ["patient"], component: PatientDashboard },
  { path: Path.PROVIDERMAIN, roles: ["provider"], component: MainProvider },
  {
    path: Path.PROVIDERDASH,
    roles: ["provider"],
    component: ProviderDashboard,
  },
  { path: Path.LOGIN, component: Login },
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
                replace
              />
            }
          />
        )}
        <Route path={Path.LOGIN} element={<Login />} />

        <Route
          path={Path.HOME}
          element={
            user ? (
              <Navigate
                to={
                  user.role === "patient"
                    ? Path.PAITIANTMAIN
                    : Path.PROVIDERMAIN
                }
                replace
              />
            ) : (
              <Home />
            )
          }
        />

        {routes.map(({ path, roles, component: Component }, index) => (
          <Route
            key={index}
            path={path}
            element={
              user && roles?.includes(user.role) ? (
                <ProtectedRoute roles={roles}>
                  <Component />
                </ProtectedRoute>
              ) : user?.role === "patient" ? (
                <Navigate to={Path.PAITIANTMAIN} replace />
              ) : user?.role === "provider" ? (
                <Navigate to={Path.PROVIDERMAIN} replace />
              ) : (
                <Navigate to={Path.HOME} replace />
              )
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default AppRouter;
