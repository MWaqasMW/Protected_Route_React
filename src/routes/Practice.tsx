// // AppRouter.js
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
// import Path from "./pathConstants";
// import Home from "../features/Home";
// import Login from "../features/auth/pages/Login";
// import ProviderDashboard from "../features/provider/dashboard/Index";
// import ProviderEducation from "../features/provider/education/components/ProviderEducation";
// import ProviderStepsToOrder from "../features/provider/education/components/StepsToOrder";
// import ProviderMedsPgx from "../features/provider/education/components/MedsPgx";
// import ProviderDrugGene from "../features/provider/education/components/DrugGeneHerb";
// import ProviderInbox from "../features/provider/inbox/Index";
// import ProviderOrders from "../features/provider/orders/Index";
// import ProviderPatients from "../features/provider/patients/Index";
// import PatientDashboard from "../features/patient/dashboard/Index";
// import PatientEducation from "../features/patient/education/Index";
// import PatientOrder from "../features/patient/order/Index";
// import PatientSettings from "../features/patient/settings/Index";
// import FirstLogin from "../features/patient/firstlogin/Index";
// import EmailVerify from "../features/auth/pages/EmailVerified";
// import PatientConsentForm from "../features/patient/consent/Index";
// import NotFound from "../features/404/PageNotFound";
// import TermsAndConditions from "../features/common/termsanduse/TermsAndCondition";
// import Privacy from "../features/common/privacy/Privacy";
// import Layout from "../features/common/layout/Layout";
// import Register from "../features/auth/pages/Register";

// const routes = [
//   {
//     path: Path.PROVIDEREDUCATION,
//     roles: ["provider"],
//     element: <ProviderEducation />,
//   },
//   {
//     path: Path.PROVIDERDASHBOARD,
//     roles: ["provider"],
//     element: <ProviderDashboard />,
//   },
//   {
//     path: Path.PROVIDERSTEPSTOORDER,
//     roles: ["provider"],
//     element: <ProviderStepsToOrder />,
//   },
//   {
//     path: Path.PROVIDERMEDSPGX,
//     roles: ["provider"],
//     element: <ProviderMedsPgx />,
//   },
//   {
//     path: Path.PROVIDERDRUGINTERACTIONS,
//     roles: ["provider"],
//     element: <ProviderDrugGene />,
//   },
//   {
//     path: Path.PROVIDERINBOX,
//     roles: ["provider"],
//     element: <ProviderInbox />,
//   },
//   {
//     path: Path.PROVIDERORDERS,
//     roles: ["provider"],
//     element: <ProviderOrders />,
//   },
//   {
//     path: Path.PROVIDERPATIENTS,
//     roles: ["provider"],
//     element: <ProviderPatients />,
//   },
//   {
//     path: Path.PROVIDEREDUCATION,
//     roles: ["provider"],
//     element: <ProviderEducation />,
//   },
//   {
//     path: Path.PATIENTDASHBOARD,
//     roles: ["patient"],
//     element: <PatientDashboard />,
//   },
//   {
//     path: Path.PATIENTEDUCATION,
//     roles: ["patient"],
//     element: <PatientEducation />,
//   },
//   {
//     path: Path.PATIENTORDER,
//     roles: ["patient"],
//     element: <PatientOrder />,
//   },
//   {
//     path: Path.PATIENTSETTINGS,
//     roles: ["patient"],
//     element: <PatientSettings />,
//   },
//   {
//     path: Path.PATIENTFIRSTLOGIN,
//     roles: ["patient"],
//     element: <FirstLogin />,
//   },
//   {
//     path: Path.PATIENTCONSENTFORM,
//     roles: ["patient"],
//     element: <PatientConsentForm />,
//   },
//   {
//     path: Path.PATIENTFIRSTLOGIN,
//     roles: ["patient"],
//     element: <FirstLogin />,
//   },
//   {
//     path: Path.USEREMAILVERIFICATION,
//     roles: ["patient"],
//     element: <EmailVerify />,
//   },
//   {
//     path: Path.PUBLICTERMSCONDITIONS,
//     element: <TermsAndConditions />,
//   },
//   {
//     path: Path.PUBLICPRIVACY,
//     element: <Privacy />,
//   },
//   {
//     path: Path.LOGIN,
//     // roles: [],
//     element: <Login />,
//   },
// ];

// function AppRouter() {
//   const role = localStorage.getItem("role");
//   console.log("role", role);
//   // const user = JSON.parse(userString);

//   return (
//     <Router>
//       <Routes>
//         <Route element={<Layout />}>
//           {role && (
//             <Route
//               path={Path.LOGIN}
//               element={
//                 <Navigate
//                   to={
//                     role === "patient"
//                       ? Path.PATIENTDASHBOARD
//                       : role === "provider"
//                       ? Path.PROVIDERDASHBOARD
//                       : Path.HOME
//                   }
//                   replace
//                 />
//               }
//             />
//           )}
//           {role && (
//             <Route
//               path={Path.LOGIN}
//               element={
//                 <Navigate
//                   to={
//                     role === "patient"
//                       ? Path.PATIENTDASHBOARD
//                       : role === "provider"
//                       ? Path.PROVIDERDASHBOARD
//                       : Path.HOME
//                   }
//                   replace
//                 />
//               }
//             />
//           )}
//           {role && (
//             <Route
//               path={Path.REGISTER}
//               element={
//                 <Navigate
//                   to={
//                     role === "patient"
//                       ? Path.PATIENTDASHBOARD
//                       : role === "provider"
//                       ? Path.PROVIDERDASHBOARD
//                       : Path.HOME
//                   }
//                   replace
//                 />
//               }
//             />
//           )}
//           <Route path={Path.LOGIN} element={<Login />} />
//           <Route path={Path.REGISTER} element={<Register />} />

//           <Route
//             path={Path.HOME}
//             element={
//               role ? (
//                 <Navigate
//                   to={
//                     role === "patient"
//                       ? Path.PATIENTDASHBOARD
//                       : Path.PROVIDERDASHBOARD
//                   }
//                   replace
//                 />
//               ) : (
//                 <Home />
//               )
//             }
//           />

//           <Route path={Path.LOGIN} element={<Login />} />
//           <Route path={Path.HOME} element={<Home />} />

//           {routes?.map(({ path, roles, element }, index) => (
//             <Route
//               key={index}
//               path={path}
//               element={<ProtectedRoute roles={roles}>{element}</ProtectedRoute>}
//             />
//           ))}

//           <Route path="*" element={<Navigate to="/404" />} />
//         </Route>
//         <Route path="/404" element={<NotFound />} /> /
//       </Routes>
//     </Router>
//   );
// }

// export default AppRouter;
