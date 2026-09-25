import ArticleLayout from "@/components/article/ArticleLayout";

const RejectedOptionsArticle = () => {
  return (
    <ArticleLayout
      category="Design Leadership"
      title="Show the Options You Rejected"
      subtitle="Engineers write down why they chose one option over the others. I started doing the same with my portfolio."
      date="Sep 25, 2026"
      patternClass="pattern-leadership"
    >
      <p>
        The case studies on this site are now decision records. The format comes from software
        engineering. In 2011 Michael Nygard proposed that teams write a short document every time they make
        an architectural decision: the context, the decision, its status, its consequences. Someone joining
        two years later can read it and understand why the system looks the way it does.
      </p>

      <p>
        I've spent years saying that a design leader should be judged by decisions, not deliverables. My
        case studies still told the classic story of challenge, process and result. Each one is now a
        record with the same sections: context, problem, constraints, options, decision, implementation,
        consequences and a log.
      </p>

      <h2>The rejected options are the evidence</h2>

      <p>
        The section that changed the most is options. On the Teleperformance record there are three. Local
        design systems per product: fast to start, impossible to align. A centralized library owned by one
        team: high consistency, low adoption. A design system run as a product, embedded in teams and
        governed federally. The first two carry a REJECTED tag.
      </p>

      <p>
        A final design shows what I chose. It can't show that I considered anything else, or why the other
        paths lost. For someone hiring a design leader, the real question is what this person does when
        every option has a cost, and the rejected options answer it better than a polished screen.
      </p>

      <h2>What the format made me fix</h2>

      <p>A stricter structure exposed things the old narrative had been smoothing over.</p>

      <ul className="article-list">
        <li>
          <strong>Status.</strong> The first draft marked every record "Shipped". For the design
          transformation work that overstated it, because an organizational change doesn't ship on a date.
          All five now say "Accepted", the status the format uses for a decision that was taken.
        </li>
        <li>
          <strong>Numbers with dates.</strong> Metrics that keep moving now carry a date and a source. The
          Birdie Club shows 195+ paying members as of September 2026, read from the platform's own counter,
          instead of a figure that goes stale the week after I publish it.
        </li>
        <li>
          <strong>Constraints.</strong> They used to sit in the middle of each story, under "why it was
          hard". Now they have their own section before the options, where they belong: constraints are the
          reason some options lose.
        </li>
      </ul>

      <h2>The site follows the same logic</h2>

      <p>
        The home page lists the five records in a table, like a log, and each one opens with its number key.
        The decision tree at the top is drawn in ASCII: three branches, one lit in orange. It tells you what
        the site is about before you read a word.
      </p>

      <p>
        If you're hiring, open any record and go straight to the options. If you're a designer rebuilding
        your own portfolio, try writing one case this way. The options you rejected are harder to write than
        the one you chose. Start there.
      </p>
    </ArticleLayout>
  );
};

export default RejectedOptionsArticle;
