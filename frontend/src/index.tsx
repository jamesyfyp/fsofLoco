import React from "react";
import ReactDOM from "react-dom/client";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import LandingPage from "./LandingPage";


import "../src/index.css";

const root = document.getElementById("root");
const queryClient = new QueryClient()
if (!root) {
  throw new Error("No root element found");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LandingPage />
    </QueryClientProvider>
  </React.StrictMode>,
);
