import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const contactInfo = {
    firstName: 'Maria',
    lastName: 'Paez',
    address: 'Miami, Fl',
    phoneNumber:'+17862023462',
    instagram:'https://www.instagram.com/marialepaez_mortgage_loan/',
    email: 'mari@justloan-solutions.com'
  }
  // show sidebar
  const [showSidebar, setShowSidebar] = useState(false);

  const value = {
    show,
    handleClose,
    handleShow,
    showSidebar,
    setShowSidebar,
    contactInfo
  };
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;