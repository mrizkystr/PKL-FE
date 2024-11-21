import { useMemo } from "react";
import AppRouter from "./router/AppRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthConsumer } from "./Auth/auth-consumer";
import { AuthProvider } from "./Auth/auth-provider";

export default function App() {
  const queryClient = useMemo(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnReconnect: true,
          suspense: true,
        },
      },
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AuthConsumer>
          <AppRouter />
        </AuthConsumer>
      </AuthProvider>
    </QueryClientProvider>
  );
}
