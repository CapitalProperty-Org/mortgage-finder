import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../data/blogData';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <article className="flex flex-col bg-white rounded-lg overflow-hidden group h-full">
            <Link to={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden rounded-lg mb-4">
                <img
                    src={post.featured_media_url}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                />
            </Link>

            <div className="flex flex-col flex-1">
                <div className="mb-2">
                    {post.categories.map((cat, idx) => (
                        <span key={idx} className="text-[11px] font-bold text-red-500 uppercase tracking-wider mr-2">
                            {cat.name}
                        </span>
                    ))}
                </div>

                <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-[18px] font-bold text-[#2D2D2D] mb-3 group-hover:text-brand-primary transition-colors leading-tight line-clamp-2">
                        {post.title}
                    </h3>
                </Link>

                <div className="mt-auto flex items-center justify-between pt-2">
                    <time className="text-xs text-gray-500 font-medium">
                        {formattedDate}
                    </time>

                    <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-[13px] font-bold text-[#3a307f] hover:text-brand-primary transition-colors"
                    >
                        Read More <ArrowRight size={14} className="ml-1" />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
