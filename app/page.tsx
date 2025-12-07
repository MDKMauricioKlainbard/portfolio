"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, BookOpen, Code2, Terminal, Database, Cpu, Zap, Target, Rocket } from "lucide-react"

export default function Portfolio() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="relative min-h-screen bg-zinc-950">
      {/* Animated Dot Pattern Background */}
      <div className="fixed inset-0 -z-10 bg-dot-pattern-fade" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950" />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-mono text-sm tracking-wider text-accent">{"<KlainbardMauricio />"}</span>
          <div className="hidden gap-6 md:flex">
            <a href="#about" className="text-sm text-zinc-400 transition-colors hover:text-accent">
              About
            </a>
            <a href="#research" className="text-sm text-zinc-400 transition-colors hover:text-accent">
              Research
            </a>
            <a href="#skills" className="text-sm text-zinc-400 transition-colors hover:text-accent">
              Skills
            </a>
            <a href="#contact" className="text-sm text-zinc-400 transition-colors hover:text-accent">
              Contact
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - 50/50 Split */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
        >
          {/* Left Side - Content */}
          <div>
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="font-mono text-sm text-accent">// Computational Engineer</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 font-mono text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl"
            >
              Bridging the gap between{" "}
              <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                Theoretical Physics
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                High-Performance Computing
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="mb-8 text-xl text-zinc-400">
              Engineering Student & C++ Developer
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90" asChild>
                <a href="#research">
                  View Research
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-zinc-700 bg-transparent hover:bg-zinc-900 hover:text-accent"
                asChild
              >
                <a href="#contact">
                  Contact
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Code Visualization */}
          <motion.div variants={fadeInUp} className="relative overflow-auto">
            <div className="relative rounded-xl border border-accent/30 bg-zinc-900/50 p-6 backdrop-blur-sm overflow-hidden">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-2 font-mono text-xs text-accent">LagrangianSystem.hpp</span>
              </div>

              <pre className="code-container-mobile font-mono text-sm leading-relaxed">
                <code className="text-zinc-300">
                  <span className="text-purple-400">class</span>{" "}
                  <span className="text-blue-400">LagrangianSystem</span> {"{"}
                  {"\n"}
                  <span className="text-purple-400">private</span>:{"\n"}
                  {"  "}std::vector{"<"}
                  <span className="text-green-400">double</span>
                  {">"} q, q_dot, q_ddot;
                  {"\n"}
                  {"  "}
                  <span className="text-green-400">int</span> degrees_of_freedom;
                  {"\n\n"}
                  <span className="text-purple-400">public</span>:{"\n"}
                  {"  "}
                  <span className="text-blue-400">LagrangianSystem</span>(
                  <span className="text-green-400">int</span> dof);
                  {"\n"}
                  {"  "}
                  <span className="text-green-400">void</span>{" "}
                  <span className="text-yellow-400">compute_accelerations</span>(
                  <span className="text-green-400">double</span> t);
                  {"\n"}
                  {"  "}
                  <span className="text-green-400">void</span> <span className="text-yellow-400">step_integration</span>(
                  <span className="text-green-400">double</span> dt);
                  {"\n"}
                  {"  "}
                  <span className="text-green-400">void</span> <span className="text-yellow-400">run_simulation</span>(
                  <span className="text-green-400">double</span> t0, t_max, dt);
                  {"\n"}
                  {"}"};
                </code>
              </pre>

              <div className="absolute -right-2 -top-2 h-20 w-20 rounded-full bg-accent/20 blur-2xl" />
              <div className="absolute -bottom-2 -left-2 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-sm text-accent">01</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <h2 className="mb-12 font-mono text-3xl font-bold tracking-tight">About</h2>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Bio Text */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-zinc-300">
                I'm a 23-year-old Engineering student from Argentina, combining Systems Programming with a deep passion
                for Physics and Pure Mathematics.
              </p>
              <p className="text-base leading-relaxed text-zinc-400">
                My approach to software engineering is rooted in understanding first principles. Rather than following shortcuts, I believe in comprehending the fundamental mechanics of systems—whether they're computational, physical, or mathematical.
              </p>
              <p className="text-base leading-relaxed text-zinc-400">
                This philosophy drives my work on the Lagrangian Physics Engine and my continuous exploration of high-performance computing architectures.
              </p>
            </div>

            {/* Right Column - Terminal Output Block */}
            <div className="relative flex items-center">
              <div className="relative w-full rounded-lg border border-accent/50 bg-zinc-950/80 p-6 shadow-lg backdrop-blur-sm transition-all hover:border-accent hover:shadow-glow">
                {/* Glowing border effect */}
                <div className="absolute inset-0 -z-10 rounded-lg bg-accent/10 blur-xl opacity-0 transition-opacity hover:opacity-100" />

                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent/60 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-accent">CORE DIRECTIVE</span>
                </div>

                <div className="space-y-3">
                  <p className="font-mono text-sm leading-relaxed text-zinc-300">
                    <span className="text-accent">$</span> <span className="text-green-400">philosophy</span>
                    <span className="text-zinc-500"> --mode</span>
                  </p>

                  <blockquote className="border-l-2 border-accent/50 pl-4 font-mono text-sm text-zinc-200 italic">
                    "I don't look for the easy path; I seek to understand how the universe works from the ground up,
                    implementing physical laws into code."
                  </blockquote>

                  <div className="pt-2 font-mono text-xs text-accent">
                    <span className="text-zinc-500">&gt;</span> system_initialized ✓
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Active Research - Bento Grid */}
      <section id="research" className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-sm text-accent">02</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <h2 className="mb-4 font-mono text-3xl font-bold tracking-tight">Active Research</h2>
          <p className="mb-12 text-zinc-400">Current focus areas and ongoing studies</p>

          {/* Bento Grid Layout */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 - Linear Algebra Book */}
            <Card className="border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-zinc-900/80">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-accent/10 p-2">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <div className="h-1 flex-1 rounded-full bg-accent/20">
                  <div className="h-full w-3/4 rounded-full bg-accent" />
                </div>
              </div>
              <h3 className="mb-2 font-mono text-lg font-semibold">Mathematics</h3>
              <p className="mb-3 font-mono text-sm text-accent">Linear Algebra Done Right</p>
              <p className="text-sm text-zinc-400">Sheldon Axler</p>
            </Card>

            {/* Card 2 - Classical Mechanics Book */}
            <Card className="border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-zinc-900/80">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-blue-500/10 p-2">
                  <BookOpen className="h-6 w-6 text-blue-400" />
                </div>
                <div className="h-1 flex-1 rounded-full bg-blue-500/20">
                  <div className="h-full w-2/3 rounded-full bg-blue-400" />
                </div>
              </div>
              <h3 className="mb-2 font-mono text-lg font-semibold">Physics</h3>
              <p className="mb-3 font-mono text-sm text-blue-400">Classical Mechanics</p>
              <p className="text-sm text-zinc-400">John R. Taylor</p>
            </Card>

            {/* Card 3 - Research Goal */}
            <Card className="border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-zinc-900/80 md:col-span-2 lg:col-span-1">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-purple-500/10 p-2">
                  <Target className="h-6 w-6 text-purple-400" />
                </div>
                <Rocket className="h-5 w-5 text-purple-400" />
              </div>
              <h3 className="mb-2 font-mono text-lg font-semibold">Research Goal</h3>
              <p className="mb-2 font-mono text-sm text-purple-400">Relativistic Propulsion</p>
              <p className="text-sm text-zinc-400">Black Hole Simulation</p>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Featured Project - Blueprint Style */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-sm text-accent">03</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <h2 className="mb-12 font-mono text-3xl font-bold tracking-tight">Featured Project</h2>

          <div className="relative overflow-hidden rounded-xl border border-accent/30 bg-zinc-900/50 backdrop-blur-sm">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(99, 179, 237, 0.3) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(99, 179, 237, 0.3) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative grid gap-8 p-8 lg:grid-cols-[1fr_1.2fr] lg:p-12 overflow-hidden">
              {/* Left - Project Info */}
              <div className="space-y-6">
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <div className="rounded-md bg-accent/10 p-1.5">
                      <Code2 className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-accent">Flagship Project</span>
                  </div>

                  <h3 className="mb-4 font-mono text-4xl font-bold tracking-tight text-balance">
                    Lagrangian Physics Engine
                  </h3>

                  <p className="leading-relaxed text-zinc-400 text-balance">
                    A high-performance physics simulation engine built from scratch in C++. Implements Lagrangian
                    mechanics to simulate celestial bodies and complex systems. Currently integrating OpenGL for
                    real-time visualization of gravitational interactions and orbital mechanics.
                  </p>
                </div>

                {/* Technical Stack */}
                <div>
                  <h4 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-zinc-500">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="border-accent/30 bg-accent/10 font-mono text-accent">
                      C++
                    </Badge>
                    <Badge variant="secondary" className="border-blue-500/30 bg-blue-500/10 font-mono text-blue-400">
                      OpenGL
                    </Badge>
                    <Badge variant="secondary" className="border-purple-500/30 bg-purple-500/10 font-mono text-purple-400">
                      Lagrangian Mechanics
                    </Badge>
                    <Badge variant="secondary" className="border-green-500/30 bg-green-500/10 font-mono text-green-400">
                      Mathematics
                    </Badge>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="gap-2 border-accent/30 bg-transparent font-mono hover:bg-accent/10 hover:text-accent"
                  asChild
                >
                  <a href="https://github.com/MDKMauricioKlainbard/PhysicsEngine" target="_blank" rel="noopener noreferrer">
                    View Documentation
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Right - Code Dashboard */}
              <div className="space-y-4 overflow-hidden">
                <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-4 overflow-hidden">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-xs text-accent">LagrangianSystem.cpp</span>
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <div className="h-2 w-2 rounded-full bg-yellow-500" />
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                    </div>
                  </div>
                  <pre className="code-container-mobile font-mono text-xs leading-relaxed text-zinc-300">
                    {`void LagrangianSystem::step_integration(
  double dt
) {
  for (int i = 0; i < degrees_of_freedom; ++i) {
    q_dot[i] += q_ddot[i] * dt;
    q[i] += q_dot[i] * dt;
  }
}`}
                  </pre>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-accent" />
                      <span className="font-mono text-xs text-zinc-500">Target Performance</span>
                    </div>
                    <p className="font-mono text-2xl font-bold text-accent">{">"}10K+</p>
                    <p className="font-mono text-xs text-zinc-400">It/sec</p>
                  </div>

                  <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-blue-400" />
                      <span className="font-mono text-xs text-zinc-500">Precision</span>
                    </div>
                    <p className="font-mono text-2xl font-bold text-blue-400">10⁻⁶</p>
                    <p className="font-mono text-xs text-zinc-400">Target Precision</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Effects */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
          </div>
        </motion.div>
      </section>

      {/* Skills - Bento Grid */}
      <section id="skills" className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-sm text-accent">04</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <h2 className="mb-12 font-mono text-3xl font-bold tracking-tight">Technical Stack</h2>

          {/* Bento Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Core Technologies */}
            <Card className="border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm md:col-span-2">
              <div className="mb-4 flex items-center gap-2">
                <Terminal className="h-5 w-5 text-accent" />
                <h3 className="font-mono text-lg font-semibold text-accent">Core</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-zinc-700 bg-zinc-800/50 font-mono text-base">
                  C++
                </Badge>
                <Badge variant="outline" className="border-zinc-700 bg-zinc-800/50 font-mono text-base">
                  Python
                </Badge>
                <Badge variant="outline" className="border-zinc-700 bg-zinc-800/50 font-mono text-base">
                  Mathematics
                </Badge>
                <Badge variant="outline" className="border-zinc-700 bg-zinc-800/50 font-mono text-base">
                  Node.js
                </Badge>
              </div>
            </Card>

            {/* Tools */}
            <Card className="border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-2">
                <Code2 className="h-5 w-5 text-blue-400" />
                <h3 className="font-mono text-lg font-semibold text-blue-400">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-zinc-700 bg-zinc-800/50 font-mono text-base">
                  Git
                </Badge>
              </div>
            </Card>

            {/* Data/DB */}
            <Card className="border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm md:col-span-2 lg:col-span-3">
              <div className="mb-4 flex items-center gap-2">
                <Database className="h-5 w-5 text-green-400" />
                <h3 className="font-mono text-lg font-semibold text-green-400">Data/DB</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-zinc-700 bg-zinc-800/50 font-mono text-base">
                  SQL
                </Badge>
                <Badge variant="outline" className="border-zinc-700 bg-zinc-800/50 font-mono text-base">
                  NoSQL
                </Badge>
              </div>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-sm text-accent">05</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>
          <h2 className="mb-12 font-mono text-3xl font-bold tracking-tight">Contact</h2>

          {/* Connection Hub Card */}
          <div className="relative overflow-hidden rounded-xl border border-accent/30 bg-zinc-900/50 backdrop-blur-sm">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: `linear-gradient(rgba(99, 179, 237, 0.3) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(99, 179, 237, 0.3) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative space-y-8 p-8 lg:p-12">
              {/* Header */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-md bg-accent/10 p-1.5">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">CONNECTION HUB</span>
                </div>

                <h3 className="mb-4 font-mono text-3xl font-bold">Let's Connect</h3>

                <p className="max-w-2xl text-lg text-zinc-400">
                  Interested in collaborating on physics simulations, computational research, or high-performance computing?
                  I'm always open to discussing innovative projects and exploring new frontiers in systems engineering.
                </p>
              </div>

              {/* Contact Buttons */}
              <div className="grid gap-4 sm:grid-cols-3">
                {/* GitHub Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    size="lg"
                    asChild
                    className="group relative h-auto w-full flex-col gap-3 border-accent/30 bg-zinc-950/50 px-6 py-8 font-mono text-base hover:border-accent hover:bg-accent/5 overflow-hidden hover:text-accent"
                    variant="outline"
                  >
                    <a href="https://github.com/MDKMauricioKlainbard" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 w-full">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-lg bg-accent/20 blur-lg opacity-0 transition-opacity group-hover:opacity-100" />
                        <Github className="relative h-8 w-8 text-accent transition-colors group-hover:text-accent" />
                      </div>
                      <span className="text-sm font-semibold">GitHub</span>
                      <span className="text-xs text-zinc-500 font-mono">View projects</span>
                    </a>
                  </Button>
                </motion.div>

                {/* LinkedIn Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    size="lg"
                    asChild
                    className="group relative h-auto w-full flex-col gap-3 border-blue-400/30 bg-zinc-950/50 px-6 py-8 font-mono text-base hover:border-blue-400 hover:bg-blue-400/5 overflow-hidden"
                    variant="outline"
                  >
                    <a href="https://www.linkedin.com/in/mklainbard/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 w-full">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-lg bg-blue-400/20 blur-lg opacity-0 transition-opacity group-hover:opacity-100" />
                        <Linkedin className="relative h-8 w-8 text-blue-400 transition-colors group-hover:text-blue-300" />
                      </div>
                      <span className="text-sm font-semibold text-blue-400">LinkedIn</span>
                      <span className="text-xs text-zinc-500 font-mono">Connect professionally</span>
                    </a>
                  </Button>
                </motion.div>

                {/* Email Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    size="lg"
                    asChild
                    className="group relative h-auto w-full flex-col gap-3 border-green-400/30 bg-zinc-950/50 px-6 py-8 font-mono text-base hover:border-green-400 hover:bg-green-400/5 overflow-hidden"
                    variant="outline"
                  >
                    <a href="mailto:mauricioklainbard01@gmail.com" className="flex flex-col items-center gap-3 w-full">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-lg bg-green-400/20 blur-lg opacity-0 transition-opacity group-hover:opacity-100" />
                        <Mail className="relative h-8 w-8 text-green-400 transition-colors group-hover:text-green-300" />
                      </div>
                      <span className="text-sm font-semibold text-green-400">Email</span>
                      <span className="text-xs text-zinc-500 font-mono">Send a message</span>
                    </a>
                  </Button>
                </motion.div>
              </div>

              {/* Footer Info */}
              <div className="border-t border-zinc-800/50 pt-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-2">Location</p>
                    <p className="font-mono text-sm text-zinc-300">Mendoza, Argentina</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-2">Copyright</p>
                    <p className="font-mono text-sm text-zinc-300">© 2025 — Crafted with precision</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Effects */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
          </div>
        </motion.div>
      </section>
    </div>
  )
}
