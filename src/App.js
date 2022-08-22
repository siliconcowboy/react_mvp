import './App.css';
import MvpArray from './data/stats.json'
import Mvp from './components/Mvp.js'

function App() {
  return (
    <div className="App">
      <h1>Ranking each MLB MVP of the last 20 years</h1>

    {MvpArray.map((mvp) => (
      <div>
      <Mvp 
      key={mvp.id} 
      name={mvp.name}
      year={mvp.year}
      image={mvp.image}
      batting_average={mvp.batting_average}
      On_Base_Percentage={mvp.On_Base_Percentage}
      Slugging_Percentage={mvp.Slugging_Percentage}
      OPS={mvp.OPS}
      OPS_Plus={mvp.OPS_Plus}
      WRC_plus={mvp.WRC_Plus}
      WAR={mvp.fWAR}
      BB={mvp['BB%']}
      K={mvp['K%']}
      WPA={mvp.WPA}
      reason={mvp.reason}

      />
      </div>
      ))}
    </div>
  );
}

export default App;
