import AppLayout from "./components/AppLayout";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";

function App({appName}) {
  console.log(appName)
  return (
    <AppLayout>
      <Hero />
      <ProductList />
    </AppLayout>
  );
}

export default App;
