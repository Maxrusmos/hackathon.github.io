import './App.css';
import Layout from './components/Layout/Layout';

const App = (props) => {
  console.log();
  return (
    <Layout rivers={props.appState.rivers}></Layout>
  );
}

export default App;
