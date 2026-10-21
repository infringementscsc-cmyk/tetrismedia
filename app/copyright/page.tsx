import type { Metadata } from 'next'
import Link from 'next/link'
import InfoPageShell from '@/components/InfoPageShell'

export const metadata: Metadata = {
  title: 'Copyright & DMCA Policy | TETRIS MEDIA',
  description:
    'Information regarding copyright protection, DMCA takedown notices, and intellectual property rights at TETRIS MEDIA.',
}

export default function CopyrightPage() {
  return (
    <InfoPageShell
      activeTab="copyright"
      title="Copyright & Intellectual Property"
      subtitle="TETRIS MEDIA respects intellectual property rights and expects creators and users to do the same."
    >
      <div className="space-y-8 text-sm leading-relaxed text-[#cccccc]">
        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">1. Copyright Protection Overview</h2>
          <p className="mt-3">
            All original media, code, graphic assets, brand elements, and user submissions on TETRIS MEDIA
            are protected by applicable domestic and international copyright laws and treaties.
            <strong> TETRIS MEDIA LIMITED COMPANY</strong> adheres strictly to copyright enforcement protocols,
            including provisions modeled under the Digital Millennium Copyright Act (DMCA) and the Law on
            Intellectual Property of Vietnam.
          </p>
        </section>

        <section className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5">
          <h2 className="text-base font-bold text-[#f1f1f1]">Designated Copyright & IP Agents</h2>
          <p className="mt-2 text-xs text-[#999999]">
            If you are a copyright owner or an authorized representative thereof and believe that any content
            hosted on TETRIS MEDIA infringes upon your copyrights or trademarks, please send a formal notice to our
            designated departments:
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 text-xs">
            <div className="rounded-lg bg-[#222222] p-3 border border-[#333333]">
              <p className="text-[#888888]">Copyright & DMCA</p>
              <a href="mailto:copyright@tetrismedia.com" className="font-semibold text-[#3ea6ff] hover:underline">
                copyright@tetrismedia.com
              </a>
            </div>
            <div className="rounded-lg bg-[#222222] p-3 border border-[#333333]">
              <p className="text-[#888888]">Trademark Claims</p>
              <a href="mailto:trademark@tetrismedia.com" className="font-semibold text-[#3ea6ff] hover:underline">
                trademark@tetrismedia.com
              </a>
            </div>
            <div className="rounded-lg bg-[#222222] p-3 border border-[#333333]">
              <p className="text-[#888888]">General IP Legal</p>
              <a href="mailto:ip@tetrismedia.com" className="font-semibold text-[#3ea6ff] hover:underline">
                ip@tetrismedia.com
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">2. Filing a Takedown Notice</h2>
          <p className="mt-3">
            To ensure swift action, your notification must be in writing and include the following details:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-[#b0b0b0]">
            <li>
              A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright.
            </li>
            <li>
              Clear identification of the copyrighted work claimed to have been infringed (or a representative list if multiple works).
            </li>
            <li>
              The specific URL(s) on TETRIS MEDIA (e.g., <code>https://tetrismedia.com/watch/[id]</code>) where the alleged infringing material is located.
            </li>
            <li>
              Your contact information, including your full legal name, physical address, telephone number, and email address.
            </li>
            <li>
              A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.
            </li>
            <li>
              A statement, made under penalty of perjury, that the information in the notification is accurate and that you are authorized to act on behalf of the owner.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">3. Counter-Notification Procedure</h2>
          <p className="mt-3">
            If your video or content was removed as a result of a copyright takedown notice and you believe
            this was due to a mistake or misidentification (such as fair use or authorized licensing), you may
            submit a counter-notification to{' '}
            <a href="mailto:copyright@tetrismedia.com" className="text-[#3ea6ff] hover:underline">
              copyright@tetrismedia.com
            </a>
            .
          </p>
        </section>

        <section className="rounded-xl border border-[#2a2a2a] bg-[#1f1f1f] p-5">
          <h2 className="text-base font-bold text-[#f1f1f1]">Official Legal Address for Written Notices</h2>
          <p className="mt-2 text-xs text-[#aaaaaa]">
            Notices may also be delivered by courier to our registered office:
          </p>
          <div className="mt-3 text-xs text-[#dddddd] space-y-1">
            <p className="font-semibold text-[#f1f1f1]">TETRIS MEDIA LIMITED COMPANY</p>
            <p>Attention: Copyright & Legal Affairs Department</p>
            <p>No. 52, Street 13, Lakeview City Urban Area, An Phu Ward, Thu Duc City, Ho Chi Minh City, Vietnam</p>
            <p>Phone: +84528358568</p>
            <p>Email: copyright@tetrismedia.com / ip@tetrismedia.com</p>
          </div>
        </section>

        <div className="mt-8 pt-6 border-t border-[#2a2a2a] flex flex-wrap gap-4 text-xs">
          <Link href="/terms" className="text-[#3ea6ff] hover:underline">
            Review Terms of Service &rarr;
          </Link>
          <Link href="/policy-and-safety" className="text-[#3ea6ff] hover:underline">
            Read Policy & Safety Guidelines &rarr;
          </Link>
        </div>
      </div>
    </InfoPageShell>
  )
}
