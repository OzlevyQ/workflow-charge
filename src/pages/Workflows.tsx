import { useState } from "react";
import { Plus, Play, Pause, Copy, Trash2, Edit, ExternalLink } from "lucide-react";
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

interface Workflow {
  id: string;
  name: string;
  status: "active" | "paused" | "draft";
  stages: number;
  completionRate: number;
  revenue: number;
  customers: number;
}

export default function Workflows() {
  const [workflows] = useState<Workflow[]>([
    {
      id: "1",
      name: "תהליך איפיון → הדמיה → מוצר",
      status: "active",
      stages: 5,
      completionRate: 87,
      revenue: 145000,
      customers: 23,
    },
    {
      id: "2",
      name: "קורס אונליין - 3 תשלומים",
      status: "active",
      stages: 3,
      completionRate: 92,
      revenue: 89000,
      customers: 45,
    },
    {
      id: "3",
      name: "ייעוץ עסקי - חבילה מלאה",
      status: "paused",
      stages: 4,
      completionRate: 65,
      revenue: 52000,
      customers: 8,
    },
  ]);

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">תהליכים</h1>
          <p className="text-muted-foreground mt-2">
            נהל תהליכים רב־שלביים עם שערי תשלום
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          תהליך חדש
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <Input placeholder="חיפוש תהליכים..." className="max-w-sm" />
        <Select defaultValue="all">
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">כל הסטטוסים</SelectItem>
            <SelectItem value="active">פעיל</SelectItem>
            <SelectItem value="paused">מושהה</SelectItem>
            <SelectItem value="draft">טיוטה</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Workflows Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workflows.map((workflow) => (
          <Card key={workflow.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{workflow.name}</CardTitle>
                  <CardDescription>{workflow.stages} שלבים</CardDescription>
                </div>
                <Badge
                  variant={
                    workflow.status === "active"
                      ? "default"
                      : workflow.status === "paused"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {workflow.status === "active"
                    ? "פעיל"
                    : workflow.status === "paused"
                    ? "מושהה"
                    : "טיוטה"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">שיעור השלמה</p>
                  <p className="text-2xl font-bold">{workflow.completionRate}%</p>
                </div>
                <div>
                  <p className="text-muted-foreground">לקוחות</p>
                  <p className="text-2xl font-bold">{workflow.customers}</p>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">הכנסות</p>
                <p className="text-2xl font-bold">
                  ₪{workflow.revenue.toLocaleString()}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-4 w-4 ml-2" />
                  עריכה
                </Button>
                <Button variant="outline" size="sm">
                  {workflow.status === "active" ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>
                <Button variant="outline" size="sm">
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Template Library */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">ספריית תבניות</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            "תהליך פיתוח מוצר",
            "קורס מקוון בתשלומים",
            "ייעוץ עסקי",
            "שירות חודשי + בונוסים",
          ].map((template) => (
            <Card
              key={template}
              className="cursor-pointer hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-base">{template}</CardTitle>
                <CardDescription>תבנית מוכנה לשימוש</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full">
                  השתמש בתבנית
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
