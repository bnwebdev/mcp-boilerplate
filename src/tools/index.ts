import { ServerConnector } from "../types";
import { connectHelloWorld } from "./hello-world";

const toolConnectors: ServerConnector[] = [connectHelloWorld];

export const connectTools: ServerConnector = (server, context) => {
  toolConnectors.forEach((connector) => connector(server, context));
};
