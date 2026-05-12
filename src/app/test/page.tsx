"use client";

import { useEffect, useState } from "react";

type Result =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "ok"; time: string }
  | { status: "error"; error: string };

export default function TestPage() {
  const [result, setResult] = useState<Result>({ status: "idle" });

  useEffect(() => {
    setResult({ status: "loading" });
    fetch("/api/test")
      .then((r) => r.json())
      .then((data) => {
        if (data.ok) {
          setResult({ status: "ok", time: data.time });
        } else {
          setResult({ status: "error", error: data.error });
        }
      })
      .catch((err) => setResult({ status: "error", error: String(err) }));
  }, []);

  return (
    <main style={{ fontFamily: "monospace", padding: "2rem" }}>
      <h1>DB Connection Test</h1>
      {result.status === "idle" && <p>Starting…</p>}
      {result.status === "loading" && <p>Connecting…</p>}
      {result.status === "ok" && (
        <p style={{ color: "green" }}>
          Connected — server time: {new Date(result.time).toISOString()}
        </p>
      )}
      {result.status === "error" && (
        <p style={{ color: "red" }}>Error: {result.error}</p>
      )}
    </main>
  );
}
