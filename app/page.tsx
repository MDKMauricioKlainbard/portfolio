"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, BookOpen, Code2 } from "lucide-react"

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
    <div className="relative min-h-screen">
      {/* Grid Background */}
      <div className="fixed inset-0 -z-10 bg-blueprint opacity-30" />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-mono text-sm tracking-wider text-foreground">{"<KlainbardMauricio />"}</span>
          <div className="flex gap-6">
            <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              About
            </a>
            <a href="#research" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Research
            </a>
            <a href="#curriculum" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Curriculum
            </a>
            <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <motion.div initial="initial" animate="animate" variants={staggerChildren} className="max-w-4xl">
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="font-mono text-sm text-accent">// Computational Engineer</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mb-6 text-5xl font-light leading-tight tracking-tight text-balance md:text-6xl lg:text-7xl"
          >
            Bridging the gap between <span className="font-semibold text-accent">Theoretical Physics</span> and{" "}
            <span className="font-semibold text-accent">High-Performance Computing</span>.
          </motion.h1>

          <motion.p variants={fadeInUp} className="mb-8 text-xl text-muted-foreground">
            Engineering Student & C++ Developer
          </motion.p>

          <motion.div variants={fadeInUp} className="flex gap-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="#research">
                View Research
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
              <a href="#contact">
                Contact
                <Mail className="h-4 w-4" />
              </a>
            </Button>
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
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="mb-12 text-3xl font-light tracking-tight">About</h2>

          <div className="max-w-3xl">
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              I'm a 23-year-old Engineering student from Argentina, combining Systems Programming with a deep passion
              for Physics and Pure Mathematics.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              "I don't look for the easy path; I seek to understand how the universe works from the ground up,
              implementing physical laws into code."
            </p>
          </div>
        </motion.div>
      </section>

      {/* Featured Masterpiece */}
      <section id="research" className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-sm text-accent">02</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="mb-12 text-3xl font-light tracking-tight">Featured Research</h2>

          <Card className="overflow-hidden border-accent/20 bg-card/50 backdrop-blur">
            <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-accent" />
                  <span className="font-mono text-sm text-accent">FLAGSHIP PROJECT</span>
                </div>

                <h3 className="mb-4 text-4xl font-light tracking-tight">Lagrangian Physics Engine</h3>

                <p className="mb-6 leading-relaxed text-muted-foreground">
                  A high-performance physics simulation engine built from scratch in C++. It implements Lagrangian
                  mechanics to simulate celestial bodies and complex systems. Currently integrating OpenGL for real-time
                  visualization of gravitational interactions and orbital mechanics.
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  <Badge variant="secondary">C++</Badge>
                  <Badge variant="secondary">OpenGL</Badge>
                  <Badge variant="secondary">Lagrangian Mechanics</Badge>
                  <Badge variant="secondary">Mathematics</Badge>
                </div>

                <a 
                href="https://github.com/MDKMauricioKlainbard/PhysicsEngine" 
                target="_blank"
                >
                  <Button variant="outline" className="gap-2 bg-transparent cursor-pointer">
                    View Documentation
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>

              </div>

              <div className="relative">
                <div className="rounded-lg border border-accent/20 bg-background/50 p-6 font-mono text-sm">
                  <div className="mb-4 flex items-center gap-2 text-accent">
                    <div className="h-3 w-3 rounded-full bg-accent" />
                    <span>LagrangianSystem.cpp</span>
                  </div>
                  <pre className="text-muted-foreground">
                    {`
LagrangianSystem::LagrangianSystem(int dof)
{
    if (!(dof > 0))
    {
        throw std::invalid_argument("Degrees of 
        freedom must be greater than 0");
    }

    degrees_of_freedom = dof;
    q.resize(get_dof(), 0.0);
    q_dot.resize(get_dof(), 0.0);
    q_ddot.resize(get_dof(), 0.0);
}

void LagrangianSystem::step_integration(
double dt
)
{
    for (int i = 0; i < degrees_of_freedom; ++i)
    {
        q_dot[i] += q_ddot[i] * dt;
        q[i] += q_dot[i] * dt;
    }
}

void LagrangianSystem::run_simulation(
double t0, 
double t_max, 
double dt)
{
    double t = t0;

    while (t < t_max)
    {

        this->compute_accelerations(t);
        this->step_integration(dt);

        t += dt;
    }
}`}
                  </pre>
                </div>

                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/10 blur-3xl" />
                <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-accent/5 blur-3xl" />
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Active Curriculum */}
      <section id="curriculum" className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-sm text-accent">03</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="mb-4 text-3xl font-light tracking-tight">Current Research & Literature</h2>
          <p className="mb-12 text-muted-foreground">Actively mastering the foundations</p>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-accent/20 bg-card/50 p-6 backdrop-blur transition-all hover:border-accent/40">
              <BookOpen className="mb-4 h-8 w-8 text-accent" />
              <h3 className="mb-2 text-xl font-light">Mathematics</h3>
              <p className="mb-4 font-mono text-sm text-muted-foreground">Linear Algebra Done Right</p>
              <p className="text-sm text-muted-foreground">Sheldon Axler</p>
            </Card>

            <Card className="border-accent/20 bg-card/50 p-6 backdrop-blur transition-all hover:border-accent/40">
              <BookOpen className="mb-4 h-8 w-8 text-accent" />
              <h3 className="mb-2 text-xl font-light">Physics</h3>
              <p className="mb-4 font-mono text-sm text-muted-foreground">Classical Mechanics</p>
              <p className="text-sm text-muted-foreground">John R. Taylor</p>
            </Card>

            <Card className="border-accent/20 bg-card/50 p-6 backdrop-blur transition-all hover:border-accent/40">
              <Code2 className="mb-4 h-8 w-8 text-accent" />
              <h3 className="mb-2 text-xl font-light">Research Goal</h3>
              <p className="mb-4 font-mono text-sm text-muted-foreground">Relativistic Propulsion</p>
              <p className="text-sm text-muted-foreground">Black Hole Simulation</p>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-sm text-accent">04</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="mb-12 text-3xl font-light tracking-tight">Technical Stack</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-light text-accent">Core</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-base">
                  C++
                </Badge>
                <Badge variant="outline" className="text-base">
                  Python
                </Badge>
                <Badge variant="outline" className="text-base">
                  Mathematics
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-light text-accent">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-base">
                  Git
                </Badge>
                <Badge variant="outline" className="text-base">
                  Linux
                </Badge>
                <Badge variant="outline" className="text-base">
                  LaTeX
                </Badge>
              </div>
            </div>
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
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="mb-12 text-3xl font-light tracking-tight">Contact</h2>

          <div className="max-w-2xl">
            <p className="mb-8 text-lg text-muted-foreground">
              Interested in collaborating on physics simulations or computational research? Let's connect.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
                <a href="https://github.com/MDKMauricioKlainbard" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>

              <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
                <a href="https://www.linkedin.com/in/mklainbard/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>

              <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
                <a href="mailto:mauricioklainbard01@gmail.com">
                  <Mail className="h-5 w-5" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-mono text-sm text-muted-foreground">© 2025 — Crafted with precision</p>
            <p className="font-mono text-sm text-muted-foreground">Mendoza, Argentina</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
