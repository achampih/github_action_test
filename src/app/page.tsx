"use client";

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-10 text-center border border-slate-100">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Willkommen zu unserem{" "}
          <span className="text-blue-600">GitHub Actions</span> Kurs!
        </h1>

        <p className="text-slate-600 text-lg mb-8">
          Diese Seite wurde automatisch mit{" "}
          <span className="font-mono font-bold text-orange-600">Bun</span>{" "}
          gebaut und via{" "}
          <span className="font-mono font-bold text-purple-600">
            CD-Pipeline
          </span>{" "}
          auf GitHub Pages veröffentlicht.
        </p>

        <button
          onClick={() =>
            alert(
              "GitHub Actions sind genial! Die Pipeline hat funktioniert! 🎉",
            )
          }
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg mb-10"
        >
          Klick mich!
        </button>

        <hr className="border-slate-100 mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-600 font-medium transition-colors flex items-center gap-2"
          >
            Next.js Dokumentation →
          </a>
          <a
            href="https://bun.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-orange-500 font-medium transition-colors flex items-center gap-2"
          >
            Bun Power →
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <p className="text-slate-400 text-sm italic">
          Status: Pipeline bereit für das Deployment.
        </p>
        <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-200">
          Continuos Integration/Continuos Deployment ACTIVE
        </span>
      </div>
    </main>
  );
}
