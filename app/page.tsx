import { BsPiggyBank } from "react-icons/bs";

export default function Home() {
  return (
    // entire body
    <body className="bg-gradient-to-t from-green-900 to-green-400">

      {/* surrounding div */}
      <div>

        {/* top nav */}
        <div className="sticky top-0 w-full h-20 bg-black bg-opacity-5 backdrop-blur p-6 flex items-center font-bold text-white text-2xl z-40 shadow-sm">
          <div className="basis-2/6 flex items-center">
              <BsPiggyBank className="w-8 h-8 mr-1" />
              <span><span className="text-3xl">S</span>to<span className="text-3xl">X</span></span>
          </div>
            <div className="basis-2/6"></div>
            <div className="basis-2/6"></div>
        </div>

        {/* below top nav */}
        <div>

          {/* sidebar */}
          <aside className="hidden sm:block w-40 fixed inset-0 top-[5rem] bg-black bg-opacity-5 backdrop-blur rounded-r-xl z-20 overflow-y-auto overflow-hidden flex pt-5 text-xl font-semibold shadow-sm">
            <div className="h-full basis-1/6  flex flex-col gap-2 items-start text-white px-5 overflow-y-auto">
              <div>Stocks</div>
              <div>test word</div>
              <div>test word</div>
              <div>test word</div>
              <div>test word</div>
            </div>
          </aside>

          {/* main body */}
          <div className="w-full pl-52 flex flex-col px-5 py-10 gap-5 z-20 bg-green-400">
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
    </body>
  )
}
