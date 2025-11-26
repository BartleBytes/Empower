# Empower Speech Pathology

Frontend: React + Vite.  
Backend: Wagtail (Django) CMS for blog content, running in `backend/`.

## Local development

Backend (Wagtail API + admin):
- `cd backend`
- `source .venv/bin/activate`
- `python manage.py runserver 8000`
- Admin at `http://localhost:8000/admin`, API at `http://localhost:8000/api/v2/pages/`

Frontend (Vite):
- In project root: `npm install` (first run) then `npm run dev`
- Dev server at `http://localhost:5173`

## Backend notes
- CORS is open to `http://localhost:5173`.
- Blog model lives in `backend/blog/models.py` and is exposed via the Wagtail API.
- Media uploads live in `backend/media/` during development.

## Next steps
- Create a superuser for the CMS: `cd backend && source .venv/bin/activate && python manage.py createsuperuser`
- Build React routes/components to consume the blog API (list + detail).
- Swap SQLite for Postgres and configure cloud storage for media before production.
