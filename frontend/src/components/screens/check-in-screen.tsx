"use client"

import { useApp } from "@/components/app-context"
import { Mic, ThumbsUp, ThumbsDown } from "lucide-react"
import { useState, useEffect } from "react"

export function CheckInScreen() {
  const { setScreen, addCheck } = useApp()
  const [isListening, setIsListening] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsListening(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  const handleResponse = (hadConcern: boolean) => {
    addCheck(hadConcern)
    if (hadConcern) {
      setScreen("result-concern")
    } else {
      setScreen("result-ok")
    }
  }

  return (
    <div className="h-full flex flex-col bg-background p-6">
      {/* Header */}
      <div className="text-center pt-8 mb-8">
        <h1 className="text-2xl font-bold text-foreground">Check Complete</h1>
        <p className="text-muted-foreground mt-2">One quick question</p>
      </div>

      {/* Voice visualization */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Microphone with wave animation */}
        <div className="relative mb-8">
          {/* Ripple effects */}
          {isListening && (
            <>
              <div className="absolute inset-0 w-32 h-32 rounded-full bg-primary/10 animate-ping" />
              <div className="absolute inset-2 w-28 h-28 rounded-full bg-primary/15 animate-ping" style={{ animationDelay: '0.2s' }} />
            </>
          )}
          
          <div className={`relative w-32 h-32 rounded-full flex items-center justify-center transition-all ${
            isListening ? "bg-primary" : "bg-secondary"
          }`}>
            <Mic className={`w-12 h-12 ${isListening ? "text-primary-foreground" : "text-foreground"}`} />
          </div>
        </div>

        {/* Waveform */}
        <div className="flex items-center justify-center gap-1 h-16 mb-8">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`w-1.5 rounded-full transition-all ${
                isListening ? "bg-primary animate-pulse" : "bg-muted"
              }`}
              style={{
                height: isListening ? `${Math.sin(i * 0.5) * 20 + 30}px` : "8px",
                animationDelay: `${i * 0.08}s`,
              }}
            />
          ))}
        </div>

        {/* Question */}
        <div className="bg-card rounded-2xl p-6 border border-border text-center mb-8">
          <p className="text-xl font-semibold text-foreground">
            Did you feel anything unusual?
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Any lumps, changes, or concerns?
          </p>
        </div>
      </div>

      {/* Response buttons */}
      <div className="grid grid-cols-2 gap-4 pb-4">
        {/* No concerns button */}
        <button
          onClick={() => handleResponse(false)}
          className="h-24 bg-success/10 border-2 border-success/30 rounded-2xl flex flex-col items-center justify-center gap-2 active:scale-[0.98] transition-transform"
        >
          <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
            <ThumbsUp className="w-6 h-6 text-success" />
          </div>
          <span className="text-base font-semibold text-success">No</span>
        </button>

        {/* Has concerns button */}
        <button
          onClick={() => handleResponse(true)}
          className="h-24 bg-warning/10 border-2 border-warning/30 rounded-2xl flex flex-col items-center justify-center gap-2 active:scale-[0.98] transition-transform"
        >
          <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center">
            <ThumbsDown className="w-6 h-6 text-warning-foreground" />
          </div>
          <span className="text-base font-semibold text-warning-foreground">Yes</span>
        </button>
      </div>
    </div>
  )
}
