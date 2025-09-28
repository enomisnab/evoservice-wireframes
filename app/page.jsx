'use client'
import React, { useState } from "react";

// EvoService – Wireframes MVP (Calendar, Work Order, Asset, Inventory, KPI, Mobile Tech)
// NOTE: Low‑fi wireframes with Tailwind. No data/backend. Pure layout to validate UX.

const tabs = [
  { id: "calendar", label: "Planner / Calendario" },
  { id: "workorder", label: "Scheda Intervento (WO)" },
  { id: "asset", label: "Scheda Impianto" },
  { id: "inventory", label: "Magazzino / Furgone" },
  { id: "kpi", label: "Dashboard KPI" },
  { id: "mobile", label: "App Tecnico (PWA)" },
];

function Toolbar() {
  return (
    <div className="flex flex-wrap items-center gap-2 p-3 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <input className="border rounded-lg px-3 py-2 w-72" placeholder="Cerca cliente / impianto / WO…" />
      <button className="px-3 py-2 rounded-xl border hover:bg-gray-50">Nuovo WO</button>
      <button className="px-3 py-2 rounded-xl border hover:bg-gray-50">Nuovo Impianto</button>
      <button className="px-3 py-2 rounded-xl border hover:bg-gray-50">Nuovo Cliente</button>
      <div className="ml-auto flex gap-2">
        <select className="border rounded-lg px-2 py-2"><option>Settimana</option><option>Mese</option><option>Gantt</option></select>
        <select className="border rounded-lg px-2 py-2"><option>Tutti i tecnici</option><option>Team Frigo</option><option>Elettrici</option><option>Idraulici</option></select>
      </div>
    </div>
  );
}

function CalendarView() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-7 gap-2">
        {["Lun","Mar","Mer","Gio","Ven","Sab","Dom"].map((d) => (
          <div key={d} className="text-center text-sm font-medium text-gray-600">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 mt-2">
        {Array.from({ length: 35 }).map((_, i) => (
          <div key={i} className="min-h-[96px] border rounded-xl p-2 relative">
            <div className="text-xs text-gray-400">{i+1}</div>
            {/* Sample events */}
            {i % 7 === 1 && (
              <div className="mt-1 text-xs bg-blue-100 border border-blue-200 rounded-md px-2 py-1">
                Preventiva — Supermercato Alfa
              </div>
            )}
            {i % 9 === 2 && (
              <div className="mt-1 text-xs bg-amber-100 border border-amber-200 rounded-md px-2 py-1">
                Straordinaria — Allarme pressioni
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkOrderView() {
  return (
    <div className="p-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 space-y-4">
        <div className="rounded-2xl border p-4 bg-white">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">WO-2025-00123 — Straordinaria</h2>
            <span className="text-xs px-2 py-1 rounded bg-orange-100 border border-orange-200">IN CORSO</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-3 text-sm">
            <div>
              <div className="text-gray-500">Cliente</div>
              <div>Supermercati Alfa S.p.A — Filiale Roma Est</div>
            </div>
            <div>
              <div className="text-gray-500">Impianto</div>
              <div>FRI-Unit 45 — Matricola 8XZ1-33</div>
            </div>
            <div>
              <div className="text-gray-500">Tecnico</div>
              <div>Rossi Mario (Frigorista)</div>
            </div>
            <div>
              <div className="text-gray-500">SLA</div>
              <div>4h (priorità alta) — Scadenza 15:30</div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border p-4 bg-white">
          <h3 className="font-medium mb-2">Checklist Operativa</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Verifica perdite circuito",
              "Controllo pressioni e temperature",
              "Sostituzione filtro deidratatore",
              "Collaudo e ripristino",
            ].map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border p-4 bg-white">
          <h3 className="font-medium mb-2">Materiali / Ricambi</h3>
          <div className="grid md:grid-cols-3 gap-2 text-sm">
            <div className="border rounded-lg p-2">Filtro deidratatore — 2 pz</div>
            <div className="border rounded-lg p-2">R410A — 1,2 kg</div>
            <div className="border rounded-lg p-2">Guarnizioni set — 1 pz</div>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="px-3 py-2 rounded-xl border">Aggiungi</button>
            <button className="px-3 py-2 rounded-xl border">Scarica da magazzino</button>
          </div>
        </div>

        <div className="rounded-2xl border p-4 bg-white">
          <h3 className="font-medium mb-2">Report & Firma</h3>
          <textarea className="w-full border rounded-xl p-3 min-h-[96px]" placeholder="Note tecniche, attività svolte, valori di collaudo…" />
          <div className="mt-3 grid md:grid-cols-2 gap-2">
            <div className="border rounded-xl p-3 min-h-[120px] flex items-center justify-center text-gray-400">Area Firma Cliente</div>
            <div className="border rounded-xl p-3 min-h-[120px] flex items-center justify-center text-gray-400">Upload Foto/Video</div>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="px-3 py-2 rounded-xl border">Genera PDF</button>
            <button className="px-3 py-2 rounded-xl border">Invia al Cliente</button>
            <button className="px-3 py-2 rounded-xl border bg-green-600 text-white">Chiudi Intervento</button>
          </div>
        </div>
      </div>

      <aside className="space-y-4">
        <div className="rounded-2xl border p-4 bg-white">
          <h3 className="font-medium mb-2">Timeline</h3>
          <ol className="text-sm space-y-2">
            <li>10:12 — Ticket ricevuto</li>
            <li>10:18 — WO creato e assegnato a Rossi</li>
            <li>11:02 — Arrivo on-site</li>
            <li>11:30 — Diagnosi completata</li>
          </ol>
        </div>
        <div className="rounded-2xl border p-4 bg-white">
          <h3 className="font-medium mb-2">Scorte critiche</h3>
          <ul className="text-sm space-y-1">
            <li>Filtro deidratatore — <span className="text-amber-700">Low</span></li>
            <li>R410A — <span className="text-red-700">Critical</span></li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

function AssetView() {
  return (
    <div className="p-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 space-y-4">
        <div className="rounded-2xl border p-4 bg-white">
          <h2 className="text-lg font-semibold">Impianto — FRI-Unit 45 (Mat. 8XZ1-33)</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm mt-2">
            <div>
              <div className="text-gray-500">Cliente</div>
              <div>Supermercati Alfa S.p.A</div>
            </div>
            <div>
              <div className="text-gray-500">Ubicazione</div>
              <div>Roma Est — Via Esempio 12</div>
            </div>
            <div>
              <div className="text-gray-500">Contratto</div>
              <div>Gold — Scadenza 31/12/2026</div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm mt-4">
            <div>
              <div className="text-gray-500">Gas</div>
              <div>R410A</div>
            </div>
            <div>
              <div className="text-gray-500">Potenza</div>
              <div>22 kW</div>
            </div>
            <div>
              <div className="text-gray-500">Ultima manutenzione</div>
              <div>12/09/2025</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border p-4 bg-white">
          <h3 className="font-medium mb-2">Storico Interventi</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2">Data</th>
                <th>Tipo</th>
                <th>Esito</th>
                <th>Tecnico</th>
                <th>Report</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2">12/09/2025</td>
                <td>Preventiva</td>
                <td>OK</td>
                <td>Rossi M.</td>
                <td><button className="underline">PDF</button></td>
              </tr>
              <tr className="border-t">
                <td className="py-2">03/09/2025</td>
                <td>Straordinaria</td>
                <td>OK</td>
                <td>Bianchi L.</td>
                <td><button className="underline">PDF</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <aside className="space-y-4">
        <div className="rounded-2xl border p-4 bg-white">
          <h3 className="font-medium mb-2">Scadenze & Conformità</h3>
          <ul className="text-sm space-y-1">
            <li>F-GAS — Controllo perdite entro 30gg</li>
            <li>DM 37/08 — Dich. Conformità aggiornata</li>
            <li>Libretto impianto — Ultimo aggiornamento 12/09/2025</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-4 bg-white">
          <h3 className="font-medium mb-2">Documenti</h3>
          <ul className="text-sm list-disc list-inside">
            <li>Manuale tecnico.pdf</li>
            <li>Schema elettrico.v1.pdf</li>
            <li>Registro F-GAS.xlsx</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

function InventoryView() {
  return (
    <div className="p-4 space-y-4">
      <div className="rounded-2xl border p-4 bg-white">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Magazzino Tecnico — Sede</h2>
          <button className="px-3 py-2 rounded-xl border">Nuovo Articolo</button>
        </div>
        <table className="w-full text-sm mt-3">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="py-2">SKU</th><th>Descrizione</th><th>Giacenza</th><th>Min</th><th>Ubicazione</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t"><td>FD-200</td><td>Filtro deidratatore</td><td>8</td><td>10</td><td>A1-03</td></tr>
            <tr className="border-t"><td>GAS-R410A</td><td>R410A (bombola)</td><td>2</td><td>4</td><td>G-04</td></tr>
          </tbody>
        </table>
      </div>
      <div className="rounded-2xl border p-4 bg-white">
        <h2 className="text-lg font-semibold">Magazzino Viaggiante — Furgone #3 (Rossi)</h2>
        <table className="w-full text-sm mt-3">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="py-2">SKU</th><th>Descrizione</th><th>Q.tà</th><th>Azione</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t"><td>FD-200</td><td>Filtro deidratatore</td><td>1</td><td><button className="underline">Rifornisci</button></td></tr>
            <tr className="border-t"><td>GAS-R410A</td><td>R410A</td><td>0.5</td><td><button className="underline">Rifornisci</button></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function KPIView() {
  return (
    <div className="p-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[{
        label: "WO chiusi (30 gg)", value: "128"
      },{
        label: "MTTR (ore)", value: "3.2"
      },{
        label: "First-time-fix", value: "82%"
      },{
        label: "SLA rispettati", value: "94%"
      }].map((k, i) => (
        <div key={i} className="rounded-2xl border p-4 bg-white">
          <div className="text-sm text-gray-500">{k.label}</div>
          <div className="text-3xl font-semibold mt-2">{k.value}</div>
        </div>
      ))}
      <div className="rounded-2xl border p-4 bg-white md:col-span-2">
        <div className="text-sm text-gray-500">Trend WO / mese</div>
        <div className="h-40 mt-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl" />
      </div>
      <div className="rounded-2xl border p-4 bg-white md:col-span-2">
        <div className="text-sm text-gray-500">Ricambi più usati</div>
        <ul className="text-sm mt-2 list-disc list-inside">
          <li>Filtro deidratatore</li>
          <li>Guarnizioni set</li>
          <li>R410A</li>
        </ul>
      </div>
    </div>
  );
}

function MobileTechView() {
  return (
    <div className="p-4 flex gap-6 flex-wrap">
      <div className="w-[360px] border rounded-3xl overflow-hidden shadow bg-white">
        <div className="p-3 border-b bg-gray-50">EvoService — Tecnico</div>
        <div className="p-3 space-y-3">
          <input className="w-full border rounded-xl px-3 py-2" placeholder="Scansiona QR impianto…" />
          <div className="rounded-xl border p-3">
            <div className="text-sm text-gray-500">WO assegnati oggi</div>
            <ul className="text-sm mt-2 space-y-1">
              <li>09:30 — Preventiva — FRI-Unit 45</li>
              <li>11:30 — Straordinaria — Allarme pressioni</li>
              <li>14:00 — Collaudo — Nuova installazione</li>
            </ul>
          </div>
          <div className="rounded-xl border p-3">
            <div className="text-sm text-gray-500">Azioni rapide</div>
            <div className="flex gap-2 mt-2 flex-wrap">
              <button className="px-3 py-2 rounded-xl border">Apri WO</button>
              <button className="px-3 py-2 rounded-xl border">Materiali</button>
              <button className="px-3 py-2 rounded-xl border">Foto</button>
              <button className="px-3 py-2 rounded-xl border">Firma</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-[320px]">
        <div className="rounded-2xl border p-4 bg-white">
          <h3 className="font-medium mb-2">Linee guida UX per la PWA</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Offline-first: cache WO del giorno, foto in coda, sync automatico al ritorno rete.</li>
            <li>Firma cliente su canvas con timestamp e geolocalizzazione (opt‑in).</li>
            <li>Scansione QR/Barcode per impianti e ricambi.</li>
            <li>Dark mode, tasti grandi, feedback aptico.</li>
            <li>Ridurre digitazione: preset frasi tecniche e note vocali → testo.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [active, setActive] = useState("calendar");
  return (
    <div className="min-h-screen bg-gray-100">
      <Toolbar />
      <div className="max-w-7xl mx-auto">
        <div className="px-4 pt-4 flex gap-2 flex-wrap">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActive(t.id)} className={`px-3 py-2 rounded-2xl border ${active===t.id?"bg-black text-white":"bg-white hover:bg-gray-50"}`}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="mt-4 border-t" />
        {active === "calendar" && <CalendarView />}
        {active === "workorder" && <WorkOrderView />}
        {active === "asset" && <AssetView />}
        {active === "inventory" && <InventoryView />}
        {active === "kpi" && <KPIView />}
        {active === "mobile" && <MobileTechView />}
      </div>
    </div>
  );
}
