import { Eye, TrendingUp } from "lucide-react";
import React from "react";

import { PopularPost } from "../interfaces/posts.interface";
import Link from "next/link";

interface PopularPostsProps {
  posts: PopularPost[];
}

const PopularPosts = ({ posts }: PopularPostsProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5" />
        Más Populares
      </h3>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
              {index + 1}
            </span>
            <div className="flex-1">
              <Link
                href={`/posts/${post.id}`}
                className="text-gray-900 hover:text-blue-600 transition-colors font-medium line-clamp-2"
              >
                {post.title}
              </Link>
              <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                <Eye className="w-3 h-3" />
                <span>{post.views} vistas</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
