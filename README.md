# EvoService — Wireframes (Next.js + Tailwind)

Questa è una **demo navigabile** dei wireframe di EvoService (Planner, WO, Impianto, Magazzino, KPI, App Tecnico).

## Requisiti
- **Node.js** (consiglio LTS) → scarica da https://nodejs.org
- **npm** (viene incluso con Node)

## Come avviare in locale (Mac/Windows)
1. Scarica lo zip da ChatGPT e **estrailo** (cartella `evoservice-wireframes/`).
2. Apri il **Terminale/Prompt dei comandi** e spostati nella cartella:
   ```bash
   cd evoservice-wireframes
   ```
3. Installa le dipendenze:
   ```bash
   npm install
   ```
4. Avvia la demo:
   ```bash
   npm run dev
   ```
5. Apri il browser su **http://localhost:3000**

> È una **wireframe demo**: non ha backend né dati reali. Serve per validare layout e flussi.

## Deploy su Vercel (link pubblico per il cliente)

### Opzione A — Con GitHub (consigliata)
1. Crea un account su **https://vercel.com** (gratuito).
2. Crea un account su **https://github.com** se non lo hai.
3. In GitHub, crea un **nuovo repository** (es. `evoservice-wireframes`) e fai l'upload di tutti i file di questa cartella (o usa Git).
4. In Vercel: **Add New… → Project → Import Git Repository** e seleziona il repo.
5. Conferma le impostazioni (Next.js viene riconosciuto automaticamente) e clicca **Deploy**.
6. Vercel ti fornirà un **URL pubblico** tipo `https://evoservice-demo.vercel.app` da condividere con il cliente.

### Opzione B — Con CLI (senza Git)
1. Installa la CLI di Vercel:
   ```bash
   npm i -g vercel
   ```
2. Da dentro la cartella del progetto, esegui:
   ```bash
   vercel
   ```
3. Segui le domande (premi Invio per accettare i default). Alla fine Vercel ti darà **un link pubblico**.

## Domande frequenti
- **Serve una carta di credito?** No per il piano gratuito.
- **Posso aprirlo su tablet/telefono?** Sì, è una webapp responsive.
- **Posso cambiare colori e testi?** Sì, il codice è in `app/page.jsx` (Tailwind CSS).
