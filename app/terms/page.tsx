import type { Metadata } from 'next'
import Link from 'next/link'
import InfoPageShell from '@/components/InfoPageShell'

export const metadata: Metadata = {
  title: 'Terms of Service | TETRIS MEDIA',
  description:
    'Read the official Terms of Service governing the use of TETRIS MEDIA streaming platform.',
}

export default function TermsPage() {
  return (
    <InfoPageShell
      activeTab="terms"
      title="Terms of Service"
      subtitle="Please read these Terms of Service carefully before accessing or using the TETRIS MEDIA platform."
    >
      <div className="space-y-8 text-sm leading-relaxed text-[#cccccc]">
        <div className="rounded-lg bg-[#222222] p-4 text-xs text-[#aaaaaa]">
          Last revised: October 2026 | Effective Date: October 2026
        </div>

        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">1. Agreement to Terms</h2>
          <p className="mt-3">
            These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you
            (&quot;User&quot;, &quot;you&quot;) and <strong>TETRIS MEDIA LIMITED COMPANY</strong> (&quot;TETRIS MEDIA&quot;,
            &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), governing your access to and use of our website, video
            player, and related media streaming services.
          </p>
          <p className="mt-2">
            By accessing or using TETRIS MEDIA, you acknowledge that you have read, understood, and agreed to be
            bound by these Terms. If you do not agree, you must discontinue use immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">2. Use of the Service</h2>
          <p className="mt-3">
            TETRIS MEDIA provides a platform for viewing, distributing, and sharing digital video content.
            You agree to use the service only for lawful purposes in accordance with these Terms and applicable
            regulations in Vietnam and international jurisdictions.
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-[#b0b0b0]">
            <li>You must not reverse engineer, decompile, or extract the source code of the platform.</li>
            <li>You must not circumvent, disable, or tamper with any security or content-protection features (such as stream encryption or HLS tokens).</li>
            <li>You must not scrape, crawl, or harvest video data or metadata through automated robots without express prior permission.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">3. Intellectual Property Rights</h2>
          <p className="mt-3">
            The TETRIS MEDIA brand, logo, design system, underlying software, and proprietary media are the
            exclusive property of <strong>TETRIS MEDIA LIMITED COMPANY</strong>. All third-party trademarks,
            copyrights, and licensed video content belong to their respective owners.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">4. User Accounts & Admin Access</h2>
          <p className="mt-3">
            Authorized administrators are responsible for safeguarding login credentials and for all activities
            occurring under their accounts. You must notify us immediately at{' '}
            <a href="mailto:support@tetrismedia.com" className="text-[#3ea6ff] hover:underline">
              support@tetrismedia.com
            </a>{' '}
            if you suspect any unauthorized access or breach of security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">5. Disclaimer of Warranties</h2>
          <p className="mt-3">
            The service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of
            any kind, whether express or implied. TETRIS MEDIA does not warrant that video streaming will be
            uninterrupted, error-free, or completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">6. Limitation of Liability</h2>
          <p className="mt-3">
            To the maximum extent permitted by applicable law, TETRIS MEDIA LIMITED COMPANY shall not be liable
            for any indirect, incidental, special, consequential, or punitive damages resulting from your use of
            or inability to use the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">7. Governing Law & Dispute Resolution</h2>
          <p className="mt-3">
            These Terms shall be governed by and construed in accordance with the laws of the Socialist Republic
            of Vietnam. Any dispute arising out of or related to these Terms shall be settled before the competent
            courts of Ho Chi Minh City, Vietnam.
          </p>
        </section>

        <section className="rounded-xl border border-[#2a2a2a] bg-[#1f1f1f] p-5">
          <h2 className="text-base font-bold text-[#f1f1f1]">Questions Regarding Terms</h2>
          <p className="mt-2 text-xs text-[#aaaaaa]">
            For inquiries regarding our Terms of Service, please reach out to our legal department:
          </p>
          <div className="mt-3 space-y-1 text-xs text-[#dddddd]">
            <p className="font-semibold text-[#f1f1f1]">TETRIS MEDIA LIMITED COMPANY</p>
            <p>No. 52, Street 13, Lakeview City Urban Area, An Phu Ward, Thu Duc City, Ho Chi Minh City, Vietnam</p>
            <p>Email: <a href="mailto:contact@tetrismedia.com" className="text-[#3ea6ff]">contact@tetrismedia.com</a> / <a href="mailto:info@tetrismedia.com" className="text-[#3ea6ff]">info@tetrismedia.com</a></p>
            <p>Phone: <a href="tel:+84528358568" className="text-[#3ea6ff]">+84528358568</a></p>
          </div>
        </section>

        <div className="mt-8 pt-6 border-t border-[#2a2a2a] flex flex-wrap gap-4 text-xs">
          <Link href="/privacy" className="text-[#3ea6ff] hover:underline">
            Read Privacy Policy &rarr;
          </Link>
          <Link href="/copyright" className="text-[#3ea6ff] hover:underline">
            Review Copyright Policy &rarr;
          </Link>
        </div>
      </div>
    </InfoPageShell>
  )
}
