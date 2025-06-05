"use client";

import {
  Home,
  ShoppingCart,
  Package,
  Mail,
  Compass,
  Settings,
  CircleDot,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/side-bar";
import { NavUser } from "./nav-user";

// Menu items
const menuItems = [
  {
    title: "Home",
    icon: Home,
    url: "/dashboard",
  },
  {
    title: "Products",
    icon: Package,
    url: "/dashboard/products",
  },
  {
    title: "Checkout",
    icon: ShoppingCart,
    url: "#",
  },
  {
    title: "Email",
    icon: Mail,
    url: "#",
  },
  {
    title: "Discover",
    icon: Compass,
    url: "#",
  },
  {
    title: "Settings",
    icon: Settings,
    url: "#",
  },
];

export function AppSidebar({
  userName,
  userEmail,
}: {
  userName: string;
  userEmail: string;
  userAvatar: string;
}) {
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>
        <div className="flex items-center justify-center gap-2  py-3 text-primary border-b-1">
          <CircleDot className="h-10 w-10 md:h-8 md:w-8" />
          <h1 className="text-2xl font-bold group-data-[collapsible=icon]:hidden">
            DevSell
          </h1>
        </div>
      </SidebarHeader>

      <SidebarContent className="py-10">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <div key={item.title}>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      className="hover:bg-primary hover:text-foreground h-13 px-6 text-xl md:text-lg "
                    >
                      <a href={item.url} className="gap-3 w-full">
                        <item.icon className="h-8 w-full md:h-6 md:w-6" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <NavUser userEmail={userEmail} userAvatar={userEmail} userName={userName}/>
      </SidebarFooter>
    </Sidebar>
  );
}
