import ArticleLayout from "@/components/article/ArticleLayout";

const RulesDontEnforceArticle = () => {
  return (
    <ArticleLayout
      category="Design Leadership"
      title="Guidelines Don't Enforce Themselves"
      subtitle="One project's instruction file reached 107,000 words. The failures got caught by two small scripts."
      date="Aug 26, 2026"
      patternClass="pattern-systems"
    >
      <p>
        The AI agent that writes code for The Birdie Club reads one instruction file before every session.
        On August 14 that file had 107,458 words, longer than most novels. I measured what was in it: 96%
        was history, a diary of past work sessions. The 387 actual rules were scattered across 84 of those
        entries.
      </p>

      <p>
        Adding a rule to that file changed nothing. A section called "how we work" had been giving wrong
        instructions for two months, and nobody noticed, the agent included.
      </p>

      <p>
        The clearest case: on July 7 we wrote a rule about handling the same webhook event twice. Ten days
        later the same bug came back in a different webhook. The rule sat in the file the agent reads
        before every session, and the bug shipped anyway.
      </p>

      <h2>What caught the real failures</h2>

      <p>
        Two small things, and both caught real problems on the day they were built. A script that breaks
        the code on purpose and checks that the tests notice. And an alert that fires when a service quietly
        starts doing less than it should. Neither depends on anyone remembering to read something.
      </p>

      <p>
        The file got split. The diary moved to a monthly journal. The instruction file keeps only what
        changes how we work from now on, written as a current instruction. A new rule has to pass one test
        before it goes in: could it be a script instead?
      </p>

      <h2>Design systems have the same problem</h2>

      <p>
        The TP Design System started from a version of this. Patterns diverged across products with every
        sprint, and each team had invented its own governance. More documentation wouldn't have fixed it.
        The decisions got made in sprints, by people who hadn't opened the guidelines in months.
      </p>

      <p>
        What held the system together lived in the code and in the org chart: tokens the build consumes,
        components teams import instead of rebuilding, and a contribution model with named owners in each
        team.
      </p>

      <div className="article-callout">
        <p>
          A guideline asks people to do the right thing. A token, a lint rule or a failing check makes the
          wrong thing harder to do. When I have to choose where to spend the effort, I pick the second kind.
        </p>
      </div>

      <p>
        Written rules still have a job. They explain why a check exists, so the next person doesn't delete
        it. They just can't be the enforcement.
      </p>
    </ArticleLayout>
  );
};

export default RulesDontEnforceArticle;
