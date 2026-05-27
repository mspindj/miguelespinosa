import ArticleLayout from "@/components/article/ArticleLayout";

const CorrectionsLogArticle = () => {
  return (
    <ArticleLayout
      category="AI Strategy"
      title="corrections.md: The Most Valuable File You're Not Keeping"
      subtitle="AI agents don't have persistent memory. Your codebase can."
      date="Apr 29, 2026"
      patternClass="pattern-systems"
    >
      <p>
        There's a file that has saved me more time than any tool, any model upgrade, or any prompt
        technique I've tried.
      </p>

      <p>
        It's called <code>corrections.md</code>. An append-only log. Every time an AI agent does
        something wrong and I correct it, the correction goes in the file. Date, context, what went
        wrong, what the right behavior is.
      </p>

      <p>
        That's the system.
      </p>

      <h2>Why it matters</h2>

      <p>
        AI agents don't have persistent memory. Every session starts fresh. Every new developer who opens
        the project gets a blank-slate agent. Every model upgrade resets behaviors you built through iteration.
      </p>

      <p>
        Without <code>corrections.md</code>, you're the team's institutional memory. Human memory is lossy,
        non-transferable, and doesn't survive vacation.
      </p>

      <p>
        With <code>corrections.md</code>, the harness remembers.
      </p>

      <h2>How it compounds</h2>

      <p>
        The first week is surface-level things. Don't use semicolons in this codebase. When you create a
        component, also create the test file. Don't touch files outside the scope of the current task.
      </p>

      <p>
        After a month, it's about judgment. When the user asks for a "quick fix," ask whether they want
        a patch or a real solution before touching code. When a task touches authentication, flag it for
        human review before continuing. When the proposed change would affect more than three files,
        write a proposal first.
      </p>

      <p>
        Early entries train behavior. Later entries encode wisdom.
      </p>

      <div className="article-callout">
        <p>
          There's a companion file worth keeping alongside it: <code>dont-do.md</code>. A list of approaches
          that were explicitly rejected and must not come back. The agent has no way to know you spent three
          days on something and decided it was wrong. Without <code>dont-do.md</code>, it will suggest the
          same approach next session.
        </p>
      </div>

      <h2>What goes in it from day one</h2>

      <p>Three categories to start with:</p>

      <ul className="article-list">
        <li>
          <strong>Scope violations.</strong> Any time the agent touched something it shouldn't have.
        </li>
        <li>
          <strong>Assumption errors.</strong> Any time it assumed something instead of asking.
        </li>
        <li>
          <strong>Quality standards.</strong> Any time the output was technically correct but not good enough.
        </li>
      </ul>

      <p>
        Don't wait for corrections to accumulate naturally. In the first session with a new agent,
        deliberately probe these areas. Find the edges early.
      </p>

      <p>
        No measurable ROI on day one. By month three, it's the most valuable artifact in your codebase.
      </p>
    </ArticleLayout>
  );
};

export default CorrectionsLogArticle;
