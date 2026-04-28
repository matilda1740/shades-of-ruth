import {useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router';

export const useSignal = () => {

    const navigate = useNavigate();

    const [isAlert, setIsAlert] = useState(false);
    const [alertType, setAlertType] = useState("");
    const [alertMsg, setAlertMsg] = useState("");

    const displaySignal = (message, type, path) => {
        setIsAlert(true)
        setAlertType(type)
        setAlertMsg(message)
        setTimeout(() => {
            setIsAlert(false)
            setAlertType("")
            setAlertMsg("")
            type === "success" && navigate(path)
        }, 4000);        
    }

    useEffect(() => {
        // const timer = setTimeout(() => {
        //     setIsAlert(false)
        //     setAlertType("")
        //     setAlertMsg("")
        // }, 4000);

        // return () => clearTimeout(timer);
    }, []);

    return { isAlert, alertType, alertMsg, displaySignal };
}