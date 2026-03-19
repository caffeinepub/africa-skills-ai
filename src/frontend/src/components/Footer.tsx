import {
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-foreground text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-xl font-bold">
                Africa Skills AI
              </span>
            </div>
            <p className="text-white/70 text-sm max-w-xs">
              AI Powered Skills University for Africa. Affordable career skills
              with AI tutors and professional certifications.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-white/50">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/courses" className="hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white">
                  Countries &amp; Pricing
                </Link>
              </li>
              <li>
                <Link to="/learning" className="hover:text-white">
                  AI Learning System
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="hover:text-white">
                  Certificates
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About Platform
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-white/50">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@africaskillsai.com"
                  className="hover:text-white break-all"
                >
                  info@africaskillsai.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} Africa Skills AI. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
