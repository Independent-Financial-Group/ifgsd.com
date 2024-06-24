import React from "react";
import Link from "next/link";

const BlogCardBgImage = ({
  imageUrl = "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  title,
  excerpt,
  link,
  colSpan,
  positionTop,
}) => {
  return (
    <Link
      href={link}
      className={`group relative h-full overflow-hidden rounded-lg shadow transition duration-700 hover:-translate-y-4 hover:shadow-xl col-span-${colSpan}`}
    >
      <img
        alt="Office"
        src={imageUrl}
        className={`absolute ${positionTop && "object-top"} ${
          !positionTop && "object-center"
        } inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110`}
      />

      <div className="relative h-full bg-gradient-to-t from-gray-900/90 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <Link href={link}>
            <h3 className="mt-0.5 line-clamp-1 text-lg font-semibold text-white">
              {title}
            </h3>
          </Link>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCardBgImage;
