import ArticleLayout from "@/components/article/ArticleLayout";

const UnusedSkillsArticle = () => {
  return (
    <ArticleLayout
      category="Ops Strategy"
      title="573 of My AI Skills Had Never Run Once"
      subtitle="Installing a capability feels like progress. For an AI agent, most of them are noise it has to read past."
      date="Sep 23, 2026"
      patternClass="pattern-lean"
    >
      <p>
        A skill, in the AI tools I work with, is a packaged set of instructions the agent pulls in when a
        task matches: how to audit a landing page, how to write in my voice, how to review a design. You
        install them like plugins. By the end of July I had 725.
      </p>

      <p>
        Last week I checked the counter that logs every time one runs. Of the 636 still installed,
        573 had a lifetime count of zero.
      </p>

      <h2>What the pile was costing</h2>

      <p>
        The agent doesn't load every skill, but it reads the list of them to decide which one fits the
        task. That list had grown to about 130,000 characters against a budget of roughly 40,000, so it got
        cut off. The skills I use were competing for space with hundreds I'd forgotten I installed, and
        anything past the cutoff was invisible to the agent.
      </p>

      <p>
        After retiring the 573, the list is 21,000 characters. Nothing I use disappeared, because the
        criterion was the usage log and not my memory of what seemed useful.
      </p>

      <h2>Two findings I didn't expect</h2>

      <p>
        In early August I counted which skills had run across 377 work sessions. At the top: a writing
        editor that strips AI tells from text, and a set on offers and lead generation. Skills for writing
        code, in a setup that writes code all day, barely showed up.
      </p>

      <p>
        The second one bothered me more. That same week we ran security audits on two different products.
        Twenty-six security skills were installed, neither audit used a single one, and both found a real
        blocking issue. What made them work was the verification built into the prompt: cite the file and
        line, and check every finding against the running system.
      </p>

      <h2>The team version</h2>

      <p>
        Design teams do this with tools. A plugin for every problem someone hit once, three AI tools that
        overlap, a component library nobody is allowed to delete from. Each addition made sense on the day
        it arrived. The cost of the pile rarely shows up in a budget, because it's paid in attention: every
        option a person scans past before finding the one that fits.
      </p>

      <p>
        One warning from doing this badly first. Twice I announced a batch for removal because the names
        matched another set, and twice I was wrong. When I compared the files, the "duplicates" were
        different, and in several cases the one I was about to remove was the better version. Names tell you
        where to look. The contents and the usage log tell you what to do.
      </p>

      <div className="article-callout">
        <p>
          Retire by usage data, and keep it reversible. The 573 skills went to a folder the agent doesn't
          read. If I need one back, it's a single move command.
        </p>
      </div>
    </ArticleLayout>
  );
};

export default UnusedSkillsArticle;
