import React from 'react';
import { blogData } from '../data/blogData';
import BlogCard from '../components/BlogCard';
import BlogSidebar from '../components/BlogSidebar';
import BlogHero from '../components/BlogHero';

const BlogList = () => {
    return (
        <div className="min-h-screen bg-white pb-20">
            <BlogHero />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar - Left Side on Desktop */}
                    <BlogSidebar />

                    {/* Main Content Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            {blogData.map((post) => (
                                <BlogCard key={post.id} post={post} />
                            ))}
                        </div>

                        {/* Pagination Placeholder */}
                        <div className="mt-16 flex justify-center">
                            <nav className="flex items-center gap-2">
                                <button className="w-10 h-10 flex items-center justify-center rounded border border-brand-primary bg-brand-primary text-white font-bold">1</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:border-brand-primary hover:text-brand-primary transition-colors">2</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:border-brand-primary hover:text-brand-primary transition-colors">3</button>
                                <span className="px-2 text-gray-400">...</span>
                                <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:border-brand-primary hover:text-brand-primary transition-colors">10</button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogList;
