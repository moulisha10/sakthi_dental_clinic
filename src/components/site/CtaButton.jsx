import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  primary: "bg-primary text-primary-foreground shadow-soft hover:shadow-lift hover:-translate-y-0.5",
  outline: "border border-primary/30 bg-card text-primary hover:bg-accent",
  soft: "bg-blush text-blush-foreground hover:bg-blush/80",
};

export function CtaButton({ variant = "primary", className, children, ...props }) {
  return (
    <button type="button" className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function CtaLink({ variant = "primary", className, to, children, ...props }) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}
