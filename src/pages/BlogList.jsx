import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts, getHeroImageUrl } from "../api/blog";
import "../styles/Blog.css";

function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetchPosts()
      .then((data) => {
        if (!isMounted) return;
        setPosts(data.items || []);
        setError(null);
      })
      .catch((err) => {
        if (!isMounted) return;
        setError("Could not load blog posts. Please try again.");
        console.error(err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="blog-page">
      <header className="blog-header">
        <p className="eyebrow">Insights</p>
        <h1>Empower Blog</h1>
        <p className="lede">
          Articles and resources from our speech-language pathologists to help you and your family
          communicate with confidence.
        </p>
      </header>

      {loading && <div className="blog-card blog-card__placeholder">Loading posts…</div>}
      {error && <div className="blog-card blog-card__error">{error}</div>}

      {!loading && !error && posts.length === 0 && (
        <div className="blog-card blog-card__placeholder">No posts yet. Check back soon!</div>
      )}

      <div className="blog-grid">
        {posts.map((post) => {
          const hero = getHeroImageUrl(post.hero_image);
          return (
            <article key={post.id || post.slug} className="blog-card">
              {hero && (
                <Link to={`/blog/${post.slug}`} className="blog-card__imageLink">
                  <img src={hero} alt={post.title} className="blog-card__image" />
                </Link>
              )}
              <div className="blog-card__content">
                <p className="blog-card__date">
                  {post.first_published_at
                    ? new Date(post.first_published_at).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    : ""}
                </p>
                <h2 className="blog-card__title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                {post.intro && (
                  <div
                    className="blog-card__intro"
                    dangerouslySetInnerHTML={{ __html: post.intro }}
                  />
                )}
                <Link to={`/blog/${post.slug}`} className="blog-card__cta">
                  Read more →
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}

export default BlogList;
