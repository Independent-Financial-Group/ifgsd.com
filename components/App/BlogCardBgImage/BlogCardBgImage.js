import React from "react";

const BlogCardBgImage = ({
  imageUrl = "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  title,
  excerpt,
}) => {
  return (
    <article className="relative overflow-hidden rounded-lg shadow transition hover:-translate-y-4 hover:shadow-xl">
      <img
        alt="Office"
        src={imageUrl}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative bg-gradient-to-t from-gray-900/90 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <button className="mb-5 inline-flex items-center rounded-md bg-hazard-blue-100 px-2 py-1 text-xs font-medium text-hazard-blue-600 ring-1 ring-inset ring-hazard-blue-500/10">
            Category
          </button>
          <time datetime="2022-10-10" className="block text-xs text-white/90">
            {" "}
            10th Oct 2022{" "}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-white">{title}</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {excerpt}
          </p>
        </div>
      </div>
    </article>
  );
};

export default BlogCardBgImage;
