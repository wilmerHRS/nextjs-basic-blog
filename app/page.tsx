import {
  Article,
  Categories,
  FeaturedPost,
  Newsletter,
  PopularPosts,
} from "./components";
import { MarkdownUtils } from "./utils/markdown.utils";
import { CATEGORIES } from "./utils/constants/categories.constants";

export default async function HomePage() {
  const posts = await MarkdownUtils.getAllPosts();
  const popularPosts = MarkdownUtils.getPopularPosts(posts);

  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Contenido Principal */}
          <main className="lg:col-span-3">
            {/* Post Destacado */}
            <FeaturedPost post={posts[3]} />

            {/* Grid de Posts */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Últimos Artículos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <Article key={post.id} post={post} />
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="space-y-8">
              {/* Categorías */}
              <Categories categories={CATEGORIES} />

              {/* Posts Populares */}
              <PopularPosts posts={popularPosts} />

              {/* Newsletter */}
              <Newsletter />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
