import {useEffect, useState} from "react";

export const useTimeoutHooks = (delay: number) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let time = setTimeout(() => {
            setReady(true);
        }, delay);

        return () => clearTimeout(time);

    }, []);
    return ready;
}