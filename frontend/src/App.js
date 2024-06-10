import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
//import Login from './Login';
import Settings from './Settings';
import CashWithdrawal from './CashWithdrawal';
import BalanceInquiry from './BalanceInquiry';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Transfer from './Transfer';
import Services from './Services';
import ChangeCardSettings from './ChangeCardSettings';
import Help from './Help';
import VoiceNavigation from './VoiceNavigation';
function App() {
  const [currentScreen, setCurrentScreen] = useState('services');

  const handleServiceSelect = (service) => {
    setCurrentScreen(service);
  };

  const handleBack = () => {
    setCurrentScreen('services');
  };



  return (
    
      <ChakraProvider>
        <BrowserRouter>
      <VoiceNavigation 
        onBack={handleBack}
      
      />


      {currentScreen === 'services' && <Services onServiceSelect={handleServiceSelect} />}
      {currentScreen === 'withdrawCash' && <CashWithdrawal onBack={handleBack} />}
      {currentScreen === 'balanceInquiry' && <BalanceInquiry onBack={handleBack} />}
      {currentScreen === 'transfer' && <Transfer onBack={handleBack} />}
      {currentScreen === 'settings' && <Settings onBack={handleBack} />}
      {currentScreen === 'help' && <Help onBack={handleBack} />}
       </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
