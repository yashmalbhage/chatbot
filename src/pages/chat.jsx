// Install Chakra UI and Emotion (for styling)
// npm install @chakra-ui/react @emotion/react @emotion/styled

import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Input,
  Button,
  VStack,
  Message,
  extendTheme,
  useColorMode,
  useColorModeValue,
  CSSReset,
  ThemeConfig,
} from "@chakra-ui/react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      // In a real chatbot, you'd handle the response here.
      // For simplicity, let's assume the bot always responds with the same message.
      setMessages([...messages, { text: "Hi!! How can I help you", sender: "bot" }]);
      setInput("");
    }
  };

  const theme = extendTheme({
    config: {
      initialColorMode: "dark",
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <VStack p={4} spacing={4} align="stretch">
        <Box
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          bg={useColorModeValue("gray.200", "gray.700")}
        >
            Hi!! How can I help you?
        </Box>
        <VStack spacing={4} align="stretch">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button colorScheme="teal" onClick={handleSendMessage}>
            Send
          </Button>
        </VStack>
      </VStack>
    </ChakraProvider>
  );
};

const message = ({ children, sender }) => {
  const bgColor = useColorModeValue("teal.200", "teal.700");
  const align = sender === "user" ? "flex-end" : "flex-start";
  const textColor = useColorModeValue("black", "white");

  return (
    <Box
      p={2}
      maxWidth="70%"
      borderRadius="md"
      bg={bgColor}
      alignSelf={align}
      color={textColor}
    >
      {children}
    </Box>
  );
};

export default ChatBot;
