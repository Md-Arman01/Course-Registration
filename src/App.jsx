import { useEffect, useState } from "react";
import Carts from "./Components/Carts/Carts";
import BookMarks from "./Components/BookMarks/BookMarks";
import swal from 'sweetalert';

function App() {
  const [allData, setAllData] = useState([]);
  const [selectCard, setSelectCard] = useState([]);
  const [credit, setCredit] = useState(0)

  useEffect(() => {
    fetch("allData.json")
      .then((res) => res.json())
      .then((res) => setAllData(res));
  }, []);


  const selectHandle = (datas) =>{
    const newSelectCard = [...selectCard, datas]
    const isExist = selectCard.find(card => card.title == datas.title)

    let countCredit = datas.credit
    if(isExist){
      return swal("Already Selected!", "Something went wrong!", "error");
    }else{
      selectCard.forEach(item => {
        countCredit += item.credit
      })
    }
    setCredit(countCredit)
    
    setSelectCard(newSelectCard)
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
          <BookMarks credit={credit} selectCard={selectCard}></BookMarks>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
