import { useEffect, useState } from "react";

export const useFetch = (url, config) => {

    // const isMounted = useRef(true);
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    // useEffect(() => {
    //     console.log(isMounted);
    //     return () => {
    //         isMounted.current = true;

    //     };
    // }, []);

    useEffect(() => {
        fetch(url, config)
            .then(resp => resp.json())
            .then(data => {
                setState({
                    loading: false,
                    data: data,
                    error: null,

                });
            });
    }, [config, url]);

    // useEffect(() => {
    //     setState({
    //         data: null,
    //         loading: true,
    //         error: null
    //     })

    //     fetch(url).then()
    //         .then(resp => resp.json())
    //         .then(data => {

    //             if (isMounted.current) {
    //                 setState({
    //                     loading: false,
    //                     data: data,
    //                     error: null,

    //                 });
    //             } else {
    //                 console.log('SetState no llamado', isMounted.current);
    //             }

    //         });
    // }, [url]);

    return state;
};