import { Button, Container } from "@chakra-ui/react";
import { Route, Routes, Navigate } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Hader from "./components/Hader";
import SingupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AuthContext from "./context/AuthtictionContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EditeProfile from "./components/EditeProfile";
import { useContext, useState } from "react";
const queryClient = new QueryClient();
function App() {
  const { userAuth } = useContext(AuthContext);

  return (
    <Container maxW="620px">
      <QueryClientProvider client={queryClient}>
        <Hader />
        <Routes>
          {/* public routes  */}
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="/signup" element={<SingupPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* privet routes */}
          <Route
            path={`/${userAuth.username}`}
            element={userAuth.username ? <UserPage /> : <VUserPage />}
          />
          <Route
            path={`/edit/${userAuth.username}`}
            element={<EditeProfile />}
          />
          <Route path="/posts" element={<PostPage />} />
        </Routes>
      </QueryClientProvider>
    </Container>
  );
}

export default App;
