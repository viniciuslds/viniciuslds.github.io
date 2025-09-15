import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressSkillProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  label: string;
  delay?: number;
}

const ProgressSkill = React.forwardRef<HTMLDivElement, ProgressSkillProps>(
  ({ className, value, label, delay = 0, ...props }, ref) => {
    const [animatedValue, setAnimatedValue] = React.useState(0);

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setAnimatedValue(value);
      }, delay);

      return () => clearTimeout(timer);
    }, [value, delay]);

    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-foreground">{label}</span>
          <span className="text-sm text-muted-foreground">{value}%</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${animatedValue}%` }}
          />
        </div>
      </div>
    );
  }
);

ProgressSkill.displayName = "ProgressSkill";

export { ProgressSkill };