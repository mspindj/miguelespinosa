import ArticleLayout from "@/components/article/ArticleLayout";

const BuilderCantSeeArticle = () => {
  return (
    <ArticleLayout
      category="AI Strategy"
      title="The Builder Can't See the Gaps"
      subtitle="Two AI reviewers read the same pull request. One approved it. The other found two blockers, and it was right."
      date="Aug 5, 2026"
      patternClass="pattern-guardrails"
    >
      <p>
        Last Wednesday two AI models reviewed the same pull request on Tati, the AI translation product I
        co-founded. Same code, same spec, same instructions. One came back with a pass and zero blockers.
        The other failed the branch with two.
      </p>

      <p>
        I checked every finding against the code before believing either of them. The model that failed
        the branch was right on all five of its main findings. The one that approved it had marked six
        tests as covered, tests the spec asked for by name. They didn't exist. It saw the feature
        implemented and assumed it was tested.
      </p>

      <p>
        What it missed wasn't cosmetic. The code read a file's type from the wrong field in three places.
        It used elevated database permissions that the design document ruled out in so many words. A log
        line the requirements made mandatory was missing. The approving model also described a user flow,
        loading a job from history, that exists nowhere in the product. It read as plausible, which is
        what made it dangerous.
      </p>

      <h2>Why I run two reviewers now</h2>

      <p>
        In my projects an AI writes most of the code, and nobody on the team can audit every line. A lot
        of product teams are drifting into that setup, and it comes with a blind spot built in: the
        session that wrote the code is the worst judge of it. It carries every assumption it made along
        the way, so it reads its own gaps as intentional.
      </p>

      <p>
        Nothing with a spec merges on the builder's word anymore, or on mine. It goes through two
        reviewers from different model families, and they fail in different ways. When both flag the same
        issue, it's almost certainly real. When only one does, I verify it against the code before
        touching anything, because an unverified false positive turns into a "fix" for code that worked.
      </p>

      <p>
        The reviewer that approved the broken branch is retired. I replaced it on Saturday.
      </p>

      <h2>Designers have had this for decades</h2>

      <p>
        It's the design crit. You don't judge your own screens in the room where you made them, because
        you can't see past what you meant to draw. A crit works because the people around the table didn't
        make your decisions and don't share your assumptions.
      </p>

      <p>
        What changed is the price. A crit takes an hour from four people. A second model's review takes
        minutes and costs less than a coffee. The expensive part left is verification, and you can't hand
        that one off: a pass from a reviewer is one more input, and the decision to ship stays with you.
      </p>

      <div className="article-callout">
        <p>
          Before the paid reviewers, I now run a free one: a fresh agent with no memory of the build
          session, reading the spec and opening the files itself. It catches the obvious gaps, so the paid
          reviewers spend their attention on the hard ones.
        </p>
      </div>
    </ArticleLayout>
  );
};

export default BuilderCantSeeArticle;
