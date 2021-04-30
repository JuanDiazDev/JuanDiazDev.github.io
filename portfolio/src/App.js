import './App.css';
import Bar from './components/Bar';
import Cover from './components/Cover';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Bar />
      <Cover />
      <Header />
      <Skills />
      <ProjectList />
      {/*<Footer />*/}
    </div>
  );
}

export default App;
