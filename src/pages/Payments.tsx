import { useState } from "react";
import { Plus, Download, Filter, CheckCircle2, XCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Payment {
  id: string;
  customer: string;
  type: "one-time" | "subscription" | "tokens";
  amount: number;
  status: "success" | "failed" | "pending";
  date: string;
  method: string;
}

export default function Payments() {
  const [payments] = useState<Payment[]>([
    {
      id: "PAY-001",
      customer: "אבי כהן",
      type: "subscription",
      amount: 299,
      status: "success",
      date: "2025-01-15",
      method: "כרטיס אשראי",
    },
    {
      id: "PAY-002",
      customer: "שרה לוי",
      type: "one-time",
      amount: 1500,
      status: "success",
      date: "2025-01-15",
      method: "העברה בנקאית",
    },
    {
      id: "PAY-003",
      customer: "דוד מזרחי",
      type: "tokens",
      amount: 500,
      status: "pending",
      date: "2025-01-15",
      method: "כרטיס אשראי",
    },
    {
      id: "PAY-004",
      customer: "רחל ברק",
      type: "subscription",
      amount: 199,
      status: "failed",
      date: "2025-01-14",
      method: "כרטיס אשראי",
    },
  ]);

  const getStatusIcon = (status: Payment["status"]) => {
    switch (status) {
      case "success":
        return <CheckCircle2 className="h-4 w-4 text-success" />;
      case "failed":
        return <XCircle className="h-4 w-4 text-destructive" />;
      case "pending":
        return <Clock className="h-4 w-4 text-warning" />;
    }
  };

  const getStatusText = (status: Payment["status"]) => {
    switch (status) {
      case "success":
        return "הצליח";
      case "failed":
        return "נכשל";
      case "pending":
        return "ממתין";
    }
  };

  const getTypeText = (type: Payment["type"]) => {
    switch (type) {
      case "one-time":
        return "חד־פעמי";
      case "subscription":
        return "מנוי";
      case "tokens":
        return "נקודות";
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">תשלומים</h1>
          <p className="text-muted-foreground mt-2">
            נהל את כל התשלומים, המנויים והנקודות
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            ייצא
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            תשלום חדש
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>היום</CardDescription>
            <CardTitle className="text-3xl">₪12,450</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">23 תשלומים</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>החודש</CardDescription>
            <CardTitle className="text-3xl">₪145,280</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">342 תשלומים</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>MRR</CardDescription>
            <CardTitle className="text-3xl">₪48,900</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-success">+12% מהחודש הקודם</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>שיעור הצלחה</CardDescription>
            <CardTitle className="text-3xl">96.8%</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">11 כשלונות היום</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">הכל</TabsTrigger>
            <TabsTrigger value="one-time">חד־פעמי</TabsTrigger>
            <TabsTrigger value="subscription">מנויים</TabsTrigger>
            <TabsTrigger value="tokens">נקודות</TabsTrigger>
          </TabsList>

          <div className="flex gap-2">
            <Input placeholder="חיפוש..." className="w-64" />
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>מזהה</TableHead>
                  <TableHead>לקוח</TableHead>
                  <TableHead>סוג</TableHead>
                  <TableHead>סכום</TableHead>
                  <TableHead>אמצעי תשלום</TableHead>
                  <TableHead>סטטוס</TableHead>
                  <TableHead>תאריך</TableHead>
                  <TableHead>פעולות</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{payment.id}</TableCell>
                    <TableCell>{payment.customer}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{getTypeText(payment.type)}</Badge>
                    </TableCell>
                    <TableCell className="font-semibold">
                      ₪{payment.amount.toLocaleString()}
                    </TableCell>
                    <TableCell>{payment.method}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(payment.status)}
                        <span>{getStatusText(payment.status)}</span>
                      </div>
                    </TableCell>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        פרטים
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="subscription">
          <Card className="p-6">
            <p className="text-muted-foreground">תצוגת מנויים - בקרוב</p>
          </Card>
        </TabsContent>

        <TabsContent value="one-time">
          <Card className="p-6">
            <p className="text-muted-foreground">תשלומים חד־פעמיים - בקרוב</p>
          </Card>
        </TabsContent>

        <TabsContent value="tokens">
          <Card className="p-6">
            <p className="text-muted-foreground">מערכת נקודות - בקרוב</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
