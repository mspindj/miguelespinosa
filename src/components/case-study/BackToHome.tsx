import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackToHome = () => {
  return (
    <Link
      to="/#work"
      className="fixed top-6 left-6 z-50 glass-card px-4 py-2 rounded-full inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
    >
      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
      <span>Back</span>
    </Link>
  );
};

export default BackToHome;
