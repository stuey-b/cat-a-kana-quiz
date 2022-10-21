import React from 'react'
import Card from './Card'

const EndPage = () => {
  return (
    <Card>
        <div className="flex justify-around items-center bg-red-300 w-screen">
        <button>Retry</button>
        <button>Home</button>
      </div>
      <div className="bg-pink-200 w-screen p-8 flex flex-col justify-between items-center font-bold">
        <div className="bg-white w-5/6 h-1/2 mx-auto rounded-3xl flex justify-center items-center">You did an AMAZING job!</div>
        <img
          className="drop-shadow-2xl h-1/2 py-4"
          src="images/cat1.png"
          alt="cat1"
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 my-6">
      <div className="bg-white w-5/6  mx-auto rounded-3xl flex justify-center items-center">Final Score: 40/46</div>

      </div>
      <div
        className="flex justify-around items-center
       bg-blue-300 w-screen h-24">
      </div>
    </Card>
  )
}

export default EndPage