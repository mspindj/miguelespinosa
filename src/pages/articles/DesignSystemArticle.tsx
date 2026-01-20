import ArticleLayout from "@/components/article/ArticleLayout";

const DesignSystemArticle = () => {
  return (
    <ArticleLayout
      category="Design Systems & Ops"
      title="Why Your Design System is Failing (It's Not the UI Kit)"
      subtitle="We confuse artifacts with agreements. Here is how to stop building 'Figma graveyards' and start scaling decisions."
      date="Oct 12, 2025"
      patternClass="pattern-systems"
    >
      <p>
        Let's be honest for a second. How many "Design Systems" have you seen that are actually just glorified UI Kits sitting in a Figma file that developers never open?
      </p>

      <p>
        I've seen it happen dozens of times. A design team spends six months polishing perfect buttons, defining semantic tokens, and debating corner radii. They launch with fireworks. And six months later... the product still looks fragmented, and developers are still hard-coding hex values.
      </p>

      <p>
        Why? Because they built an artifact, not a system.
      </p>

      <p>
        In my experience leading design at scale—whether at TP or transforming legacy banking structures—I've learned that <strong>a Design System isn't a collection of components. It's a collection of decisions.</strong>
      </p>

      <h2>The "Artifact Trap"</h2>

      <p>
        When we built the TP Design System, the temptation was to start with the visuals. "Let's make it look modern." But visuals are easy. The hard part is the governance.
      </p>

      <p>
        The reason most systems fail isn't a lack of pixel perfection; it's a lack of shared ownership. If Engineering doesn't feel like they co-own the system, they won't use it. If the system doesn't solve a problem for them (like reducing tech debt or speeding up QA), it's just another dependency they have to manage.
      </p>

      <div className="article-callout">
        <p>"A Design System isn't a collection of components. It's a collection of decisions."</p>
      </div>

      <h2>Scaling Decisions, Not Just Pixels</h2>

      <p>
        We shifted our mindset. We stopped treating the system as a "design deliverables" library and started treating it as a product.
      </p>

      <ul className="article-list">
        <li>
          <strong>We defined success differently:</strong> Not by "number of components," but by adoption rate and reduction in development time.
        </li>
        <li>
          <strong>We focused on frameworks:</strong> It didn't matter if it looked good in Figma if it broke in Angular or Vue.js. The code became the source of truth, not the canvas.
        </li>
        <li>
          <strong>We automated the boring stuff:</strong> The goal was to free up designers from drawing the same form fields so they could focus on complex UX strategy.
        </li>
      </ul>

      <h2>The Takeaway</h2>

      <p>
        If you are struggling to get traction with your Design System, stop adding more variants to your buttons. Stop polishing the documentation site.
      </p>

      <p>
        Instead, go sit with your Lead Developer. Ask them where the friction is. The goal isn't to control the pixels; it's to create a shared language that lets your team make better decisions when you aren't in the room.
      </p>

      <p>
        <strong>That's scalability. Everything else is just decoration.</strong>
      </p>
    </ArticleLayout>
  );
};

export default DesignSystemArticle;
