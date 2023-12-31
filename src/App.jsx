import { useEffect, useState } from "react";
import Carts from "./Components/Carts/Carts";
import BookMarks from "./Components/BookMarks/BookMarks";
import swal from 'sweetalert';

function App() {
  const [allData, setAllData] = useState([]);
  const [selectCard, setSelectCard] = useState([]);
  const [remaining , setRemaining] = useState(20)
  const [credit, setCredit] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    fetch("allData.json")
      .then((res) => res.json())
      .then((res) => setAllData(res));
  }, []);


  const selectHandle = (datas) =>{
    const newSelectCard = [...selectCard, datas]
    const newTotalPrice = totalPrice + datas.price
    const isExist = selectCard.find(card => card.title == datas.title)

    let countCredit = datas.credit
    if(isExist){
      return swal("Already Selected!", "Something went wrong!", "error");
    }else{
      selectCard.forEach(item => {
        countCredit += item.credit
      })
    }
    let newRemaining = 20 - countCredit
    if(countCredit > 20){
      swal("Credit Remaining Hour Limite 20hr", "You can't more registration!", "error");
    }else{
      setRemaining(newRemaining) 
      setCredit(countCredit)
      setSelectCard(newSelectCard)
      setTotalPrice(newTotalPrice)

    }
  }


  return (
    <>
      <div className="container mx-auto py-10">
        {/* nav section */}
        <header className="text-2xl md:text-3xl text-center font-bold mb-10">
          Course Registration
        </header>
        {/* main section */}
        <main className="flex flex-col-reverse lg:flex-row gap-5">
          <div className="lg:w-3/4 px-4 lg:px-0">
          <Carts selectHandle={selectHandle} allData={allData}></Carts>
          </div>
          <div className="lg:w-1/4  px-4 lg:px-0">
          <BookMarks totalPrice={totalPrice} remaining={remaining} credit={credit} selectCard={selectCard}></BookMarks>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
