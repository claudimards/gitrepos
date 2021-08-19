import Layout from "./components/layout";

function App() {
  return (
    <main className="App">
      <Layout>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/39865182?v=4"
            alt="Avatar claudimards"
          />
          <h1>Claudimar</h1>
          <h3>Username: </h3>
          <span>claudimards</span>

          <div>
            <div>
              <h4>Followers</h4>
              <span>5000000</span>
            </div>
            <div>
              <h4>Starreds</h4>
              <span>5000000</span>
            </div>
            <div>
              <h4>Following</h4>
              <span>5000000</span>
            </div>
          </div>
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
