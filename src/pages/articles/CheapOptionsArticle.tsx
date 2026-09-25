import ArticleLayout from "@/components/article/ArticleLayout";

const CheapOptionsArticle = () => {
  return (
    <ArticleLayout
      category="AI Strategy"
      title="Cheap Options, Expensive Choices"
      subtitle="I built three full directions for this site in a day. The hard part was knowing why two of them had to lose."
      date="Sep 24, 2026"
      patternClass="pattern-ai"
    >
      <p>
        This week I rebuilt this site. Before touching it, I set up a separate lab and built three
        navigable prototypes: same content, opposing directions. A decision engine with large moving type,
        a quiet editorial in paper and light, and a brutal terminal you drive from the keyboard.
      </p>

      <p>
        With an AI agent doing the build, each one took hours. They came out of a knowledge base where I've
        been logging interface trends since the spring, plus reference sites we analyzed for this project.
      </p>

      <h2>What the agent couldn't tell me</h2>

      <p>
        The first prototype animated the weight of the typeface as you scrolled. On my Mac, every headline
        change stuttered. If it stutters on a MacBook, it will be worse on the corporate laptop of the
        executive who opens my portfolio between two meetings. The agent had built exactly what the
        direction asked for. It had no way to weigh who the visitor is and what machine they carry.
      </p>

      <p>
        The fix left me a rule I now apply everywhere: anything tied to scroll animates position, opacity
        or clipping, and nothing else. Font axes can animate once, on entry or on hover.
      </p>

      <p>
        The second prototype had an image that transformed as you scrolled. The transformation was well
        built. It happened below the fold, where most visitors never arrive.
      </p>

      <p>
        The third one surprised me. I hadn't planned for keyboard control to matter, and it ended up being
        the reason it won. Press 1 to 5 to open a decision record, m to stop all motion, ? to see the
        shortcuts. You can try it on this page.
      </p>

      <h2>The floor moved. The ceiling didn't.</h2>

      <p>
        AI raised the floor of what one person can produce in a day. Three prototypes that would have taken
        a small team weeks took me an afternoon. It did nothing for the ceiling. Every call that mattered
        here came from context the model didn't have: who my visitors are, what hardware they use, where
        their eyes stop, what I want someone to think after thirty seconds on the page.
      </p>

      <p>
        I have a data point from my own past. The previous version of this site was generated with an AI
        builder in April, and it looked finished. In August an audit scored it 11 out of 20 and found that
        on a phone, outside the homepage, there was no navigation at all.
      </p>

      <div className="article-callout">
        <p>
          Without explicit criteria, speed and progress look the same. Next time I'll write down what the
          winner has to survive before generating anything. This time I found the criteria by watching two
          prototypes fail.
        </p>
      </div>
    </ArticleLayout>
  );
};

export default CheapOptionsArticle;
