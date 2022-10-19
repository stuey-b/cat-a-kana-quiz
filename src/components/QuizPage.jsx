import React from 'react'
import Card from './Card'


const QuizPage = () => {
  return (
    <Card>
    <div className="bg-yellow-200 h-1/2 p-8 flex flex-col justify-between items-center font-bold text-8xl rounded-b-3xl">
      {/* <img
        className="mx-auto pt-10 drop-shadow-2xl"
        src="/images/speechbubble1.png"
        alt=""
      /> */}


      <div className='bg-white w-5/6 h-1/2 mx-auto rounded-3xl flex justify-center items-center'>
      <h2 className="">る</h2>
      </div>
      
      <img
        className="drop-shadow-2xl h-1/2 py-4"
        src="images/cat1.png"
        alt="cat1"
      />
    </div>
    <div className="flex flex-col justify-center items-center space-y-6 h-1/2">
      <div className="Buttons">A</div>
      <div className="Buttons">Shi</div>
      <div className="Buttons">Ru</div>
      <div className="Buttons">He</div>
    </div>
  </Card>
  )
}

export default QuizPage