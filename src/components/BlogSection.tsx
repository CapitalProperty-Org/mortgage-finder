import React from 'react';

const BlogSection = () => {
    const blogs = [
        {
            image: '/assets/blog-1.jpeg',
            category: 'Guides & Tips',
            title: 'Top tips on how to secure a mortgage in Dubai for expats',
            date: 'July 5, 2020',
            link: '#'
        },
        {
            image: '/assets/blog-2.jpeg',
            category: 'Guides & Tips',
            title: '6 questions a bank will ask as part of your mortgage application',
            date: 'March 26, 2020',
            link: '#'
        },
        {
            image: '/assets/blog-3.jpeg',
            category: 'Guides & Tips',
            title: 'How we assess the best home loan for you',
            date: 'August 22, 2019',
            link: '#'
        }
    ];

    return (
        <div className="py-20 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-[2.5rem] font-bold text-[#333] leading-tight">
                            Stay informed with our<br />mortgage insights
                        </h2>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className="text-[#666] text-[1rem] mb-4">
                            Latest news, tips and updates on the UAE mortgage market.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center text-[#3a307f] font-bold text-[0.95rem] hover:bg-[#3a307f] hover:text-white transition-colors border-[1px] border-[#3a307f] bg-white px-4 py-2.5 rounded-sm"
                        >
                            Read all blogs →
                        </a>
                    </div>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div key={index} className="group cursor-pointer">
                            {/* Image */}
                            <div className="relative overflow-hidden rounded-t-lg">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-[220px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content with curved top overlapping image */}
                            <div className="relative -mt-6 p-6 bg-white rounded-t-3xl shadow-lg">
                                {/* Category */}
                                <div className="mb-3">
                                    <span className="text-[#EA3934] text-[0.6rem]  uppercase tracking-wide">
                                        {blog.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-[1.2rem] font-bold text-[#333] mb-4 leading-tight transition-colors">
                                    {blog.title}
                                </h3>

                                {/* Footer - Date and Read More */}
                                <div className="flex items-center justify-between">
                                    <span className="text-[#999] text-[0.85rem]">
                                        {blog.date}
                                    </span>
                                    <a
                                        href={blog.link}
                                        className="text-[#3a307f] text-[0.85rem] hover:text-[#EA3934] transition-colors"
                                    >
                                        Read more →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
