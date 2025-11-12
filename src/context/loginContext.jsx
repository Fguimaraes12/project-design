import { createContext, useState } from "react";



export const LoginContext = createContext()

function LoginProvider({children}){
const [showModal, setShowModal] = useState(false)

  return(<>
  <LoginContext.Provider value={{showModal, setShowModal}}>
    {children}
  </LoginContext.Provider>
  </>)
}

export default LoginProvider;