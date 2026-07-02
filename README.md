# Roadmap Learning Platform — Frontend Preview

Platform pembelajaran berbasis roadmap. Repositori ini berisi fase **preview UI** dengan mock data dan dukungan multi-bahasa (Indonesia & English), dibangun dengan Next.js App Router, TypeScript, Tailwind CSS, dan Shadcn UI.

## 📚 Dokumentasi

Dokumentasi teknis berada di folder [`roadmap-learning-platform-md`](../../roadmap-learning-platform-md/).

| Dokumen | Untuk siapa | Isi |
|---------|-------------|-----|
| [`FRONTEND_PLAN.md`](../../roadmap-learning-platform-md/FRONTEND_PLAN.md) | Semua kontributor | Roadmap fase, task checklist, Definition of Done |
| [`ARCHITECTURE_FRONTEND.md`](../../roadmap-learning-platform-md/ARCHITECTURE_FRONTEND.md) | Developer | Arsitektur komponen, i18n, data flow, state, routing |
| [`CODE_STANDARDS.md`](../../roadmap-learning-platform-md/CODE_STANDARDS.md) | Developer | Naming, struktur folder, TypeScript, import ordering |
| [`GIT_STANDARDS.md`](../../roadmap-learning-platform-md/GIT_STANDARDS.md) | Semua kontributor | Penamaan branch, commit message, PR workflow |
| [`FRONTEND_AGENT.md`](../../roadmap-learning-platform-md/FRONTEND_AGENT.md) | AI agent (Cursor/Composer) | Aturan ketat untuk multi-file edit otomatis |

### Urutan baca yang disarankan

1. **Baru bergabung** → `FRONTEND_PLAN.md` → `ARCHITECTURE_FRONTEND.md` → `CODE_STANDARDS.md`
2. **Sebelum commit/PR** → `GIT_STANDARDS.md`
3. **AI agent mengeksekusi task** → `FRONTEND_AGENT.md` + dokumen teknis di atas

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Bahasa**: TypeScript
- **Styling**: Tailwind CSS + Shadcn UI
- **i18n**: next-intl (`id` / `en`)
- **Form**: React Hook Form + Zod (Phase 2)
- **Data**: Mock data statis di `src/data/` (tanpa API di fase preview)

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Buka `http://localhost:3000/id` atau `http://localhost:3000/en`.

## 📁 Struktur Proyek (target)

```text
src/
├── app/[locale]/       # Halaman per locale
├── components/         # UI, layout, shared
├── data/               # Mock data
├── hooks/              # Custom hooks
├── i18n/               # Konfigurasi next-intl
├── lib/                # Utilitas (cn, helpers)
├── messages/           # en.json, id.json
├── types/
└── utils/
```

Detail lengkap: [`CODE_STANDARDS.md`](../../roadmap-learning-platform-md/CODE_STANDARDS.md).

## 🌿 Git Workflow (ringkas)

```bash
git checkout main && git pull origin main
git checkout -b feat/nama-fitur
# ... kerjakan perubahan ...
git commit -m "feat(scope): deskripsi singkat"
git push -u origin feat/nama-fitur
# buat PR ke main
```

Detail lengkap: [`GIT_STANDARDS.md`](../../roadmap-learning-platform-md/GIT_STANDARDS.md).
