'use client'

import Link from 'next/link'
import { ChevronDown, LayoutGrid, LogOut, Plus, User, FileText, Building2, Tag, Image as ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'

const taskIcons: Record<TaskKey, any> = {
  article: FileText,
  listing: Building2,
  sbm: LayoutGrid,
  classified: Tag,
  image: ImageIcon,
  profile: User,
  social: LayoutGrid,
  pdf: FileText,
  org: Building2,
  comment: FileText,
}

export function NavbarAuthControls() {
  const { user, logout } = useAuth()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="sm"
            className="hidden h-10 gap-1 rounded-full bg-gradient-to-r from-[#ec4899] via-[#a855f7] to-[#3b82f6] px-4 text-sm font-semibold text-white shadow-md hover:opacity-95 sm:flex"
          >
            <Plus className="h-4 w-4" />
            Create
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 border-slate-200 bg-white/95 backdrop-blur">
          {SITE_CONFIG.tasks
            .filter((task) => task.enabled && task.key === 'article')
            .map((task) => {
              const Icon = taskIcons[task.key] || LayoutGrid
              return (
                <DropdownMenuItem key={task.key} asChild>
                  <Link href={`/create/${task.key}`}>
                    <Icon className="mr-2 h-4 w-4" />
                    New article
                  </Link>
                </DropdownMenuItem>
              )
            })}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 py-1 pl-1 pr-2 sm:pr-3">
          <Avatar className="h-9 w-9 border border-slate-200">
            <AvatarImage src={user?.avatar} alt={user?.name || 'Account'} />
            <AvatarFallback className="text-xs">{user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="hidden max-w-[120px] truncate text-sm font-medium text-slate-800 sm:inline">{user?.name}</span>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={logout}
          aria-label="Sign out"
          className="h-9 gap-1.5 rounded-full border-slate-200 px-3 text-slate-700 hover:border-slate-300 hover:bg-slate-50 sm:px-4"
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Sign out</span>
        </Button>
      </div>
    </>
  )
}
