import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPostBySlug, getHeroImageUrl } from "../api/blog";
import "../styles/Blog.css";

function renderBody(blocks = []) {
  return blocks.map((block, idx) => {
    if (block.type === "paragraph") {
      return (
        <div
          key={`${block.id || block.type}-${idx}`}
          className="blog-body__paragraph"
          dangerouslySetInnerHTML={{ __html: block.value }}
        />
      );
    }

    if (block.type === "image") {
      // StreamField image blocks only return an id; we don't fetch renditions here.
      return (
        <div key={`${block.id || "image"}-${idx}`} className="blog-body__imagePlaceholder">
          <div className="blog-body__imageNote">Image block</div>
        </div>
      );
    }

    return (
      <div key={`${block.type}-${idx}`} className="blog-body__unknown">
        Unsupported block: {block.type}
      </div>
    );
  });
}

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cleanedSlug = slug?.replace(/\/+$/, "");

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetchPostBySlug(cleanedSlug)
      .then((data) => {
        if (!isMounted) return;
        setPost(data);
        setError(null);
      })
      .catch((err) => {
        if (!isMounted) return;
        setError("Could not load this post. Please try again.");
        console.error(err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [cleanedSlug]);

  if (loading) {
    return (
      <main className="blog-page">
        <div className="blog-card blog-card__placeholder">Loading post…</div>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="blog-page">
        <div className="blog-card blog-card__error">{error || "Post not found."}</div>
        <Link to="/blog" className="blog-card__cta">
          Back to blog
        </Link>
      </main>
    );
  }

  const hero = getHeroImageUrl(post.hero_image);

  return (
    <main className="blog-page blog-page--detail">
      <nav className="blog-breadcrumb">
        <Link to="/blog">← Back to blog</Link>
      </nav>

      <article className="blog-post-detail">
        <header className="blog-header">
          <p className="eyebrow">Blog</p>
          <h1>{post.title}</h1>
          {post.first_published_at && (
            <p className="blog-post__meta">
              {new Date(post.first_published_at).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
          {hero && <img src={hero} alt={post.title} className="blog-hero" />}
          {post.intro && (
            <div
              className="blog-post__intro"
              dangerouslySetInnerHTML={{ __html: post.intro }}
            />
          )}
        </header>

        <section className="blog-body">{renderBody(post.body)}</section>
      </article>
    </main>
  );
}

export default BlogPost;
