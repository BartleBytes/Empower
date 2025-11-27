import os

import dj_database_url

from .base import *

DEBUG = False

# Hosts and origins (set these via environment variables in Render)
ALLOWED_HOSTS = [h for h in os.getenv("ALLOWED_HOSTS", "").split(",") if h]
# Render provides hostname in env; include it if present. Fallback to *.onrender.com to avoid DisallowedHost during health checks.
render_host = os.getenv("RENDER_EXTERNAL_HOSTNAME")
if render_host:
    ALLOWED_HOSTS.append(render_host)
ALLOWED_HOSTS.append(".onrender.com")
ALLOWED_HOSTS = list(dict.fromkeys(ALLOWED_HOSTS))  # dedupe, preserve order
CSRF_TRUSTED_ORIGINS = [o for o in os.getenv("CSRF_TRUSTED_ORIGINS", "").split(",") if o]
CORS_ALLOWED_ORIGINS = [o for o in os.getenv("CORS_ALLOWED_ORIGINS", "").split(",") if o]

# Secret key from environment (required in production)
SECRET_KEY = os.getenv("SECRET_KEY")
if not SECRET_KEY:
    raise RuntimeError("SECRET_KEY environment variable is required in production settings")

# Database: expect DATABASE_URL in env (Render Postgres)
DATABASES["default"] = dj_database_url.config(
    conn_max_age=600,
    ssl_require=True,
)

# Static files: serve via Whitenoise
MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "wagtail.contrib.redirects.middleware.RedirectMiddleware",
]

STORAGES["staticfiles"]["BACKEND"] = "whitenoise.storage.CompressedManifestStaticFilesStorage"

try:
    from .local import *
except ImportError:
    pass
