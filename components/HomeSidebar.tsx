'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import {
  ChevronDownIcon,
  ChevronUpIcon,
  GamingIcon,
  HistoryIcon,
  HomeIcon,
  MembershipsIcon,
  MusicIcon,
  NewsIcon,
  PlayablesIcon,
  ShortsIcon,
  SubscriptionsIcon,
  UserCircleIcon,
} from '@/components/Icons'
import { createClient } from '@/lib/supabase/client'

function SidebarContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentQuery = searchParams.get('q') ?? ''
  const currentCategory = searchParams.get('category') ?? ''

  const [showMoreExplore, setShowMoreExplore] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const supabase = createClient()
    let mounted = true

    supabase.auth.getUser().then(({ data }) => {
      if (mounted) {
        setIsAuthenticated(Boolean(data.user))
      }
    })

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) {
        setIsAuthenticated(Boolean(session?.user))
      }
    })

    return () => {
      mounted = false
      subscription.subscription.unsubscribe()
    }
  }, [])

  const isHome = pathname === '/' && !currentQuery && !currentCategory
  const isShorts = currentCategory === 'shorts'
  const isSubscriptions = pathname === '/subscriptions'
  const isHistory = pathname === '/history'

  // Top Section: Home, Shorts, Subscriptions, You, History
  const primaryNav = [
    { href: '/', label: 'Home', icon: HomeIcon, active: isHome },
    { href: '/?category=shorts', label: 'Shorts', icon: ShortsIcon, active: isShorts },
    { href: '/subscriptions', label: 'Subscriptions', icon: SubscriptionsIcon, active: isSubscriptions },
    {
      href: isAuthenticated ? '/admin/dashboard' : '/admin/login',
      label: 'You',
      icon: UserCircleIcon,
      active: pathname.startsWith('/admin'),
    },
    { href: '/history', label: 'History', icon: HistoryIcon, active: isHistory },
  ]

  // Explore section items
  const baseExplore = [
    { href: '/?q=Music', label: 'Music', icon: MusicIcon, active: currentQuery.toLowerCase() === 'music' },
    { href: '/?q=Gaming', label: 'Gaming', icon: GamingIcon, active: currentQuery.toLowerCase() === 'gaming' },
    { href: '/?q=News', label: 'News', icon: NewsIcon, active: currentQuery.toLowerCase() === 'news' },
  ]

  const extraExplore = [
    { href: '/?q=Playables', label: 'Playables', icon: PlayablesIcon, active: currentQuery.toLowerCase() === 'playables' },
    { href: '/?q=Memberships', label: 'Memberships', icon: MembershipsIcon, active: currentQuery.toLowerCase() === 'memberships' },
  ]

  return (
    <>
      {/* 1. Mini collapsed sidebar for tablet (md screens) */}
      <aside className="fixed inset-y-14 left-0 z-20 hidden w-[72px] flex-col border-r border-[#272727] bg-[#0f0f0f] md:flex lg:hidden">
        <nav className="flex flex-col items-center gap-1 py-3">
          {primaryNav.slice(0, 4).map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex h-16 w-16 flex-col items-center justify-center rounded-xl p-1 text-[10px] transition-colors ${
                  item.active
                    ? 'bg-[#272727] font-semibold text-[#f1f1f1]'
                    : 'text-[#aaaaaa] hover:bg-[#272727]/70 hover:text-[#f1f1f1]'
                }`}
              >
                <Icon className="mb-1.5 h-6 w-6" />
                <span className="max-w-[62px] truncate text-center">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* 2. Full YouTube-style expanded sidebar for desktop (lg screens) */}
      <aside className="fixed inset-y-14 left-0 z-20 hidden w-[240px] flex-col border-r border-[#272727] bg-[#0f0f0f] lg:flex">
        <div className="flex-1 overflow-y-auto px-3 py-3 [scrollbar-width:thin] [scrollbar-color:#3f3f3f_transparent] hover:[scrollbar-color:#717171_transparent]">
          {/* Main Top Navigation */}
          <nav className="flex flex-col gap-0.5">
            {primaryNav.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex h-10 items-center gap-6 rounded-xl px-3 text-sm transition-colors ${
                    item.active
                      ? 'bg-[#272727] font-medium text-[#f1f1f1]'
                      : 'text-[#f1f1f1] hover:bg-[#272727]/60'
                  }`}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="my-3 border-t border-[#272727]" />

          {/* Sign In Promo Section (displayed when user is not logged in) */}
          {!isAuthenticated && (
            <>
              <div className="px-3 py-1">
                <p className="text-sm leading-snug text-[#f1f1f1]">
                  Sign in to like videos, comment, and subscribe.
                </p>
                <Link
                  href="/admin/login"
                  className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#3ea6ff] px-4 py-1.5 text-sm font-medium text-[#3ea6ff] hover:bg-[#263850]"
                >
                  <UserCircleIcon className="h-5 w-5" />
                  <span>Sign in</span>
                </Link>
              </div>

              <div className="my-3 border-t border-[#272727]" />
            </>
          )}

          {/* Explore Section */}
          <div>
            <h3 className="px-3 py-1.5 text-sm font-semibold text-[#f1f1f1]">Explore</h3>
            <div className="flex flex-col gap-0.5">
              {baseExplore.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex h-10 items-center gap-6 rounded-xl px-3 text-sm transition-colors ${
                      item.active
                        ? 'bg-[#272727] font-medium text-[#f1f1f1]'
                        : 'text-[#f1f1f1] hover:bg-[#272727]/60'
                    }`}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                )
              })}

              {/* Show more collapsible items: Playables, Memberships */}
              {showMoreExplore &&
                extraExplore.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`flex h-10 items-center gap-6 rounded-xl px-3 text-sm transition-colors ${
                        item.active
                          ? 'bg-[#272727] font-medium text-[#f1f1f1]'
                          : 'text-[#f1f1f1] hover:bg-[#272727]/60'
                      }`}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  )
                })}

              {/* Show more / Show less toggle button */}
              <button
                type="button"
                onClick={() => setShowMoreExplore((prev) => !prev)}
                className="flex h-10 w-full items-center gap-6 rounded-xl px-3 text-sm text-[#f1f1f1] hover:bg-[#272727]/60 transition-colors"
              >
                {showMoreExplore ? (
                  <>
                    <ChevronUpIcon className="h-5 w-5 flex-shrink-0" />
                    <span>Show less</span>
                  </>
                ) : (
                  <>
                    <ChevronDownIcon className="h-5 w-5 flex-shrink-0" />
                    <span>Show more</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="my-3 border-t border-[#272727]" />

          {/* Legal & Corporate Footer links */}
          <div className="px-3 pb-6 pt-1 text-xs text-[#717171]">
            <div className="mb-2 flex flex-wrap gap-x-2 gap-y-1">
              <Link href="/about" className="hover:text-[#aaaaaa]">About</Link>
              <Link href="/contact" className="hover:text-[#aaaaaa]">Contact us</Link>
              <Link href="/copyright" className="hover:text-[#aaaaaa]">Copyright</Link>
            </div>
            <div className="mb-3 flex flex-wrap gap-x-2 gap-y-1">
              <Link href="/terms" className="hover:text-[#aaaaaa]">Terms</Link>
              <Link href="/privacy" className="hover:text-[#aaaaaa]">Privacy</Link>
              <Link href="/policy-and-safety" className="hover:text-[#aaaaaa]">Policy & Safety</Link>
            </div>
            <p className="text-[11px] leading-relaxed text-[#555555]">
              © {new Date().getFullYear()} TETRIS MEDIA LIMITED COMPANY
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}

export default function HomeSidebar() {
  return (
    <Suspense fallback={<aside className="fixed inset-y-14 left-0 z-20 hidden w-[72px] bg-[#0f0f0f] md:flex lg:w-[240px]" />}>
      <SidebarContent />
    </Suspense>
  )
}
