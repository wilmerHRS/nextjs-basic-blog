// import { notFound } from "next/navigation";
import { Calendar, User, Tag, Clock } from "lucide-react"

import { MarkdownUtils } from "@/app/utils/markdown.utils"; 

export async function generateStaticParams() {
    const posts = MarkdownUtils.getPostsName();

    return posts.map((slug) => ({
        slug
    }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await MarkdownUtils.getPost(slug);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header con gradiente */}
          <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white p-8 md:p-12">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">{data.title}</h1>

              {/* Metadatos con iconos */}
              <div className="flex flex-wrap gap-6 text-blue-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{data.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">{data.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{data.readTime}</span>
                </div>
              </div>

              {/* Categorías como badges */}
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-blue-200" />
                {data.categories.map((category, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium border border-white/30"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Contenido del artículo */}
          <div className="p-8 md:p-12">
            <div
              dangerouslySetInnerHTML={{ __html: data.contentHtml }}
              className="prose-custom"
            />
          </div>
        </article>
      </div>
    </div>
  );
}
