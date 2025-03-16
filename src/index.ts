#!/usr/bin/env node

import dotenv from "dotenv";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { configValidationSchema } from "./schemas/config";
import { connectTools } from "./tools";
import { AppContext } from "./types";

const bootstrap = async () => {
  dotenv.config();

  const config = configValidationSchema.parse(process.env);

  const context: AppContext = {};

  const server = new McpServer(
    {
      name: "INTEGRATION MCP Server",
      version: "0.0.1",
    },
    {
      capabilities: {
        tools: {},
        prompts: {},
      },
    }
  );

  connectTools(server, context);

  const transport = new StdioServerTransport();

  console.log("Connecting to MCP server...");
  await server.connect(transport);
  console.log("Connected to MCP server");
};

bootstrap().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
