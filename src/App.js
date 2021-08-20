import Layout from "./components/layout";
import Profile from "./components/profile";

const App = () => {
  return (
    <main className="App">
      <Layout>
        <Profile />
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
};

export default App;
