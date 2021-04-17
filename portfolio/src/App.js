import './App.css';
import Bar from './components/Bar';
import Cover from './components/Cover';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Bar />
      <Cover />
      <Header />
      <Skills></Skills>
      /*<ProjectList />*/
    </div>
  );
}

export default App;
