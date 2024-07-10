import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="w-100 sm:w-96 bg-base-100 shadow-xl dark:outline dark:outline-1 rounded d-flex">
      <div className="card-body">
        <figure className="">
          <img src={post.frontmatter.cover_image} alt="Blog cover image" />
        </figure>
        <div className="p-2 rounded-md mb-2 text-end">
          Posted on {post.frontmatter.date}
        </div>
        <h3 className="card-title">{post.frontmatter.title}</h3>

        <figcaption className="flex items-center space-x-4">
          <img
            src={post.frontmatter.profile_photo || "/images/profile_photos/default.png"}
            alt="Author profile photo"
            className="w-14 h-14 rounded-full object-cover"
          ></img>
          <h4>
            Written by{" "}
            <span className="font-bold">{post.frontmatter.author}</span>
          </h4>
        </figcaption>

        <p>{post.frontmatter.excerpt}</p>
        <div className="post-more-link">
          <Link href={`/posts/${post.rawName}`} passHref>
            <button className="post-more-btn text-light">Read More</button>
          </Link>
        </div>

      </div>
    </div>
  );
}
