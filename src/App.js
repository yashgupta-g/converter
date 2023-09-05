import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
function App() {
const [amount , setamount ] = useState(0)
const [from , setfrom ] = useState("usd")
const [to , setto ] = useState("inr")
const [convrtedamount , setconvertedamount ] = useState(0)
const CurrencyInfo = useCurrencyInfo(from)

const options = Object.keys(CurrencyInfo)
 const swap =() => {
setfrom(to)
setto(from)
setconvertedamount(amount)
setamount(convrtedamount)
 }

const convert = ()  => {

  setconvertedamount( amount * CurrencyInfo[to])
}

  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/460696/pexels-photo-460696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>
                                
                                setamount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setamount(amount)}

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={
                                  swap
                                }
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                               label="to"
                               amount={convrtedamount}
                               currencyOptions={options}
                               onCurrencyChange={(currency)=>
                               
                               setto(currency)}
                               selectCurrency={from}
                               amountDisabled
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from } to { to }
                        </button>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default App;
