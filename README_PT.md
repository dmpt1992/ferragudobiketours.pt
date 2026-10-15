# Ferragudo Bike Tours — website para GitHub Pages

Este repositório contém uma landing page completa em inglês, com design editorial inspirado na homepage e na página Surf Lessons da Flow Ferragudo.

## Conteúdo

- `index.html` — página com SEO, Open Graph, Schema.org e conteúdo de bike tours.
- `assets/styles.css` — design e versão responsiva.
- `assets/script.js` — menu mobile e filtro de rotas (sem bibliotecas).
- `assets/favicon.svg` — favicon vetorial.
- `CNAME` — domínio personalizado `ferragudobiketours.pt`.
- `.nojekyll` — serve os ficheiros diretamente.
- `robots.txt` e `sitemap.xml` — descoberta e indexação.

## Publicar no GitHub Pages

1. Cria um novo repositório no GitHub, por exemplo `ferragudo-bike-tours`.
2. Carrega **todos os ficheiros e a pasta `assets`** para a raiz do repositório (o `index.html` deve ficar na raiz).
3. Vai a **Settings → Pages**. Em *Build and deployment*, escolhe `Deploy from a branch`, `main`, `/ (root)` e guarda.
4. Em **Custom domain**, escreve `ferragudobiketours.pt` e guarda. O ficheiro `CNAME` já está incluído no projeto.
5. **Só depois** configura os registos DNS no fornecedor do domínio. Para o domínio raiz (`@`), adiciona estes quatro registos `A`:

   | Tipo | Host | Valor |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |

6. Recomendado: configura `www` com um registo `CNAME` apontado para `O-TEU-UTILIZADOR.github.io` (sem o nome do repositório). Substitui pelo username **real** do teu GitHub. Não adivinhei o username.
7. Quando o DNS estiver correto e o certificado estiver pronto, ativa **Enforce HTTPS** no GitHub Pages. A propagação pode demorar até cerca de 24 horas.
8. Adiciona `https://ferragudobiketours.pt/` no Google Search Console como propriedade (ou propriedade domínio) e submete `https://ferragudobiketours.pt/sitemap.xml`.

Guia oficial: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Importante: fotografias e GIF

As fotos e o GIF são ficheiros **existentes na biblioteca WordPress de Flow Ferragudo**, referenciados por URL. A página usa imagens reais da Flow e não fotografias genéricas, mas **depende de o domínio `flowferragudo.pt` continuar a servir esses ficheiros**. Se quiseres que tudo seja independente, substitui os URLs por ficheiros carregados em `assets/images/` (respeita os formatos e a proporção). As imagens não estão incluídas neste ZIP porque não foi possível descarregá-las diretamente do servidor no ambiente de edição.

## Reservas

Esta é uma página estática de apresentação. Os botões de reserva abrem `https://flowferragudo.pt/rent/bicycles/` e as rotas abrem as páginas oficiais Flow. Passeios privados vão para o WhatsApp para verificar disponibilidade. A página **não recolhe pagamentos nem formulários/dados pessoais**.

## Revisões antes de publicar

- Confirma no navegador que as fotografias e GIF carregam corretamente.
- Confirma que os links para `Terms & conditions` e `Privacy policy` do website principal continuam disponíveis.
- Verifica que as rotas e distâncias continuam corretas. Os valores vieram da página de bike tours da Flow no momento de preparação.
- Os links de fotos e loja ficam no domínio principal; este domínio é uma página promocional temática e não uma segunda loja de reservas.

## SEO desta página

- Canonical: `https://ferragudobiketours.pt/`
- SEO Title: `Ferragudo Bike Tours | Self-Guided & Private Rides – Flow`
- Meta description: `Explore Ferragudo, Carvoeiro, Alvor and Silves by bike. Self-guided Algarve routes with bike rental and GPS setup, plus private guided tours by request.`
- Os links para a Flow principal ajudam a orientar o visitante sem duplicar o checkout.
