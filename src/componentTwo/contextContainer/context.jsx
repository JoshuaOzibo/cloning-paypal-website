import React, {createContext, useState} from 'react';

// create context
export const AppContext = createContext();

// create context provider;
const ContextProvider = ({children}) => {
    const [darkMood, setDarkMood] = useState(false);

    // button to toggle the state;
    const switchBtn = () => setDarkMood((prev) => !prev);

    // context Value
    const contextValue = {
        switchBtn,
        darkMood
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
};

export default ContextProvider;

