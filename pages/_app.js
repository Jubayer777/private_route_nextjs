import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import store from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor=persistStore(store)


export default function App({ Component, pageProps }) {
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Navbar />
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        </>
    );
}
