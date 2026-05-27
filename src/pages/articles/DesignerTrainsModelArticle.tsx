import ArticleLayout from "@/components/article/ArticleLayout";

const DesignerTrainsModelArticle = () => {
  return (
    <ArticleLayout
      category="Design Leadership"
      title="The Designer's New Job: Training the Model"
      subtitle="When the feature is a model making decisions, the interface is the easy part."
      date="May 6, 2026"
      patternClass="pattern-leadership"
    >
      <p>
        For most of my career, my job was to understand users and translate that understanding into
        interfaces. The output was screens. The conversation partner was engineering.
      </p>

      <p>
        That job still exists. It's just not the whole job anymore.
      </p>

      <p>
        When your product is built with AI agents, when the feature is a model making decisions,
        generating content, or recommending actions, the interface is downstream of a harder problem.
        And that harder problem sits in the designer's territory whether they claim it or not.
      </p>

      <h2>The gap nobody's claiming</h2>

      <p>
        Akshay Kore calls it the "Missing Middle." There's a gap between what machines can do
        autonomously and what humans can supervise. That gap requires design. Someone needs to think
        about when the AI hands off to a human, how the user knows the AI is uncertain, what the
        user needs to understand to supervise the system at all.
      </p>

      <p>
        Engineering builds the model. Product defines the use case. Nobody's designing the supervision
        layer. That's a design problem.
      </p>

      <h2>The new artifacts</h2>

      <p>I produce things now I didn't produce five years ago:</p>

      <ul className="article-list">
        <li>
          <strong><code>DESIGN.md</code>.</strong> A machine-readable design system. Not for engineers.
          For the model. When Claude Code generates UI, it reads this file to understand what tokens to use,
          what components exist, how spacing works. Without it, the model invents a design system that has
          nothing to do with yours.
        </li>
        <li>
          <strong><code>voice.md</code>.</strong> Personality and communication guidelines for every
          AI-generated string in the product. How certain does the model sound? How does it handle errors?
          What does it say when it doesn't know? This isn't marketing copy. It's calibration.
        </li>
        <li>
          <strong><code>domain-patterns.md</code>.</strong> Industry knowledge the model can't infer.
          In a golf app: what does "playing conditions" mean to a golfer? What's the difference between
          a handicap and a playing handicap? The model doesn't know unless you tell it.
        </li>
        <li>
          <strong>Trust calibration guidelines.</strong> Explicit rules for how confident the system should
          sound at different confidence levels. Required for any feature that surfaces recommendations to users.
        </li>
      </ul>

      <div className="article-callout">
        <p>
          On AI product teams, the designer is often the only person thinking about the user as a human
          being rather than a data point. When the recommendation algorithm starts optimizing for engagement
          over user benefit, someone has to say so. When the AI's error patterns affect some user groups
          more than others, someone has to notice.
        </p>
      </div>

      <h2>The part nobody talks about</h2>

      <p>
        That's not a soft skill. It's a product function that requires someone with design thinking to own it.
      </p>

      <p>
        The model generates. The designer decides what it's allowed to do.
      </p>
    </ArticleLayout>
  );
};

export default DesignerTrainsModelArticle;
