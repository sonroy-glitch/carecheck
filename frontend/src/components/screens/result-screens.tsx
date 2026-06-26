"use client"

import { useApp } from "@/components/app-context"
import { CheckCircle2, Heart, MapPin, Calendar, AlertCircle } from "lucide-react"

export function ResultOkScreen() {
  const { setScreen } = useApp()

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-success/10 to-background">
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Success illustration */}
        <div className="relative mb-8">
          <div className="w-40 h-40 rounded-full bg-success/20 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-success/30 flex items-center justify-center">
              <CheckCircle2 className="w-16 h-16 text-success" />
            </div>
          </div>
          
          {/* Floating hearts */}
          <Heart className="absolute top-2 -right-2 w-6 h-6 text-primary fill-primary/50 animate-bounce" />
          <Heart className="absolute bottom-4 -left-4 w-5 h-5 text-primary fill-primary/30 animate-bounce" style={{ animationDelay: '0.3s' }} />
        </div>

        {/* Message */}
        <h1 className="text-3xl font-bold text-foreground text-center mb-3">
          You&apos;re doing great!
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-2">
          No concerns found
        </p>
        <p className="text-sm text-muted-foreground text-center">
          Remember to check again next month
        </p>
      </div>

      {/* Reminder card */}
      <div className="px-6 mb-6">
        <div className="bg-card rounded-2xl p-5 border border-border">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Next check</p>
              <p className="text-lg font-semibold text-foreground">May 15, 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action button */}
      <div className="px-6 pb-8">
        <button
          onClick={() => setScreen("dashboard")}
          className="w-full h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center text-lg font-semibold shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform"
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}

export function ResultConcernScreen() {
  const { setScreen } = useApp()

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-warning/10 to-background">
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Gentle alert illustration */}
        <div className="relative mb-8">
          <div className="w-40 h-40 rounded-full bg-warning/15 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-warning/20 flex items-center justify-center">
              <AlertCircle className="w-16 h-16 text-warning-foreground" />
            </div>
          </div>
        </div>

        {/* Message - Calm and supportive */}
        <h1 className="text-2xl font-bold text-foreground text-center mb-3">
          Let&apos;s get this checked
        </h1>
        <p className="text-base text-muted-foreground text-center px-4 mb-2">
          It&apos;s good that you noticed something.
        </p>
        <p className="text-sm text-muted-foreground text-center px-4">
          Most changes are not serious, but it&apos;s best to see a doctor.
        </p>
      </div>

      {/* Info card */}
      <div className="px-6 mb-6">
        <div className="bg-card rounded-2xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-3">
            <Heart className="w-5 h-5 text-primary" />
            <p className="text-sm font-medium text-foreground">You&apos;re being proactive</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Finding a doctor early is the best thing you can do. We&apos;re here to support you.
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="px-6 pb-8 space-y-3">
        <button
          onClick={() => {
            // Would open clinic finder
            setScreen("dashboard")
          }}
          className="w-full h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center gap-3 text-lg font-semibold shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform"
        >
          <MapPin className="w-5 h-5" />
          <span>Find a Clinic</span>
        </button>
        
        <button
          onClick={() => setScreen("dashboard")}
          className="w-full h-14 bg-secondary text-foreground rounded-2xl flex items-center justify-center text-base font-medium active:scale-[0.98] transition-transform"
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}
