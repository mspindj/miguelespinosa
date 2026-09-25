import { Link } from "react-router-dom";
import ArticleLayout from "@/components/article/ArticleLayout";

const FiveMembersArticle = () => {
  return (
    <ArticleLayout
      category="Product Strategy"
      title="Five Members, Four Hypotheses, One Feature on Hold"
      subtitle="The research I promised in July. Most of our hypotheses were wrong, and the AI coach will wait."
      date="Aug 12, 2026"
      patternClass="pattern-outcomes"
    >
      <p>
        In July I wrote that before we built an AI coach for The Birdie Club, I'd sit with members and
        watch them use the product. <Link to="/insights/not-the-user">That entry</Link> ended with four
        hypotheses written as yes-or-no statements. The sessions are done. Five members instead of six:
        one of them moved hers to September.
      </p>

      <h2>The data had already corrected me once</h2>

      <p>
        Before the first session I went through the numbers. I expected a retention problem and found a
        healthy one: most paying members stay active month after month. The leak happens earlier. Plenty
        of people buy the entry guide, and few of them cross over to the membership.
      </p>

      <p>
        Then my first read of a correlation came out backwards. People who opened the programs section
        seemed more likely to stay. Once I controlled for how long each person had been in the product, it
        flipped: 20% of them were still active at 14 days, against 38% of those who never opened it. The
        first chart said more about when people joined than about anything they did.
      </p>

      <h2>What five sessions said</h2>

      <ul className="article-list">
        <li>
          <strong>The weekly call keeps members.</strong> False as an event. Four of the five don't attend,
          and they still value it. What keeps them is David, not the Tuesday slot.
        </li>
        <li>
          <strong>Active members barely open the app.</strong> False. They're among the most active
          accounts in the whole base.
        </li>
        <li>
          <strong>They'd use an AI coach in David's voice.</strong> Half true. Two of the five already use AI
          for golf. The other three use none.
        </li>
        <li>
          <strong>They miss two or three things.</strong> True, and the list was longer than we expected.
        </li>
      </ul>

      <p>
        None of the five stayed because of a feature. They talked about David, about the way he makes them
        think about the game, about the people. Two of them, who have never met, told me they print the
        entry guide and laminate it. Both used the word laminate.
      </p>

      <h2>The case for the AI coach</h2>

      <p>
        The strongest argument for building it came from one member. He built his own golf coach in
        ChatGPT, and his handicap went from 15 to 8. He was also the member who had logged the most rounds
        on our platform, and he stopped logging them in early July. The thinking about his game moved
        somewhere else. That's substitution, and it's a real risk for us.
      </p>

      <p>
        He's also an outlier. He uses AI all day at work and plays alone at 5:30 in the morning. The typical
        member looked more like the man who couldn't remember his password and reset it halfway through our
        session.
      </p>

      <p>
        The AI coach is on hold. The research pointed to five cheaper things that more members asked for:
        recognition for the ones who already refer friends, the mental game packaged as audio for the car,
        course strategy, a way to mark videos as watched, and asking members for their course scorecards
        instead of waiting for them to send one. None of these needs a model. If members still take their
        thinking elsewhere after we ship them, we'll decide on the coach with better information.
      </p>

      <div className="article-callout">
        <p>
          One member turned down the referral discount for himself and asked us to give it to the person he
          brings in. He wants the recognition. The money can go to his friend.
        </p>
      </div>

      <h2>Where the bottleneck sits now</h2>

      <p>
        Building the coach is weeks of work with the harness we use. The five hours of sessions were the
        scarce part, and they're the reason we aren't shipping a feature designed around our outlier.
      </p>
    </ArticleLayout>
  );
};

export default FiveMembersArticle;
