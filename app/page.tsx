import { BsPiggyBank } from "react-icons/bs";

export default function Home() {
  return (
    // entire body
    <body className="bg-green-400">

      {/* surrounding div */}
      <div>

        {/* top nav */}
        <div className="sticky top-0 w-full h-20 bg-green-400 backdrop-blur p-6 flex items-center font-bold text-white text-2xl z-40">
          <div className="basis-2/6 flex items-center">
              <BsPiggyBank className="w-8 h-8 mr-1" />
              <span><span className="text-3xl">S</span>to<span className="text-3xl">X</span></span>
          </div>
            <div className="basis-2/6"></div>
            <div className="basis-2/6"></div>
        </div>

        {/* below top nav */}
        <div className="bg-green-400">

          {/* sidebar */}
          <aside className="hidden sm:block w-48 fixed inset-0 top-[5rem] bg-green-400 backdrop-blur z-20 overflow-y-auto overflow-hidden flex pr-5 text-xl font-semibold">
            <div className="h-full flex flex-col gap-2 items-start text-white px-5 overflow-y-auto bg-green-700 bg-opacity-50 rounded-tr-xl py-5">
              <div className="">Stocks</div>
              
            </div>
          </aside>

          {/* main body */}
          <div className="pl-52 bg-green-400">
            <div className="bg-green-700 rounded-tl-xl fixed inset-0 top-[5rem] left-0 sm:left-[12rem] backdrop-blur z-20 overflow-y-auto overflow-hidden">
              <div className="w-full flex flex-col px-5 py-10 gap-10 z-20">
                <div className="bg-black bg-opacity-20 h-40 w-full rounded-lg"></div>
                <div className="bg-black bg-opacity-20 h-40 w-full rounded-lg"></div>
                <div className="bg-black bg-opacity-20 h-40 w-full rounded-lg"></div>
                <div className="bg-black bg-opacity-20 h-40 w-full rounded-lg"></div>
                <div className="bg-black bg-opacity-20 h-40 w-full rounded-lg"></div>
                <div className="bg-black bg-opacity-20 h-40 w-full rounded-lg"></div>
                <div className="bg-black bg-opacity-20 h-40 w-full rounded-lg"></div>
                <div className="bg-black bg-opacity-20 h-40 w-full rounded-lg"></div>
                <div className="bg-black bg-opacity-20 h-40 w-full rounded-lg"></div>
                <div className="bg-black bg-opacity-20 h-40 w-full rounded-lg"></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}
