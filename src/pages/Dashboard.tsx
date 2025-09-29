import { MetricCard } from "@/components/dashboard/MetricCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { AlertsPanel } from "@/components/dashboard/AlertsPanel";
import { 
  CreditCard, 
  DollarSign, 
  Users, 
  TrendingUp,
  BarChart3,
  CheckCircle,
  XCircle,
  Clock,
  Repeat,
  FileText,
  AlertTriangle
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 bg-background min-h-full">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">דשבורד ראשי</h1>
        <p className="text-muted-foreground">מבט כללי על פעילות המערכת</p>
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Main Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Payments Today/Week/Month */}
        <MetricCard
          title="תשלומים היום"
          value="127"
          change="+12% מאתמול"
          changeType="positive"
          icon={CreditCard}
          variant="primary"
        />
        
        <MetricCard
          title="תשלומים השבוע"
          value="834"
          change="+8% מהשבוע שעבר"
          changeType="positive"
          icon={BarChart3}
          variant="success"
        />

        <MetricCard
          title="תשלומים החודש"
          value="3,247"
          change="+23% מחודש שעבר"
          changeType="positive"
          icon={TrendingUp}
          variant="success"
        />

        <MetricCard
          title="סך הכל תשלומים"
          value="45,621"
          subtitle="מתחילת השנה"
          icon={FileText}
        />
      </div>

      {/* Revenue Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="הכנסות ברוטו"
          value="₪ 127,340"
          change="+15% מחודש שעבר"
          changeType="positive"
          icon={DollarSign}
          variant="success"
        />

        <MetricCard
          title="הכנסות נטו"
          value="₪ 119,450"
          subtitle="אחרי עמלות"
          change="+12% מחודש שעבר"
          changeType="positive"
          icon={DollarSign}
          variant="success"
        />

        <MetricCard
          title="MRR"
          value="₪ 89,200"
          subtitle="Monthly Recurring Revenue"
          change="+5% מחודש שעבר"
          changeType="positive"
          icon={Repeat}
          variant="primary"
        />

        <MetricCard
          title="ARR"
          value="₪ 1,070,400"
          subtitle="Annual Recurring Revenue"
          change="+18% משנה שעברה"
          changeType="positive"
          icon={TrendingUp}
          variant="primary"
        />
      </div>

      {/* Business Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="תוכניות פעילות"
          value="23"
          subtitle="מנויים + חד-פעמי + נקודות"
          icon={BarChart3}
        />

        <MetricCard
          title="לקוחות פעילים"
          value="1,247"
          change="+34 השבוע"
          changeType="positive"
          icon={Users}
          variant="success"
        />

        <MetricCard
          title="שיעור הצלחה"
          value="94.2%"
          subtitle="תשלומים מוצלחים"
          change="+1.2% מחודש שעבר"
          changeType="positive"
          icon={CheckCircle}
          variant="success"
        />

        <MetricCard
          title="כשלונות היום"
          value="12"
          subtitle="תשלומים נכשלו"
          change="-3 מאתמול"
          changeType="positive"
          icon={XCircle}
          variant="warning"
        />
      </div>

      {/* Tax & Compliance */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="מע״מ מחזורי"
          value="₪ 21,567"
          subtitle="לתקופה הנוכחית"
          icon={FileText}
        />

        <MetricCard
          title="תחזית מס"
          value="₪ 95,400"
          subtitle="לרבעון הנוכחי"
          icon={TrendingUp}
        />

        <MetricCard
          title="Smart Retries"
          value="34"
          subtitle="בתור לטיפול"
          icon={Clock}
          variant="warning"
        />

        <MetricCard
          title="חובות פתוחים"
          value="₪ 18,230"
          subtitle="לתשלום"
          change="-12% מחודש שעבר"
          changeType="positive"
          icon={AlertTriangle}
          variant="warning"
        />
      </div>

      {/* Process Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="תהליכים פעילים"
          value="156"
          subtitle="בשלבים שונים"
          icon={BarChart3}
        />

        <MetricCard
          title="זמן ממוצע לשלב"
          value="2.3 ימים"
          subtitle="בין שלבי תהליך"
          change="-0.5 ימים מחודש שעבר"
          changeType="positive"
          icon={Clock}
          variant="success"
        />

        <MetricCard
          title="המרות שלב 1→2"
          value="87%"
          change="+3% מחודש שעבר"
          changeType="positive"
          icon={TrendingUp}
          variant="success"
        />

        <MetricCard
          title="Churn Rate"
          value="2.1%"
          subtitle="נטישת מנויים"
          change="-0.3% מחודש שעבר" 
          changeType="positive"
          icon={Users}
          variant="success"
        />
      </div>

      {/* Alerts Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AlertsPanel />
        </div>
        
        <div className="space-y-4">
          <MetricCard
            title="תשלומים איטיים"
            value="23"
            subtitle="Late Payments"
            icon={Clock}
            variant="warning"
          />
          
          <MetricCard
            title="מנויים יפוגו"
            value="8"
            subtitle="בשבוע הקרוב"
            icon={AlertTriangle}
            variant="warning"
          />
        </div>
      </div>
    </div>
  );
}