# Comodato — protótipo navegável (demo)

Protótipo visual: **não coleta, armazena nem transmite dados**. Nada é enviado a serviços externos; não há consulta de CPF/CNPJ, score, bureau ou WhatsApp real.

## Rodar
```
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção (tsc + vite)
npm run preview
```
## Deploy (Vercel)
Importe o repositório; `vercel.json` já define build (`npm run build`) e saída (`dist`). Nenhuma chave de API é necessária.

## Personalização
`src/config.ts`: nome da marca, textos da análise e ponto único para trocar os dados mock por uma API real (`submitCadastro`). Use apenas marca/logo que você tenha direito de usar.
