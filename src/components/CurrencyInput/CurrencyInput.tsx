import PropTypes from "prop-types";
import './CurrencyInput.css';
import {ChangeEvent} from "react";

const CurrencyInput = (props: any) => {

  return (
    <div className="currency-form-group">
      <input type="text" value={props.amount} onChange={(e: ChangeEvent<HTMLInputElement>) => props.onAmountChange(e.target.value)} />
      <select value={props.currency} onChange={(e: ChangeEvent<HTMLSelectElement>) => props.onCurrencyChange(e.target.value)}>
        {props.currencies.map(((currency: string) => (
          <option key={currency} value={currency}>{currency}</option>
        )))}
      </select>
    </div>
  );
}

CurrencyInput.propTypes = {
  amount: PropTypes.number,
  currency: PropTypes.string,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;