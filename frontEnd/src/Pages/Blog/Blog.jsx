import React from "react";

const blogs = [
  {
    id: 1,
    title: "How New Authors Can Publish eBooks Easily",
    excerpt:
      "Learn how independent authors can publish their eBooks and reach a global audience without traditional barriers.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    date: "Jan 10, 2025",
  },
  {
    id: 2,
    title: "Why Digital Reading Is the Future",
    excerpt:
      "Digital reading platforms are changing how people consume knowledge. Discover the benefits of eBooks.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    date: "Jan 18, 2025",
  },
  {
    id: 3,
    title: "Tips for Writing Your First eBook",
    excerpt:
      "Writing your first eBook can be challenging. These practical tips will help you start strong.",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    date: "Jan 25, 2025",
  },
  {
    id: 4,
    title: "How to Market Your eBook Successfully",
    excerpt:
      "Publishing is just the beginning. Learn proven strategies to market your eBook and reach more readers.",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
    date: "Feb 02, 2025",
  },
  {
    id: 5,
    title: "Common Mistakes New Authors Should Avoid",
    excerpt:
      "Many first-time authors make avoidable mistakes. Discover what to avoid when publishing your eBook.",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    date: "Feb 08, 2025",
  },
  {
    id: 6,
    title: "Building a Loyal Reader Community",
    excerpt:
      "A loyal reader base is key to long-term success. Learn how to connect with readers and grow your audience.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
    date: "Feb 15, 2025",
  },
];


const Blog = () => {
  return (
    <section className="bg-white">
      {/* ===== Hero ===== */}
      <div className="bg-gradient-to-r from-[#000080] via-[#0047AB] to-[#82C8E5] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Blog
          </h1>
          <p className="max-w-2xl mx-auto text-blue-100 text-lg">
            Insights, tips, and stories for authors and readers on e-book.
          </p>
        </div>
      </div>

      {/* ===== Blog Cards ===== */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

/* ===== Blog Card Component ===== */

const BlogCard = ({ blog }) => {
  return (
    <div
      className="group bg-white rounded-xl overflow-hidden shadow-sm 
                 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-52 w-full object-cover 
                     transform group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <p className="text-sm text-[#6D8196]">{blog.date}</p>

        <h3 className="text-xl font-semibold text-[#000080] group-hover:text-[#0047AB] transition">
          {blog.title}
        </h3>

        <p className="text-[#6D8196] leading-relaxed">
          {blog.excerpt}
        </p>

        <button className="text-[#0047AB] font-semibold hover:text-[#000080] transition">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default Blog;
