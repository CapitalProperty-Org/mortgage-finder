import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, blogData } from '../data/blogData';

const categories = [
    { name: 'All', count: 12, checked: true },
    { name: 'Buying Guides', count: 5, checked: false },
    { name: 'Guides & Advice', count: 8, checked: false },
    { name: 'Mortgage Guides', count: 4, checked: false },
    { name: 'News', count: 3, checked: false },
    { name: 'Prestige Magazine', count: 2, checked: false },
    { name: 'Property Guides', count: 6, checked: false },
];

const BlogSidebar = () => {
    // Determine popular posts (for now, just take the first 3)
    const popularPosts = blogData.slice(0, 3);

    return (
        <aside className="w-full lg:w-1/4 space-y-8">
            {/* Categories Filter */}
            <div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">Filter posts by categories</h3>
                <div className="space-y-3">
                    {categories.map((cat, idx) => (
                        <label key={idx} className="flex items-center group cursor-pointer">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    defaultChecked={cat.checked}
                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 shadow-sm transition-all hover:border-brand-primary checked:border-brand-primary checked:bg-brand-primary"
                                />
                                <svg
                                    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12" className="w-3.5 h-3.5" />
                                </svg>
                            </div>
                            <span className="ml-3 text-[#555] group-hover:text-brand-primary transition-colors text-[15px]">
                                {cat.name}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="border-t border-gray-100 pt-8"></div>

            {/* Popular Posts */}
            <div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-6">Popular Posts</h3>
                <div className="space-y-6">
                    {popularPosts.map((post) => (
                        <Link key={post.id} to={`/blog/${post.slug}`} className="flex gap-4 group">
                            <div className="w-[100px] h-[70px] flex-shrink-0 overflow-hidden rounded-md">
                                <img
                                    src={post.featured_media_url}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex-1">
                                <span className="text-[10px] font-bold text-red-500 uppercase tracking-wide mb-1 block">
                                    {post.categories[0]?.name || 'Guide'}
                                </span>
                                <h4 className="text-[14px] font-bold text-[#2D2D2D] leading-snug group-hover:text-brand-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h4>
                                <time className="text-[11px] text-gray-400 mt-1 block">
                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </time>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default BlogSidebar;
