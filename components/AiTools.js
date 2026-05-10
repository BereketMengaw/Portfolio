"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faCogs,
  faTerminal,
  faBolt,
  faWandMagicSparkles,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

const tools = [
  {
    name: "Claude",
    role: "Reasoning & code generation",
    icon: faWandMagicSparkles,
    accent: "from-purple-500 to-fuchsia-500",
  },
  {
    name: "Cursor",
    role: "AI-native code editor",
    icon: faTerminal,
    accent: "from-fuchsia-500 to-pink-500",
  },
  {
    name: "Claude Code",
    role: "Agentic CLI development",
    icon: faCodeBranch,
    accent: "from-indigo-500 to-purple-500",
  },
  {
    name: "Automation",
    role: "Workflows, agents, pipelines",
    icon: faCogs,
    accent: "from-purple-500 to-indigo-500",
  },
];

const capabilities = [
  "Building AI-powered features with the Claude API and tool use",
  "Designing autonomous agents and multi-step automation pipelines",
  "Pair-programming end-to-end products with Claude Code and Cursor",
  "Prompt engineering, context design, and prompt-cache optimization",
  "Integrating LLMs into web apps for chat, search, and decision flows",
  "Shipping faster with AI-assisted refactors, reviews, and tests",
];

export default function AiTools() {
  return (
    <section
      id="ai"
      className="relative py-24 px-4 sm:px-8 mesh-bg text-white w-full overflow-hidden"
    >
      <div className="absolute -left-32 top-1/4 w-[30rem] h-[30rem] rounded-full bg-purple-700/20 blur-[160px] pointer-events-none" />
      <div className="absolute -right-32 bottom-0 w-[30rem] h-[30rem] rounded-full bg-fuchsia-700/15 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-[0.25em] text-purple-200 mb-5">
            <FontAwesomeIcon icon={faBolt} className="text-[10px]" />
            AI &amp; Automation
          </span>
          <h2 className="section-heading">
            Building with <span className="gradient-text">AI</span> at the core
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            I work daily in AI development and automation — using tools like
            <span className="text-purple-200"> Claude</span> and
            <span className="text-purple-200"> Cursor</span> to design, build,
            and ship intelligent products faster. From autonomous agents to
            LLM-powered features, AI is part of how I think and how I ship.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group relative glass glass-hover rounded-2xl p-5 overflow-hidden"
            >
              <div
                className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${tool.accent} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`}
              />
              <div
                className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${tool.accent} flex items-center justify-center mb-4 shadow-purple-glow`}
              >
                <FontAwesomeIcon icon={tool.icon} className="text-white text-lg" />
              </div>
              <h3 className="relative font-semibold text-white text-sm mb-1">
                {tool.name}
              </h3>
              <p className="relative text-gray-400 text-xs leading-relaxed">
                {tool.role}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-strong rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center shadow-purple-glow">
              <FontAwesomeIcon icon={faRobot} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-base">
                What I do with AI
              </h3>
              <p className="text-purple-300/80 text-xs uppercase tracking-[0.2em]">
                Day-to-day
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {capabilities.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400 shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
