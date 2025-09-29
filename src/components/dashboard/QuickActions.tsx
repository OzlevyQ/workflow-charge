import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Workflow, CreditCard, Users, FileText } from "lucide-react";

export function QuickActions() {
  const actions = [
    {
      title: "תהליך חדש",
      description: "יצירת תהליך רב-שלבי",
      icon: Workflow,
      variant: "primary" as const,
      href: "/workflows/new"
    },
    {
      title: "תשלום חד-פעמי", 
      description: "יצירת קישור תשלום",
      icon: CreditCard,
      variant: "default" as const,
      href: "/payments/new"
    },
    {
      title: "מנוי חדש",
      description: "הגדרת מנוי חוזר",
      icon: Plus,
      variant: "default" as const,
      href: "/subscriptions/new"
    },
    {
      title: "לקוח חדש",
      description: "הוספת לקוח למערכת",
      icon: Users,
      variant: "default" as const,
      href: "/customers/new"
    },
    {
      title: "דוח מס",
      description: "יצירת דוח מע״מ",
      icon: FileText,
      variant: "default" as const,
      href: "/reports/tax"
    }
  ];

  return (
    <Card className="p-6 bg-gradient-card border-border/50">
      <h3 className="text-lg font-semibold text-foreground mb-4">פעולות מהירות</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {actions.map((action) => (
          <Button
            key={action.title}
            variant={action.variant}
            className="h-auto p-4 flex flex-col items-center space-y-2 text-center hover:scale-105 transition-bounce"
            onClick={() => console.log(`Navigate to ${action.href}`)}
          >
            <action.icon className="h-6 w-6" />
            <div>
              <div className="font-medium text-sm">{action.title}</div>
              <div className="text-xs opacity-80">{action.description}</div>
            </div>
          </Button>
        ))}
      </div>
    </Card>
  );
}