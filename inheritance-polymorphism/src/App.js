import logo from './logo.svg';
import './App.css';
import AkkineniNagarjuna from './calsses/AkkineniNagarjuna';
import AkkineniNageshwaroa from './calsses/AkkineniNageshwaroa';
import AkkineniNagaChaitanya from './calsses/AkkineniNagaChaitanya';

function App() {  

  let akkineniNageshwarao = new AkkineniNageshwaroa();
  akkineniNageshwarao.name();
  akkineniNageshwarao.akkineniProperties();
  akkineniNageshwarao.akkineniWifeName();
  akkineniNageshwarao.calculateResult(1,2);
  let akkineniNagarjuna = new AkkineniNagarjuna();
  akkineniNagarjuna.name();
  akkineniNagarjuna.akkineniProperties();
  akkineniNagarjuna.akkineniWifeName();
  akkineniNagarjuna.calculateResult(1,2,3);
  let akkineniNagaChaitanya = new AkkineniNagaChaitanya();
  akkineniNagaChaitanya.name();
  akkineniNagaChaitanya.akkineniProperties();
  akkineniNagaChaitanya.akkineniWifeName();
  akkineniNagaChaitanya.calculateResult();
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
