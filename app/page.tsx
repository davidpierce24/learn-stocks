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
          <div className="hidden lg:block h-full w-64 bg-black bg-opacity-10 rounded-tr-xl p-4 outline outline-green-400 ">
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
          <div className="h-full w-full bg-black bg-opacity-10 rounded-tl-xl outline outline-green-400 flex p-1 lg:p-10 gap-4 overflow-y-auto text-white">

            {/* content div*/}
            <div className="bg-white bg-opacity-0 font-semibold basis-full lg:basis-full flex flex-col gap-10">

              <div>
                <div className="flex justify-between">
                  <span className="text-3xl font-bold" >Stock Title</span>
                  <span className="text-2xl font-bold">320.4 <span className="text-lg">USD</span></span>
                </div>
                
                <div className="flex justify-between">
                  <span>Ticker Symbol</span>
                  <span className="text-green-400">+40 (+7.3%) Today</span>
                </div>
              </div>

              {/*main stock chart */}
              <div className="">
                <span className="text-2xl">Stock Chart</span>
                <div className="p-5">
                  <div className="h-72 w-full bg-black bg-opacity-30 hover:bg-opacity-50 hover:shadow-lg rounded-xl flex justify-center items-center">
                    Stock Chart
                  </div>
                </div>
              </div>

              {/* Stock Summary / Info */}
              <div className="">
                <span className="text-2xl">Summary / Info</span>
                <div className="w-full p-5">
                  <div className="bg-black bg-opacity-10 rounded-xl p-2 grid md:grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* <div className="basis-1/2">
                      <p className="border-b">asdfa</p>
                      <p>asdf</p>
                    </div>
                    <div className="basis-1/2">
                      
                    </div> */}
                    <div className="flex justify-between content-center p-2 border-b hover:ring-1 hover:ring-offset-1 hover:ring-white">
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
              {/* End of stock info div */}

              
              {/* outlook div */}
              <div className="">
                <span className="text-2xl">Outlook</span>
                <div className="p-5">

                  <div className="grid grid-cols-2 gap-5">
                    <div className="bg-black bg-opacity-20 h-40 rounded-xl flex justify-center items-center">Over / Under Valued</div>
                    <div className="bg-black bg-opacity-20 h-40 rounded-xl flex justify-center items-center">Bear / Bull</div>
                    <div className="bg-black bg-opacity-20 h-40 rounded-xl flex justify-center items-center">Recommendation Trends Chart</div>
                    <div className="bg-black bg-opacity-20 h-40 rounded-xl flex justify-center items-center">Recommendation Rating</div>
                  </div>
                </div>
              </div>
              {/* end of outlook div */}


              {/* Earnings Chart */}
              <div className="">
              <span className="text-2xl">Earnings Chart</span>
                <div className="p-5">
                  <div className="h-72 w-full bg-black bg-opacity-30 rounded-xl flex justify-center items-center">
                    Put the Earnings Dot Chart Here
                  </div>
                </div>
              </div>
              {/* Earnings Chart */}


              {/* Financials */}
              <div className="">

                <span className="text-2xl">Financials</span>
                <div className="p-5">
                  <div className="h-72 w-full bg-black bg-opacity-30 rounded-xl flex justify-center items-center">
                    Put Financials Bar Chart Here
                  </div>

                  {/* Income Statement */}
                  <div className="pt-5 w-full">
                    <p className="text-lg underline mb-2">Income Statement</p>
                    <div className="bg-black bg-opacity-10 rounded-xl p-2 flex flex-col text-md">
                      <div className="flex border-b font-bold py-2">
                        <div className="basis-1/3 text-gray-900">Breakdown</div>
                        <div className="basis-1/3 flex justify-center text-gray-900">TTM</div>
                        <div className="basis-1/3 flex justify-center text-gray-900">Y/Y</div>
                      </div>
                      <FinacialsLine title={"Revenue"} value={"$81.80 B"} change={"-1.40%"} good={false} />
                      <FinacialsLine title={"Operating Expense"} value={"$13.42B"} change={"+4.73%"} good={true} />
                      <FinacialsLine title={"Net Income"} value={"$19.88 B"} change={"+2.26%"} good={true} />
                      <FinacialsLine title={"Net Profit Margin"} value={"24.31"} change={"+3.71%"} good={true} />
                      <FinacialsLine title={"Earnings Per Share (EPS)"} value={"1.26"} change={"+5.00%"} good={true} />
                      <FinacialsLine title={"EBITDA"} value={"$26.05 B"} change={"+0.65%"} good={true} />
                      <FinacialsLine title={"Effective Tax Rate"} value={"12.55%"} change={"--------"} good={undefined} />
                    </div>
                  </div>
                  {/* End of Income Statement */}

                  {/* Balance Sheet */}
                  <div className="pt-5 w-full">
                    <p className="text-lg underline mb-2">Balance Sheet</p>
                    <div className="bg-black bg-opacity-10 rounded-xl p-2 flex flex-col text-md">
                      <div className="flex border-b font-bold py-2">
                        <div className="basis-1/3 text-gray-900">Breakdown</div>
                        <div className="basis-1/3 flex justify-center text-gray-900">TTM</div>
                        <div className="basis-1/3 flex justify-center text-gray-900">Y/Y</div>
                      </div>
                      <FinacialsLine title={"Cash & Short-Term Investments"} value={"$62.48 B"} change={"+29.55%"} good={true} />
                      <FinacialsLine title={"Total Assets"} value={"$335.04 B"} change={"-0.38%"} good={false} />
                      <FinacialsLine title={"Total Liabilities"} value={"$274.76 B"} change={"-1.24%"} good={false} />
                      <FinacialsLine title={"Total Equity"} value={"$60.27 B"} change={"-------"} good={undefined} />
                      <FinacialsLine title={"Shares Outstanding"} value={"15.63 B"} change={"-------"} good={undefined} />
                      <FinacialsLine title={"Price To Book"} value={"$48.80 B"} change={"-------"} good={undefined} />
                      <FinacialsLine title={"Return On Assets"} value={"17.23%"} change={"--------"} good={undefined} />
                      <FinacialsLine title={"Return On Capital"} value={"33.69%"} change={"--------"} good={undefined} />
                    </div>
                  </div>
                  {/* End of Balance Sheet */}

                  {/* Cash Flow */}
                  <div className="pt-5 w-full">
                    <p className="text-lg underline mb-2">Cash Flow</p>
                    <div className="bg-black bg-opacity-10 rounded-xl p-2 flex flex-col text-md">
                      <div className="flex border-b font-bold py-2">
                        <div className="basis-1/3 text-gray-900">Breakdown</div>
                        <div className="basis-1/3 flex justify-center text-gray-900">TTM</div>
                        <div className="basis-1/3 flex justify-center text-gray-900">Y/Y</div>
                      </div>
                      <FinacialsLine title={"Net Income"} value={"$19.88 B"} change={"+2.26%"} good={true} />
                      <FinacialsLine title={"Cash From Operations"} value={"$26.38 B"} change={"+15.24%"} good={true} />
                      <FinacialsLine title={"Cash From Investing"} value={"$437.00 M"} change={"-89.68%"} good={false} />
                      <FinacialsLine title={"Cash From Financing"} value={"$-24.05 B"} change={"+12.38%"} good={true} />
                      <FinacialsLine title={"Net Change in Cash"} value={"$2.77 B"} change={"+968.03%"} good={true} />
                      <FinacialsLine title={"Free Cash Flow"} value={"$20.44 B"} change={"+50.77"} good={true} />
                    </div>
                  </div>
                  {/* End of Cash Flow */}

                </div>

              </div>
              {/* Financials */}



            </div>
            {/* End of content div */}




            {/* Ad sidebar */}
            <div className="hidden lg:inline-flex lg:basis-1/4 max-w-sm p-10 flex flex-col gap-10">
              <div className="bg-black bg-opacity-20 rounded-lg h-full w-full flex justify-center items-center">
                    Ad Here
              </div>
              <div className="bg-black bg-opacity-20 rounded-lg h-full w-full flex justify-center items-center">
                    Ad Here
              </div>
            </div>
            {/* End of Ad sidebar */}

          </div>
        </div>
      </div>
    </div>
  )
}



// finacials line component
const FinacialsLine = ({title, value, change, good}: {title:string, value: string, change: string, good?:boolean}) => (
    <div className="flex border-b py-2">
      <div className="basis-1/3">{title}</div>
      <div className="basis-1/3 flex justify-center items-center">{value}</div>
      <div className="basis-1/3 flex justify-center items-center">
        <div className={`${good == undefined ? "bg-gray-600" : good ? "bg-green-500 ": "bg-red-500"} rounded-xl px-5  : `}>
          {change}
        </div>
      </div>
    </div>
)
// financials line component
