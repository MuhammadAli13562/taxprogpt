import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignInForm from "./_auth/pages/SignInForm";
import SignUpForm from "./_auth/pages/SignUpForm";
import ContextWindow from "./_root/pages/ContextWindow";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./redux/api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ApiProvider api={api}>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route element={<AuthLayout />}>
              <Route path="/sign-in" element={<SignInForm />} />
              <Route path="/sign-up" element={<SignUpForm />} />
            </Route>
            {/* Private Routes */}
            <Route element={<RootLayout />}>
              <Route path="*" element={<Navigate to="/sign-in" />} />
              <Route path="/chat/:id" element={<ContextWindow />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ApiProvider>
      <ToastContainer autoClose={1000} pauseOnFocusLoss={false} />
    </div>
  );
}

export default App;
