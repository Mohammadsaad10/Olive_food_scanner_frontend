import HomePage from "./pages/HomePage";
import ErrorBoundary from "./components/common/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <HomePage />
    </ErrorBoundary>
  );
};

export default App;
