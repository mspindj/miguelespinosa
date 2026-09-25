import ArticleLayout from "@/components/article/ArticleLayout";

const NotTheUserArticle = () => {
  return (
    <ArticleLayout
      category="Product Strategy"
      title="Neither of Us Is the User"
      subtitle="Before we build the AI feature everyone wants, six people who pay for the product get to tell us we're wrong."
      date="Jul 1, 2026"
      patternClass="pattern-research"
    >
      <p>
        Last week David Vanegas, the coach behind The Birdie Club, sent me two voice notes a couple of
        hours apart. By the end of the second one he had described the product he wants: a golf app with
        an AI coach inside that talks like him. A member asks about a bad round or a swing fault, and the
        answer comes back in David's voice.
      </p>

      <p>
        It's a good idea. A startup in the US already sells something close to it, so the demand isn't
        imaginary. And with the way we build, a first version is weeks of work, not months.
      </p>

      <h2>The problem is who's judging it</h2>

      <p>
        David teaches golf for a living. I play, and I spend my working days inside these models. We are
        the two people least qualified to decide whether a member in his fifties, who found us through a
        PDF guide and a weekly call, wants to type questions to an AI.
      </p>

      <p>
        I said it out loud in our planning session: I'm not the end user. Neither is David. Everything we
        think we know about how members use the app comes from what they tell us on the weekly call, and
        on that call they're talking to their teacher.
      </p>

      <h2>What we're doing instead</h2>

      <p>
        Before the AI coach gets a budget, I'm sitting down with six members. Thirty to forty minutes each,
        recorded, with screen sharing. The screen sharing is the part I won't negotiate. I want to watch
        someone open the app and look for last Tuesday's lesson, not hear them describe how they'd do it.
      </p>

      <p>
        We wrote the hypotheses down first, as yes-or-no statements, so nobody can reinterpret them once
        the answers come in:
      </p>

      <ul className="article-list">
        <li>What keeps members is the weekly call with David, not the digital tools.</li>
        <li>Active members open the app less than twice a week.</li>
        <li>They would use an AI that answers in David's voice, for specific questions rather than long conversations.</li>
        <li>There are two or three things they miss that we haven't built.</li>
      </ul>

      <p>
        Two details matter more than the script. The invitation goes out from David's WhatsApp, not mine.
        "David wants to hear from you" gets an answer; a message from the product person gets a polite
        maybe. And David won't be in the sessions. Nobody tells their teacher the homework is boring.
      </p>

      <p>
        Members who give us the time get six extra months of membership. For this audience that's worth
        more than a gift card, and it keeps them inside the thing we're trying to understand.
      </p>

      <div className="article-callout">
        <p>
          The rule I'm keeping: when neither of us is the user, any feature that costs more than a thousand
          dollars waits for five to eight sessions like these. What people do on a shared screen outweighs
          what they report on a call.
        </p>
      </div>

      <h2>Why this is harder than it sounds</h2>

      <p>
        Building got cheap. With an AI harness writing most of the code, trying a feature costs so little
        that "let's build it and see" starts to sound like the responsible option.
      </p>

      <p>
        The catch is that a shipped feature tells you whether people clicked it. It won't tell you whether
        they needed it, and by the time you work that out, the next three features are already built on
        top of it.
      </p>

      <p>
        The sessions are slow, and scheduling them across three time zones is a small puzzle every week.
        I'll write up what we find.
      </p>
    </ArticleLayout>
  );
};

export default NotTheUserArticle;
