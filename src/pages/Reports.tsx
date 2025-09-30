import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, TrendingDown, DollarSign, Users, Activity } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "ינו", revenue: 45000, expenses: 28000 },
  { month: "פבר", revenue: 52000, expenses: 31000 },
  { month: "מרץ", revenue: 48000, expenses: 29000 },
  { month: "אפר", revenue: 61000, expenses: 35000 },
  { month: "מאי", revenue: 55000, expenses: 32000 },
  { month: "יוני", revenue: 67000, expenses: 38000 },
];

const paymentMethodsData = [
  { name: "כרטיס אשראי", value: 65, color: "hsl(var(--primary))" },
  { name: "העברה בנקאית", value: 25, color: "hsl(var(--secondary))" },
  { name: "נקודות", value: 10, color: "hsl(var(--accent))" },
];

const workflowData = [
  { name: "איפיון→הדמיה", conversions: 87, revenue: 145000 },
  { name: "קורס 3 תשלומים", conversions: 92, revenue: 89000 },
  { name: "ייעוץ עסקי", conversions: 65, revenue: 52000 },
  { name: "שירות חודשי", conversions: 78, revenue: 38000 },
];

export default function Reports() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">דוחות</h1>
          <p className="text-muted-foreground mt-2">
            ניתוח מקיף של ביצועים, תשלומים ומסים
          </p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="30">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">7 ימים</SelectItem>
              <SelectItem value="30">30 ימים</SelectItem>
              <SelectItem value="90">90 ימים</SelectItem>
              <SelectItem value="365">שנה</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            ייצא דוח
          </Button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">הכנסות החודש</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₪145,280</div>
            <p className="text-xs text-success flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +12.5% מהחודש הקודם
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">MRR</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₪48,900</div>
            <p className="text-xs text-success flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +8.2% מהחודש הקודם
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">לקוחות פעילים</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-success flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +23 לקוחות חדשים
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.8%</div>
            <p className="text-xs text-success flex items-center gap-1 mt-1">
              <TrendingDown className="h-3 w-3" />
              -0.5% שיפור
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="revenue" className="space-y-4">
        <TabsList>
          <TabsTrigger value="revenue">הכנסות</TabsTrigger>
          <TabsTrigger value="workflows">תהליכים</TabsTrigger>
          <TabsTrigger value="payments">תשלומים</TabsTrigger>
          <TabsTrigger value="taxes">מסים</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>מגמת הכנסות</CardTitle>
              <CardDescription>השוואה בין הכנסות להוצאות</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    name="הכנסות"
                  />
                  <Line
                    type="monotone"
                    dataKey="expenses"
                    stroke="hsl(var(--destructive))"
                    strokeWidth={2}
                    name="הוצאות"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>פילוח לפי אמצעי תשלום</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={paymentMethodsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {paymentMethodsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>מדדי ביצוע</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    שיעור הצלחת תשלום
                  </span>
                  <span className="text-2xl font-bold">96.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    זמן ממוצע לתשלום
                  </span>
                  <span className="text-2xl font-bold">2.3 ימים</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">ARR</span>
                  <span className="text-2xl font-bold">₪586,800</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    LTV ממוצע
                  </span>
                  <span className="text-2xl font-bold">₪12,450</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="workflows">
          <Card>
            <CardHeader>
              <CardTitle>ביצועי תהליכים</CardTitle>
              <CardDescription>המרות והכנסות לפי תהליך</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={workflowData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar
                    yAxisId="left"
                    dataKey="conversions"
                    fill="hsl(var(--primary))"
                    name="שיעור המרה (%)"
                  />
                  <Bar
                    yAxisId="right"
                    dataKey="revenue"
                    fill="hsl(var(--secondary))"
                    name="הכנסות (₪)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments">
          <Card className="p-6">
            <p className="text-muted-foreground">דוח תשלומים מפורט - בקרוב</p>
          </Card>
        </TabsContent>

        <TabsContent value="taxes">
          <Card>
            <CardHeader>
              <CardTitle>דוח מע״מ</CardTitle>
              <CardDescription>תקופת דיווח: ינואר 2025</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border rounded-lg">
                  <p className="text-sm text-muted-foreground">הכנסות חייבות במע״מ</p>
                  <p className="text-2xl font-bold mt-2">₪121,500</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="text-sm text-muted-foreground">מע״מ עסקאות</p>
                  <p className="text-2xl font-bold mt-2">₪20,655</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="text-sm text-muted-foreground">מע״מ תשומות</p>
                  <p className="text-2xl font-bold mt-2">₪8,340</p>
                </div>
              </div>
              <div className="p-4 bg-primary/5 border-2 border-primary rounded-lg">
                <p className="text-sm text-muted-foreground">סה״כ מע״מ לתשלום</p>
                <p className="text-3xl font-bold mt-2">₪12,315</p>
              </div>
              <Button className="w-full">ייצא דוח מע״מ</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
