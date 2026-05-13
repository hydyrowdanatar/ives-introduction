"use client";

import { useEffect, useState } from "react";

type DbResult =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "ok"; time: string }
  | { status: "error"; error: string };

export default function TestPage() {
  const [db, setDb] = useState<DbResult>({ status: "idle" });
  const [envVars, setEnvVars] = useState<Record<string, string | null> | null>(null);

  useEffect(() => {
    setDb({ status: "loading" });
    fetch("/api/test")
      .then((r) => r.json())
      .then((data) => {
        if (data.ok) setDb({ status: "ok", time: data.time });
        else setDb({ status: "error", error: data.error });
      })
      .catch((err) => setDb({ status: "error", error: String(err) }));

    fetch("/api/debug-env")
      .then((r) => r.json())
      .then(setEnvVars)
      .catch(() => null);
  }, []);

  return (
    <main style={{ fontFamily: "monospace", padding: "2rem", maxWidth: 900 }}>
      <h1>DB Connection Test</h1>
      {db.status === "idle" && <p>Starting…</p>}
      {db.status === "loading" && <p>Connecting…</p>}
      {db.status === "ok" && (
        <p style={{ color: "green" }}>
          Connected — server time: {new Date(db.time).toISOString()}
        </p>
      )}
      {db.status === "error" && (
        <p style={{ color: "red" }}>Error: {db.error}</p>
      )}

      <h2 style={{ marginTop: "2rem" }}>Environment Variables</h2>
      {!envVars ? (
        <p>Loading…</p>
      ) : (
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={thStyle}>Variable</th>
              <th style={thStyle}>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(envVars).map(([key, value]) => (
              <tr key={key}>
                <td style={tdStyle}>{key}</td>
                <td style={{ ...tdStyle, color: value ? "inherit" : "red" }}>
                  {value ?? "NOT SET"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "6px 12px",
  borderBottom: "2px solid #ccc",
  background: "#f5f5f5",
};

const tdStyle: React.CSSProperties = {
  padding: "5px 12px",
  borderBottom: "1px solid #eee",
  wordBreak: "break-all",
};
