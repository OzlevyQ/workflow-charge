import { useState } from "react";
import { Plus, Download, FileText, FileCheck, FileClock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Document {
  id: string;
  type: "invoice" | "receipt" | "quote" | "contract";
  number: string;
  customer: string;
  amount: number;
  status: "sent" | "paid" | "overdue" | "draft";
  date: string;
}

export default function Documents() {
  const [documents] = useState<Document[]>([
    {
      id: "1",
      type: "invoice",
      number: "INV-2025-001",
      customer: "אבי כהן",
      amount: 2500,
      status: "paid",
      date: "2025-01-15",
    },
    {
      id: "2",
      type: "invoice",
      number: "INV-2025-002",
      customer: "שרה לוי",
      amount: 1800,
      status: "sent",
      date: "2025-01-14",
    },
    {
      id: "3",
      type: "quote",
      number: "QUO-2025-008",
      customer: "דוד מזרחי",
      amount: 5000,
      status: "draft",
      date: "2025-01-13",
    },
    {
      id: "4",
      type: "receipt",
      number: "REC-2025-045",
      customer: "רחל ברק",
      amount: 450,
      status: "paid",
      date: "2025-01-12",
    },
  ]);

  const getTypeIcon = (type: Document["type"]) => {
    switch (type) {
      case "invoice":
        return <FileText className="h-4 w-4" />;
      case "receipt":
        return <FileCheck className="h-4 w-4" />;
      case "quote":
        return <FileClock className="h-4 w-4" />;
      case "contract":
        return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeText = (type: Document["type"]) => {
    switch (type) {
      case "invoice":
        return "חשבונית";
      case "receipt":
        return "קבלה";
      case "quote":
        return "הצעת מחיר";
      case "contract":
        return "חוזה";
    }
  };

  const getStatusText = (status: Document["status"]) => {
    switch (status) {
      case "sent":
        return "נשלח";
      case "paid":
        return "שולם";
      case "overdue":
        return "באיחור";
      case "draft":
        return "טיוטה";
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">מסמכים</h1>
          <p className="text-muted-foreground mt-2">
            חשבוניות, קבלות, הצעות מחיר וחוזים
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            ייצא
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            מסמך חדש
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">חשבוניות</p>
              <p className="text-2xl font-bold">
                {documents.filter((d) => d.type === "invoice").length}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center">
              <FileCheck className="h-6 w-6 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">קבלות</p>
              <p className="text-2xl font-bold">
                {documents.filter((d) => d.type === "receipt").length}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center">
              <FileClock className="h-6 w-6 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">הצעות מחיר</p>
              <p className="text-2xl font-bold">
                {documents.filter((d) => d.type === "quote").length}
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-secondary/50 flex items-center justify-center">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">סה״כ סכום</p>
              <p className="text-2xl font-bold">
                ₪{documents.reduce((sum, d) => sum + d.amount, 0).toLocaleString()}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">הכל</TabsTrigger>
            <TabsTrigger value="invoice">חשבוניות</TabsTrigger>
            <TabsTrigger value="receipt">קבלות</TabsTrigger>
            <TabsTrigger value="quote">הצעות מחיר</TabsTrigger>
          </TabsList>

          <div className="flex gap-2">
            <Input placeholder="חיפוש מסמכים..." className="w-64" />
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="all">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>מספר מסמך</TableHead>
                  <TableHead>סוג</TableHead>
                  <TableHead>לקוח</TableHead>
                  <TableHead>סכום</TableHead>
                  <TableHead>סטטוס</TableHead>
                  <TableHead>תאריך</TableHead>
                  <TableHead>פעולות</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell className="font-medium">{doc.number}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getTypeIcon(doc.type)}
                        <span>{getTypeText(doc.type)}</span>
                      </div>
                    </TableCell>
                    <TableCell>{doc.customer}</TableCell>
                    <TableCell className="font-semibold">
                      ₪{doc.amount.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          doc.status === "paid"
                            ? "default"
                            : doc.status === "sent"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {getStatusText(doc.status)}
                      </Badge>
                    </TableCell>
                    <TableCell>{doc.date}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          צפה
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
