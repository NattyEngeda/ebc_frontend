import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Alert = (message) => {

    const notify = (message) => {
        toast.error(message, {
            theme: 'colored'
        });
    }
    return (
        <>
            <ToastContainer />
        </>
    );
}

export default Alert;