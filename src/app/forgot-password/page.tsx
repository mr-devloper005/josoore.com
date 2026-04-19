"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NavbarShell } from "@/components/shared/navbar-shell"
import { Footer } from "@/components/shared/footer"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fafbff_0%,#ffffff_55%)] text-slate-900 antialiased">
      <NavbarShell />
      <main className="mx-auto flex max-w-lg flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm sm:p-10"
        >
          <Link
            href="/login"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-violet-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to login
          </Link>

          {!isSubmitted ? (
            <>
              <h1 className="mb-2 text-3xl font-semibold tracking-tight text-[#0f172a]">
                Reset your password
              </h1>
              <p className="mb-8 text-sm leading-relaxed text-slate-600">
                Enter your email address and we&apos;ll send you a link to reset your password.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-11 border-slate-200 pl-10"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="h-11 w-full rounded-full bg-gradient-to-r from-[#ec4899] via-[#a855f7] to-[#3b82f6] font-semibold text-white hover:opacity-95"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send reset link"}
                </Button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">
                <CheckCircle className="h-8 w-8 text-violet-600" />
              </div>
              <h1 className="mb-2 text-3xl font-semibold tracking-tight text-[#0f172a]">
                Check your email
              </h1>
              <p className="mb-8 text-sm text-slate-600">
                We&apos;ve sent a password reset link to <strong className="text-slate-900">{email}</strong>
              </p>
              <Button asChild variant="outline" className="w-full rounded-full border-slate-200">
                <Link href="/login">Back to login</Link>
              </Button>
              <p className="mt-6 text-sm text-slate-600">
                Didn&apos;t receive the email?{" "}
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="font-semibold text-violet-700 hover:underline"
                >
                  Try again
                </button>
              </p>
            </motion.div>
          )}
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
