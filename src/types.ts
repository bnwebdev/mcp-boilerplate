import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";

export type AppContext = {};

export type ServerConnector = (server: McpServer, context: AppContext) => void;

export type TextContent = {
  type: "text";
  text: string;
};
