"use client";

import React from "react";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";

const MODELS = ["gpt-4o", "gpt-4o-mini", "gpt-3.5-turbo"];

export default function ModelSelectionPage(): React.ReactNode {
  const [apiKey, setApiKey] = React.useState("");
  const [model, setModel] = React.useState<string>(MODELS[0]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("openai:apiKey");
    if (stored) {
      setApiKey(stored);
    }
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (apiKey) {
        window.localStorage.setItem("openai:apiKey", apiKey);
      } else {
        window.localStorage.removeItem("openai:apiKey");
      }
    } catch {
      // no-op
    }
  }, [apiKey]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="apiKey">OpenAI API Key</Label>
        <PasswordInput
          id="apiKey"
          value={apiKey}
          placeholder="sk-..."
          onChange={(e) => setApiKey(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="model">Model</Label>
        <select
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="border-input flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none"
        >
          {MODELS.map((m) => (
            <option
              key={m}
              value={m}
            >
              {m}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
