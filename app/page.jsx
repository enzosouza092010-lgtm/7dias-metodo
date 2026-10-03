import { HOTMART_LINK, VIDEO_URL, VIDEO_DURACAO, TESTIMONIALS } from "../lib/config";
import FX from "../components/FX";
import Video from "../components/Video";
import Faq from "../components/Faq";
import Counter from "../components/Counter";

const P = {
  cross: "M12 3v18M7.5 8.5h9", bolt: "M13 2L4 14h7l-1 8 9-12h-7z", spark: "M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z",
  leaf: "M5 19c0-9 5-14 14-14 0 9-5 14-14 14zM5 19l7-7", flame: "M12 3c1 4 5 6 5 11a5 5 0 01-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-4-1-6 1-10z",
  wallet: "M3 7h16a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2zM3 7l12-3v3M16 13h2", lock: "M6 11h12v9H6zM8 11V8a4 4 0 018 0v3",
  mail: "M3 6h18v12H3zM3 7l9 7 9-7", cart: "M3 4h3l2 11h10l2-8H7M9 20h.01M17 20h.01", cal: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
  rocket: "M14 4c4 0 6 2 6 6-3 3-6 5-10 6l-2-2c1-4 3-7 6-10zM6 14l-3 1 2 4M10 18l-1 3", shield: "M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6zM8 12l3 3 5-6",
  phone: "M8 3h8v18H8zM11 18h2",
};
const I = ({ n }) => (<svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={P[n]} /></svg>);

const Cta = ({ children = "Quero o meu agora por apenas R$ 9,99" }) => (
  <a className="cta" href={HOTMART_LINK} target="_blank" rel="noopener noreferrer"><I n="cart" /><span>{children}</span></a>
);
const Safe = () => (<p className="safe"><I n="lock" /> Pagamento seguro via Hotmart</p>);
const Logo = () => (
  <svg className="logo" viewBox="0 0 40 28" fill="none" stroke="#f6b93b" strokeWidth="2" strokeLinejoin="round" aria-hidden="true"><path d="M2 26L14 7l6 9 5-7 13 17M14 7l3 5M25 9l-2 4" /></svg>
);

const BEN = [
  ["cross", "Fortalecer sua fé", "e se reconectar com o propósito de Deus."],
  ["bolt", "Eliminar bloqueios mentais e emocionais", "que te impedem de avançar."],
  ["spark", "Atrair novas oportunidades", "com mais clareza e confiança."],
  ["wallet", "Melhorar sua vida financeira, profissional e pessoal", "com decisões mais alinhadas aos seus valores."],
  ["leaf", "Construir hábitos espirituais", "que vão te acompanhar por toda a vida."],
  ["flame", "Sentir a presença de Deus", "em cada passo da sua jornada."],
];
const STEPS = [
  ["cart", "Faça sua compra", "É rápido, seguro e prático."],
  ["mail", "Receba o acesso", "Você recebe tudo no seu e-mail."],
  ["cal", "Siga o método", "7 dias de conteúdos exclusivos."],
  ["rocket", "Veja a mudança", "Com fé, foco e ação, novos caminhos se abrem."],
];
const FAQ = [
  ["Como recebo o conteúdo?", "Logo após a confirmação do pagamento, o acesso chega no e-mail usado na compra pela Hotmart. Você pode começar no mesmo dia."],
  ["Preciso de alguma experiência espiritual?", "Não. O método foi pensado para quem está começando ou retomando a caminhada, com um passo por dia e linguagem simples."],
  ["Quanto tempo preciso por dia?", "Cada dia traz uma reflexão, um exercício e uma oração. Reserve um momento tranquilo do seu dia para seguir cada etapa."],
  ["E se eu não gostar?", "Você tem 7 dias de garantia incondicional. Se não se sentir satisfeito, é só pedir o reembolso dentro desse prazo pela Hotmart."],
  ["O pagamento é seguro?", "Sim. A compra é processada pela Hotmart, que aceita Pix, cartão e boleto."],
];
const STARS = Array.from({ length: 42 }, (_, i) => [(i * 37 + 11) % 100, (i * 53 + 7) % 52, ((i * 13) % 30) / 10, 1 + (i % 3) * 0.6]);

export default function Page() {
  return (
    <main>
      <FX />
      <header className="nav">
        <div className="wrap nav-in">
          <a href="#topo" className="brand"><Logo /><span><b>MÉTODO DOS 7 DIAS</b><small>Destravando novos caminhos</small></span></a>
          <nav><a href="#beneficios">Benefícios</a><a href="#video">Vídeo</a>{TESTIMONIALS.length > 0 && <a href="#depoimentos">Depoimentos</a>}<a href="#perguntas">Perguntas</a></nav>
          <a className="mini" href={HOTMART_LINK} target="_blank" rel="noopener noreferrer">Quero o meu agora</a>
        </div>
      </header>

      <section className="hero" id="topo">
        <div className="sky" aria-hidden="true">
          {STARS.map(([x, y, d, s], i) => <i key={i} style={{ left: x + "%", top: y + "%", animationDelay: d + "s", width: s, height: s }} />)}
        </div>
        <svg className="land" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          <defs>
            <radialGradient id="glow"><stop offset="0" stopColor="#ffb347" stopOpacity=".85" /><stop offset=".4" stopColor="#e0712a" stopOpacity=".35" /><stop offset="1" stopColor="#e0712a" stopOpacity="0" /></radialGradient>
            <linearGradient id="hz" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#07090d" /><stop offset=".55" stopColor="#2b1740" /><stop offset=".85" stopColor="#8a3d2a" /><stop offset="1" stopColor="#d9792f" /></linearGradient>
          </defs>
          <rect width="1440" height="800" fill="url(#hz)" />
          <g className="sun"><circle cx="1090" cy="470" r="230" fill="url(#glow)" /><circle cx="1090" cy="470" r="38" fill="#fff0c4" /></g>
          <path className="m1" d="M0 560L180 470L320 540L520 400L700 520L900 430L1100 540L1300 450L1440 520V800H0Z" fill="#241632" />
          <path className="m2" d="M0 640L220 540L400 620L640 500L860 610L1080 520L1260 600L1440 560V800H0Z" fill="#150e20" />
          <g className="m3" fill="#05070b">
            <path d="M0 720L260 650L520 700L780 620L1020 565L1240 650L1440 610V900H0Z" />
            <circle cx="1020" cy="438" r="11" />
            <path d="M1004 452Q1020 445 1036 452L1042 512L1034 514L1032 565L1024 565L1021 524L1019 524L1016 565L1008 565L1006 514L998 512Z" />
          </g>
        </svg>
        <div className="shade" />
        <div className="wrap hero-in">
          <span className="tag">Produto digital</span>
          <h1>
            <span className="ln"><span style={{ "--i": 0 }}>Método dos 7 Dias —</span></span>
            <span className="ln gold"><span style={{ "--i": 1 }}>Destravando</span></span>
            <span className="ln gold"><span style={{ "--i": 2 }}>Novos Caminhos</span></span>
          </h1>
          <p className="lead rise" style={{ "--i": 4 }}>Um guia prático e espiritual para você sair do ciclo de bloqueios, fortalecer sua fé e abrir espaço para novas oportunidades em todas as áreas da sua vida.</p>
          <ul className="pill rise" style={{ "--i": 5 }}>
            <li><I n="cal" /><span>7 dias<br />de conteúdo</span></li>
            <li><I n="cross" /><span>Baseado em<br />princípios bíblicos</span></li>
            <li><I n="phone" /><span>Acesse de<br />onde quiser</span></li>
          </ul>
          <div className="rise" style={{ "--i": 6 }}><Cta /><Safe /></div>
        </div>
        <blockquote className="quote rise" style={{ "--i": 7 }}>
          “Deus não te chamou para ficar parado, mas para viver o propósito que Ele preparou para você.”
          <svg viewBox="0 0 240 14" aria-hidden="true"><path d="M2 9C60 2 150 2 238 8" /></svg>
        </blockquote>
      </section>

      <div className="strip" aria-hidden="true"><div>{[0, 1].map((k) => <span key={k}>Fé <em>◆</em> Foco <em>◆</em> Ação <em>◆</em> Resultados <em>◆</em> Fé <em>◆</em> Foco <em>◆</em> Ação <em>◆</em> Resultados <em>◆</em> </span>)}</div></div>

      <section id="beneficios">
        <div className="wrap split">
          <div className="rv sticky">
            <p className="kick">O que você vai encontrar</p>
            <h2>Mais do que um método, é um novo começo.</h2>
            <p className="sub">Em apenas 7 dias, você vai ser guiado por reflexões, exercícios e orações que vão te ajudar a:</p>
          </div>
          <ul className="ben">
            {BEN.map(([ic, t, d], i) => (
              <li key={t} className="rv" style={{ "--d": i * 0.08 + "s" }}>
                <span className="orb"><I n={ic} /></span>
                <div><h3>{t}</h3><p>{d}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="video" className="vsec">
        <div className="wrap split">
          <div className="rv">
            <p className="kick">Assista ao vídeo</p>
            <h2>Veja como o Método dos 7 Dias pode mudar a sua vida.</h2>
            <p className="sub">Neste vídeo, você vai entender como funciona o método, o que vai receber e como ele pode te ajudar a destravar novos caminhos.</p>
            <p className="dur"><span className="dot" /> Duração: {VIDEO_DURACAO}</p>
          </div>
          <div className="rv z"><Video url={VIDEO_URL} /></div>
        </div>
      </section>

      <section id="como">
        <div className="wrap">
          <div className="how">
            <div className="rv">
              <p className="kick">Como funciona</p>
              <h2>É muito simples!</h2>
              <p className="sub">Você recebe o conteúdo completo por e-mail e pode começar hoje mesmo.</p>
            </div>
            <div className="bookwrap rv z" aria-hidden="true">
              <div className="aura" />
              <div className="book"><div className="cover"><Logo /><b>MÉTODO DOS</b><strong>7 DIAS</strong><small>DESTRAVANDO<br />NOVOS CAMINHOS</small></div></div>
              <p className="words"><span>Fé</span><span>Foco</span><span>Ação</span><span>Resultados</span></p>
            </div>
          </div>
          <ol className="steps">
            {STEPS.map(([ic, t, d], i) => (
              <li key={t} className="rv" style={{ "--d": i * 0.15 + "s" }}>
                <span className="orb big"><I n={ic} /><em>{i + 1}</em></span>
                <h3>{t}</h3><p>{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {TESTIMONIALS.length > 0 && (
        <section id="depoimentos" className="light">
          <div className="wrap">
            <h2 className="rv">Quem já viveu, recomenda!</h2>
            <div className="tgrid">
              {TESTIMONIALS.map((t, i) => (
                <figure key={t.nome} className="rv" style={{ "--d": i * 0.1 + "s" }}>
                  <blockquote>“{t.texto}”</blockquote>
                  <figcaption><b>{t.nome}</b><small>{t.local}</small></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="oferta" className="offer">
        <div className="wrap split">
          <div className="rv">
            <p className="kick">Investimento</p>
            <h2>Tudo isso por apenas</h2>
            <p className="price"><small>R$</small><Counter to={9.99} /></p>
            <ul className="perks">
              <li><I n="bolt" />Acesso imediato</li>
              <li><I n="lock" />Pagamento seguro via Hotmart</li>
              <li><I n="shield" />7 dias de garantia incondicional</li>
            </ul>
          </div>
          <div className="buy rv z">
            <div className="mini-book"><span>7<br />DIAS</span></div>
            <h3>Método dos 7 Dias — Destravando Novos Caminhos</h3>
            <p className="amber">Apenas R$ 9,99</p>
            <Cta>Quero o meu agora</Cta>
            <Safe />
          </div>
        </div>
        <div className="wrap">
          <div className="guar rv">
            <span className="seal"><b>7 dias</b><small>garantia</small></span>
            <div><h3>Seu risco é zero!</h3><p>Se por qualquer motivo você não se sentir satisfeito com o conteúdo, é só pedir o reembolso em até 7 dias. Sem burocracia. Sem perguntas.</p></div>
          </div>
        </div>
      </section>

      <section id="perguntas">
        <div className="wrap narrow">
          <h2 className="rv">Perguntas frequentes</h2>
          <div className="rv"><Faq items={FAQ} /></div>
        </div>
      </section>

      <footer>
        <div className="wrap foot">
          <a href="#topo" className="brand"><Logo /><span><b>MÉTODO DOS 7 DIAS</b><small>Destravando novos caminhos</small></span></a>
          <p>Novos caminhos começam com uma decisão.</p>
          <Safe />
        </div>
        <p className="legal">Este é um conteúdo de desenvolvimento pessoal e espiritual. Os resultados variam de pessoa para pessoa e dependem do empenho de cada um. Não substitui acompanhamento médico, psicológico ou financeiro.</p>
      </footer>

      <div className="sticky-cta"><Cta>Quero o meu por R$ 9,99</Cta></div>
    </main>
  );
}
