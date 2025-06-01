import React from "react";
import { PostData } from "../interfaces/markdown.interfaces";
import { Calendar, Clock, Eye, User } from "lucide-react";
import Link from "next/link";

const Article = ({ post }: { post: PostData }) => {
  return (
    <article
      key={post.id}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories.map((category, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
        <Link href={`/posts/${post.id}`}>
        <h4 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
          {post.title}
        </h4>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{post.date}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{post.views}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
