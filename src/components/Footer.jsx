import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full backdrop-blur-md bg-white/5 text-white py-10 mt-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-5 px-4">

        {/* Logo + Powered by */}
        <div className="flex flex-col items-center gap-2">
          <img
            src="/gratifylabs.png"
            alt="Gratify Labs Logo"
            className="h-12 w-auto opacity-90 drop-shadow-lg"
          />
          <p className="text-sm text-gray-300">
            Powered by <span className="text-green-400 font-semibold">Gratify Labs</span>
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-green-400 hover:scale-110"
          >
            <Facebook size={28} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-green-400 hover:scale-110"
          >
            <Instagram size={28} />
          </a>

          <a
            href="https://wa.me/919000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-green-400 hover:scale-110"
          >
            <MessageCircle size={28} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 mt-4">
          © {new Date().getFullYear()} Strikers Yard · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
