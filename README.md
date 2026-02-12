# Focus Group Gateway

Plataforma gateway para gestionar acceso temporal y controlado a prototipos de BaldeCash durante sesiones de focus group.

**Dominio:** `focusgroup.baldecash.com`

## Stack

- **Framework:** Next.js 14+ (App Router)
- **Hosting:** Vercel
- **Token signing:** HMAC-SHA256
- **Registry:** JSON file (`src/data/sessions.json`)

## Setup

```bash
npm install
cp .env.example .env.local
# Edit .env.local with your TOKEN_SECRET
npm run dev
```

## Crear nueva sesión de Focus Group

1. Editar `src/data/sessions.json` y agregar una entrada:

```json
{
  "code": "mi-codigo",
  "target": "https://demo.baldecash.com",
  "path": "/prototipos/0.6/upn",
  "expires": "2026-02-28T23:00:00-05:00",
  "label": "Focus Group - Nombre",
  "active": true
}
```

2. Commit y push → Vercel auto-deploys
3. Compartir URL: `focusgroup.baldecash.com/mi-codigo`

## Integrar GateGuard en el sitio destino

Copiar `src/components/focus-group-gate.tsx` al sitio destino y envolver el layout:

```tsx
import { FocusGroupGate } from "@/components/focus-group-gate";

export default function Layout({ children }) {
  return <FocusGroupGate>{children}</FocusGroupGate>;
}
```

## DNS (Route 53)

| Tipo  | Nombre                      | Valor                  | TTL |
|-------|-----------------------------|------------------------|-----|
| CNAME | focusgroup.baldecash.com    | cname.vercel-dns.com   | 300 |
