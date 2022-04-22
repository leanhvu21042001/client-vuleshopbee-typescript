import "./App.css";

interface Product {
  name: string;
}
function App() {
  const createPosts = (projects: Product[]) => {
    return projects.map((project) => project.name);
  };
  return <div className="App">{createPosts([])}</div>;
}

export default App;
