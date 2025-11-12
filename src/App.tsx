import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Github, Linkedin, Mail, Menu, X, Download, ArrowRight } from 'lucide-react'

function Glow() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
    </div>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 flex h-14 items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur">
            <a href="#" className="px-4 text-sm font-semibold tracking-wide">Nova 3D Portfolio</a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#projects" className="hover:text-white transition">Projects</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
              <a href="#resume" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white text-black px-4 py-1.5 hover:bg-white/90 transition">
                <Download size={16}/>Resume
              </a>
            </nav>
            <button className="md:hidden p-2 rounded-full hover:bg-white/10 mr-2" onClick={() => setOpen(v=>!v)} aria-label="Toggle Menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
          {open && (
            <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-black/70 backdrop-blur">
              <div className="px-4 py-3 flex flex-col gap-3 text-white/80">
                <a href="#about" onClick={()=>setOpen(false)} className="hover:text-white transition">About</a>
                <a href="#projects" onClick={()=>setOpen(false)} className="hover:text-white transition">Projects</a>
                <a href="#contact" onClick={()=>setOpen(false)} className="hover:text-white transition">Contact</a>
                <a href="#resume" onClick={()=>setOpen(false)} className="inline-flex items-center gap-2 rounded-md bg-white text-black px-3 py-1.5 hover:bg-white/90 transition w-fit">
                  <Download size={16}/>Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero with Spline */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <Glow />
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black/90" />

        <div className="relative z-10 px-6 text-center max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            Interactive 3D • TypeScript • Tailwind
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight">
            Build a stunning <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">3D presence</span>
          </h1>
          <p className="mt-5 text-white/70 text-lg">
            A futuristic portfolio with an interactive Spline scene, glassmorphism UI, and smooth gradients. Fully responsive and ready to customize.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-black hover:bg-white/90 transition">
              Explore Work <ArrowRight className="transition -translate-x-0.5 group-hover:translate-x-0.5" size={18} />
            </a>
            <a href="#contact" className="rounded-full border border-white/20 px-6 py-2 hover:bg-white/10 transition">
              Contact
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-5 text-white/70">
            <a className="hover:text-white transition" href="#" aria-label="GitHub"><Github/></a>
            <a className="hover:text-white transition" href="#" aria-label="LinkedIn"><Linkedin/></a>
            <a className="hover:text-white transition" href="#" aria-label="Email"><Mail/></a>
          </div>
        </div>

        {/* Floating cards */}
        <div className="pointer-events-none absolute inset-x-0 bottom-10 z-10 mx-auto grid max-w-5xl grid-cols-1 gap-4 px-6 sm:grid-cols-3">
          {["TypeScript First","Spline 3D","Tailwind UI"].map((label, idx) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm text-white/80 backdrop-blur">
              <div className="mx-auto mb-2 h-10 w-10 rounded-lg bg-gradient-to-br from-white/20 to-transparent" />
              <div className="font-medium">{label}</div>
              <div className="mt-1 text-xs text-white/60">{idx===0? 'Strict types & DX' : idx===1? 'Interactive hero' : 'Modern, responsive'}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-28 border-t border-white/10">
        <Glow />
        <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="mt-4 text-white/70">Craft high-quality web experiences blending 3D, clean code, and performance. This template is fully editable — swap text, add links, and plug in your own projects.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['TypeScript','React','Spline','Three.js','Tailwind','Framer Motion'].map(s => (
                <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">{s}</span>
              ))}
            </div>
          </div>
          <div className="relative h-72 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent overflow-hidden">
            <div className="absolute inset-0 grid place-items-center text-white/40">Drop your photo/logo</div>
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-xl bg-fuchsia-400/20 blur-2xl" />
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-xl bg-cyan-400/20 blur-2xl" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-28 border-t border-white/10">
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <a href="#contact" className="hidden sm:inline rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/80 hover:bg-white/10">Hire me</a>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1,2,3].map((i)=> (
              <article key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-0 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-white/15 to-transparent group-hover:from-white/25 transition"/>
                <div className="p-4">
                  <h3 className="font-semibold">Project Title {i}</h3>
                  <p className="text-sm text-white/70 mt-1">Short description about the project. Replace with your real work.</p>
                  <div className="mt-3 inline-flex items-center text-sm text-white/80 group-hover:text-white transition">View details →</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-28 border-t border-white/10">
        <Glow />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold">Let’s work together</h2>
          <p className="mt-3 text-white/70">Send a message and I’ll get back to you. Replace the placeholders with your real links later.</p>
          <form className="mt-8 grid grid-cols-1 gap-4 max-w-xl mx-auto">
            <input className="bg-white/5 border border-white/15 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/30 placeholder:text-white/50" placeholder="Your name" />
            <input className="bg-white/5 border border-white/15 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/30 placeholder:text-white/50" placeholder="Email address" />
            <textarea className="bg-white/5 border border-white/15 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-white/30 placeholder:text-white/50" placeholder="Tell me about your project"></textarea>
            <button type="button" className="rounded-full bg-white text-black px-6 py-2 hover:bg-white/90 transition w-full">Send</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-white/50">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}
