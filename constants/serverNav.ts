import { DollarSign, LayoutDashboard, Presentation, ShieldUser, Users } from "lucide-react"

export const serverNav = [
  {
    title: "dashboard",
    href: "/server",
    icon: LayoutDashboard
  },
  {
    title: "clients",
    href: "/server/clients",
    icon: Users
  },
  {
    title: "employees",
    href: "/server/employees",
    icon: ShieldUser
  },
  {
    title: "projects",
    href: "/server/projects",
    icon: Presentation
  },
  {
    title: "invoices",
    href: "/server/invoices",
    icon: DollarSign
  },
]