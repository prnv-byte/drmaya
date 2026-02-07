export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-12 lg:mb-16">
        
        {/* Branding & Credentials */}
        <div className="space-y-3 md:space-y-4">
          <h4 className="font-serif italic text-lg md:text-xl text-white">Dr. Maya Reynolds, PsyD</h4>
          <p className="text-xs text-white/70 uppercase tracking-widest leading-loose">
            Licensed Clinical Psychologist<br />
            Specializing in Anxiety & Trauma<br />
            Based in Santa Monica, California
          </p>
        </div>

        {/* Office Information */}
        <div className="space-y-3 md:space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">The Office</h4>
          <address className="not-italic text-sm text-white/80 font-serif italic leading-relaxed">
            123th Street 45 W<br />
            Santa Monica, CA 90401<br />
            <span className="text-xs text-white/60 mt-1 md:mt-2 block">
              Quiet, private space designed to feel calm and grounding
            </span>
          </address>
        </div>

        {/* Quick Links / Contact */}
        <div className="space-y-3 md:space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">Connect</h4>
          <div className="flex flex-col gap-1 md:gap-2 text-sm text-white/80 font-serif italic">
            <a href="mailto:contact@drmayareynolds.com" className="hover:text-white transition-colors underline decoration-[#4a9b8e] underline-offset-2 md:underline-offset-4">
              Email Dr. Maya
            </a>
            <a href="#" className="hover:text-white transition-colors underline decoration-[#4a9b8e] underline-offset-2 md:underline-offset-4">
              Patient Portal
            </a>
            <a href="#" className="hover:text-white transition-colors underline decoration-[#4a9b8e] underline-offset-2 md:underline-offset-4">
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-6xl mx-auto pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
        <p className="text-[10px] text-white/50 uppercase tracking-widest text-center md:text-left">
          © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.
        </p>
        <div className="flex gap-4 md:gap-6 text-[10px] text-white/50 uppercase tracking-widest">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">HIPAA Compliant</a>
        </div>
      </div>
    </footer>
  );
}