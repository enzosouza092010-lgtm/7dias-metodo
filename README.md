# Método dos 7 Dias — Página de vendas (Next.js)

## Rodar localmente
```bash
npm install
npm run dev   # http://localhost:3000
```

## Antes de publicar — edite `lib/config.js`
- `HOTMART_LINK`: cole o link de pagamento da Hotmart
- `VIDEO_URL`: link do YouTube/Vimeo ou arquivo .mp4 (vazio = "Vídeo em breve")
- `TESTIMONIALS`: depoimentos reais de compradores (vazio = seção oculta)

## Publicar
1. Crie um repositório no GitHub e envie o projeto:
```bash
git init && git add . && git commit -m "Página de vendas"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/metodo-7-dias.git
git push -u origin main
```
2. Na Vercel: **Add New → Project → importe o repositório → Deploy** (Next.js é detectado automaticamente).
