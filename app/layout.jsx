import { Fraunces, Manrope, Caveat } from "next/font/google";
import "./globals.css";

const fd = Fraunces({ subsets: ["latin"], variable: "--f-d", style: ["normal", "italic"] });
const fb = Manrope({ subsets: ["latin"], variable: "--f-b" });
const fh = Caveat({ subsets: ["latin"], variable: "--f-h" });

export const metadata = {
  title: "Método dos 7 Dias — Destravando Novos Caminhos",
  description: "Um guia prático e espiritual de 7 dias para sair do ciclo de bloqueios, fortalecer sua fé e abrir espaço para novas oportunidades. Apenas R$ 9,99.",
  openGraph: { title: "Método dos 7 Dias — Destravando Novos Caminhos", description: "7 dias de reflexões, exercícios e orações. Apenas R$ 9,99.", type: "website", locale: "pt_BR" },
};
export const viewport = { themeColor: "#07090d" };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${fd.variable} ${fb.variable} ${fh.variable}`}>
      <body>
        <noscript><style>{".rv{opacity:1!important;transform:none!important}.ln>span{transform:none!important}"}</style></noscript>
        {children}
      </body>
    </html>
  );
}
