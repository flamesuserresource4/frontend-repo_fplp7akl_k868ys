import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <Sections />
      <footer className="bg-black/60 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Senior Software Engineer — Built with love for the craft.
        </div>
      </footer>
    </div>
  )
}

export default App
