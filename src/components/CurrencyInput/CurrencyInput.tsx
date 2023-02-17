import {ChangeEvent} from "react";
import './CurrencyInput.css';

const CurrencyInput = (props: any) => {
  return (
    <div className="currency-form-group">
        <div>
            <label className="currency-label">{props.currencyLabel}</label>
            <input type="text" value={props.amount} onChange={(e: ChangeEvent<HTMLInputElement>) => props.onAmountChange(e.target.value)} />
        </div>
        <select value={props.currency} onChange={(e: ChangeEvent<HTMLSelectElement>) => props.onCurrencyChange(e.target.value)}>
        {props.currencies.map(((currency: string) => (
          <option key={currency} value={currency}>{currency}</option>
        )))}
      </select>
    </div>
  );
}

export default CurrencyInput;