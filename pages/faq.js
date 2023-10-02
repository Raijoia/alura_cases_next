import Link from "../src/components/Link"

// SSG => Static Site Generation
// SSR => Server Side Rendering
// ISR => Incremental Static Regeneration(A mistura do SSG e SSR)

// getStaticProps => roda de forma estática, durante a build, não mudando o conteudo da api caso for mudada 
// getServerSideProps => roda toda vez que a página é carregada, ou seja, toda vez que o usuário acessar a página, ele vai fazer uma requisição para a api
export async function getStaticProps() {
  // link api
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"

  // pegando o link API
  const faq = await fetch(FAQ_API_URL)
    // transformando em json
    .then((respostaDoServidor) => {
      return respostaDoServidor.json()
    })
    .then((resposta) => {
      // retornando para a variável faq ficar com o valor
      return resposta
    })

  return {
    props: {
      // qualquer coisa que passar aqui, será passado como props
      // passando o resultado como props
      faq
    },
  }
}

export default function FAQPage({ faq }) {
  return (
    <div>
      <h1>Alura Cases - Pagina de Perguntas FAQ</h1>
      <Link href="/">Ir para a home</Link>
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={question}>
          <article>
            <h2>{question}</h2>
            <p>{answer}</p>
          </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
