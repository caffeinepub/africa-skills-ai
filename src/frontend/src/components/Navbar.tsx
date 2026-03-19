import { Button } from "@/components/ui/button";
import { useCountry } from "@/context/CountryContext";
import { Globe, GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/", ocid: "nav.home_link" },
  { label: "Courses", path: "/courses", ocid: "nav.courses_link" },
  { label: "Pricing", path: "/pricing", ocid: "nav.pricing_link" },
  { label: "Smart Learning", path: "/learning", ocid: "nav.learning_link" },
  {
    label: "Certificates",
    path: "/certificates",
    ocid: "nav.certificates_link",
  },
  { label: "About", path: "/about", ocid: "nav.about_link" },
  { label: "Contact", path: "/contact", ocid: "nav.contact_link" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { selectedCountry } = useCountry();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-xs">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link
          to="/"
          className="flex items-center gap-2"
          data-ocid="nav.logo_link"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-serif text-lg font-bold text-foreground hidden sm:block">
            Africa Skills AI
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              data-ocid={link.ocid}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/pricing"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold"
            data-ocid="nav.country_button"
          >
            <Globe className="w-3.5 h-3.5" />
            {selectedCountry.flag} {selectedCountry.name}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            data-ocid="nav.mobile_menu_button"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-ocid={link.ocid}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-border flex items-center gap-1.5 text-xs text-muted-foreground">
              <Globe className="w-3.5 h-3.5" />
              {selectedCountry.flag} {selectedCountry.name}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
