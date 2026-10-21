import Link from 'next/link'
import RopiMediaLogo from '@/components/RopiMediaLogo'

export default function PublicFooter() {
  return (
    <footer className="border-t border-[#272727] bg-[#0b0b0b] py-10 text-sm text-[#aaaaaa]">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <RopiMediaLogo href="/" />
            <p className="text-xs leading-relaxed text-[#888888]">
              TETRIS MEDIA is a modern video streaming and digital media platform delivering premium content experiences.
            </p>
            <p className="text-xs font-semibold text-[#f1f1f1]">
              TETRIS MEDIA LIMITED COMPANY
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#f1f1f1]">
              About & Contact
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-white">
                  About TETRIS MEDIA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:press@tetrismedia.com" className="hover:text-white">
                  Press & Media (press@tetrismedia.com)
                </a>
              </li>
              <li>
                <a href="mailto:support@tetrismedia.com" className="hover:text-white">
                  Help & Support (support@tetrismedia.com)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#f1f1f1]">
              Terms & Policies
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/policy-and-safety" className="hover:text-white">
                  Policy & Safety
                </Link>
              </li>
              <li>
                <Link href="/copyright" className="hover:text-white">
                  Copyright & DMCA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#f1f1f1]">
              Headquarters
            </h3>
            <address className="not-italic text-xs leading-relaxed text-[#888888]">
              No. 52, Street 13, Lakeview City Urban Area, An Phu Ward, Thu Duc City, Ho Chi Minh City, Vietnam
            </address>
            <div className="mt-3 space-y-1 text-xs">
              <p>
                <span className="text-[#666666]">Phone: </span>
                <a href="tel:+84528358568" className="text-[#3ea6ff] hover:underline">
                  +84528358568
                </a>
              </p>
              <p>
                <span className="text-[#666666]">Email: </span>
                <a href="mailto:info@tetrismedia.com" className="text-[#3ea6ff] hover:underline">
                  info@tetrismedia.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#222222] pt-6 text-xs text-[#666666] md:flex-row">
          <p>© {new Date().getFullYear()} TETRIS MEDIA LIMITED COMPANY. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/terms" className="hover:text-[#aaaaaa]">Terms</Link>
            <Link href="/privacy" className="hover:text-[#aaaaaa]">Privacy</Link>
            <Link href="/copyright" className="hover:text-[#aaaaaa]">Copyright</Link>
            <Link href="/policy-and-safety" className="hover:text-[#aaaaaa]">Safety</Link>
            <Link href="/contact" className="hover:text-[#aaaaaa]">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
