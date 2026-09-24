// Copy carried over from the previous /ai-design-os page. Em dashes rewritten.

export const intro = [
  "I've run this across my latest projects. The results you feel first are practical: sessions carry context forward, output stops feeling random, corrections compound over time instead of resetting. What takes longer to appreciate is the observability. You can trace why the model went a specific direction. You can see what it read before it acted. When something goes wrong, you know exactly where to look.",
  "The problem is never the model. When AI sessions feel random and unreliable, it's because there's no environment around the model. No memory, no context, no scope. Every session starts the same as the last one.",
];

export const components = [
  {
    number: "01",
    name: "Context Files",
    description:
      "What the model reads before it acts. DESIGN.md captures your visual system. voice.md defines how the AI sounds and handles uncertainty. domain-patterns.md encodes the industry knowledge no model can infer. Without these, the model invents its own version of your product.",
    files: ["DESIGN.md", "voice.md", "domain-patterns.md"],
  },
  {
    number: "02",
    name: "Agent Roles",
    description:
      "The agent that writes the spec shouldn't write the code. Separation of concerns applies to agents too. One agent to specify, one to implement, one to review. Each role gets its own context, its own constraints, its own definition of done.",
    files: ["specifier", "implementer", "reviewer"],
  },
  {
    number: "03",
    name: "Memory",
    description:
      "The model doesn't remember you. Your files do. corrections.md captures every time the model did something wrong and what the right answer was. dont-do.md captures approaches you've explicitly rejected. Both travel with the project forever.",
    files: ["corrections.md", "dont-do.md"],
  },
  {
    number: "04",
    name: "Validation",
    description:
      "Checkpoints that run after the model acts. Did it touch files outside the task scope? Stop. Does the output match what was specified? Verify. It sounds paranoid until the first time the model quietly refactors something you didn't ask it to touch.",
    files: ["scope checks", "output verification", "quality gates"],
  },
  {
    number: "05",
    name: "Human Gates",
    description:
      "Deliberate pauses where you decide what happens next. The model can keep going without you. Sometimes that's fine. For decisions that are hard to reverse, build a pause before them.",
    files: ["review checkpoints", "approval workflows"],
  },
];

export const artifacts = [
  {
    name: "DESIGN.md",
    description:
      "A machine-readable version of your design system. Not for engineers. For the model. Semantic color tokens, spacing scale, type scale, component inventory. When the model generates a button, it reads this file instead of pattern-matching against random code it saw in training.",
  },
  {
    name: "voice.md",
    description:
      "How the AI speaks in your product. How certain it sounds at different confidence levels. What it says when it doesn't know. How it handles errors. This isn't marketing copy. It's calibration for every AI-generated string in the product.",
  },
  {
    name: "domain-patterns.md",
    description:
      "Industry knowledge the model can't infer. In a golf app: what's the difference between a handicap and a playing handicap? In banking: what does 'cash conversion' actually mean to a retail customer? Domain depth lives here.",
  },
  {
    name: "corrections.md",
    description:
      "An append-only log of every agent mistake and its correction. Date, context, what went wrong, what the right behavior is. No measurable ROI on day one. By month three, it's the most valuable artifact in your project.",
  },
];

export const week = [
  { day: "Day 1", action: "Write DESIGN.md", detail: "Two hours. Semantic tokens, spacing, type scale, component list. It will pay back in weeks." },
  { day: "Day 2", action: "Write your first corrections.md entry", detail: "Find something the model got wrong today. Document it. The file exists now." },
  { day: "Day 3", action: "Define three agents", detail: "Specifier. Implementer. Reviewer. They don't have to be smart. They have to be separate." },
  { day: "Day 4", action: "Add your first human gate", detail: "One checkpoint where you approve before the agent continues." },
  { day: "Day 5", action: "Write domain-patterns.md", detail: "What does your product domain know that the model doesn't? Write that down." },
  { day: "Day 7", action: "You have a system", detail: "Rough at the edges. It'll get sharper as you correct it." },
];

export const forYou = [
  "You're already using AI tools and feel like you're losing control",
  "You spend too much time correcting the AI and not enough time using it",
  "You're a designer or design leader running real product work",
  "You want a system you can set up this week, not a theory for next quarter",
];

export const notForYou = [
  "You're looking for a technical architecture guide",
  "You haven't started using AI in your workflow yet",
  "You want a framework someone else built that you can just install",
];

export const beforeCode = `// No context files loaded
// Model guesses from training data

<Button
  style={{
    backgroundColor: '#3b82f6',
    padding: '8px 16px',
    borderRadius: '4px',
    fontSize: '14px'
  }}
>
  Get Started
</Button>

// Wrong color. Wrong radius.
// Hardcoded values. Every time.`;

export const afterCode = `// DESIGN.md loaded: model reads your system

<Button
  variant="default"
  size="md"
  className="rounded-md"
>
  Get Started
</Button>

// Correct tokens. Correct component.
// Matches your design system exactly.`;
