import {useState,useEffect} from "react";

const LlamarPaises = (url) => {
    const [paises, setPaises] = useState ([]);

    const fetchPaisesApi = async() => {
        
        try{
            const response = await fetch (url);
            const result = await response.json();

            setPaises(result);

        }catch (error){
            console.log(error);
        };
    };

    useEffect(() => {
        fetchPaisesApi();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paises ]);


    return paises;
};

export default LlamarPaises;