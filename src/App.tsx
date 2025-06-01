import AppLayout from "./components/AppLayout";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";

const App: React.FC = () => {
  return (
    <AppLayout>
      <Hero />
      <ProductList />
    </AppLayout>
  );
};

export default App;
