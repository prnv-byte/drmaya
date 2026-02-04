export default function Footer() {
  return (
    <footer className="bg-[#fdfcf9] pt-20 pb-10 px-12 border-t border-[#eeebe5]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Branding & Credentials */}
        <div className="space-y-4">
          <h4 className="font-serif italic text-xl text-[#3d4738]">Dr. Maya Reynolds, PsyD</h4>
          <p className="text-xs text-[#7a8576] uppercase tracking-widest leading-loose">
            Licensed Clinical Psychologist<br />
            Specializing in Anxiety & Trauma
          </p>
        </div>

        {/* Office Information */}
        <div className="space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#4a5444] font-bold">The Office</h4>
          <address className="not-italic text-sm text-[#5a6b57] font-serif italic leading-relaxed">
            123th Street 45 W<br />
            Santa Monica, CA 90401
          </address>
        </div>

        {/* Quick Links / Contact */}
        <div className="space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#4a5444] font-bold">Connect</h4>
          <div className="flex flex-col gap-2 text-sm text-[#5a6b57] font-serif italic">
            <a href="mailto:contact@drmayareynolds.com" className="hover:text-[#3d4738] transition-colors underline decoration-[#d8d2c7] underline-offset-4">Email Dr. Maya</a>
            <a href="#" className="hover:text-[#3d4738] transition-colors underline decoration-[#d8d2c7] underline-offset-4">Patient Portal</a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-[#eeebe5] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-[#7b8576] uppercase tracking-widest">
          © {new Date().getFullYear()} Maya Reynolds. All rights reserved.
        </p>
        <div className="flex gap-6 text-[10px] text-[#7b8576] uppercase tracking-widest">
          <a href="#" className="hover:text-[#3d4738]">Privacy Policy</a>
          <a href="#" className="hover:text-[#3d4738]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}