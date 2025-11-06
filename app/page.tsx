import CyberpunkButton from '@/components/CyberpunkButton';

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="relative w-full max-w-2xl mx-auto text-center space-y-10">
        <h1 className="text-4xl md:text-6xl font-mono tracking-widest text-white/90">
          CYBER<span className="text-cyber-teal">PUNK</span> UI
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CyberpunkButton>Engage</CyberpunkButton>
          <CyberpunkButton className="hover:shadow-neon">Override</CyberpunkButton>
          <CyberpunkButton>Deploy</CyberpunkButton>
        </div>

        <p className="text-white/60 font-mono">
          Hover to glitch. Tap to warp. Neon forever.
        </p>
      </div>
    </main>
  );
}
