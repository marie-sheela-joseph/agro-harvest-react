import BestHarvesting from "./components/BestHarvesting";
import './App.css'
import Choose from "./components/Choose";
import Core from "./components/Core";
import Innovators from "./components/Innovators";
import { data } from '../src/data'
import Banner from "./components/Banner";
import Products from "./components/Products";
function App() {
  return (
    <main>
      <Banner />
      <BestHarvesting />
      <Choose />
      <Core />
      <Innovators heading={data.innovators.heading} description={data.innovators.description} list={data.innovators.list} />
      <Products />
    </main>
  )
}
export default App;
