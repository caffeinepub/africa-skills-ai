import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import { AlertCircle, CheckCircle, Mail } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message || !actor) return;
    setLoading(true);
    setError("");
    try {
      await actor.submitContactForm(name, email, message);
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setError("Failed to send message. Please email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-2">
            Contact Us
          </h1>
          <p className="text-muted-foreground">
            Have a question? We’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="sm:col-span-1 flex flex-col gap-4">
            <div className="bg-card border border-border rounded-xl p-5">
              <Mail className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-semibold text-sm text-foreground mb-1">
                Email
              </h3>
              <a
                href="mailto:info@africaskillsai.com"
                className="text-xs text-primary hover:underline break-all"
              >
                info@africaskillsai.com
              </a>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-sm text-foreground mb-2">
                Countries Served
              </h3>
              <p className="text-xs text-muted-foreground">
                🇳🇬 Nigeria · 🇰🇪 Kenya · 🇬🇭 Ghana · 🇪🇹 Ethiopia · 🇹🇿 Tanzania ·
                🇺🇬 Uganda · 🇷🇼 Rwanda
              </p>
            </div>
          </div>

          <div className="sm:col-span-2 bg-card border border-border rounded-xl p-6">
            {success ? (
              <div
                data-ocid="contact.success_state"
                className="text-center py-8"
              >
                <CheckCircle className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Thank you for reaching out. We’ll get back to you soon.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setSuccess(false)}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm">
                    Name
                  </Label>
                  <Input
                    id="name"
                    data-ocid="contact.input"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    data-ocid="contact.email_input"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    data-ocid="contact.textarea"
                    placeholder="How can we help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="mt-1"
                  />
                </div>
                {error && (
                  <div
                    data-ocid="contact.error_state"
                    className="flex items-center gap-2 text-sm text-destructive"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </div>
                )}
                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  className="w-full"
                  disabled={loading || !actor}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
