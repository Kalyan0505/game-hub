import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Layout from "./Layout";
import { Box, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Layout />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Invalid Page"
            : "Sorry, Unexpeced Error"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
