import UsersList from "./components/UsersList";

import './App.scss';
import { ModalProvider } from "./features/bmiCalculator/modalContext";

function App() {

    return (
        <>
            <ModalProvider>
                <UsersList/>
            </ModalProvider>
        </>
    )
}

export default App;
