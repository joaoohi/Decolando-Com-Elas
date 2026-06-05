import { Link } from "react-router-dom";
import './App.css'
import logo from './assets/logo.png'
import sobremim from './assets/sobremim.png'
import sobreadecolando from './assets/sobreadecolando.png'
import vidaderainha from './assets/vidaderainha.png'
import logoVidaRainha from './assets/logovidaderainha.png'
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube
} from "react-icons/fa";

function App() {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="Decolando Com Elas" />
        </div>

        <nav className="nav-links">
          <a href="#aboutme">Sobre mim</a>
          <a href="#aboutdecolando">Sobre a Decolando</a>
          <a href="#confiar">Por que confiar em mim? </a>
          <a href="#servicos">Serviços</a>
          {/* <a href="#infoprodutos">Infoprodutos</a> */}
          <a href="#vida-rainha">Sobre a Vida de Rainha</a>
          <a href="#contatos">Contatos</a>
        </nav>

      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>
            Conectando mulheres ao mundo e ao seu interior.
          </h1>

          <p>
            Consultoria e roteiros de viagem especializados para mulheres que querem explorar o mundo com planejamento estratégico, tranquilidade e autoconfiança em cada etapa da jornada, alcançando maior autoconhecimento e conexão consigo mesmas.
          </p>

        </div>
      </section>

      <section id="aboutme" className="sobre-mim">
        <div className="sobre-container">

          <div className="sobre-foto">
            <img src={sobremim} alt="Sobre Mim" />
          </div>

          <div className="sobre-texto">
            <span className="secao-tag">SOBRE MIM</span>

            <h2>
              Olá! Eu sou a Jessica Mayumi.
            </h2>

            <p> Empresária, viajante solo e fundadora da Decolando com elas.</p>

            <p>
              Minha paixão por viagens começou ainda na adolescência, mas foi em 2020 que iniciei minha jornada viajando sozinha. O que começou por falta de companhia rapidamente se transformou em uma escolha de vida. Desde então, conheci mais de 10 países, visitei dezenas de cidades e vivi experiências que ampliaram minha visão de mundo e fortaleceram minha autoconfiança.
            </p>

            <p>
              Após anos atuando na área de Comércio Exterior, decidi deixar uma carreira consolidada para seguir meu propósito: ajudar outras mulheres a conquistarem a liberdade de viajar com segurança, planejamento e confiança. Hoje compartilho minha experiência para mostrar que é possível explorar o mundo, vencer o medo e descobrir uma nova versão de si mesma através das viagens.
            </p>

            <Link
              to="/historia"
              className="btn-historia"
            >
              Ver história completa
            </Link>

          </div>

        </div>
      </section>

      <section id="aboutdecolando" className="sobre-decolando">
        <div className="decolando-container">

          <div className="decolando-texto">
            <span className="secao-tag">SOBRE A DECOLANDO</span>

            <h2>
              Mais do que viagens, uma jornada de transformação.
            </h2>

            <p>
              A Decolando Com Elas nasceu para apoiar mulheres que
              desejam viajar com mais segurança, autonomia e confiança.
            </p>

            <p>
              Aqui você poderá explicar a missão da empresa, os valores,
              o propósito do projeto e o impacto que deseja gerar na vida
              das mulheres que buscam novas experiências.
            </p>
          </div>

          <div className="decolando-card">
            <img src={sobreadecolando} alt="Sobre a Decolando" />
          </div>

        </div>
      </section>

      <section id="confiar" className="confianca">

        <div className="confianca-header">
          <span className="secao-tag">POR QUE CONFIAR EM MIM?</span>

          <h2>
            Porque eu não ensino teoria. Eu compartilho experiências reais de uma mulher que enfrentou os mesmos medos, dúvidas e desafios que muitas de vocês sentem ao pensar em viajar sozinha.
          </h2>
        </div>

        <div className="confianca-cards">

          <div className="confianca-card">
            <h3>🌍 Experiência Vivida na Prática</h3>

            <p>
              Já visitei mais de 10 países e dezenas de cidades, sendo a maior parte dessas viagens realizadas sozinha. Cada destino trouxe aprendizados sobre planejamento, segurança, autonomia e confiança que hoje compartilho com outras mulheres.
            </p>
          </div>

          <div className="confianca-card">
            <h3>🎓 Planejamento Profissional</h3>

            <p>
              Minha formação em Comércio Exterior e pós-graduação em Gestão de Negócios me deram uma visão estratégica que aplico em cada viagem. Meu objetivo é ajudar você a viajar de forma organizada, segura e sem imprevistos desnecessários.
            </p>
          </div>

          <div className="confianca-card">
            <h3>💜 Eu Entendo Seus Medos</h3>

            <p>
              Antes de embarcar na minha primeira viagem sozinha, eu também tive receios, inseguranças e ouvi críticas de quem não entendia minhas escolhas. Por isso, sei exatamente quais são os obstáculos que muitas mulheres enfrentam e como superá-los.
            </p>
          </div>

          <div className="confianca-card">
            <h3>✈️ Método Construído com Experiência Real</h3>

            <p>
              Tudo o que ensino foi testado por mim ao longo de anos explorando o mundo de forma independente. Não são dicas copiadas da internet, mas estratégias que funcionaram na prática e me permitiram viajar com mais liberdade e tranquilidade.
            </p>
          </div>

          <div className="confianca-card">
            <h3>🤝 Mais do que uma Consultora, uma Mentora</h3>

            <p>
              Minha missão não é apenas ajudar você a organizar uma viagem. Quero que você desenvolva a confiança necessária para viver experiências transformadoras, descobrir sua independência e perceber que é capaz de ir muito mais longe do que imagina.
            </p>
          </div>

          <div className="confianca-card">
            <h3>🚀 Propósito que Virou Negócio</h3>

            <p>
              A Decolando com elas nasceu da minha própria transformação. Depois de anos atuando no mercado corporativo, decidi deixar uma carreira estável para me dedicar a ajudar mulheres a realizarem o sonho de viajar sozinhas com mais segurança e confiança. Essa não é apenas uma profissão para mim, é uma missão que vivo todos os dias.
            </p>
          </div>

        </div>

      </section>

      <section id="servicos" className="servicos">
        <div className="servicos-header">
          <span className="secao-tag">SERVIÇOS</span>

          <h2>
            Tudo o que você precisa para viajar com mais segurança,
            planejamento e confiança.
          </h2>

          <p>
            Escolha o suporte ideal para a sua jornada e transforme
            o sonho de viajar sozinha em uma experiência tranquila,
            organizada e inesquecível.
          </p>
        </div>

        <div className="servicos-grid">

          <div className="servico-card">
            <div className="servico-icon">🗺️</div>

            <h3>Consultoria de Organização de Viagem</h3>

            <p>
              Planejamento completo para que você viaje com tudo
              organizado, economizando tempo, dinheiro e evitando
              imprevistos.
            </p>
          </div>

          <div className="servico-card">
            <div className="servico-icon">💖</div>

            <h3>Consultoria para Viagem Solo</h3>

            <p>
              Preparação emocional para mulheres que desejam viajar
              sozinhas com mais segurança, confiança e autonomia.
            </p>
          </div>

          <div className="servico-card">
            <div className="servico-icon">✈️</div>

            <h3>Roteiros Nacionais e Internacionais</h3>

            <p>
              Roteiros personalizados de acordo com seu perfil,
              orçamento, estilo de viagem e objetivos.
            </p>
          </div>

        </div>
      </section>

      <section id="vida-rainha" className="vida-rainha">
        <div className="vida-rainha-container">

          <div className="vida-rainha-foto-container">

            <img
              src={logoVidaRainha}
              alt="Logo Vida de Rainha"
              className="vida-rainha-logo"
            />

            <div className="vida-rainha-foto">
              <img src={vidaderainha} alt="Vida de Rainha" />
            </div>

          </div>

          <div className="vida-rainha-texto">

            <span className="secao-tag">VIDA DE RAINHA</span>

            <h2>
              Cuidar de si é o seu maior poder
            </h2>

            <p>
              Vida de Rainha é uma marca de autocuidado feminino artesanal premium, criada com o objetivo de transformar a rotina das mulheres em experiências de SPA e bem-estar.
            </p>

            <p>
              A marca nasceu em novembro de 2025, a partir do desejo de oferecer produtos que vão além do cuidado com a pele, promovendo também conexão, autoestima e fortalecimento da feminilidade. Inspirada em uma jornada pessoal de autodescoberta e viagens, foi idealizada para levar momentos de luxo e bem-estar para o dia a dia.
            </p>

            <p>Todos os produtos são hipoalergênicos e cruelty-free, com foco em qualidade, sustentabilidade e responsabilidade. A proposta também inclui proporcionar experiências de autocuidado que podem ser usadas para presentear outras mulheres com carinho e significado.</p>

            <p>Que tal separar um tempinho para cuidar de você, seja em casa ou durante suas viagens?</p>

            <a
              href="https://shopee.com.br/vidaderainha?entryPoint=ShopBySearch&searchKeyword=vida%20de%20rainha"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-loja"
            >
              Ir para a Loja →
            </a>

          </div>

        </div>
      </section>

      <section id="contatos" className="contatos">

        <div className="contatos-header">
          <span className="secao-tag">CONTATOS</span>

          <h2>
            Vamos nos conectar?
          </h2>

          <p>
            Acompanhe conteúdos, novidades, viagens, autocuidado e entre em contato para tirar dúvidas ou solicitar meus serviços.
          </p>
        </div>

        <div className="contatos-grid">

          <a
            href="https://www.instagram.com/decolandocomelas_"
            target="_blank"
            rel="noreferrer"
            className="contato-card"
          >
            <FaInstagram className="contato-icon" />

            <h3>Instagram Decolando</h3>

            <p>@decolandocomelas_</p>
          </a>

          <a
            href="https://www.linkedin.com/in/jessica-mayumi"
            target="_blank"
            rel="noreferrer"
            className="contato-card"
          >
            <FaLinkedin className="contato-icon" />

            <h3>LinkedIn</h3>

            <p>Jessica Mayumi</p>
          </a>

          <a
            href="https://wa.me/5511987845477"
            target="_blank"
            rel="noreferrer"
            className="contato-card"
          >
            <FaWhatsapp className="contato-icon" />

            <h3>WhatsApp</h3>

            <p>Fale diretamente comigo</p>
          </a>

          <a
            href="https://m.youtube.com/@decolandocomelas"
            target="_blank"
            rel="noreferrer"
            className="contato-card"
          >
            <FaYoutube className="contato-icon" />

            <h3>YouTube</h3>

            <p>Decolando Com Elas</p>
          </a>

          <a
            href="https://www.instagram.com/_vidaderainha"
            target="_blank"
            rel="noreferrer"
            className="contato-card"
          >
            <FaInstagram className="contato-icon" />

            <h3>Instagram Vida de Rainha</h3>

            <p>@_vidaderainha</p>
          </a>

        </div>

      </section>
    </>
  )
}

export default App