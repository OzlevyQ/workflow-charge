import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  Clock, 
  CreditCard, 
  FileX, 
  TrendingDown,
  X 
} from "lucide-react";

interface Alert {
  id: string;
  type: "warning" | "danger" | "info";
  title: string;
  description: string;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss?: () => void;
}

export function AlertsPanel() {
  const alerts: Alert[] = [
    {
      id: "1",
      type: "danger",
      title: "מנוי עומד לפוג",
      description: "5 מנויים יפוגו ב-3 הימים הקרובים",
      time: "לפני שעה",
      icon: Clock,
      actionLabel: "צפייה",
      onAction: () => console.log("View expiring subscriptions")
    },
    {
      id: "2", 
      type: "warning",
      title: "אמצעי תשלום יפוג",
      description: "כרטיס אשראי של 3 לקוחות יפוג החודש",
      time: "לפני 2 שעות",
      icon: CreditCard,
      actionLabel: "עדכון",
      onAction: () => console.log("Update payment methods")
    },
    {
      id: "3",
      type: "danger", 
      title: "תשלומים נכשלו",
      description: "12 תשלומים נכשלו היום",
      time: "לפני 30 דק׳",
      icon: TrendingDown,
      actionLabel: "טיפול",
      onAction: () => console.log("Handle failed payments")
    },
    {
      id: "4",
      type: "info",
      title: "מסמכים חסרים",
      description: "4 תהליכים ממתינים למסמכים",
      time: "לפני 45 דק׳", 
      icon: FileX,
      actionLabel: "בדיקה",
      onAction: () => console.log("Check missing documents")
    }
  ];

  const getAlertStyle = (type: Alert["type"]) => {
    switch (type) {
      case "danger":
        return "border-r-4 border-r-destructive bg-destructive/5";
      case "warning":
        return "border-r-4 border-r-warning bg-warning/5";
      case "info":
        return "border-r-4 border-r-primary bg-primary/5";
      default:
        return "border-r-4 border-r-muted";
    }
  };

  const getBadgeVariant = (type: Alert["type"]) => {
    switch (type) {
      case "danger":
        return "destructive";
      case "warning":
        return "secondary";
      case "info":
        return "default";
      default:
        return "outline";
    }
  };

  return (
    <Card className="p-6 bg-gradient-card border-border/50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">התראות</h3>
        <Badge variant="secondary" className="bg-destructive/10 text-destructive">
          {alerts.length}
        </Badge>
      </div>

      <div className="space-y-3 max-h-80 overflow-y-auto">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg transition-smooth hover:shadow-custom-sm ${getAlertStyle(alert.type)}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <alert.icon className="h-5 w-5 mt-0.5 text-current" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="text-sm font-medium text-foreground">
                      {alert.title}
                    </h4>
                    <Badge variant={getBadgeVariant(alert.type)} className="text-xs">
                      {alert.time}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {alert.description}
                  </p>
                  
                  {alert.actionLabel && alert.onAction && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={alert.onAction}
                      className="text-xs h-7"
                    >
                      {alert.actionLabel}
                    </Button>
                  )}
                </div>
              </div>
              
              {alert.onDismiss && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={alert.onDismiss}
                  className="h-6 w-6 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}