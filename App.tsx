import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InterviewProvider } from "@/context/InterviewContext";
import Index from "./pages/Index";
import Interview from "./pages/Interview";
import InterviewSession from "./pages/InterviewSession";
import InterviewResults from "./pages/InterviewResults";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <InterviewProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/interview/session" element={<InterviewSession />} />
            <Route path="/interview/results" element={<InterviewResults />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </InterviewProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
