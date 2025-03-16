import { z } from "zod";

import { createTextContent } from "../utils/create-text-content";
import { getName } from "../utils/get-name";
import { ServerConnector } from "../types";

export const connectHelloWorld: ServerConnector = (server) => {
  server.tool(
    getName("hello_world"),
    "This tool says hello world",
    async () => ({
      content: [createTextContent("Hello, world!")],
    })
  );
};
