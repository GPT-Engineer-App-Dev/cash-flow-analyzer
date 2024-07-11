import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BarChart3, Home, PiggyBank, Settings, User } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Overview",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Transactions",
    to: "/transactions",
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    title: "Budgets",
    to: "/budgets",
    icon: <PiggyBank className="h-4 w-4" />,
  },
  {
    title: "Goals",
    to: "/goals",
    icon: <Settings className="h-4 w-4" />,
  },
  {
    title: "Reports",
    to: "/reports",
    icon: <User className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;