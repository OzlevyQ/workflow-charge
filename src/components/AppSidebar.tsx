import { useState } from "react";
import { 
  LayoutDashboard, 
  Building2, 
  CreditCard, 
  Workflow, 
  Users, 
  FileText, 
  BarChart3, 
  Zap, 
  Plug, 
  Shield, 
  Settings,
  Coins,
  Receipt
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "מבט כללי",
    items: [
      { title: "דשבורד", url: "/", icon: LayoutDashboard },
      { title: "פרופיל עסק", url: "/business-profile", icon: Building2 },
    ]
  },
  {
    title: "ליבה",
    items: [
      { title: "תהליכים", url: "/workflows", icon: Workflow },
      { title: "תשלומים", url: "/payments", icon: CreditCard },
      { title: "טוקנים/נקודות", url: "/tokens", icon: Coins },
      { title: "לקוחות", url: "/customers", icon: Users },
    ]
  },
  {
    title: "ניהול",
    items: [
      { title: "מסמכים", url: "/documents", icon: FileText },
      { title: "דוחות", url: "/reports", icon: BarChart3 },
      { title: "סליקה", url: "/payment-methods", icon: Receipt },
    ]
  },
  {
    title: "מתקדם",
    items: [
      { title: "אוטומציות", url: "/automations", icon: Zap },
      { title: "אינטגרציות", url: "/integrations", icon: Plug },
      { title: "הרשאות", url: "/permissions", icon: Shield },
      { title: "הגדרות", url: "/settings", icon: Settings },
    ]
  }
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" 
      : "hover:bg-muted/70 transition-smooth";

  return (
    <Sidebar
      collapsible="icon"
    >
      <SidebarContent className="bg-gradient-card">
        {/* Logo */}
        <div className="p-4 border-b border-border">
          {state === "expanded" ? (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
                FlowPay
              </span>
            </div>
          ) : (
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
              <CreditCard className="h-5 w-5 text-white" />
            </div>
          )}
        </div>

        {/* Navigation */}
        {navigationItems.map((section) => (
          <SidebarGroup key={section.title}>
            {state === "expanded" && (
              <SidebarGroupLabel className="text-muted-foreground font-medium px-4 py-2">
                {section.title}
              </SidebarGroupLabel>
            )}
            
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url} 
                        end 
                        className={getNavCls}
                        title={state === "collapsed" ? item.title : undefined}
                      >
                        <item.icon className="h-5 w-5 shrink-0" />
                        {state === "expanded" && <span className="text-sm">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}