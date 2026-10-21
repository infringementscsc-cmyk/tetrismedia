'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [department, setDepartment] = useState('contact@tetrismedia.com')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Open user's email client as direct fallback or show success
    const mailtoUrl = `mailto:${department}?subject=${encodeURIComponent(
      `[TETRIS MEDIA Inquiry] ${subject}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`

    window.location.href = mailtoUrl
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
          ✓
        </div>
        <h3 className="mt-3 text-base font-semibold text-[#f1f1f1]">
          Thank you for reaching out!
        </h3>
        <p className="mt-1 text-xs text-[#aaaaaa]">
          Your email application has been launched to send this inquiry directly to{' '}
          <strong className="text-white">{department}</strong>. We will get back to you promptly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 rounded-full bg-[#272727] px-4 py-1.5 text-xs font-medium text-white hover:bg-[#333333]"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1 block text-xs font-medium text-[#aaaaaa]">
            Your Name <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full rounded-lg border border-[#333333] bg-[#121212] px-3 py-2 text-sm text-[#f1f1f1] outline-none focus:border-[#3ea6ff]"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-1 block text-xs font-medium text-[#aaaaaa]">
            Your Email <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="w-full rounded-lg border border-[#333333] bg-[#121212] px-3 py-2 text-sm text-[#f1f1f1] outline-none focus:border-[#3ea6ff]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-dept" className="mb-1 block text-xs font-medium text-[#aaaaaa]">
            Recipient Department
          </label>
          <select
            id="contact-dept"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full rounded-lg border border-[#333333] bg-[#121212] px-3 py-2 text-sm text-[#f1f1f1] outline-none focus:border-[#3ea6ff]"
          >
            <option value="contact@tetrismedia.com">General Contact (contact@tetrismedia.com)</option>
            <option value="info@tetrismedia.com">Company Info (info@tetrismedia.com)</option>
            <option value="support@tetrismedia.com">Technical Support (support@tetrismedia.com)</option>
            <option value="press@tetrismedia.com">Press & Media (press@tetrismedia.com)</option>
            <option value="copyright@tetrismedia.com">Copyright & DMCA (copyright@tetrismedia.com)</option>
            <option value="trademark@tetrismedia.com">Trademark (trademark@tetrismedia.com)</option>
            <option value="ip@tetrismedia.com">Intellectual Property (ip@tetrismedia.com)</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-subject" className="mb-1 block text-xs font-medium text-[#aaaaaa]">
            Subject <span className="text-red-400">*</span>
          </label>
          <input
            id="contact-subject"
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Partnership, feedback, or inquiry..."
            className="w-full rounded-lg border border-[#333333] bg-[#121212] px-3 py-2 text-sm text-[#f1f1f1] outline-none focus:border-[#3ea6ff]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1 block text-xs font-medium text-[#aaaaaa]">
          Message Content <span className="text-red-400">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Please write your detailed message here..."
          className="w-full resize-none rounded-lg border border-[#333333] bg-[#121212] px-3 py-2 text-sm text-[#f1f1f1] outline-none focus:border-[#3ea6ff]"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-[#3ea6ff] px-6 py-2.5 text-sm font-semibold text-black hover:bg-[#328ece]"
      >
        Send Message &rarr;
      </button>
    </form>
  )
}
