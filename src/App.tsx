/* import Message from "./Message"; // We don't need this line, we are not using it */
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import ListGroup from "./components/ListGroup";

function App() {
  //Following will be props passed
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log("handleSelectItem", item);
  };
  /* return <div><Message></Message></div> */ //Removed so we can use ListGroup
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      <Alert> Hello <span>World</span></Alert>
      <Buttons></Buttons>
    </div>
  );
}
// if you have 2 listgroups to show that they work individually (try mounting the component twise)
export default App;
