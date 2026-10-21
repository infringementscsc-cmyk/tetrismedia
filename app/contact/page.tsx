import type { Metadata } from 'next'
import InfoPageShell from '@/components/InfoPageShell'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | TETRIS MEDIA',
  description:
    'Get in touch with TETRIS MEDIA LIMITED COMPANY. Find corporate phone, office address, and specialized email contacts.',
}

export default function ContactPage() {
  return (
    <InfoPageShell
      activeTab="contact"
      title="Contact TETRIS MEDIA"
      subtitle="Have questions, partnership inquiries, or need support? Our team is here to assist you."
    >
      <div className="space-y-10 text-sm leading-relaxed text-[#cccccc]">
        {/* Headquarter Information Card */}
        <section className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-6">
          <h2 className="text-xl font-bold text-[#f1f1f1]">Corporate Headquarters</h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[#888888]">
                Company Legal Name
              </p>
              <p className="mt-1 text-base font-semibold text-[#f1f1f1]">
                TETRIS MEDIA LIMITED COMPANY
              </p>

              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-[#888888]">
                Office Address
              </p>
              <address className="mt-1 not-italic text-sm text-[#dddddd]">
                No. 52, Street 13, Lakeview City Urban Area, An Phu Ward, Thu Duc City, Ho Chi Minh City, Vietnam
              </address>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#888888]">
                  Direct Hotline / Phone
                </p>
                <p className="mt-1">
                  <a
                    href="tel:+84528358568"
                    className="text-base font-semibold text-[#3ea6ff] hover:underline"
                  >
                    +84528358568
                  </a>
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#888888]">
                  Primary Email
                </p>
                <p className="mt-1">
                  <a
                    href="mailto:info@tetrismedia.com"
                    className="text-base font-semibold text-[#3ea6ff] hover:underline"
                  >
                    info@tetrismedia.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Department Emails */}
        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">Specialized Email Directory</h2>
          <p className="mt-2 text-xs text-[#999999]">
            To speed up response times, please email the specific department matching your inquiry:
          </p>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-[#2a2a2a] bg-[#121212] p-4 transition hover:border-[#3ea6ff]/40">
              <span className="text-xs font-semibold text-[#888888]">General Contact</span>
              <p className="mt-1">
                <a
                  href="mailto:contact@tetrismedia.com"
                  className="font-medium text-[#3ea6ff] hover:underline"
                >
                  contact@tetrismedia.com
                </a>
              </p>
              <p className="mt-1 text-xs text-[#777777]">Business inquiries & collaborations</p>
            </div>

            <div className="rounded-xl border border-[#2a2a2a] bg-[#121212] p-4 transition hover:border-[#3ea6ff]/40">
              <span className="text-xs font-semibold text-[#888888]">Customer & Tech Support</span>
              <p className="mt-1">
                <a
                  href="mailto:support@tetrismedia.com"
                  className="font-medium text-[#3ea6ff] hover:underline"
                >
                  support@tetrismedia.com
                </a>
              </p>
              <p className="mt-1 text-xs text-[#777777]">Playback issues & user feedback</p>
            </div>

            <div className="rounded-xl border border-[#2a2a2a] bg-[#121212] p-4 transition hover:border-[#3ea6ff]/40">
              <span className="text-xs font-semibold text-[#888888]">Press & Media</span>
              <p className="mt-1">
                <a
                  href="mailto:press@tetrismedia.com"
                  className="font-medium text-[#3ea6ff] hover:underline"
                >
                  press@tetrismedia.com
                </a>
              </p>
              <p className="mt-1 text-xs text-[#777777]">Media kits, interviews & press releases</p>
            </div>

            <div className="rounded-xl border border-[#2a2a2a] bg-[#121212] p-4 transition hover:border-[#3ea6ff]/40">
              <span className="text-xs font-semibold text-[#888888]">Copyright & DMCA</span>
              <p className="mt-1">
                <a
                  href="mailto:copyright@tetrismedia.com"
                  className="font-medium text-[#3ea6ff] hover:underline"
                >
                  copyright@tetrismedia.com
                </a>
              </p>
              <p className="mt-1 text-xs text-[#777777]">Copyright notices & takedown claims</p>
            </div>

            <div className="rounded-xl border border-[#2a2a2a] bg-[#121212] p-4 transition hover:border-[#3ea6ff]/40">
              <span className="text-xs font-semibold text-[#888888]">Trademark</span>
              <p className="mt-1">
                <a
                  href="mailto:trademark@tetrismedia.com"
                  className="font-medium text-[#3ea6ff] hover:underline"
                >
                  trademark@tetrismedia.com
                </a>
              </p>
              <p className="mt-1 text-xs text-[#777777]">Brand assets & trademark protection</p>
            </div>

            <div className="rounded-xl border border-[#2a2a2a] bg-[#121212] p-4 transition hover:border-[#3ea6ff]/40">
              <span className="text-xs font-semibold text-[#888888]">Intellectual Property (IP)</span>
              <p className="mt-1">
                <a
                  href="mailto:ip@tetrismedia.com"
                  className="font-medium text-[#3ea6ff] hover:underline"
                >
                  ip@tetrismedia.com
                </a>
              </p>
              <p className="mt-1 text-xs text-[#777777]">General IP licensing & legal matters</p>
            </div>
          </div>
        </section>

        {/* Online Message Form */}
        <section className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-6">
          <h2 className="text-xl font-bold text-[#f1f1f1]">Send Us an Online Message</h2>
          <p className="mt-1 text-xs text-[#999999]">
            Fill out the form below to launch your email client with your message prepared:
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </section>
      </div>
    </InfoPageShell>
  )
}
