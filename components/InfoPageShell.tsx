import Link from 'next/link'
import type { ReactNode } from 'react'
import PublicHeader from '@/components/PublicHeader'
import PublicFooter from '@/components/PublicFooter'

export type InfoTab =
  | 'about'
  | 'copyright'
  | 'contact'
  | 'terms'
  | 'privacy'
  | 'policy-and-safety'

interface InfoPageShellProps {
  activeTab: InfoTab
  title: string
  subtitle: string
  children: ReactNode
}

const TABS: Array<{ id: InfoTab; label: string; href: string }> = [
  { id: 'about', label: 'About', href: '/about' },
  { id: 'contact', label: 'Contact us', href: '/contact' },
  { id: 'copyright', label: 'Copyright', href: '/copyright' },
  { id: 'terms', label: 'Terms of Service', href: '/terms' },
  { id: 'privacy', label: 'Privacy Policy', href: '/privacy' },
  { id: 'policy-and-safety', label: 'Policy & Safety', href: '/policy-and-safety' },
]

export default function InfoPageShell({
  activeTab,
  title,
  subtitle,
  children,
}: InfoPageShellProps) {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f1f1f1] flex flex-col justify-between">
      <div>
        <PublicHeader />

        {/* Hero Banner */}
        <section className="border-b border-[#272727] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(62,166,255,0.15),rgba(255,255,255,0))] px-4 py-12 md:py-16">
          <div className="mx-auto max-w-[1200px] text-center">
            <span className="inline-block rounded-full border border-[#304a66] bg-[#122233] px-3.5 py-1 text-xs font-medium text-[#3ea6ff]">
              TETRIS MEDIA Legal & Information Center
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#f1f1f1] sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#aaaaaa] md:text-lg">
              {subtitle}
            </p>

            {/* Navigation Tabs */}
            <div className="mt-8 flex justify-center overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <nav className="inline-flex gap-2 rounded-full border border-[#2e2e2e] bg-[#181818] p-1.5 shadow-lg">
                {TABS.map((tab) => {
                  const isActive = tab.id === activeTab
                  return (
                    <Link
                      key={tab.id}
                      href={tab.href}
                      className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition sm:text-sm ${
                        isActive
                          ? 'bg-[#3ea6ff] text-black shadow-md'
                          : 'text-[#aaaaaa] hover:bg-[#252525] hover:text-[#f1f1f1]'
                      }`}
                    >
                      {tab.label}
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="mx-auto max-w-[1000px] px-4 py-10 md:py-14">
          <div className="rounded-2xl border border-[#2a2a2a] bg-[#161616] p-6 shadow-xl sm:p-10">
            {children}
          </div>

          {/* Legal Company Verified Badge / Card */}
          <div className="mt-8 rounded-2xl border border-[#272727] bg-[#121212] p-6 text-sm text-[#aaaaaa]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                  <h3 className="font-semibold text-[#f1f1f1]">
                    TETRIS MEDIA LIMITED COMPANY
                  </h3>
                </div>
                <p className="mt-1 text-xs text-[#888888]">
                  No. 52, Street 13, Lakeview City Urban Area, An Phu Ward, Thu Duc City, Ho Chi Minh City, Vietnam
                </p>
                <p className="mt-1 text-xs text-[#888888]">
                  Hotline:{' '}
                  <a href="tel:+84528358568" className="text-[#3ea6ff] hover:underline">
                    +84528358568
                  </a>{' '}
                  | Email:{' '}
                  <a href="mailto:info@tetrismedia.com" className="text-[#3ea6ff] hover:underline">
                    info@tetrismedia.com
                  </a>
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                <a
                  href="mailto:contact@tetrismedia.com"
                  className="rounded-lg border border-[#333333] bg-[#1e1e1e] px-3 py-1.5 text-[#f1f1f1] hover:border-[#3ea6ff]"
                >
                  Contact
                </a>
                <a
                  href="mailto:copyright@tetrismedia.com"
                  className="rounded-lg border border-[#333333] bg-[#1e1e1e] px-3 py-1.5 text-[#f1f1f1] hover:border-[#3ea6ff]"
                >
                  Copyright
                </a>
                <a
                  href="mailto:support@tetrismedia.com"
                  className="rounded-lg border border-[#333333] bg-[#1e1e1e] px-3 py-1.5 text-[#f1f1f1] hover:border-[#3ea6ff]"
                >
                  Support
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>

      <PublicFooter />
    </div>
  )
}
