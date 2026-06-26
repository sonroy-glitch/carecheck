import { ReactNode } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import {
  Heart,
  LayoutDashboard,
  Activity,
  BarChart3,
  MapPin,
  Bell,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

interface LayoutProps {
  children: ReactNode
}

const navItems = [
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/exam-step", label: "Self-Check", icon: Activity },
  { path: "/progress", label: "Progress", icon: BarChart3 },
  { path: "/find-clinic", label: "Find Clinic", icon: MapPin },
  { path: "/reminder", label: "Reminders", icon: Bell },
]

export function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen flex bg-background">
      {/* ─── Desktop Sidebar ─── */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-border bg-card/80 backdrop-blur-lg sticky top-0 h-screen">
        {/* Logo */}
        <div
          className="flex items-center gap-3 px-6 py-6 cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
            <Heart className="w-5 h-5 text-white fill-white/60" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight font-[var(--font-heading)]">
              CareCheck
            </h1>
            <p className="text-[11px] text-muted-foreground -mt-0.5">
              Health Companion
            </p>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-4 space-y-1 stagger-children">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Icon
                  className={`w-[18px] h-[18px] transition-transform duration-200 ${
                    isActive ? "" : "group-hover:scale-110"
                  }`}
                />
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* Bottom section */}
        <div className="px-4 pb-6 space-y-3">
          <div className="glass-card rounded-xl p-4">
            <p className="text-xs font-semibold text-foreground mb-1">
              Monthly Reminder
            </p>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Your next self-check is coming up. Stay consistent!
            </p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* ─── Mobile Header ─── */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-4 py-3 bg-card/80 backdrop-blur-lg border-b border-border">
          <div
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Heart className="w-4 h-4 text-white fill-white/60" />
            </div>
            <span className="text-base font-bold tracking-tight">
              CareCheck
            </span>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile dropdown nav */}
        {mobileOpen && (
          <div className="bg-card/95 backdrop-blur-xl border-b border-border px-4 py-3 space-y-1 animate-fade-in">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path)
                    setMobileOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <Icon className="w-[18px] h-[18px]" />
                  {item.label}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* ─── Main Content ─── */}
      <main className="flex-1 min-h-screen lg:pt-0 pt-14">
        <div className="animate-fade-in-up">{children}</div>
      </main>
    </div>
  )
}
