"use client"

import { useApp } from "@/components/app-context"
import { ChevronLeft, Heart, Flame, Check } from "lucide-react"

const months = [
  { name: "Jan", completed: true, concern: false },
  { name: "Feb", completed: true, concern: false },
  { name: "Mar", completed: true, concern: false },
  { name: "Apr", completed: true, concern: false },
  { name: "May", completed: false, concern: false },
  { name: "Jun", completed: false, concern: false },
]

export function ProgressScreen() {
  const { setScreen, streak } = useApp()

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="px-6 pt-4 pb-6 flex items-center gap-3">
        <button
          onClick={() => setScreen("dashboard")}
          className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center active:scale-95 transition-transform"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Your Progress</h1>
      </div>

      {/* Streak highlight */}
      <div className="px-6 mb-6">
        <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center">
              <Flame className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-4xl font-bold text-foreground">{streak}</p>
              <p className="text-sm text-muted-foreground">Month Streak</p>
            </div>
          </div>
          
          {/* Streak visualization */}
          <div className="flex gap-2 justify-center">
            {[...Array(streak)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"
              >
                <Check className="w-4 h-4 text-primary-foreground" />
              </div>
            ))}
            {[...Array(Math.max(0, 6 - streak))].map((_, i) => (
              <div
                key={i + streak}
                className="w-8 h-8 rounded-full bg-muted border-2 border-dashed border-muted-foreground/30"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Monthly calendar view */}
      <div className="px-6 mb-6">
        <p className="text-base font-semibold text-foreground mb-4">2026 History</p>
        <div className="grid grid-cols-3 gap-3">
          {months.map((month) => (
            <div
              key={month.name}
              className={`p-4 rounded-2xl text-center ${
                month.completed
                  ? "bg-success/10 border-2 border-success/30"
                  : "bg-card border-2 border-border"
              }`}
            >
              <p className={`text-sm font-medium ${
                month.completed ? "text-success" : "text-muted-foreground"
              }`}>
                {month.name}
              </p>
              {month.completed ? (
                <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center mx-auto mt-2">
                  <Check className="w-4 h-4 text-success" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mx-auto mt-2">
                  <span className="text-xs text-muted-foreground">-</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Encouragement card */}
      <div className="px-6 mb-6">
        <div className="bg-primary/5 rounded-2xl p-5 border border-primary/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-primary fill-primary/50" />
            </div>
            <div>
              <p className="text-base font-semibold text-foreground mb-1">
                You&apos;re taking care of yourself
              </p>
              <p className="text-sm text-muted-foreground">
                Every check matters. Keep up the great work!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="px-6 mt-auto pb-8">
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
