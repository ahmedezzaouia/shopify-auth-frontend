import './App.css';
import axios from "axios";


function App() {
if (window.location.search)
{

  localStorage.setItem('user', window.location.search);
}
if (window.location !== window.parent.location) {
  window.location.replace("https://myfront.netlify.app")
}
 
const requestShopify = async()=>{


  // const data = await axios.get('https://d4af-197-230-240-146.ngrok.io?shop=developer-2022.myshopify.com')
  // console.log(data)
  window.location.replace('https://debb-197-230-240-146.ngrok.io?shop=developer-2022.myshopify.com')

}

  return (
    <div className="App">
     <button onClick={requestShopify}>sign with Shopify</button>
     <h1>{window.location.href}</h1>
    </div>
  );
}

export default App;
