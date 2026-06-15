"use client";

import React, { useState } from "react";
import { Sparkles, Terminal, Copy, Check, Download } from "lucide-react";

export default function CodeOptimizer() {
  const [inputCode, setInputCode] = useState("");
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [copied, setCopied] = useState(false);

  // YOUR ADSTERRA DIRECT LINK
  const ADSTERRA_URL = "https://www.effectivecpmnetwork.com/h0qykkzy?key=21849b19275783b7379cacd81b8db4b7";

  const handleOptimize = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;

    setIsOptimizing(true);
    setIsDone(false);
    setProgress(5);

    // Simulate an AI deep-compilation process bar to build user anticipation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsOptimizing(false);
          setIsDone(true);
          
          // TRIGGER THE MONETIZATION CLICK: Opens ad link safely in a brand new tab
          window.open(ADSTERRA_URL, "_blank", "noopener,noreferrer");
          
          return 100;
        }
        // Realistic step jumps
        const nextJump = Math.floor(Math.random() * 15) + 10;
        return Math.min(prev + nextJump, 100);
      });
    }, 200);
  };

  const cleanFakeOutput = () => {
    // Basic regex script to look like actual minification occurred on screen
    return inputCode
      .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "") // Remove comments
      .replace(/\s+/g, " ") // Collapse whitespaces
      .trim();
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-200 font-sans flex flex-col justify-between selection:bg-purple-500/30">
      {/* Top Banner */}
      <header className="border-b border-slate-800 bg-[#0F1424]/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-tr from-purple-600 to-indigo-600 p-2 rounded-xl shadow-lg shadow-purple-500/20">
              <Terminal className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              OptiScript <span className="text-purple-500 text-xs font-semibold px-2 py-0.5 bg-purple-500/10 rounded-full border border-purple-500/20 ml-1">v2.1</span>
            </span>
          </div>
          <div className="text-xs text-slate-400 font-mono hidden sm:block">
            Status: <span className="text-emerald-400">LLM Clusters Operational</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl w-full mx-auto p-4 sm:p-6 my-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            AI-Powered Code <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Minifier & Optimizer</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400">
            Drop your structural scripts below. Our neural engine strips redunant bloating, fixes variable allocations, and optimizes execution syntax instantly.
          </p>
        </div>

        <form onSubmit={handleOptimize} className="space-y-4">
          <div className="bg-[#0F1424] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl focus-within:border-purple-500/50 transition-all duration-300">
            {/* Window control dots bar */}
            <div className="bg-[#131A30] px-4 py-3 border-b border-slate-800/60 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/40"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/40"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/40"></div>
                <span className="text-xs font-mono text-slate-500 ml-2">input_source_code.py</span>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-800/40 px-2 py-0.5 rounded">UTF-8</span>
            </div>

            <textarea
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              placeholder="paste standard source code or database queries here (e.g., Python scripts, SQL statements, loops)..."
              className="w-full h-64 bg-transparent p-4 font-mono text-xs sm:text-sm text-purple-300 placeholder-slate-600 focus:outline-none resize-none leading-relaxed"
              required
            />
          </div>

          {/* Execution Button and Progress State */}
          <div className="flex flex-col items-center justify-center space-y-4">
            {!isOptimizing && !isDone && (
              <button
                type="submit"
                disabled={!inputCode.trim()}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-medium shadow-xl shadow-purple-900/30 flex items-center justify-center space-x-2 transition-all duration-200 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Sparkles className="h-5 w-5" />
                <span>Optimize & Minify Code</span>
              </button>
            )}

            {isOptimizing && (
              <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3 shadow-inner">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-purple-400 animate-pulse">Analyzing control flow paths...</span>
                  <span className="text-slate-400">{progress}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full transition-all duration-200 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </form>

        {/* Results Render Area */}
        {isDone && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-[#0F1424] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-[#131A30] px-4 py-3 border-b border-slate-800/60 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-ping"></span>
                  Optimization Complete (Reduced Memory Bloat)
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(cleanFakeOutput());
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="text-xs text-slate-400 hover:text-white flex items-center bg-slate-800/60 px-2.5 py-1 rounded transition"
                  >
                    {copied ? <Check className="h-3 w-3 mr-1 text-emerald-400" /> : <Copy className="h-3 w-3 mr-1" />}
                    {copied ? "Copied!" : "Copy Output"}
                  </button>
                </div>
              </div>
              <pre className="p-4 font-mono text-xs sm:text-sm text-slate-400 bg-slate-950/40 overflow-x-auto max-h-48 whitespace-pre-wrap select-all">
                {cleanFakeOutput()}
              </pre>
            </div>

            {/* SECONDARY TRIGGER: If the browser pop-up blocker stops window.open, this button acts as backup hook */}
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
              <div>
                <h4 className="text-white font-semibold text-sm">Deep Complexity Metrics Report Generated</h4>
                <p className="text-xs text-slate-400">Your script profiling logs and memory graph mappings are ready for export.</p>
              </div>
              <a
                href={ADSTERRA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 transition whitespace-nowrap shadow-md shadow-purple-900/40"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download Report Summary (PDF)</span>
              </a>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-[#0B0F19] py-4 px-6 text-center text-xs text-slate-600 font-mono">
        &copy; 2026 OptiScript Inc. Protected under global developer tools distribution standards.
      </footer>
    </div>
  );
}