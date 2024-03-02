import React, {useState, useContext, createContext, useEffect} from 'react'

const UserContext = createContext();

const UserProvider = ({children}) => {

    const [user, setUser] = useState([])

    useEffect(() => {
        const data = localStorage.getItem("user");
        const parseDate = JSON.parse(data);

        if(parseDate){
            setUser(parseDate)
        }
        //eslint-disable-next-line
    }, [])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

// custom hook
const useUser = () => useContext(UserContext);

export {useUser, UserProvider}