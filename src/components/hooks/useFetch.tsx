import {useEffect, useState} from 'react';
import axios from "axios";

const UseFetch = () => {
    const [rates, setRates] = useState<Object[]>([]);

    useEffect(() => {
        axios.get('db.json')
            .then((response) => {
                setRates(response.data)
            })
    }, []);

    return {rates}
};

export default UseFetch;