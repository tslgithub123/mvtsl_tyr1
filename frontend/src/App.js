import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import NotificationPage from "./pages/NotificationPage";
import Users from "./pages/admin/Users";
import TenLakhPlusPopulation from "./pages/admin/TenLakhPlusPopulation";
import ThreeToTenLakhPopulation from "./pages/admin/ThreeToTenLakhPopulation";
import OneToThreeLakhPopulation from "./pages/admin/OneToThreeLakhPopulation";
import FiftyKToOneLakhPopulation from "./pages/admin/FiftyKToOneLakhPopulation";
import TwentyFiveToFiftyKPopulation from "./pages/admin/TwentyFiveKToFiftyKPopulation";
import FifteenKToTwentyFiveKPopulation from "./pages/admin/FifteenKToTwentyFiveKPopulation";
import LessThanFifteenKPopulation from "./pages/admin/LessThanFifteenKPopulation";
import TenKPlusPopulation from "./pages/admin/TenKPlusPopulation";
import FiveKToTenKPopulation from "./pages/admin/FiveKToTenKPopulation";
import TwoPointFiveToFiveKPopulation from "./pages/admin/TwoPointFiveToFiveKPopulation";
import OnePointFiveKToTwoPointFiveKPopulation from "./pages/admin/OnePointFiveKToTwoPointFiveKPopulation";
import LessThanOnePointFiveKPopulation from "./pages/admin/LessThanOnePointFiveKPopulation";
import Rural from "./pages/Rural";
import Urban from "./pages/Urban";
import Amrut from "./pages/Amrut";
import EditRural from "./pages/EditRural";
import EditUrban from "./pages/EditUrban";
import EditAmrut from "./pages/EditAmrut";
import ViewRural from "./pages/ViewRural";
import ViewUrban from "./pages/ViewUrban";
import ViewAmrut from "./pages/ViewAmrut";
import TenKPlusPopulationC from "./pages/admin/Cumulitives/Rural/TenKPlusPopulationC";
import FiveKToTenKPopulationC from "./pages/admin/Cumulitives/Rural/FiveKToTenKPopulationC";
import TwoPointFiveToFivekPopulationC from "./pages/admin/Cumulitives/Rural/TwoPointFiveToFivekPopulationC";
import OnePointFiveKToTwoPointFiveKPopulationC from "./pages/admin/Cumulitives/Rural/OnePointFiveKToTwoPointFiveKPopulationC";
import LessThanOnePointFiveKPopulationC from "./pages/admin/Cumulitives/Rural/LessThanOnePointFiveKPopulationC"
import TenLakhPlusPopulationC from "./pages/admin/Cumulitives/Amrut/TenLakhPlusPopulationC";
import ThreeToTenLakhPopulationC from "./pages/admin/Cumulitives/Amrut/ThreeToTenLakhPopulationC";
import OneToThreeLakhPopulationC from "./pages/admin/Cumulitives/Amrut/OneToThreeLakhPopulationC";
import FiftyKToOneLakhPopulationC from "./pages/admin/Cumulitives/Urban/FiftyKToOneLakhPopulationC";
import TwentyFiveKToFiftyKPopulationC from "./pages/admin/Cumulitives/Urban/TwentyFiveKToFiftyKPopulationC";
import FifteenKToTwentyFiveKPopulationC from "./pages/admin/Cumulitives/Urban/FifteenKToTwentyFiveKPopulationC";
import LessThanFifteenKPopulationC from "./pages/admin/Cumulitives/Urban/LessThanFifteenKPopulationC";



function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/rural"
              element={
                <ProtectedRoute>
                  <Rural />
                </ProtectedRoute>
              }
            />
            <Route
              path="/urban"
              element={
                <ProtectedRoute>
                  <Urban />
                </ProtectedRoute>
              }
            />
            <Route
              path="/amrut"
              element={
                <ProtectedRoute>
                  <Amrut />
                </ProtectedRoute>
              }
            />
            <Route
              path="/editrural/:ulb_code"
              element={
                <ProtectedRoute>
                  <EditRural />
                </ProtectedRoute>
              }
            />
            <Route
              path="/editurban/:ulb_code"
              element={
                <ProtectedRoute>
                  <EditUrban />
                </ProtectedRoute>
              }
            />
            <Route
              path="/editamrut/:ulb_code"
              element={
                <ProtectedRoute>
                  <EditAmrut />
                </ProtectedRoute>
              }
            />
            <Route
              path="/viewrural/:ulb_code"
              element={
                <ProtectedRoute>
                  <ViewRural />
                </ProtectedRoute>
              }
            />
            <Route
              path="/viewurban/:ulb_code"
              element={
                <ProtectedRoute>
                  <ViewUrban />
                </ProtectedRoute>
              }
            />
            <Route
              path="/viewamrut/:ulb_code"
              element={
                <ProtectedRoute>
                  <ViewAmrut />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/TenLakhPlusPopulation"
              element={
                <ProtectedRoute>
                  <TenLakhPlusPopulation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/ThreeToTenLakhPopulation"
              element={
                <ProtectedRoute>
                  <ThreeToTenLakhPopulation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/OneToThreeLakhPopulation"
              element={
                <ProtectedRoute>
                  <OneToThreeLakhPopulation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/FiftyKToOneLakhPopulation"
              element={
                <ProtectedRoute>
                  <FiftyKToOneLakhPopulation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/TwentyFiveKToFiftyKPopulation"
              element={
                <ProtectedRoute>
                  <TwentyFiveToFiftyKPopulation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/FifteenKToTwentyFiveKPopulation"
              element={
                <ProtectedRoute>
                  <FifteenKToTwentyFiveKPopulation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/LessThanFifteenKPopulation"
              element={
                <ProtectedRoute>
                  <LessThanFifteenKPopulation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/TenKPlusPopulation"
              element={
                <ProtectedRoute>
                  <TenKPlusPopulation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/FiveKToTenKPopulation"
              element={
                <ProtectedRoute>
                  <FiveKToTenKPopulation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/TwoPointFiveToFiveKPopulation"
              element={
                <ProtectedRoute>
                  <TwoPointFiveToFiveKPopulation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/OnePointFiveKToTwoPointFiveKPopulation"
              element={
                <ProtectedRoute>
                  <OnePointFiveKToTwoPointFiveKPopulation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/LessThanOnePointFiveKPopulation"
              element={
                <ProtectedRoute>
                  <LessThanOnePointFiveKPopulation />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/Cumulitives/Rural/TenKPlusPopulationC"
              element={
                <ProtectedRoute>
                  <TenKPlusPopulationC />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/Cumulitives/Rural/FiveKToTenKPopulationC"
              element={
                <ProtectedRoute>
                  <FiveKToTenKPopulationC />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/Cumulitives/Rural/TwoPointFiveToFivekPopulationC"
              element={
                <ProtectedRoute>
                  <TwoPointFiveToFivekPopulationC />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/Cumulitives/Rural/OnePointFiveKToTwoPointFiveKPopulationC"
              element={
                <ProtectedRoute>
                  <OnePointFiveKToTwoPointFiveKPopulationC />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/Cumulitives/Rural/LessThanOnePointFiveKPopulationC"
              element={
                <ProtectedRoute>
                  <LessThanOnePointFiveKPopulationC />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/Cumulitives/Amrut/TenLakhPlusPopulationC"
              element={
                <ProtectedRoute>
                  <TenLakhPlusPopulationC />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/Cumulitives/Amrut/ThreeToTenLakhPopulationC"
              element={
                <ProtectedRoute>
                  <ThreeToTenLakhPopulationC />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/Cumulitives/Amrut/OneToThreeLakhPopulationC"
              element={
                <ProtectedRoute>
                  <OneToThreeLakhPopulationC />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/Cumulitives/Urban/FiftyKToOneLakhPopulationC"
              element={
                <ProtectedRoute>
                  <FiftyKToOneLakhPopulationC />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/Cumulitives/Urban/TwentyFiveKToFiftyKPopulationC"
              element={
                <ProtectedRoute>
                  <TwentyFiveKToFiftyKPopulationC />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/Cumulitives/Urban/FifteenKToTwentyFiveKPopulationC"
              element={
                <ProtectedRoute>
                  <FifteenKToTwentyFiveKPopulationC />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/Cumulitives/Urban/LessThanFifteenKPopulationC"
              element={
                <ProtectedRoute>
                  <LessThanFifteenKPopulationC />
                </ProtectedRoute>
              }
            />

            <Route
              path="/notification"
              element={
                <ProtectedRoute>
                  <NotificationPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
