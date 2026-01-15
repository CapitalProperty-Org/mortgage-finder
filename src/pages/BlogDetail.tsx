import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogData } from '../data/blogData';

const BlogDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const post = blogData.find(p => p.slug === slug);

    useEffect(() => {
        if (!post) {
            // Optional: redirect to blog list if not found
            // navigate('/blog'); 
        }
        window.scrollTo(0, 0);
    }, [post, navigate]);

    if (!post) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h2>
                <Link to="/blog" className="text-brand-primary font-medium hover:underline">
                    ← Back to Blog
                </Link>
            </div>
        );
    }

    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
            <Link to="/blog" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand-primary mb-8 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
            </Link>

            <header className="mb-8 md:mb-12">
                <div className="flex flex-wrap gap-2 mb-6">
                    {post.categories.map((cat, idx) => (
                        <span key={idx} className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-semibold">
                            {cat.name}
                        </span>
                    ))}
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {post.title}
                </h1>

                <div className="flex items-center justify-between border-y border-gray-100 py-4">
                    <div className="flex items-center gap-3">
                        <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-10 h-10 rounded-full bg-gray-100"
                        />
                        <div>
                            <span className="block text-sm font-bold text-gray-900">
                                {post.author.name}
                            </span>
                            <span className="block text-xs text-gray-500">
                                Author
                            </span>
                        </div>
                    </div>
                    <time className="text-sm text-gray-500 font-medium">
                        {formattedDate}
                    </time>
                </div>
            </header>

            <div className="relative aspect-video mb-10 overflow-hidden rounded-xl shadow-lg">
                <img
                    src={post.featured_media_url}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div
                className="prose prose-lg prose-indigo max-w-none 
                prose-headings:font-bold prose-headings:text-gray-900 
                prose-p:text-gray-600 prose-p:leading-relaxed
                prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-img:shadow-md
                prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
};

export default BlogDetail;
