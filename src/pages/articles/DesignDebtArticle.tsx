import ArticleLayout from "@/components/article/ArticleLayout";

const DesignDebtArticle = () => {
  return (
    <ArticleLayout
      category="Design Leadership"
      title="Design Debt is Strategy Debt"
      subtitle="A confused product doesn't have a visual problem. It has accumulated decisions without coherence."
      date="Mar 5, 2026"
      patternClass="pattern-systems"
    >
      <p>
        When a product feels inconsistent, the instinct is to call a design sprint. Redesign the
        navigation. Refresh the visual language. Ship a new component library. These are expensive
        responses to the wrong diagnosis.
      </p>

      <p>
        Design debt isn't a UX problem. It's the visible record of strategic decisions that were
        made in isolation — by different teams, at different moments, without a shared framework
        for what "good" looks like. Every inconsistent button state, every duplicated flow, every
        contradictory label is a scar left by a decision that was never connected to anything else.
      </p>

      <h2>The Real Accumulation</h2>

      <p>
        During three years at Teleperformance, I inherited a product ecosystem built by dozens of
        distributed teams across LATAM, Europe, and India. The interfaces weren't ugly — they were
        incoherent. Each team had solved the same problems independently, with different assumptions,
        different patterns, different language. The result wasn't a design problem. It was a
        <strong> governance problem masquerading as a visual one</strong>.
      </p>

      <p>
        The cost isn't aesthetic. It's operational. When engineers debate which component to use
        in every sprint, that's design debt eating engineering time. When users call support because
        the same action has three different names across the product, that's design debt generating
        OpEx. When a new market launch requires six months of UI reconciliation, that's design debt
        blocking revenue.
      </p>

      <div className="article-callout">
        <p>
          Design debt compounds like financial debt. Left unaddressed, the interest payments
          — in engineer hours, support costs, and delayed launches — eventually exceed the
          cost of the original decisions.
        </p>
      </div>

      <h2>Why It's a Leadership Failure</h2>

      <p>
        Inconsistency doesn't happen because designers are careless. It happens because no one
        built the infrastructure that makes consistency the path of least resistance. No shared
        token system. No contribution model. No design authority. No single source of truth.
      </p>

      <p>
        That infrastructure is a leadership responsibility — not a design system task. A component
        library without governance is just well-organized chaos. The real work is building the
        decision framework that prevents debt from accumulating in the first place.
      </p>

      <h2>Paying It Down</h2>

      <ul className="article-list">
        <li>
          <strong>Audit decisions, not screens.</strong> The question isn't "which button style
          is correct?" It's "why do we have four button styles, and which decisions produced each one?"
        </li>
        <li>
          <strong>Establish a governance model before a component library.</strong> The system
          is only as strong as the process that maintains it.
        </li>
        <li>
          <strong>Connect design decisions to business outcomes.</strong> When a team understands
          that their inconsistent pattern is costing X in support calls, the conversation changes.
        </li>
      </ul>

      <p>
        The organizations that ship coherent products at scale aren't better at design.
        They're better at <strong>decisions</strong> — which is the only thing design systems
        are really trying to encode.
      </p>
    </ArticleLayout>
  );
};

export default DesignDebtArticle;
