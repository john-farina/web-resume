import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useHashPageNavigation(): void {
    const navigate = useNavigate();

    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#drones') {
                navigate('/drones');
            }
        };

        window.addEventListener('hashchange', handleHashChange);

        handleHashChange();

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [navigate]);
}

export default useHashPageNavigation;