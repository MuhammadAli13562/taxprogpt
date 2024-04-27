import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignInForm from "./_auth/pages/SignInForm";
import SignUpForm from "./_auth/pages/SignUpForm";
import LandingPage from "./_auth/pages/LandingPage";
import ContextWindow from "./_root/pages/ContextWindow";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route element={<AuthLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/sign-up" element={<SignUpForm />} />
          </Route>
          {/* Private Routes */}
          <Route element={<RootLayout />}>
            <Route path="/chat/:id" element={<ContextWindow />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
