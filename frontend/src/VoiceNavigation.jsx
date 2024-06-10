import React, { useState, useEffect, useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import { useSpeechSynthesis, useSpeechRecognition } from 'react-speech-kit';
import { Button, Box, Spinner } from '@chakra-ui/react';
import Services from './Services'; 

function VoiceNavigation() {
  const navigate =useNavigate();
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
 

  const { speak } = useSpeechSynthesis();
  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => {
      setTranscript(result);
    },
  });

  const handleStartListening = () => {
    setIsListening(true);
    listen();
  };

  const handleStopListening = () => {
    setIsListening(false);
    stop();
  };


  useEffect(() => {
    speak({ text: "Welcome to the Voice-Activated ATM. How can I help you today? You can say 'services' to hear the available options." });
  }, []);

  useEffect(() => {
    if(!isListening){
 handleStartListening();
    }
     if (transcript) {
      const command = transcript.toLowerCase();
      const commandWords = command.split(' ');
      window.alert("command");
      if (command.includes('service')) {
        speak({ text: "Our services include cash withdrawal, balance inquiry, transfer, change card settings, and help. Please say the service you need, or say 'repeat' to hear the options again." });
      } else if (command.includes('repeat')) {
        speak({ text: "Our services include cash withdrawal, balance inquiry, transfer, change card settings, and help. Please say the service you need." });
      } else if (command.includes('cash') && commandWords.includes('withdraw')) {
        speak({ text: "Navigating to cash withdrawal." });
        navigate('withdrawCash'); 
      } else if (commandWords.includes('balance') || commandWords.includes('inquiry')) {
        speak({ text: "Your balance is... 50$" }); 
      } else if (commandWords.includes('transfer')) {
        speak({ text: "Navigating to transfer." });
        navigate('transfer');
      } else if (commandWords.includes('card') && commandWords.includes('setting')) {
        speak({ text: "Navigating to card settings." });
        navigate('settings');
      } else if (commandWords.includes('help')) {
        speak({ text: "How can I assist you?" }); 
        navigate('help');
      } 

      setTranscript('');
    }
  }, [transcript, speak, navigate]);





  return (
    
      <Box p={4} borderWidth="1px" borderRadius="md">
        
           <Button onClick={isListening ? handleStopListening : handleStartListening}>
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </Button>
        {transcript && (
          
          <Box mt={2}>
            You said: {transcript}
          </Box>
        )}
      </Box>
      
    );
}

export default VoiceNavigation;