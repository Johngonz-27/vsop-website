import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { footerContent } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-[#035921] text-white">
      {/* Main Footer */}
      <div className="relative overflow-hidden">
        {/* Watermark Logo */}
        <div
          className="
            pointer-events-none
            absolute
            right-[-120px]
            top-1/2
            z-0
            hidden
            -translate-y-1/2
            opacity-[0.06]
            lg:block
          "
          aria-hidden="true"
        >
          <Image
            src="/Images/vsop-seal.png"
            alt=""
            width={700}
            height={280}
            className="h-auto w-[700px]"
          />
        </div>

        {/* Main Footer Content */}
        <div className="container relative z-10 grid gap-10 py-10 sm:py-12 md:grid-cols-4 md:gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/Images/vsop-horizontal-white.png"
                alt="Village School of Parkwoods"
                width={180}
                height={70}
                className="h-auto w-[180px] object-contain"
              />
            </Link>

            <h2 className="sans-serif mt-5 text-3xl font-medium">
              {footerContent.brand.title}
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
              {footerContent.brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <b>Quick Links</b>

            <div className="mt-4 grid gap-3 text-sm text-white/65">
              {footerContent.navigation.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <b>{footerContent.contact.heading}</b>

            <div className="mt-4 grid gap-3 text-sm text-white/65">
              <span className="flex gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                {footerContent.contact.address}
              </span>

              <span className="flex gap-2">
                <Phone size={16} className="mt-0.5 shrink-0" />
                {footerContent.contact.phone}
              </span>

              <span className="flex gap-2">
                <Mail size={16} className="mt-0.5 shrink-0" />
                {footerContent.contact.email}
              </span>
            </div>

            {/* Social Media */}
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="https://www.facebook.com/villageschoolofparkwoods"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white hover:bg-white hover:text-[#035921]"
              >
                <Facebook size={17} strokeWidth={1.8} />
              </Link>

              <span
                aria-label="Instagram — Coming soon"
                className="flex h-9 w-9 cursor-default items-center justify-center rounded-full border border-white/20 text-white/30"
              >
                <Instagram size={17} strokeWidth={1.8} />
              </span>

              <span
                aria-label="LinkedIn — Coming soon"
                className="flex h-9 w-9 cursor-default items-center justify-center rounded-full border border-white/20 text-white/30"
              >
                <Linkedin size={17} strokeWidth={1.8} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#d9b504]">
        <div className="container flex flex-col justify-between gap-3 py-4 text-xs text-white md:flex-row">
          <span>{footerContent.bottom.copyright}</span>

          <div className="flex gap-2">
            {footerContent.bottom.legal.map((item, index) => (
              <span key={item.href} className="flex items-center gap-2">
                <Link
                  href={item.href}
                  className="transition hover:text-[#035921]"
                >
                  {item.label}
                </Link>

                {index < footerContent.bottom.legal.length - 1 && (
                  <span aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
