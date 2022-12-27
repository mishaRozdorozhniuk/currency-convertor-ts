import PropTypes from "prop-types";
import './CurrencyInput.css';

const CurrencyInput = (props: any) => {
  return (
    <div className="currency-form-group">
      <input type="text" value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)} />
      <select value={props.currency} onChange={ev => props.onCurrencyChange(ev.target.value)}>
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