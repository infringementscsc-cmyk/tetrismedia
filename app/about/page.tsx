import type { Metadata } from 'next'
import Link from 'next/link'
import InfoPageShell from '@/components/InfoPageShell'

export const metadata: Metadata = {
  title: 'About Us | TETRIS MEDIA',
  description:
    'Learn about TETRIS MEDIA LIMITED COMPANY, our vision, mission, and video platform technology.',
}

export default function AboutPage() {
  return (
    <InfoPageShell
      activeTab="about"
      title="About TETRIS MEDIA"
      subtitle="Connecting audiences through high-quality video streaming, content distribution, and modern digital media technologies."
    >
      <div className="space-y-8 text-sm leading-relaxed text-[#cccccc]">
        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">Who We Are</h2>
          <p className="mt-3">
            <strong>TETRIS MEDIA LIMITED COMPANY</strong> is a technology and digital media company
            headquartered in Ho Chi Minh City, Vietnam. We specialize in building next-generation
            video distribution experiences, providing high-performance video streaming, cloud-based
            media processing, and modern content engagement tools for creators and audiences worldwide.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3ea6ff]/10 text-lg font-bold text-[#3ea6ff]">
              ⚡
            </div>
            <h3 className="mt-3 text-base font-semibold text-[#f1f1f1]">Ultra-Low Latency</h3>
            <p className="mt-2 text-xs text-[#999999]">
              Equipped with adaptive HLS streaming protocols to deliver smooth, buffer-free video playback across all screen sizes.
            </p>
          </div>

          <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-lg font-bold text-emerald-400">
              🛡️
            </div>
            <h3 className="mt-3 text-base font-semibold text-[#f1f1f1]">Safety & Rights</h3>
            <p className="mt-2 text-xs text-[#999999]">
              Strict adherence to intellectual property laws, creator protection, and active community safety guidelines.
            </p>
          </div>

          <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-400/10 text-lg font-bold text-purple-400">
              🌐
            </div>
            <h3 className="mt-3 text-base font-semibold text-[#f1f1f1]">Global CDN Reach</h3>
            <p className="mt-2 text-xs text-[#999999]">
              Powered by globally distributed edge servers ensuring high availability and seamless playback wherever you are.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">Our Mission & Vision</h2>
          <p className="mt-3">
            Our mission is to empower digital storytelling through reliable, high-speed, and secure video delivery.
            We believe that creators should own their craft, and viewers should enjoy uninterrupted, high-definition
            entertainment in a clean and safe digital environment.
          </p>
        </section>

        <section className="rounded-xl border border-[#2a2a2a] bg-[#1f1f1f] p-6">
          <h2 className="text-lg font-bold text-[#f1f1f1]">Company & Corporate Information</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p className="text-xs text-[#888888]">Legal Entity</p>
              <p className="font-semibold text-[#f1f1f1]">TETRIS MEDIA LIMITED COMPANY</p>
            </div>
            <div>
              <p className="text-xs text-[#888888]">Registered Address</p>
              <p className="font-semibold text-[#f1f1f1]">
                No. 52, Street 13, Lakeview City Urban Area, An Phu Ward, Thu Duc City, Ho Chi Minh City, Vietnam
              </p>
            </div>
            <div>
              <p className="text-xs text-[#888888]">General Inquiries & Management</p>
              <p className="font-semibold text-[#3ea6ff]">
                <a href="mailto:info@tetrismedia.com">info@tetrismedia.com</a>
              </p>
            </div>
            <div>
              <p className="text-xs text-[#888888]">Corporate Phone / Hotline</p>
              <p className="font-semibold text-[#3ea6ff]">
                <a href="tel:+84528358568">+84528358568</a>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">Departmental Directory</h2>
          <p className="mt-2 text-xs text-[#999999]">
            For inquiries related to specific topics, please reach out to our dedicated email addresses:
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-3">
              <p className="text-xs text-[#888888]">General Contact</p>
              <a href="mailto:contact@tetrismedia.com" className="font-medium text-[#3ea6ff] hover:underline">
                contact@tetrismedia.com
              </a>
            </div>
            <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-3">
              <p className="text-xs text-[#888888]">Press & Media</p>
              <a href="mailto:press@tetrismedia.com" className="font-medium text-[#3ea6ff] hover:underline">
                press@tetrismedia.com
              </a>
            </div>
            <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-3">
              <p className="text-xs text-[#888888]">Technical & User Support</p>
              <a href="mailto:support@tetrismedia.com" className="font-medium text-[#3ea6ff] hover:underline">
                support@tetrismedia.com
              </a>
            </div>
            <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-3">
              <p className="text-xs text-[#888888]">Copyright & DMCA</p>
              <a href="mailto:copyright@tetrismedia.com" className="font-medium text-[#3ea6ff] hover:underline">
                copyright@tetrismedia.com
              </a>
            </div>
            <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-3">
              <p className="text-xs text-[#888888]">Trademark Rights</p>
              <a href="mailto:trademark@tetrismedia.com" className="font-medium text-[#3ea6ff] hover:underline">
                trademark@tetrismedia.com
              </a>
            </div>
            <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-3">
              <p className="text-xs text-[#888888]">Intellectual Property (IP)</p>
              <a href="mailto:ip@tetrismedia.com" className="font-medium text-[#3ea6ff] hover:underline">
                ip@tetrismedia.com
              </a>
            </div>
          </div>
        </section>

        <div className="mt-8 pt-6 border-t border-[#2a2a2a] flex flex-wrap gap-4 text-xs">
          <Link href="/contact" className="text-[#3ea6ff] hover:underline">
            Go to Contact Page &rarr;
          </Link>
          <Link href="/terms" className="text-[#3ea6ff] hover:underline">
            Read Terms of Service &rarr;
          </Link>
        </div>
      </div>
    </InfoPageShell>
  )
}
