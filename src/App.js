import Layout from "./components/layout";
import Profile from "./components/profile";
import { ResetCSS } from "./global/resetCss";

const App = () => {
  return (
    <main className="App">
      <ResetCSS />
      <Layout>
        <Profile />
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
};

export default App;
