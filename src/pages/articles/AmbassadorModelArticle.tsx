import ArticleLayout from "@/components/article/ArticleLayout";

const AmbassadorModelArticle = () => {
  return (
    <ArticleLayout
      category="Ops Strategy"
      title="The Ambassador Model: Scaling Design Culture Without Headcount"
      subtitle="You can't hire your way to a design culture. You have to grow it from inside."
      date="Mar 15, 2026"
      patternClass="pattern-leadership"
    >
      <p>
        In 2016, I became the first dedicated design leader at BBVA Colombia. The bank had
        thousands of employees, dozens of digital products, and exactly zero shared design
        principles. My team was small. The problem was not.
      </p>

      <p>
        The naive solution was to hire more designers and embed them everywhere. The real
        solution was to turn non-designers into design advocates — people inside engineering,
        marketing, operations, and product who understood user-centered thinking well enough
        to apply it in their daily decisions, without waiting for a designer to be in the room.
      </p>

      <p>
        That became the Design Ambassadors Program: 125+ people across the organization,
        trained not to do design, but to <strong>think about users before making decisions</strong>.
      </p>

      <h2>Why This Works Where Hiring Doesn't</h2>

      <p>
        Design culture doesn't scale through headcount alone. A team of 12 designers in a
        company of 5,000 people is a bottleneck, not a culture. Every decision that doesn't
        go through a designer — and most decisions don't — happens without design thinking.
      </p>

      <p>
        Ambassadors change the ratio. When a product manager has internalized that a user's
        mental model matters, they make better decisions in every meeting where a designer
        isn't present. When an engineer understands why consistency reduces cognitive load,
        they push back on shortcuts that would create debt. The culture multiplies because
        the thinking is distributed.
      </p>

      <div className="article-callout">
        <p>
          The goal of a design culture program isn't to make everyone a designer. It's to
          make everyone a better decision-maker about the people they're building for.
        </p>
      </div>

      <h2>What the Program Actually Looked Like</h2>

      <ul className="article-list">
        <li>
          <strong>Entry-level workshops.</strong> Three-hour sessions on user research basics,
          mental models, and how to frame problems before jumping to solutions. Accessible to
          anyone — not just technical roles.
        </li>
        <li>
          <strong>Product critiques with mixed teams.</strong> Engineers, PMs, and designers
          reviewing work together using shared criteria. The goal wasn't consensus — it was
          a shared vocabulary for disagreement.
        </li>
        <li>
          <strong>Ambassador accountability.</strong> Each ambassador "owned" user experience
          quality in their squad — not as a gatekeeper, but as a raised voice. Someone who
          asks "have we talked to users about this?" before every launch.
        </li>
      </ul>

      <h2>The Result That Mattered Most</h2>

      <p>
        The Best Mobile Bank Colombia recognition in 2019 wasn't won by a design team. It was
        won by an organization that had internalized what "good" looked like across five products,
        three years, and hundreds of decisions that no single designer ever touched.
      </p>

      <p>
        That's what culture produces. Not better deliverables — better decisions, at scale,
        without supervision. <strong>That's the only design outcome that compounds.</strong>
      </p>
    </ArticleLayout>
  );
};

export default AmbassadorModelArticle;
