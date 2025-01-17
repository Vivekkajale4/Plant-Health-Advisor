import { React } from "react";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import CardWrapper from "./components/Cardwrapper.js";
//Main App component
function Note() {
  return (
    <ChakraProvider>
      <CardWrapper />
    </ChakraProvider>
  );
}

export default Note;
