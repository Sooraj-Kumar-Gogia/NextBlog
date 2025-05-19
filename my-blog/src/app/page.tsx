import { getAllPosts } from '../../lib/posts';
import Link from 'next/link';

export default async function Home() {
  const posts = getAllPosts(); // Keep this on the server

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">My Blog</h1>
      {posts.map((post) => (
        <div key={`${post.slug}-${post.date}`} className="mb-6">
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-xl font-semibold text-blue-600 hover:underline">
              {post.title}
            </h2>
          </Link>
          <p className="text-gray-500">
            {/* Safe formatting */}
            {new Date(post.date).toISOString().split('T')[0]}
          </p>
        </div>
      ))}
    </main>
  );
}
