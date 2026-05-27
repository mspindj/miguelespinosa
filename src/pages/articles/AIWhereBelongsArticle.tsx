import ArticleLayout from "@/components/article/ArticleLayout";

const AIWhereBelongsArticle = () => {
  return (
    <ArticleLayout
      category="AI Strategy"
      title="The Question Nobody Asks Before Adding AI to Their Product"
      subtitle="Visible and valuable aren't the same thing. Most product teams never notice the difference."
      date="Apr 15, 2026"
      patternClass="pattern-guardrails"
    >
      <p>
        I've watched this happen at every company I've worked with. Someone uses ChatGPT and has
        a good experience. Two weeks later there's a roadmap item called "AI features." A month
        after that, there's a chatbot in the bottom right corner of the product.
      </p>

      <p>
        Nobody asked: where does AI actually belong here?
      </p>

      <p>
        The default answer is "wherever it's visible." Visible and valuable aren't the same thing.
      </p>

      <h2>Jobs, then tasks</h2>

      <p>
        The framework I use before adding any AI feature starts with a question most product teams
        skip: what is the user actually trying to get done?
      </p>

      <p>
        Start with the job-to-be-done. Not the feature, not the workflow. The underlying job.
        Then decompose it into specific tasks. Each task is a candidate for AI. But the candidates
        aren't equal.
      </p>

      <p>For each task, three questions:</p>

      <ul className="article-list">
        <li>
          <strong>Is it repetitive?</strong> Pattern recognition and consistency are where machines win.
          If the task is different every time, the model has nothing to generalize from.
        </li>
        <li>
          <strong>Is there enough data?</strong> AI learns from signal. Without user behavior,
          historical examples, or labeled outcomes, the model will hallucinate a pattern that doesn't exist.
        </li>
        <li>
          <strong>Is the error tolerable?</strong> This is the one nobody asks. AI systems make mistakes.
          That's not a bug, it's how probabilistic systems work. When the model is wrong, what happens?
          A wrong recommendation in a golf app is annoying. In a medical app, it's dangerous. Design accordingly.
        </li>
      </ul>

      <h2>Who wins what</h2>

      <p>
        Machines win at pattern recognition across large datasets, speed, consistency at scale, and running
        without fatigue. Humans win at judgment under incomplete information, creativity, empathy, and handling
        genuinely novel situations.
      </p>

      <p>
        The best AI features don't replace human judgment. They free humans from the tasks that don't require it.
      </p>

      <div className="article-callout">
        <p>
          I applied this to a product I'm building for golfers. The job: get better at golf.
          Decomposed tasks: track shots, analyze patterns, get club recommendations, review round history.
          AI belongs in the analysis and recommendation layers. Tasks that are repetitive, data-rich,
          and where errors are recoverable. It doesn't belong in telling someone whether to play through
          an injury. That requires judgment I don't want to delegate to a model.
        </p>
      </div>

      <p>
        Find where machines win. Leave the rest alone.
      </p>
    </ArticleLayout>
  );
};

export default AIWhereBelongsArticle;
