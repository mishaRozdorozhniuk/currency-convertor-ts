import { useEffect, useState } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { errorRequestMessage } from "../../store/action";

interface Rate {
    [currency: string]: number;
}

interface ApiResponse {
    data: Rate;
}

const UseFetch = () => {
    const [rates, setRates] = useState<Rate>({});
    const dispatch = useDispatch();

    if (!localStorage.getItem('apiRequestCounter')) {
        localStorage.setItem('apiRequestCounter', '0');
    }

    useEffect(() => {
        axios.get<ApiResponse>('db.json')
            .then((response) => {
                const apiRequestCounter = parseInt(localStorage.getItem('apiRequestCounter') || '0', 10);
                const newApiRequestCounter = apiRequestCounter + 1;
                localStorage.setItem('apiRequestCounter', newApiRequestCounter.toString());

                if (newApiRequestCounter % 6 === 0) {
                    dispatch(errorRequestMessage('The request failed'));
                    localStorage.setItem('apiRequestCounter', '0');
                }

                // @ts-ignore
                setRates(response.data);
            })
            .catch((error) => {
                dispatch(errorRequestMessage(error.message));
            });
    }, [dispatch]);

    return { rates };
};

export default UseFetch;
