import Link from "next/link"
import { Header } from "@/_components/_organisms/header"
import { Button } from "@/_components/_atoms/button"
import { Badge } from "@/_components/_atoms/badge"
import ThreeScene from "@/_components/_organisms/three-path"
import { Divider } from "@/_components/_atoms/divider"

export default function HomePage() {
  return (
    <div className="h-full relative flex flex-col gap-y-16">
      <Header />
      <ThreeScene />
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl sm:mt-12 mt-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <Badge variant="primary" className="text-sm">
            🔍 Aprenda SQL com Histórias de Detetive
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
            Domine SQL resolvendo
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mistérios da Vida Real
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Junte-se a milhares de desenvolvedores aprendendo SQL por meio de histórias de detetive envolventes, desafios gamificados e prática interativa.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/auth/register">
              <Button size="lg" className="cursor-pointer">Comece sua Investigação</Button>
            </Link>
            <Link href="/auth/login">
              <Button size="lg" variant="outline" className="cursor-pointer">
                Entrar
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
            <div className="mx-auto p-2 mb-4 flex w-12 items-center justify-center rounded-lg bg-primary/10">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <Divider />

            <h3 className="text-xl font-bold mb-2">Aprendizado através de Histórias</h3>
            <p className="text-muted-foreground">
              Resolva mistérios de SQL por meio de histórias de detetive envolventes que tornam o aprendizado divertido e memorável.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 hover:border-accent/50 transition-colors">
            <div className="mx-auto p-2 mb-4 flex w-12 items-center justify-center rounded-lg bg-accent/10">
              <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <Divider />

            <h3 className="text-xl font-bold mb-2">Progresso Gamificado</h3>
            <p className="text-muted-foreground">
              Ganhe XP, desbloqueie conquistas e suba no ranking enquanto domina conceitos de SQL.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 hover:border-success/50 transition-colors">
            <div className="mx-auto p-2 mb-4 flex w-12 items-center justify-center rounded-lg bg-success/10">
              <svg className="h-6 w-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <Divider />

            <h3 className="text-xl font-bold mb-2">Prática Mão na Massa</h3>
            <p className="text-muted-foreground">
              Escreva consultas SQL reais em nosso editor interativo com feedback instantâneo e dicas.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}