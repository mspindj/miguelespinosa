import ArticleLayout from "@/components/article/ArticleLayout";

const OutcomeStoriesArticle = () => {
  return (
    <ArticleLayout
      category="Design Leadership"
      title="Outcome Stories: Measuring Design Impact That Matters"
      subtitle="Stop counting deliverables. Start counting decisions influenced."
      date="Feb 5, 2026"
      patternClass="pattern-outcomes"
    >
      <p>
        The most common mistake design leaders make is reporting on <strong>outputs</strong>—screens 
        designed, components shipped, usability tests completed. But outputs don't move budgets. 
        <strong>Outcomes</strong> do.
      </p>

      <p>
        An outcome story is a narrative that connects design work to measurable business change. 
        It answers the only question executives actually care about: "So what?"
      </p>

      <h2>The Anatomy of an Outcome Story</h2>

      <p>
        Every outcome story follows a simple structure:
      </p>

      <ul className="article-list">
        <li><strong>The Problem:</strong> What organizational friction existed before?</li>
        <li><strong>The Intervention:</strong> What did design specifically change?</li>
        <li><strong>The Metric:</strong> What number moved, and by how much?</li>
        <li><strong>The Attribution:</strong> Why was design the causal factor?</li>
      </ul>

      <div className="article-callout">
        <p>
          "We redesigned the checkout flow" is an output. "We reduced cart abandonment by 23%, 
          recovering $2.4M in annual revenue" is an outcome.
        </p>
      </div>

      <h2>Measuring What Matters</h2>

      <p>
        The most powerful design metric isn't pixels shipped—it's <strong>organizational behavior 
        changed</strong>. When a design decision influences how a team operates, how customers 
        behave, or how money flows, that's the outcome worth documenting.
      </p>

      <p>
        Start building your outcome library today. In six months, you'll have an irrefutable 
        portfolio of strategic impact.
      </p>
    </ArticleLayout>
  );
};

export default OutcomeStoriesArticle;
