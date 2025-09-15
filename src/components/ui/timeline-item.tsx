import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
  isLast?: boolean;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, title, company, period, description, technologies = [], isLast = false, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative pl-8 pb-8 group", className)} {...props}>
        {/* Timeline line */}
        {!isLast && (
          <div className="absolute left-2 top-6 bottom-0 w-px bg-gradient-to-b from-primary to-primary/30" />
        )}
        
        {/* Timeline dot */}
        <div className="absolute left-0 top-3 w-4 h-4 bg-primary rounded-full shadow-medium group-hover:shadow-glow transition-all duration-300" />
        
        <div className="space-y-3">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <p className="text-primary font-medium">{company}</p>
            <p className="text-sm text-muted-foreground">{period}</p>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">{description}</p>
          
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);

TimelineItem.displayName = "TimelineItem";

export { TimelineItem };