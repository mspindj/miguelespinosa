import ArticleLayout from "@/components/article/ArticleLayout";

const HireForJudgmentArticle = () => {
  return (
    <ArticleLayout
      category="Talent Strategy"
      title="Hire for Judgment, Not for Tools"
      subtitle="In an AI world, the designer who knows Figma best is the least defensible hire you can make."
      date="Apr 1, 2026"
      patternClass="pattern-generalist"
    >
      <p>
        Every design hiring conversation I've been in over the last two years has the same
        shape: we look at portfolios for visual craft, assess Figma fluency, maybe run a
        design challenge. Then we wonder why our teams struggle to influence strategy,
        communicate with executives, or make decisions when the brief is ambiguous.
      </p>

      <p>
        We hired for execution and expected leadership. We screened for tools and needed judgment.
        Those are different skill sets — and in 2026, only one of them is becoming more valuable.
      </p>

      <h2>What AI Changes About Hiring</h2>

      <p>
        Generative AI has compressed the skill gap in execution. A designer who is merely
        competent can now produce outputs that previously required genuine craft mastery.
        Wireframes, visual explorations, prototype iterations — the time cost of each has
        collapsed. This is good for productivity. It's devastating for a hiring framework
        built around execution quality.
      </p>

      <p>
        If your screening process can be cleared by someone using AI tools well, you're not
        screening for what matters. You're screening for <strong>tool fluency</strong> — and
        tool fluency is now a baseline, not a differentiator.
      </p>

      <div className="article-callout">
        <p>
          The question that matters in 2026 isn't "can this person execute?"
          It's "can this person frame the right problem when nobody has told them
          what the problem is?"
        </p>
      </div>

      <h2>What Judgment Looks Like in an Interview</h2>

      <ul className="article-list">
        <li>
          <strong>Give an underspecified brief.</strong> "Improve the onboarding experience"
          — with no further context. The designer who asks clarifying questions about business
          goals, user segments, and success metrics before opening Figma is demonstrating
          judgment. The designer who immediately starts wireframing is demonstrating execution
          reflex.
        </li>
        <li>
          <strong>Ask about a decision they pushed back on.</strong> Execution designers don't
          push back. Judgment designers do — and they can articulate why, in terms of user
          impact or business risk, not aesthetic preference.
        </li>
        <li>
          <strong>Ask them to critique their own work.</strong> Not the portfolio piece they
          prepared — the one they shipped six months ago. Designers with good judgment can
          identify their own mistakes and explain what they'd do differently. Designers optimized
          for output defend everything they shipped.
        </li>
      </ul>

      <h2>The Team You're Actually Building</h2>

      <p>
        When I built the design team at BBVA Colombia, the most impactful hires weren't the
        ones with the best portfolios. They were the ones who could sit in a room with a banker
        and a product manager, understand what the business actually needed, and translate that
        into a design direction — before anyone had drawn a single screen.
      </p>

      <p>
        That skill — problem framing, stakeholder translation, decision clarity under ambiguity —
        doesn't show up in a portfolio. It shows up in how someone thinks when the answer
        isn't obvious.
      </p>

      <p>
        In a world where AI handles execution, the designers who will matter are the ones
        whose primary output is <strong>clarity</strong> — about the problem, the trade-offs,
        and the decision that actually needs to be made. That's not a design skill.
        It's a judgment skill. And it's the only one that compounds.
      </p>
    </ArticleLayout>
  );
};

export default HireForJudgmentArticle;
