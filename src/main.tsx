import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Amplify } from "aws-amplify";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

// Bootstrap Amplify + React
async function bootstrap() {
  const res = await fetch("/amplify_outputs.json");
  const config = await res.json();

  Amplify.configure(config);

  const amplifyClient = generateClient<Schema>({
    authMode: "apiKey",
  });

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App amplifyClient={amplifyClient} />
    </React.StrictMode>
  );
}

bootstrap();
