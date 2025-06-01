import { Calendar, User, Clock, ArrowRight, Eye } from "lucide-react";
import Link from "next/link";

import { PostData } from "../interfaces/markdown.interfaces";

interface FeaturedPostProps {
  post: PostData;
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <section className="mb-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
              Destacado
            </span>
          </div>
        </div>
        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors cursor-pointer">
            {post.title}
          </h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{post.views}</span>
              </div>
            </div>
            <Link href={`/posts/${post.id}`}>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Leer más
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
