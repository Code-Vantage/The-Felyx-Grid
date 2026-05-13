"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  name: "the-felyx-grid",
  title: "The Felyx Grid",
  projectId: projectId || "placeholder",
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
  scheduledPublishing: {
    enabled: false,
  },
  apiVersion,
});
