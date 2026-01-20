import ArticleLayout from "@/components/article/ArticleLayout";

const DesignBehaviorArticle = () => {
  return (
    <ArticleLayout
      category="Leadership"
      title="Design is a Behavior, Not a Department"
      subtitle="Why the 'Service Bureau' model is dead, and how to build a team that drives business strategy."
      date="Jan 15, 2026"
      patternClass="pattern-leadership"
    >
      <p>
        There is a silent killer in many large organizations: The Service Bureau Mindset.
      </p>

      <p>
        It looks like this: A business unit defines a solution, writes the requirements, and then hands it over to the Design Team with a request: "Make this look good." In this model, Design is treated like a vending machine. You put a ticket in, and a UI comes out.
      </p>

      <p>
        Throughout my career—leading transformation at Teleperformance or scaling teams at BBVA—I've found that operating as a "Service Bureau" is the fastest way to burn out your talent and ship mediocre products.
      </p>

      <h2>The Shift: From Service to Partners</h2>

      <p>
        Real maturity in a design organization isn't measured by the number of designers you have; it's measured by <strong>when they are invited to the meeting.</strong>
      </p>

      <ul className="article-list">
        <li>
          <strong>Low Maturity:</strong> Design is invited at the end to "skin" the wireframes.
        </li>
        <li>
          <strong>High Maturity:</strong> Design is present when the business problem is being defined.
        </li>
      </ul>

      <p>
        We transitioned our global teams by changing the narrative. We stopped tracking "outputs" (screens delivered) and started tracking "outcomes" (problems solved). We embedded designers into cross-functional squads not as "support," but as strategic peers to Product Managers and Tech Leads.
      </p>

      <div className="article-callout">
        <p>"When Design becomes a shared mindset, you stop fighting for a seat at the table. You help build the table."</p>
      </div>

      <h2>Culture Eats Process for Breakfast</h2>

      <p>
        You can have the best Design System in the world (like our TP Design System), but it's useless if the culture doesn't value the <em>why</em> behind the design. To change the culture, you have to change the language. We stopped talking about "empathy" and "delight" in board meetings. Instead, we talked about:
      </p>

      <ul className="article-list">
        <li>
          <strong>Risk Reduction:</strong> Prototyping is cheaper than coding.
        </li>
        <li>
          <strong>Efficiency:</strong> Good UX reduces support tickets.
        </li>
        <li>
          <strong>Conversion:</strong> Friction kills revenue.
        </li>
      </ul>

      <h2>Advice for Leaders</h2>

      <p>
        If you want to scale your design impact, stop building a "Department of pixel-pushers." Start building a culture where design is a behavior shared by everyone—from the developer who cares about loading times to the PM who cares about user flows.
      </p>

      <p>
        <strong>When Design becomes a shared mindset, you stop fighting for a seat at the table. You help build the table.</strong>
      </p>
    </ArticleLayout>
  );
};

export default DesignBehaviorArticle;
