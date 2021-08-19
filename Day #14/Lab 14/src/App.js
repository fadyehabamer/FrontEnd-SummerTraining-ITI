import HTMLHeader from './components/header';
import  HOME from './components/home'
import HTMLCONTENT from './components/content';
import HTMLFOOTER from './components/footer';
function App() {

  let footdata = "CopyRights @ Fady . ALl Rights Reserved"

  let conData = {
    id: 1,
    name: "FADY"
  }

  return (
    <div >
      <HTMLHeader />
      <HOME />
      <HTMLCONTENT data={conData} />

      <HTMLFOOTER foot={footdata} />
    </div>
  );
}

export default App;
