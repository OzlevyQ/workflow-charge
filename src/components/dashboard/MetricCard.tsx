import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  variant?: "default" | "success" | "warning" | "primary";
  subtitle?: string;
}

export function MetricCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  variant = "default",
  subtitle
}: MetricCardProps) {
  const variants = {
    default: "border-border hover:shadow-custom-md",
    success: "border-success/20 bg-success/5 hover:shadow-accent",
    warning: "border-warning/20 bg-warning/5 hover:shadow-lg",
    primary: "border-primary/20 bg-primary/5 hover:shadow-glow"
  };

  const iconVariants = {
    default: "text-muted-foreground",
    success: "text-success",
    warning: "text-warning", 
    primary: "text-primary"
  };

  const changeColors = {
    positive: "text-success",
    negative: "text-destructive",
    neutral: "text-muted-foreground"
  };

  return (
    <Card className={cn(
      "p-6 transition-smooth hover:scale-[1.02] cursor-pointer bg-gradient-card",
      variants[variant]
    )}>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-foreground">{value}</p>
            {subtitle && (
              <p className="text-xs text-muted-foreground">{subtitle}</p>
            )}
          </div>
          {change && (
            <p className={cn("text-xs font-medium", changeColors[changeType])}>
              {change}
            </p>
          )}
        </div>
        
        <div className={cn(
          "p-3 rounded-lg bg-muted/50",
          iconVariants[variant]
        )}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </Card>
  );
}