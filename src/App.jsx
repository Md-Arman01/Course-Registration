import { useEffect, useState } from "react";
import Carts from "./Components/Carts/Carts";
import BookMarks from "./Components/BookMarks/BookMarks";
import swal from 'sweetalert';

function App() {
  const [allData, setAllData] = useState([]);
  const [names, setNames] = useState([])

  useEffect(() => {
    fetch("allData.json")
      .then((res) => res.json())
      .then((res) => setAllData(res));
  }, []);


  const selectHandle = (title) =>{
    const newNames = [...names, title]
    const isExist = names.find(name => name == title)
    if(isExist){
      return swal("Already Selected!", "Something went wrong!", "error");
    }
    setNames(newNames)

  }


  return (
    <>
      <div className="container mx-auto py-10">
        {/* nav section */}
        <header className="text-3xl text-center font-bold mb-10">
          Course Registration
        </header>
        {/* main section */}
        <main className="flex gap-5">
          <div className="w-3/4">
          <Carts selectHandle={selectHandle} allData={allData}></Carts>
          </div>
          <div className="w-1/4">
          <BookMarks names={names}></BookMarks>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
