import type { Metadata } from 'next'
import Link from 'next/link'
import InfoPageShell from '@/components/InfoPageShell'

export const metadata: Metadata = {
  title: 'Policy & Safety | TETRIS MEDIA',
  description:
    'Community guidelines, safety standards, and content policies enforced across the TETRIS MEDIA platform.',
}

export default function PolicyAndSafetyPage() {
  return (
    <InfoPageShell
      activeTab="policy-and-safety"
      title="Policy & Safety Guidelines"
      subtitle="Fostering a safe, respectful, and vibrant video community through clear content guidelines and active moderation."
    >
      <div className="space-y-8 text-sm leading-relaxed text-[#cccccc]">
        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">Our Commitment to Community Safety</h2>
          <p className="mt-3">
            At <strong>TETRIS MEDIA LIMITED COMPANY</strong>, our priority is to provide an enjoyable, trustworthy,
            and inspiring video experience for everyone. These Community Guidelines set the standard for what is
            allowed and prohibited on our platform.
          </p>
        </section>

        {/* Core Safety Pillars */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-lg font-bold text-red-400">
              ⛔
            </div>
            <h3 className="mt-3 text-base font-semibold text-[#f1f1f1]">Zero Tolerance for Hate & Violence</h3>
            <p className="mt-2 text-xs text-[#999999]">
              Content that incites hatred, discriminates against protected groups, promotes violent extremism,
              or encourages self-harm will be immediately removed without prior notice.
            </p>
          </div>

          <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/10 text-lg font-bold text-amber-400">
              🔞
            </div>
            <h3 className="mt-3 text-base font-semibold text-[#f1f1f1]">Child Safety & Sensitive Content</h3>
            <p className="mt-2 text-xs text-[#999999]">
              We enforce strict zero-tolerance policies regarding the exploitation, endangerment, or abuse of minors.
              Sexually explicit material or non-consensual imagery is strictly banned.
            </p>
          </div>

          <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400/10 text-lg font-bold text-blue-400">
              🚫
            </div>
            <h3 className="mt-3 text-base font-semibold text-[#f1f1f1]">Harassment & Cyberbullying</h3>
            <p className="mt-2 text-xs text-[#999999]">
              Targeted harassment, doxxing, publishing private personal information, and threatening behavior
              against any creator, viewer, or individual are strictly prohibited.
            </p>
          </div>

          <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-lg font-bold text-emerald-400">
              ⚖️
            </div>
            <h3 className="mt-3 text-base font-semibold text-[#f1f1f1]">Copyright & Legal Compliance</h3>
            <p className="mt-2 text-xs text-[#999999]">
              Creators must possess all necessary rights, licenses, and permissions for videos uploaded.
              Repeated infringers of intellectual property will have their accounts terminated.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">Enforcement Actions</h2>
          <p className="mt-3">
            When a violation of our Policy & Safety standards is identified, TETRIS MEDIA may take one or more of
            the following enforcement actions depending on severity:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-[#b0b0b0]">
            <li>Immediate deletion of the offending video and associated metadata.</li>
            <li>Removal of uploaded media from CDN servers and revocation of streaming URLs.</li>
            <li>Issuing formal warnings to the responsible uploader or channel.</li>
            <li>Permanent suspension or revocation of administrative/upload privileges.</li>
            <li>Referral to competent law enforcement authorities where required by law.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">How to Report Violations</h2>
          <p className="mt-3">
            If you encounter video content that you believe violates these policies, threatens someone&apos;s safety,
            or infringes upon your rights, please reach out to us immediately:
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs">
            <div className="rounded-lg border border-[#333333] bg-[#121212] p-4">
              <p className="font-semibold text-[#f1f1f1]">Safety & Abuse Reports</p>
              <p className="mt-1 text-[#888888]">For harmful, abusive, or dangerous content:</p>
              <a href="mailto:support@tetrismedia.com" className="mt-2 inline-block font-medium text-[#3ea6ff] hover:underline">
                support@tetrismedia.com
              </a>
            </div>

            <div className="rounded-lg border border-[#333333] bg-[#121212] p-4">
              <p className="font-semibold text-[#f1f1f1]">Copyright & IP Infringements</p>
              <p className="mt-1 text-[#888888]">For unauthorized use of protected works:</p>
              <a href="mailto:copyright@tetrismedia.com" className="mt-2 inline-block font-medium text-[#3ea6ff] hover:underline">
                copyright@tetrismedia.com
              </a>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-[#2a2a2a] bg-[#1f1f1f] p-5">
          <h2 className="text-base font-bold text-[#f1f1f1]">Safety & Compliance Office</h2>
          <div className="mt-3 space-y-1 text-xs text-[#dddddd]">
            <p className="font-semibold text-[#f1f1f1]">TETRIS MEDIA LIMITED COMPANY</p>
            <p>No. 52, Street 13, Lakeview City Urban Area, An Phu Ward, Thu Duc City, Ho Chi Minh City, Vietnam</p>
            <p>Direct Phone: <a href="tel:+84528358568" className="text-[#3ea6ff]">+84528358568</a></p>
            <p>Inquiries: <a href="mailto:info@tetrismedia.com" className="text-[#3ea6ff]">info@tetrismedia.com</a></p>
          </div>
        </section>

        <div className="mt-8 pt-6 border-t border-[#2a2a2a] flex flex-wrap gap-4 text-xs">
          <Link href="/terms" className="text-[#3ea6ff] hover:underline">
            View Terms of Service &rarr;
          </Link>
          <Link href="/contact" className="text-[#3ea6ff] hover:underline">
            Contact Support &rarr;
          </Link>
        </div>
      </div>
    </InfoPageShell>
  )
}
