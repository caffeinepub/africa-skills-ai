import {
  Award,
  CheckCircle,
  Download,
  Share2,
  ShieldCheck,
} from "lucide-react";

export function CertificatesPage() {
  return (
    <div className="py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Professional Certificates
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Earn recognised digital certificates that prove your skills to
            employers across Africa and globally.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {[
            {
              icon: Download,
              title: "Downloadable Certificate",
              desc: "Download a high-quality PDF certificate to share on your CV or portfolio.",
            },
            {
              icon: Share2,
              title: "Shareable Link",
              desc: "Share your certificate on LinkedIn, WhatsApp, or any platform with a unique verified link.",
            },
            {
              icon: ShieldCheck,
              title: "Employer Verification",
              desc: "Employers can verify any certificate on our platform using the certificate ID.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card border border-border rounded-xl p-5 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        {/* Certificate preview */}
        <div className="max-w-md mx-auto">
          <h2 className="font-serif text-xl font-bold text-foreground mb-4 text-center">
            Certificate Preview
          </h2>
          <div className="bg-white border-4 border-primary/20 rounded-2xl p-10 shadow-card relative">
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-primary to-secondary rounded-t-xl" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-b-xl" />
            <div className="text-center">
              <Award className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                Certificate of Completion
              </p>
              <p className="text-sm text-muted-foreground mb-1">
                This certifies that
              </p>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-1">
                Your Name Here
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                has successfully completed
              </p>
              <h3 className="font-serif text-xl font-bold text-primary mb-4">
                Web Development Fundamentals
              </h3>
              <div className="w-24 h-0.5 bg-primary/30 mx-auto mb-4" />
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">
                    Africa Skills AI
                  </p>
                  <p>AI Powered Skills University</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">
                    Certificate ID
                  </p>
                  <p className="font-mono">ASA-2026-0001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Courses that offer certs */}
        <div className="mt-14">
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">
            All Courses Offer Certificates
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Every course on Africa Skills AI includes a Professional Certificate
            on completion. Certificates are available with the Professional
            Certificate plan.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Verified by Africa Skills AI platform",
              "Includes course name, completion date, and ID",
              "High-resolution PDF format",
              "Unique QR code for instant verification",
              "Shareable on LinkedIn and social media",
              "Recognised by partner employers",
            ].map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
