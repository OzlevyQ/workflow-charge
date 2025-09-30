import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Building2, CreditCard, Bell, Lock, Globe } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">הגדרות</h1>
        <p className="text-muted-foreground mt-2">נהל את הגדרות המערכת והעסק</p>
      </div>

      <Tabs defaultValue="business" className="space-y-4">
        <TabsList>
          <TabsTrigger value="business">
            <Building2 className="h-4 w-4 ml-2" />
            פרטי עסק
          </TabsTrigger>
          <TabsTrigger value="payment">
            <CreditCard className="h-4 w-4 ml-2" />
            סליקה ותשלומים
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 ml-2" />
            התראות
          </TabsTrigger>
          <TabsTrigger value="security">
            <Lock className="h-4 w-4 ml-2" />
            אבטחה
          </TabsTrigger>
        </TabsList>

        {/* Business Settings */}
        <TabsContent value="business" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>פרטי עסק</CardTitle>
              <CardDescription>
                פרטי החברה שיופיעו במסמכים ובתקשורת עם לקוחות
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company-name">שם החברה</Label>
                  <Input id="company-name" placeholder="FlowPay בע״מ" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tax-id">ח.פ / ע.מ</Label>
                  <Input id="tax-id" placeholder="123456789" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">כתובת</Label>
                <Input id="address" placeholder="רחוב הרצל 1, תל אביב" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">טלפון</Label>
                  <Input id="phone" placeholder="03-1234567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">דוא״ל</Label>
                  <Input id="email" type="email" placeholder="info@company.com" />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="vat">אחוז מע״מ</Label>
                <Input id="vat" type="number" placeholder="17" />
              </div>

              <Button>שמור שינויים</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>חשבונות בנק</CardTitle>
              <CardDescription>
                חשבונות לקבלת תשלומים באמצעות העברה בנקאית
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="bank-name">שם הבנק</Label>
                  <Input id="bank-name" placeholder="בנק לאומי" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bank-branch">סניף</Label>
                  <Input id="bank-branch" placeholder="123" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bank-account">מספר חשבון</Label>
                <Input id="bank-account" placeholder="123456" />
              </div>

              <Button variant="outline">הוסף חשבון בנק</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Settings */}
        <TabsContent value="payment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>ספקי סליקה</CardTitle>
              <CardDescription>
                הגדר את ספקי הסליקה והתשלום שלך
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Demo Payment Gateway</p>
                    <p className="text-sm text-muted-foreground">
                      לבדיקות ופיתוח
                    </p>
                  </div>
                </div>
                <Badge variant="default">פעיל</Badge>
              </div>

              <div className="space-y-4 mt-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>3D Secure</Label>
                    <p className="text-sm text-muted-foreground">
                      אבטחה מוגברת לעסקאות
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Smart Retries</Label>
                    <p className="text-sm text-muted-foreground">
                      ניסיונות חיוב אוטומטיים
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <Input
                  id="webhook-url"
                  placeholder="https://your-domain.com/webhooks"
                />
                <p className="text-sm text-muted-foreground">
                  כתובת לקבלת עדכונים על תשלומים ועסקאות
                </p>
              </div>

              <Button>שמור הגדרות סליקה</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>אמצעי תשלום</CardTitle>
              <CardDescription>בחר אילו אמצעי תשלום זמינים ללקוחות</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="credit-card">כרטיס אשראי</Label>
                <Switch id="credit-card" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="bank-transfer">העברה בנקאית</Label>
                <Switch id="bank-transfer" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="tokens">טוקנים/נקודות</Label>
                <Switch id="tokens" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>התראות אימייל</CardTitle>
              <CardDescription>בחר על אילו אירועים לקבל התראות</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>תשלום נכשל</Label>
                  <p className="text-sm text-muted-foreground">
                    קבל התראה כשתשלום נכשל
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>מנוי עומד לפוג</Label>
                  <p className="text-sm text-muted-foreground">
                    התראה 3 ימים לפני פקיעת מנוי
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>לקוח חדש</Label>
                  <p className="text-sm text-muted-foreground">
                    התראה על כל לקוח חדש שנרשם
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>דוח יומי</Label>
                  <p className="text-sm text-muted-foreground">
                    סיכום יומי של פעילות
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>התראות ללקוחות</CardTitle>
              <CardDescription>הגדר אילו הודעות לשלוח ללקוחות</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>אישור תשלום</Label>
                  <p className="text-sm text-muted-foreground">
                    שלח אימייל עם אישור קבלת תשלום
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>תזכורת תשלום</Label>
                  <p className="text-sm text-muted-foreground">
                    תזכורת לפני מועד חיוב
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>מסמך מוכן</Label>
                  <p className="text-sm text-muted-foreground">
                    הודעה כשמסמך חדש מוכן להורדה
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>אבטחה והרשאות</CardTitle>
              <CardDescription>
                נהל הגדרות אבטחה וגישה למערכת
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>אימות דו־שלבי (2FA)</Label>
                  <p className="text-sm text-muted-foreground">
                    הגן על החשבון שלך עם אימות נוסף
                  </p>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>מפתחות API</Label>
                <div className="flex gap-2">
                  <Input
                    type="password"
                    value="sk_live_************************"
                    readOnly
                  />
                  <Button variant="outline">החלף</Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  שמור את המפתח במקום מאובטח
                </p>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium mb-2">היסטוריית פעולות</h4>
                <div className="space-y-2">
                  <div className="text-sm p-3 bg-muted rounded-lg">
                    <p>התחברות מוצלחת - 15/01/2025 10:30</p>
                    <p className="text-muted-foreground">IP: 192.168.1.1</p>
                  </div>
                  <div className="text-sm p-3 bg-muted rounded-lg">
                    <p>עדכון הגדרות - 14/01/2025 15:20</p>
                    <p className="text-muted-foreground">IP: 192.168.1.1</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
