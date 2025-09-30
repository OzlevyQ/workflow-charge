import { useState } from "react";
import { Plus, Mail, Phone, CreditCard, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalSpent: number;
  activeSubscriptions: number;
  status: "active" | "inactive";
  joinDate: string;
}

export default function Customers() {
  const [customers] = useState<Customer[]>([
    {
      id: "1",
      name: "אבי כהן",
      email: "avi@example.com",
      phone: "050-1234567",
      totalSpent: 12500,
      activeSubscriptions: 2,
      status: "active",
      joinDate: "2024-11-15",
    },
    {
      id: "2",
      name: "שרה לוי",
      email: "sarah@example.com",
      phone: "052-9876543",
      totalSpent: 8900,
      activeSubscriptions: 1,
      status: "active",
      joinDate: "2024-12-01",
    },
    {
      id: "3",
      name: "דוד מזרחי",
      email: "david@example.com",
      phone: "054-5555555",
      totalSpent: 15600,
      activeSubscriptions: 3,
      status: "active",
      joinDate: "2024-10-20",
    },
    {
      id: "4",
      name: "רחל ברק",
      email: "rachel@example.com",
      phone: "053-7777777",
      totalSpent: 4200,
      activeSubscriptions: 0,
      status: "inactive",
      joinDate: "2024-09-10",
    },
  ]);

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">לקוחות</h1>
          <p className="text-muted-foreground mt-2">
            נהל את כל הלקוחות ופעילותם
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          לקוח חדש
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>סה״כ לקוחות</CardDescription>
            <CardTitle className="text-3xl">{customers.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>לקוחות פעילים</CardDescription>
            <CardTitle className="text-3xl">
              {customers.filter((c) => c.status === "active").length}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>LTV ממוצע</CardDescription>
            <CardTitle className="text-3xl">
              ₪
              {Math.round(
                customers.reduce((sum, c) => sum + c.totalSpent, 0) /
                  customers.length
              ).toLocaleString()}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>מנויים פעילים</CardDescription>
            <CardTitle className="text-3xl">
              {customers.reduce((sum, c) => sum + c.activeSubscriptions, 0)}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <Input placeholder="חיפוש לקוחות..." className="max-w-sm" />
      </div>

      {/* Customers Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>לקוח</TableHead>
              <TableHead>פרטי קשר</TableHead>
              <TableHead>סה״כ הוצאה</TableHead>
              <TableHead>מנויים פעילים</TableHead>
              <TableHead>סטטוס</TableHead>
              <TableHead>תאריך הצטרפות</TableHead>
              <TableHead>פעולות</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{customer.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {customer.id}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-3 w-3 text-muted-foreground" />
                      {customer.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-3 w-3 text-muted-foreground" />
                      {customer.phone}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-semibold">
                  ₪{customer.totalSpent.toLocaleString()}
                </TableCell>
                <TableCell>
                  <Badge variant="outline">
                    {customer.activeSubscriptions} מנויים
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      customer.status === "active" ? "default" : "secondary"
                    }
                  >
                    {customer.status === "active" ? "פעיל" : "לא פעיל"}
                  </Badge>
                </TableCell>
                <TableCell>{customer.joinDate}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    צפה
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
