import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Github, Linkedin, Mail, Menu, X, Download } from 'lucide-react'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-wide">My 3D Portfolio</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#resume" className="inline-flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-md hover:bg-white/90 transition">
              <Download size={16}/>Resume
            </a>
          </nav>
          <button className="md:hidden p-2 rounded hover:bg-white/10" onClick={() => setOpen(v=>!v)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10 bg-black/80">
            <div className="px-4 py-3 flex flex-col gap-3 text-white/80">
              <a href="#about" onClick={()=>setOpen(false)} className="hover:text-white transition">About</a>
              <a href="#projects" onClick={()=>setOpen(false)} className="hover:text-white transition">Projects</a>
              <a href="#contact" onClick={()=>setOpen(false)} className="hover:text-white transition">Contact</a>
              <a href="#resume" onClick={()=>setOpen(false)} className="inline-flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-md hover:bg-white/90 transition w-fit">
                <Download size={16}/>Resume
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero with Spline */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black/90" />
        <div className="relative z-10 px-6 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">Futuristic 3D Portfolio</h1>
          <p className="mt-4 text-white/70 text-lg">Showcase your work with a sleek, dark interface and an interactive 3D hero. You can edit all details later.</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#projects" className="pointer-events-auto bg-white text-black px-5 py-2 rounded-md hover:bg-white/90 transition">View Projects</a>
            <a href="#contact" className="pointer-events-auto border border-white/20 px-5 py-2 rounded-md hover:bg-white/10 transition">Contact Me</a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-5 text-white/70">
            <a className="pointer-events-auto hover:text-white transition" href="#" aria-label="GitHub"><Github/></a>
            <a className="pointer-events-auto hover:text-white transition" href="#" aria-label="LinkedIn"><Linkedin/></a>
            <a className="pointer-events-auto hover:text-white transition" href="#" aria-label="Email"><Mail/></a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 border-t border-white/10">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="mt-4 text-white/70">Write a short bio here later. This layout is built to be edited easily. Keep it concise and focused on your strengths.</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-white/70">
              <li className="border border-white/10 rounded-md p-3">TypeScript</li>
              <li className="border border-white/10 rounded-md p-3">React</li>
              <li className="border border-white/10 rounded-md p-3">3D & Spline</li>
              <li className="border border-white/10 rounded-md p-3">Tailwind</li>
            </ul>
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center text-white/40">Your Photo / Logo</div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 border-t border-white/10">
        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((i)=> (
              <article key={i} className="group border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-white/10 to-transparent"/>
                <div className="p-4">
                  <h3 className="font-semibold">Project Title {i}</h3>
                  <p className="text-sm text-white/70 mt-1">Short description about the project. You can update this later.</p>
                  <div className="mt-3 inline-flex items-center text-sm text-white/80 group-hover:text-white transition">View details →</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 border-t border-white/10">
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold">Let’s work together</h2>
          <p className="mt-3 text-white/70">Drop a message and I’ll get back to you. Replace the placeholders with your real links later.</p>
          <form className="mt-8 grid grid-cols-1 gap-4 max-w-xl mx-auto">
            <input className="bg-transparent border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Your name" />
            <input className="bg-transparent border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Email address" />
            <textarea className="bg-transparent border border-white/20 rounded-md px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Tell me about your project"></textarea>
            <button type="button" className="bg-white text-black px-5 py-2 rounded-md hover:bg-white/90 transition w-full">Send</button>
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

export default App
