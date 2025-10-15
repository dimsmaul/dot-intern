import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { useThemeStore } from "./hooks/useTheme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="bg-primary-100 text-primary-100 min-h-screen w-screen transition-all">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default App;
