import ArticleLayout from "@/components/article/ArticleLayout";

const OrderTakerArticle = () => {
  return (
    <ArticleLayout
      category="Design Leadership"
      title="From Order-Taker to Decision-Maker"
      subtitle="Influence isn't given at the table. It's built before you enter the room."
      date="Mar 20, 2026"
      patternClass="pattern-outcomes"
    >
      <p>
        Most design leaders I've worked with are excellent at their craft and frustrated by
        their influence. They produce rigorous work, present it clearly, and watch it get
        deprioritized by a product decision that was already made before the design review.
      </p>

      <p>
        The problem isn't presentation skills. It's position in the process. When design enters
        after the "what" is decided and before the "how" is built, design is execution. It might
        be excellent execution, but it's execution. <strong>Execution doesn't have strategic authority.</strong>
      </p>

      <h2>The Moment the Role Changes</h2>

      <p>
        At Teleperformance, I inherited a design organization that was deeply skilled and
        almost entirely reactive. The teams were called in to design what had already been
        scoped by product and engineering. The business saw design as a delivery function.
        The designers felt it.
      </p>

      <p>
        Changing that dynamic didn't start with a presentation to leadership about "design's
        strategic value." It started with inserting design thinking into the moments where
        strategy was actually being formed — the OKR planning cycles, the roadmap reviews,
        the quarterly business reviews. Not to advocate for design, but to frame problems in
        ways that made design decisions visible as business decisions.
      </p>

      <div className="article-callout">
        <p>
          The fastest way to gain strategic authority isn't to ask for a seat at the table.
          It's to show up with a framing of the problem that nobody else in the room has —
          and to be right about it.
        </p>
      </div>

      <h2>The Three Moves</h2>

      <ul className="article-list">
        <li>
          <strong>Translate design outcomes into business outcomes before you're asked.</strong>{" "}
          Don't wait for the CFO to ask what a redesign is worth. Come with the number.
          "This flow reduces support calls by an estimated X%" is a different conversation
          than "this flow is more intuitive."
        </li>
        <li>
          <strong>Frame design problems as decision problems.</strong> Every design choice
          is a bet on user behavior. Make the bet explicit. "If we do X, we're assuming users
          will Y. Here's the evidence that assumption holds." That's not design advocacy —
          that's product strategy.
        </li>
        <li>
          <strong>Influence the brief, not just the solution.</strong> The highest-leverage
          moment in any project isn't the design review. It's the brief. Who defines what
          problem is being solved, for whom, and with what constraints — that's where strategic
          authority lives.
        </li>
      </ul>

      <h2>Leadership Without Permission</h2>

      <p>
        You don't need a VP title to operate strategically. You need to be the person who
        consistently frames problems more clearly than anyone else in the room, connects
        decisions to outcomes, and makes the trade-offs explicit. Do that repeatedly, and
        the authority follows — not as a title, but as the thing titles are supposed to represent.
      </p>

      <p>
        The design leaders who move from order-takers to decision-makers don't get promoted
        into influence. They <strong>build it, quietly, through the quality of their thinking</strong> —
        long before anyone gives them permission.
      </p>
    </ArticleLayout>
  );
};

export default OrderTakerArticle;
