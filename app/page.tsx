import { BsPiggyBank } from "react-icons/bs";

export default function Home() {
  return (

    <div className="h-screen w-full bg-gradient-to-tr from-green-400 via-green-700 to-black">
      <div className="h-full w-full bg-white bg-opacity-10 backdrop-blur-xl flex flex-col gap-5">

        {/* nav */}
        <div className="h-20 w-full bg-black bg-opacity-10 outline outline-green-400 p-6 flex items-center font-bold text-white text-2xl">
          <div className="basis-2/6 flex items-center pl-10">
            <BsPiggyBank className="w-8 h-8 mr-1" />
            <span className="text-3xl">bacon</span>
          </div>
          <div className="basis-2/6">
            <input type="search" className="w-full h-10 bg-white bg-opacity-20 rounded-xl"/>
          </div>
          <div className="basis-2/6"></div>
        </div>

        {/* body */}
        <div className="h-[calc(100%-6.25rem)] w-full flex gap-5">

          {/* sidebar */}
          <div className="hidden md:block h-full w-48 bg-black bg-opacity-10 rounded-tr-xl p-4 outline outline-green-400 ">
            <div className="h-full flex flex-col py-2 gap-2 overflow-y-auto text-white font-semibold text-lg">

              <p>Welcome</p>
              <p className="underline">Stocks</p>
              <p>Credit Cards</p>
              <p>Credit Score</p>
              <p>Rent</p>
              <p>Mortgage</p>

            </div>
          </div>

          {/* mainbody */}
          <div className="h-full w-full bg-black bg-opacity-10 rounded-tl-xl outline outline-green-400 flex p-10 gap-4 overflow-y-auto text-white">

            {/* content div*/}
            <div className="bg-white bg-opacity-0 font-semibold basis-full sm:basis-3/4">

              <div className="flex basis-full justify-between">
                <span className="text-3xl font-bold" >Stock Title</span>
                <span className="text-2xl font-bold">320.4 <span className="text-lg">USD</span></span>
              </div>
              
              <div className="flex justify-between">
                <span>Ticker Symbol</span>
                <span className="text-green-400">+40 (+7.3%) Today</span>
              </div>

              {/* chart */}
              <div className="pt-5">
                <span className="text-2xl">Stock Chart</span>
                <div className="pt-5 px-32">
                  <div className="h-72 w-full bg-black bg-opacity-30 rounded-xl">

                  </div>
                </div>
              </div>

              {/* Stock Summary / Info */}
              <div className="pt-10">
                <span className="text-2xl">Summary / Info</span>
                <div className="w-full h-20 p-5">
                  <div className="bg-black bg-opacity-10 rounded-xl p-2 grid md:grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* <div className="basis-1/2">
                      <p className="border-b">asdfa</p>
                      <p>asdf</p>
                    </div>
                    <div className="basis-1/2">
                      
                    </div> */}
                    <div className="flex justify-between content-center p-2 border-b">
                      <span>Previous Close</span>
                      <span>179</span>
                    </div>
                    <div className="flex justify-between content-center p-2 border-b">
                      <span>Open</span>
                      <span>180</span>
                    </div>
                    <div className="flex justify-between content-center p-2 border-b">
                      <span>Bid</span>
                      <span>0.00 x 800</span>
                    </div>
                    <div className="flex justify-between content-center p-2 border-b">
                      <span>Ask</span>
                      <span>0.00 x 1000</span>
                    </div>
                    <div className="flex justify-between content-center p-2 border-b">
                      <span>Day&apos;s Range</span>
                      <span>177.01 - 180.93</span>
                    </div>
                    <div className="flex justify-between content-center p-2 border-b">
                      <span>52 Week (Year) Range</span>
                      <span>124.17 - 198.23</span>
                    </div>
                    <div className="flex justify-between content-center p-2 border-b">
                      <span>Volume</span>
                      <span>56,570,198</span>
                    </div>
                    <div className="flex justify-between content-center p-2 border-b">
                      <span>Average Volume</span>
                      <span>57,113,016</span>
                    </div>
                    <div className="flex justify-between content-center p-2 border-b">
                      <span>Market Cap</span>
                      <span>2.803T</span>
                    </div>
                    <div className="flex justify-between content-center p-2 border-b">
                      <span>Beta (5Y Monthly)</span>
                      <span>1.29</span>
                    </div>
                    <div className="flex justify-between content-center p-2 border-b">
                      <span>PE Ratio (TTM)</span>
                      <span>30.25</span>
                    </div>
                    <div className="flex justify-between content-center p-2 border-b">
                      <span>EPS (TTM)</span>
                      <span>5.89</span>
                    </div>
                    <div className="flex justify-between content-center p-2 border-b">
                      <span>Earnings Date</span>
                      <span>Oct 25, 2023 - Oct 30, 2023</span>
                    </div>
                    <div className="flex justify-between content-center p-2 border-b">
                      <span>Forward Dividend & Yield</span>
                      <span>0.96 (0.53%)</span>
                    </div>
                    <div className="flex justify-between content-center p-2 border-b">
                      <span>Ex-Dividend Date</span>
                      <span>May 12, 2023</span>
                    </div>
                    <div className="flex justify-between content-center p-2 border-b">
                      <span>1y Target Est</span>
                      <span>182.84</span>
                    </div>
                    
                    
                  </div>
                  
                </div>
              </div>


            </div>

            <div className="basis-0 sm:basis-1/4 p-10 flex flex-col gap-10">
              <div className="bg-black bg-opacity-20 rounded-lg h-full w-full">

              </div>
              <div className="bg-black bg-opacity-20 rounded-lg h-full w-full">

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
