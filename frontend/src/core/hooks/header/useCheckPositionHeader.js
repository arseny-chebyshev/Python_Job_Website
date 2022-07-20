import {useEffect, useState} from "react";

export const useCheckPositionHeader = () => {
    const [small, setSmall] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>
            setSmall(window.pageYOffset > 64)
        );
    }, []);

    return {small}
}