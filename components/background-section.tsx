import Image from "next/image"

export default function BackgroundSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Imagem de fundo */}
      <Image
        src="/images/background-pattern.png"
        alt="Padrão de fundo abstrato"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        priority // Carrega esta imagem com alta prioridade, pois é um fundo de herói
      />
      {/* O conteúdo foi removido para deixar a tela limpa */}
    </section>
  )
}
