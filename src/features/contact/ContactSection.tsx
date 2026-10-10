import React, { useState } from 'react';
import { MapPin, Copy, Check, ExternalLink, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/common/Icons';
import { contactData } from '@/data/contactData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailChannel = contactData.channels.find((c) => c.type === 'email');

  const handleCopyEmail = () => {
    if (emailChannel) {
      navigator.clipboard.writeText(emailChannel.value);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 border-t border-slate-200 bg-[#f8fafc] relative">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-teal-800 font-mono text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-teal-600" />
            <span>Direct Communication & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {contactData.title}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {contactData.subtitle}
          </p>
        </div>

        {/* Direct Channels Card */}
        <div className="rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Intro, Email, Availability */}
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Direct Contact Channels</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {contactData.description}
                </p>
              </div>

              {/* Instant Copy Email Badge */}
              {emailChannel && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block font-medium">
                      Primary Email
                    </span>
                    <span className="text-sm font-mono font-bold text-slate-900 truncate block">
                      {emailChannel.value}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-sans text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer flex-shrink-0 active:scale-95"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Availability Notice */}
              <div className="p-3.5 rounded-xl bg-teal-50/80 border border-teal-200/80 text-xs text-teal-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-600 flex-shrink-0" />
                <span>{contactData.availability}</span>
              </div>
            </div>

            {/* Right: Social Channels List */}
            <div className="space-y-2.5 font-sans text-xs">
              {contactData.channels
                .filter((c) => c.type !== 'email')
                .map((channel) => {
                  const isExternal =
                    channel.type === 'linkedin' ||
                    channel.type === 'github' ||
                    channel.type === 'whatsapp';

                  return (
                    <a
                      key={channel.id}
                      href={channel.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer' : undefined}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-slate-300 hover:bg-slate-100/60 transition-all group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700">
                          {channel.type === 'whatsapp' && <MessageCircle className="w-4 h-4 text-slate-800" />}
                          {channel.type === 'linkedin' && <LinkedinIcon className="w-4 h-4 text-slate-800" />}
                          {channel.type === 'github' && <GithubIcon className="w-4 h-4 text-slate-800" />}
                          {channel.type === 'location' && <MapPin className="w-4 h-4 text-slate-800" />}
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] text-slate-500 uppercase block font-medium">
                            {channel.label}
                          </span>
                          <span className="text-slate-900 font-bold truncate block">
                            {channel.value}
                          </span>
                        </div>
                      </div>
                      {isExternal && (
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-colors flex-shrink-0" />
                      )}
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};