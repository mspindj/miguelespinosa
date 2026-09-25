import ArticleLayout from "@/components/article/ArticleLayout";

const ZeroIsNotAPassArticle = () => {
  return (
    <ArticleLayout
      category="Ops Strategy"
      title="A Zero Is Not a Pass"
      subtitle="Failures get investigated by habit. The green checks are where bad measurements hide."
      date="Aug 19, 2026"
      patternClass="pattern-lean"
    >
      <p>
        On August 7 my test runs on Tati produced four measurements that looked fine. All four were wrong,
        and all four were wrong in the same direction: toward "it works".
      </p>

      <ul className="article-list">
        <li>
          A smoke test finished clean. The query behind it asked for a column that doesn't exist, failed as
          a whole and left the state empty. The test measured nothing and reported success.
        </li>
        <li>
          One layer of the translation pipeline reported zero contribution. The translation memory from my
          earlier runs was answering everything, so the engine behind it was never called.
        </li>
        <li>
          Worst-case latency came in at 2.2 seconds. It was fast because the test text was repetitive and
          the model returned five results instead of a hundred.
        </li>
        <li>
          A login returned HTTP 400 and I read it as a bad password. It was the captcha, rejecting the
          request before anything looked at the password.
        </li>
      </ul>

      <p>
        Three days later it happened again with a design tool. A design-quality detector I had installed
        returned an empty list on a file written on purpose to fail it. Its editor hook said "no issues
        found" after every edit, whatever the edit was. It had never read the code at all. The same week, a
        linter in another project reported zero errors because its configuration matched zero files.
      </p>

      <h2>Why the good result gets a free pass</h2>

      <p>
        A failure gets investigated by reflex. Something turns red and someone asks why. A zero, a green
        check or a comfortably fast number gets accepted, because it's the answer everyone was hoping for.
        Bad measurements survive on the side of the dashboard nobody questions.
      </p>

      <p>
        Design teams have their own versions. The accessibility scan with zero violations that only
        crawled the login page. The design-system adoption chart at 90% because it counts installs of the
        library, not screens that use its components.
      </p>

      <h2>What I check now</h2>

      <p>Before a good result goes into a report, I have to be able to say why it came out that way.</p>

      <ul className="article-list">
        <li>
          <strong>A zero gets the treatment of a failure.</strong> If a layer contributed nothing, the
          question is whether it didn't apply or never ran.
        </li>
        <li>
          <strong>A comfortable number gets suspicion.</strong> Faster or cheaper than expected usually means
          it measured less than I think.
        </li>
        <li>
          <strong>Read the body, not the status code.</strong> The same 400 can come from two different
          layers, and from outside they look identical.
        </li>
        <li>
          <strong>Break it on purpose.</strong> If I switch off the thing a test protects and the test stays
          green, it was never testing it.
        </li>
      </ul>

      <p>
        The last one is the cheapest. It takes five minutes, and it's the only way to know a check can fail
        at all.
      </p>
    </ArticleLayout>
  );
};

export default ZeroIsNotAPassArticle;
