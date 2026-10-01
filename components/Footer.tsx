import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#eadac4] via-[#5c9899] to-[#044c53] pt-20 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="relative h-16 w-56 lg:h-20 lg:w-72">
                <Image 
                  src="/logo.png" 
                  alt="Arogya Health Care Logo" 
                  fill
                  className="object-contain object-left" 
                  priority
                />
              </div>
            </Link>
            <p className="text-white/90 text-sm mb-2 max-w-xs font-semibold">
              Skin • Hair • Laser • Cosmetology
            </p>
            <p className="text-white font-bold text-sm mb-4">
              Health Care
            </p>
            <p className="text-white/90 text-sm max-w-xs leading-relaxed font-medium">
              Professional dermatology and cosmetic care tailored to your individual needs.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Treatments', 'Doctor', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-white/90 hover:text-white transition-colors text-sm font-medium">
                     {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Treatments</h4>
            <ul className="space-y-3">
              {['Skin Care', 'Hair Care', 'Laser Treatments', 'Cosmetology'].map((treatment) => (
                <li key={treatment}>
                  <Link href={`/treatments#${treatment.toLowerCase().replace(' ', '-')}`} className="text-white/90 hover:text-white transition-colors text-sm font-medium">
                    {treatment}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/90 flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm font-medium">
                  Sattenapalli, Palnadu Dist.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/90 flex-shrink-0" />
                <a href="tel:+919959333820" className="text-white/90 hover:text-white transition-colors font-bold">
                  9959 333 820
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-white/70 text-xs font-semibold">
            © {new Date().getFullYear()} Arogya Health Care. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
