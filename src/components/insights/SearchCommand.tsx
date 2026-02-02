import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Search, Clock } from "lucide-react";
import { articles } from "@/lib/articles";

interface SearchCommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchCommand = ({ open, onOpenChange }: SearchCommandProps) => {
  const navigate = useNavigate();

  const handleSelect = (slug: string) => {
    navigate(`/insights/${slug}`);
    onOpenChange(false);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <Command className="rounded-lg border border-white/10 bg-card/95 backdrop-blur-xl">
        <div className="flex items-center border-b border-white/10 px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
          <CommandInput 
            placeholder="Search articles..." 
            className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm font-mono outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <CommandList className="max-h-[400px] overflow-y-auto p-2">
          <CommandEmpty className="py-6 text-center text-sm text-muted-foreground font-mono">
            No articles found.
          </CommandEmpty>
          <CommandGroup heading="Articles" className="text-xs font-mono text-muted-foreground uppercase tracking-widest px-2 py-1.5">
            {articles.map((article) => (
              <CommandItem
                key={article.slug}
                value={`${article.title} ${article.category}`}
                onSelect={() => handleSelect(article.slug)}
                className="flex flex-col items-start gap-1 px-3 py-3 cursor-pointer rounded-lg hover:bg-white/5"
              >
                <div className="flex items-center gap-2 w-full">
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {article.readingTime}
                  </span>
                </div>
                <span className="text-sm font-medium text-foreground">
                  {article.title}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
        <div className="border-t border-white/10 px-3 py-2 text-xs text-muted-foreground font-mono">
          <span className="opacity-60">Press</span>
          <kbd className="mx-1 px-1.5 py-0.5 rounded bg-white/10 text-xs">ESC</kbd>
          <span className="opacity-60">to close</span>
        </div>
      </Command>
    </CommandDialog>
  );
};

interface SearchTriggerProps {
  onClick: () => void;
}

export const SearchTrigger = ({ onClick }: SearchTriggerProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-muted-foreground hover:border-white/20 hover:text-foreground transition-all duration-200 w-full max-w-sm"
    >
      <Search className="w-4 h-4" />
      <span className="text-sm font-mono flex-1 text-left">Search articles...</span>
      <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs font-mono">
        <span className="text-[10px]">⌘</span>K
      </kbd>
    </button>
  );
};

export default SearchCommand;
