import './App.css';
import ImageSlider from './Components/ImageSlider';
import {SliderData} from './constants/SliderData'

function App() {
  return (
    <ImageSlider slides={SliderData}/>
  );
}

export default App;
