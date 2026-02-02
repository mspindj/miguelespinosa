import ArticleLayout from "@/components/article/ArticleLayout";

const LeanLeadershipArticle = () => {
  return (
    <ArticleLayout
      category="Soft Skills"
      title="Lean Leadership: The Art of Doing Less, Better"
      subtitle="Efficiency isn't about speed—it's about eliminating waste."
      date="Feb 10, 2026"
      patternClass="pattern-lean"
    >
      <p>
        High-performing design teams don't work harder. They work on <strong>fewer, better 
        things</strong>. This is the core principle of lean leadership: ruthless prioritization 
        in service of impact.
      </p>

      <p>
        The enemy isn't a lack of resources—it's an abundance of distractions. Every "quick win" 
        that doesn't compound, every meeting that doesn't decide, every critique that doesn't 
        improve: these are the hidden taxes on your team's potential.
      </p>

      <h2>The Three Laws of Lean Design Teams</h2>

      <div className="article-callout">
        <p>
          1. If it doesn't move a metric, it doesn't make the roadmap.
        </p>
      </div>

      <div className="article-callout">
        <p>
          2. If it can't be shipped this sprint, it needs to be smaller.
        </p>
      </div>

      <div className="article-callout">
        <p>
          3. If it requires more than two approvals, the process is broken.
        </p>
      </div>

      <h2>Leading by Subtraction</h2>

      <p>
        The lean leader's job isn't to add initiatives—it's to <strong>remove obstacles</strong>. 
        Every week, ask your team: "What's slowing you down that I can eliminate?" The answers 
        will reveal the invisible friction that's costing you velocity.
      </p>

      <p>
        Efficiency isn't about speed. It's about eliminating the waste that prevents your best 
        people from doing their best work.
      </p>
    </ArticleLayout>
  );
};

export default LeanLeadershipArticle;
