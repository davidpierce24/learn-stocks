import { BsPiggyBank } from "react-icons/bs";

export default function Home() {
  return (

    <div className="h-screen w-full bg-gradient-to-tr from-green-400 via-green-700 to-black">
      <div className="h-full w-full bg-white bg-opacity-10 backdrop-blur-xl flex flex-col gap-5">

        {/* nav */}
        <div className="h-20 w-full bg-black bg-opacity-10 outline outline-green-400 p-6 flex items-center font-bold text-white text-2xl">
          <div className="basis-2/6 flex items-center pl-10">
            <BsPiggyBank className="w-8 h-8 mr-1" />
            <span><span className="text-3xl">S</span>to<span className="text-3xl">X</span></span>
          </div>
          <div className="basis-2/6">
            <input type="search" className="w-full h-10 bg-white bg-opacity-20 rounded-xl"/>
          </div>
          <div className="basis-2/6"></div>
        </div>

        {/* body */}
        <div className="h-[calc(100%-6.25rem)] w-full flex gap-5">

          {/* sidebar */}
          <div className="h-full w-48 bg-black bg-opacity-10 rounded-tr-xl p-4 outline outline-green-400 ">
            <div className="h-full flex flex-col py-2 gap-2 overflow-y-auto text-white font-semibold text-xl">

              <p>Welcome</p>
              <p className="underline">Stocks</p>

            </div>
          </div>

          {/* mainbody */}
          <div className="h-full w-full bg-black bg-opacity-10 rounded-tl-xl outline outline-green-400 flex flex-col p-10 gap-4 overflow-y-auto text-white">

            {/* title div */}
            <div className="flex bg-white bg-opacity-10 flex-wrap">

              <div className="flex basis-full justify-between">
                <span className="text-4xl font-bold" >Stock Title</span>
                <span className="text-3xl font-bold">320.4 <span className="text-lg">USD</span></span>
              </div>
              
              <p>Ticker Symbol</p>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
