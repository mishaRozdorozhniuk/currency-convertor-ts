import CurrencyInput from "./components/CurrencyInput/CurrencyInput";
import React, {useState, useEffect, SetStateAction} from "react";
import useFetch from "./components/hooks/useFetch";
import {useDispatch} from "react-redux";
import {saveCurrency} from "./store/action";
import './App.css';

const App = () => {
  const [firstValueToConvert, setFirstValueToConvert] = useState<number>(1);
  const [secondValueToConvert, setSecondValueToConvert] = useState<number>(1);
  const [currencyFrom, setCurrencyFrom] = useState<string>('EUR');
  const [currencyTo, setCurrencyTo] = useState<string>('USD');
  const dispatch = useDispatch()

  const {rates} = useFetch()

  useEffect(() => {
    dispatch(saveCurrency(rates))
    if (!!rates) {
      const init = () => {
        handleAmount1Change(1);
      };
      init();
    }
  }, [rates]);

  const format = (value: any): SetStateAction<number> => {
    return value.toFixed(2);
  }

  const handleAmount1Change = (firstValueToConvert: number) => {
    setSecondValueToConvert(format(firstValueToConvert * rates[currencyFrom] / rates[currencyTo]));
    setFirstValueToConvert(+firstValueToConvert);
  }

  const handleCurrency1Change = (currencyFirst: string) => {
    setSecondValueToConvert(format(firstValueToConvert * rates[currencyFirst] / rates[currencyTo]));
    setCurrencyFrom(currencyFirst);
  }

  const handleAmount2Change = (secondValueToConvert: number) => {
    setFirstValueToConvert(format(+secondValueToConvert * rates[currencyTo] / rates[currencyFrom]));
    setSecondValueToConvert(+secondValueToConvert);
  }

  const handleCurrency2Change = (currencyTo: string) => {
    setFirstValueToConvert(format(secondValueToConvert * rates[currencyTo] / rates[currencyFrom]));
    setCurrencyTo(currencyTo);
  }

  return (
      <>
        <h1 className="currency-title">Конвертер валют</h1>
        <div className="currency-inner">
          <CurrencyInput
              onAmountChange={handleAmount1Change}
              onCurrencyChange={handleCurrency1Change}
              currencies={Object.keys(rates)}
              amount={firstValueToConvert}
              currency={currencyFrom} />
          <CurrencyInput
              onAmountChange={handleAmount2Change}
              onCurrencyChange={handleCurrency2Change}
              currencies={Object.keys(rates)}
              amount={secondValueToConvert}
              currency={currencyTo} />
        </div>
      </>
  );
}

export default App;
