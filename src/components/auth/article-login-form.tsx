'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/lib/auth-context'

const LOGIN_OK_KEY = 'article-auth-success'

export function ArticleLoginForm() {
  const { login, isLoading } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!email.trim() || !password) {
      setError('Enter your email and password to continue.')
      return
    }
    try {
      await login(email.trim(), password)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(LOGIN_OK_KEY, 'true')
      }
      router.push('/')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="article-login-email">Email</Label>
        <Input
          id="article-login-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="h-12 rounded-xl border-slate-200"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="article-login-password">Password</Label>
        <Input
          id="article-login-password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="h-12 rounded-xl border-slate-200"
        />
      </div>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <Button
        type="submit"
        disabled={isLoading}
        className="h-12 rounded-full bg-gradient-to-r from-[#ec4899] via-[#a855f7] to-[#3b82f6] text-base font-semibold text-white shadow-md hover:opacity-95 disabled:opacity-60"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing in…
          </>
        ) : (
          'Sign in'
        )}
      </Button>
      <p className="text-center text-xs text-slate-500">
        Your session is saved on this device after a successful sign-in.
      </p>
    </form>
  )
}
