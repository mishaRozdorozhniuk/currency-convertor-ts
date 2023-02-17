import React, { useState } from "react";
import "../CurrencyTable/CurrencyTable.css";
import { useSelector } from "react-redux";

interface Currency {
    idB: number;
    idS: number;
    title: string;
    buy: number;
    sell: number;
    isEdit: boolean;
}

const CurrencyTable = () => {
    const requestErrorMessage = useSelector(
        (store: any) => store.errorRequest
    );

    const [tableData, setTableData] = useState<Currency[]>([
        { idB: 1, idS: 2, title: "USD/UAH", buy: 27.5, sell: 27.7, isEdit: false },
        { idB: 3, idS: 4, title: "EUR/UAH", buy: 32.5, sell: 32.7, isEdit: false },
        { idB: 5, idS: 6, title: "BTC/USD", buy: 1170, sell: 1150, isEdit: false },
    ]);

    const handleCellHover = (e: React.MouseEvent, currency: number): void => {
        const cell = e.target as HTMLElement;
        const editIcon = document.createElement("div");
        editIcon.innerText = "Edit";
        editIcon.classList.add("edit-button");

        cell.appendChild(editIcon);
        // @ts-ignore
        editIcon.addEventListener("click", (e) => handleEditClick(e, currency));
    };

    const deleteCellHover = (): void => {
        const editButton = document.querySelector(
            ".edit-button"
        ) as HTMLElement;
        editButton.style.display = "none";
        editButton.parentNode?.removeChild(editButton);
    };

    const handleEditClick = (e: React.MouseEvent, currency: number): void => {
        const cell = (e.target as HTMLElement).parentNode as HTMLElement;
        const currentValue = cell.innerText;

        cell.innerHTML = "";

        const input = document.createElement("input");
        input.type = "number";
        input.min = (currency * 0.9).toFixed(2);
        input.max = (currency * 1.1).toFixed(2);
        input.value = currentValue;
        cell.appendChild(input);

        const saveButton = document.createElement("button");
        saveButton.innerText = "Save";
        cell.appendChild(saveButton);

        const cancelButton = document.createElement("button");
        cancelButton.innerText = "Cancel";
        cell.appendChild(cancelButton);

        // @ts-ignore
        saveButton.addEventListener("click", (e) => handleSaveClick(e, currency));
        // @ts-ignore
        cancelButton.addEventListener("click", (e) => handleCancelClick(e, currency));
    };

    const handleSaveClick = (e: React.MouseEvent, currency: number): void => {
        const cell = (e.target as HTMLElement).parentNode as HTMLElement;
        const inputValue = (cell.querySelector("input") as HTMLInputElement).value;

        // Check if the input value is within the +- 10% range
        if (+inputValue >= currency * 0.9 && +inputValue <= currency * 1.1) {
            // Update the cell with the new value
            cell.innerText = inputValue;
        } else {
            (e.target as HTMLButtonElement).disabled = true;
        }
    };

    const handleCancelClick = (e: React.MouseEvent, currency: number): void => {
        const cell = (e.target as HTMLElement).parentNode as HTMLElement;
        cell.innerText = currency.toString();
    };
    return (
        <>
            {requestErrorMessage ?
                (<div className="request-error-message">Error occurred. Please try again later.</div>)
             : (<table className="currency-table">
                <thead>
                    <tr>
                       <th>Currency/Currency <p>Date</p></th>
                        <th>Buy</th>
                        <th>Sell</th>
                    </tr>
                </thead>
                <tbody>
                {tableData.map((el, index) => {
                    return <tr key={index}>
                        <td>{el.title}</td>
                        <td onMouseEnter={(e) => handleCellHover(e, el.buy)} onMouseLeave={deleteCellHover}>{el.buy}</td>
                        <td onMouseEnter={(e) => handleCellHover(e, el.sell)} onMouseLeave={deleteCellHover}>{el.sell}</td>
                    </tr>
                })}
                </tbody>
            </table>)}
        </>
    )
}
export default CurrencyTable
