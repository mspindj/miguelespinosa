import ArticleLayout from "@/components/article/ArticleLayout";

const DesignMdArticle = () => {
  return (
    <ArticleLayout
      category="AI Strategy"
      title="DESIGN.md: Making Your Design System Machine-Readable"
      subtitle="The design system you built in Figma is invisible to the model writing your code. Here's the fix."
      date="May 13, 2026"
      patternClass="pattern-systems"
    >
      <p>
        It took me embarrassingly long to realize this: the design system I spent months building is
        invisible to the model writing my code.
      </p>

      <p>
        Figma files. Storybook components. Zeroheight documentation. Beautiful, comprehensive, useless
        to Claude Code. The model doesn't have a browser. It can't authenticate into your Figma workspace.
        When it generates a button, it's not checking your design system. It's pattern-matching against
        billions of buttons from training data.
      </p>

      <p>
        The result is code that's technically functional and completely off-brand. Wrong spacing. Wrong
        colors. Components that almost match yours but don't. A design system that exists in Figma and
        nowhere else.
      </p>

      <h2>The fix is a markdown file</h2>

      <p>
        <code>DESIGN.md</code> is an open format for design systems that AI coding assistants can read
        natively. Apache 2.0 license. Plain markdown. No plugins, no integrations, no authentication.
        Drop it in the root of your project and the model reads it alongside your code.
      </p>

      <p>
        The key is semantic tokens. Not <code>#1A56DB</code>. Not <code>blue-600</code>. <code>primary</code>.
      </p>

      <p>
        Semantic tokens carry meaning, not values. <code>primary</code> is the main action color.
        <code>primary-foreground</code> is what goes on top of it. <code>destructive</code> covers deletions
        and irreversible actions. <code>muted</code> is secondary information. <code>card</code> is the
        surface color for card components, <code>card-foreground</code> is text on that surface.
      </p>

      <p>
        When the model knows these pairs, and knows what they're for rather than just their values, it makes
        the right call on new components. It reaches for the token, not a hardcoded hex.
      </p>

      <h2>Two paths to get there</h2>

      <ul className="article-list">
        <li>
          <strong>Path A, manual.</strong> Write <code>DESIGN.md</code> by hand. Grid system, spacing scale,
          type scale, color tokens, component inventory. Takes a few hours. Useful immediately. This is what
          I do on projects in early stages, before Figma designs are mature enough to be a source of truth.
        </li>
        <li>
          <strong>Path B, Figma MCP.</strong> When you have real Figma files with properly structured
          variables and components, a Figma MCP server can extract the design system and generate
          <code>DESIGN.md</code> automatically. Changes in Figma propagate to the file the model reads.
          Start here when the design is stable.
        </li>
      </ul>

      <div className="article-callout">
        <p>
          Start with Path A. Move to Path B when the design is stable enough to be the source of truth.
          Most projects shouldn't jump to MCP integration on day one.
        </p>
      </div>

      <h2>What changes</h2>

      <p>
        Without <code>DESIGN.md</code>: the model generates a button using <code>bg-blue-500</code>,
        hardcodes <code>px-4 py-2</code>, picks an arbitrary border radius. It looks AI-generated because it is.
      </p>

      <p>
        With <code>DESIGN.md</code>: the model uses <code>bg-primary text-primary-foreground</code>, applies
        <code>spacing-2</code> padding, uses <code>--radius</code> for corners. It looks like it belongs in
        your product.
      </p>

      <p>
        Same model. Same prompt. The harness changed the output.
      </p>
    </ArticleLayout>
  );
};

export default DesignMdArticle;
