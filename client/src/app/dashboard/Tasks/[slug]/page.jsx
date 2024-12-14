"use client";

import Link from "next/link";
import Editor from "@monaco-editor/react";

export default function ExercisePage({ params }) {
  const slug = params.slug;

  const slugNumber = parseInt(slug, 10);
  if (isNaN(slugNumber) || slugNumber <= 0 || slugNumber >= 21) {
    throw new Error("Page Not Fund");
  }

  return (
    <>
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div style={{ flex: 1 }}>
          <Editor
            height="50%"
            width="50%"
            defaultLanguage="python"
            defaultValue="# some coment"
            theme="hc-black"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              automaticLayout: true,
            }}
          />
        </div>
      </div>
      <Link href="/">Dashboard</Link>
      <h1>Hello World : {slug}</h1>
    </>
  );
}
