import ArticleLayout from "@/components/article/ArticleLayout";

const AIHarnessArticle = () => {
  return (
    <ArticleLayout
      category="AI Strategy"
      title="The Runaway Horse and How to Rein It In"
      subtitle="Most teams spend 90% of their energy picking the model. Almost nothing goes into the environment around it."
      date="Apr 8, 2026"
      patternClass="pattern-ai"
    >
      <p>
        Everyone's racing to put AI agents into their workflow. Fair enough. The models are impressive.
        Give one a task and it moves fast, writes clean code, thinks through edge cases, handles
        complexity that would take you hours.
      </p>

      <p>
        But fast in the wrong direction is worse than slow.
      </p>

      <p>
        I call this the runaway horse problem. The horse is powerful. The horse wants to work.
        The horse has no idea where you want to go.
      </p>

      <p>
        Most teams spend 90% of their energy picking the horse: which model, which API, which benchmark.
        Almost nothing goes into building the harness.
      </p>

      <h2>What the harness actually is</h2>

      <p>
        The harness is the environment. Everything around the model that shapes what it can see,
        what it's allowed to do, and what happens after it acts. The prompt is part of it, but
        a small part.
      </p>

      <p>A real harness has five components:</p>

      <ul className="article-list">
        <li>
          <strong>Context files.</strong> What the model reads before it does anything. Your tech stack,
          your conventions, your architectural decisions, the mistakes you've already made. If it's not
          on disk, the model invents its own version.
        </li>
        <li>
          <strong>Agent roles.</strong> Different agents for different jobs. The one that writes the spec
          shouldn't write the code. Separation of concerns applies to agents too.
        </li>
        <li>
          <strong>Memory.</strong> What persists between sessions. Not in the model's weights, in files.
          The model doesn't remember you. The harness does.
        </li>
        <li>
          <strong>Validation hooks.</strong> Checkpoints that run after the model acts. Did it touch more
          than five files? Stop. Did it modify something outside scope? Stop. Does the output match what
          was specified? Verify.
        </li>
        <li>
          <strong>Human gates.</strong> Deliberate pauses where you approve before the agent continues.
          Not because you don't trust the model. Because trust gets earned incrementally.
        </li>
      </ul>

      <h2>What the minimal version looks like</h2>

      <p>
        It fits in a single folder. A <code>CLAUDE.md</code> that describes your project.
        A <code>corrections.md</code> that logs every agent mistake and its correction.
        A <code>feature_list.json</code> that tracks what's in progress.
        Three agent definitions: one specifies, one implements, one reviews.
      </p>

      <p>
        That's enough to go from "the AI does random things" to "the AI does predictable things."
      </p>

      <div className="article-callout">
        <p>
          The teams getting the most out of AI agents aren't the ones with the best models.
          They're the ones who built something around the model worth directing.
        </p>
      </div>

      <p>
        The model hasn't changed. The harness changed everything.
      </p>
    </ArticleLayout>
  );
};

export default AIHarnessArticle;
