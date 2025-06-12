import { Route, Routes, useNavigate } from "react-router";
import MainLayout from "./layout/Index";
import Login from "./pages/auth/Login";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Index";
import { Flex } from "antd";
import Questions from "./pages/questions/Index";
import Settings from "./pages/settings/Index";
import Histories from "./pages/histories/Index";
import Attendance from "./pages/attendance/Index";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="questions" element={<Questions />} />
          <Route path="settings" element={<Settings />} />
          <Route path="histories" element={<Histories />} />
          <Route path="attendance" element={<Attendance />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route
          path="*"
          element={
            <Flex
              vertical
              justify="center"
              align="center"
              gap={20}
              className="h-screen"
            >
              <p className="text-6xl font-bold text-[var(--color-brand-primary)] uppercase">
                404 rồi
              </p>
              <button
                onClick={() => navigate("/")}
                className="animate-wiggle cursor-pointer rounded-xl bg-[var(--color-brand-primary)] px-4 py-2 text-white uppercase hover:underline"
              >
                quay về đi
              </button>
            </Flex>
          }
        />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
export default App;
