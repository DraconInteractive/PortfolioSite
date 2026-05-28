export default function Footer() {
  return (
    <footer className="border-t border-[#e0dcd4] py-8">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-xs text-[#7a7872]">
        <span>© {new Date().getFullYear()} Peter Carey</span>
        <span className="font-mono">Built with Next.js + Vercel</span>
      </div>
    </footer>
  );
}
