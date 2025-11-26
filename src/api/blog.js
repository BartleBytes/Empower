const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api/v2";

async function fetchJson(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }
  return res.json();
}

function normalizePage(item) {
  return {
    ...item,
    id: item.id ?? item.meta?.id,
    slug: item.slug ?? item.meta?.slug,
  };
}

export async function fetchPosts() {
  const data = await fetchJson(
    "/pages/?type=blog.BlogPage&fields=title,slug,intro,first_published_at,hero_image&order=-first_published_at"
  );
  return {
    ...data,
    items: (data.items || []).map(normalizePage),
  };
}

export async function fetchPostBySlug(slug) {
  const data = await fetchJson(
    `/pages/?type=blog.BlogPage&slug=${encodeURIComponent(
      slug
    )}&fields=title,slug,intro,body,hero_image,first_published_at`
  );
  const item = data.items?.[0];
  return item ? normalizePage(item) : null;
}

export function getHeroImageUrl(heroImage) {
  return heroImage?.meta?.download_url || null;
}
