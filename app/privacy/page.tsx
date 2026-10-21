import type { Metadata } from 'next'
import Link from 'next/link'
import InfoPageShell from '@/components/InfoPageShell'

export const metadata: Metadata = {
  title: 'Privacy Policy | TETRIS MEDIA',
  description:
    'Learn how TETRIS MEDIA LIMITED COMPANY collects, handles, and protects your personal data.',
}

export default function PrivacyPage() {
  return (
    <InfoPageShell
      activeTab="privacy"
      title="Privacy Policy"
      subtitle="Your privacy is fundamental to us. Read how we collect, protect, and respect your information."
    >
      <div className="space-y-8 text-sm leading-relaxed text-[#cccccc]">
        <div className="rounded-lg bg-[#222222] p-4 text-xs text-[#aaaaaa]">
          Last revised: October 2026 | Effective Date: October 2026
        </div>

        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">1. Introduction</h2>
          <p className="mt-3">
            <strong>TETRIS MEDIA LIMITED COMPANY</strong> (&quot;TETRIS MEDIA&quot;, &quot;we&quot;, &quot;our&quot;)
            is committed to protecting your privacy. This Privacy Policy outlines our practices concerning the
            collection, use, storage, and disclosure of personal data when you use the TETRIS MEDIA website and
            video streaming services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">2. Information We Collect</h2>
          <p className="mt-3">Depending on how you interact with our platform, we may collect:</p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-[#b0b0b0]">
            <li>
              <strong>Account & Authentication Information:</strong> If you are an administrator or authorized user,
              we collect your email address and authentication credentials securely managed through Supabase.
            </li>
            <li>
              <strong>Technical & Usage Data:</strong> Internet Protocol (IP) address, browser type, device information,
              referring URLs, and video player telemetry (such as bitrate switching and playback errors) to ensure
              optimal video delivery.
            </li>
            <li>
              <strong>Cookies & Local Storage:</strong> Small data files used to preserve playback preferences,
              session authentication tokens, and user settings.
            </li>
            <li>
              <strong>Communications:</strong> Any feedback, emails, or inquiries sent to our corporate and departmental
              email addresses.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">3. How We Use Your Information</h2>
          <p className="mt-3">We process collected data for the following operational purposes:</p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-[#b0b0b0]">
            <li>To deliver, maintain, and optimize video streaming performance via adaptive CDN caching.</li>
            <li>To protect against security breaches, denial-of-service attempts, and unauthorized uploads.</li>
            <li>To authenticate administrative users and enforce Row Level Security (RLS) policies.</li>
            <li>To respond to your inquiries, copyright notices, and customer support tickets.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">4. Third-Party Service Providers</h2>
          <p className="mt-3">
            To provide high-speed video streaming and reliable database infrastructure, TETRIS MEDIA partners with
            trusted enterprise infrastructure providers:
          </p>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs">
            <div className="rounded-lg border border-[#333333] bg-[#1a1a1a] p-3">
              <p className="font-semibold text-[#f1f1f1]">Bunny CDN & Cloudinary</p>
              <p className="mt-1 text-[#888888]">
                Cloud video transcode engine, HLS packaging, and global media CDN delivery.
              </p>
            </div>
            <div className="rounded-lg border border-[#333333] bg-[#1a1a1a] p-3">
              <p className="font-semibold text-[#f1f1f1]">Supabase</p>
              <p className="mt-1 text-[#888888]">
                Encrypted database infrastructure, access control, and authentication management.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">5. Data Security</h2>
          <p className="mt-3">
            We implement industry-standard organizational and technological safeguards, including HTTPS TLS
            encryption, secure token authentication, and role-based database permissions, to protect your
            data against accidental loss, unauthorized access, or misuse.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#f1f1f1]">6. Your Data Rights</h2>
          <p className="mt-3">
            Under applicable data protection laws, you may have the right to request access to, correction of,
            or deletion of your personal data held by us. You can exercise these rights at any time by contacting
            our Data Protection Officer.
          </p>
        </section>

        <section className="rounded-xl border border-[#2a2a2a] bg-[#1f1f1f] p-5">
          <h2 className="text-base font-bold text-[#f1f1f1]">Contacting Our Privacy Team</h2>
          <p className="mt-2 text-xs text-[#aaaaaa]">
            If you have questions or concerns about this Privacy Policy, please contact:
          </p>
          <div className="mt-3 space-y-1 text-xs text-[#dddddd]">
            <p className="font-semibold text-[#f1f1f1]">TETRIS MEDIA LIMITED COMPANY - Privacy Office</p>
            <p>No. 52, Street 13, Lakeview City Urban Area, An Phu Ward, Thu Duc City, Ho Chi Minh City, Vietnam</p>
            <p>Email: <a href="mailto:info@tetrismedia.com" className="text-[#3ea6ff]">info@tetrismedia.com</a> / <a href="mailto:support@tetrismedia.com" className="text-[#3ea6ff]">support@tetrismedia.com</a></p>
            <p>Phone: <a href="tel:+84528358568" className="text-[#3ea6ff]">+84528358568</a></p>
          </div>
        </section>

        <div className="mt-8 pt-6 border-t border-[#2a2a2a] flex flex-wrap gap-4 text-xs">
          <Link href="/terms" className="text-[#3ea6ff] hover:underline">
            Read Terms of Service &rarr;
          </Link>
          <Link href="/policy-and-safety" className="text-[#3ea6ff] hover:underline">
            Check Policy & Safety Standards &rarr;
          </Link>
        </div>
      </div>
    </InfoPageShell>
  )
}
