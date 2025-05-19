import { getPostBySlug } from '../../../../lib/posts';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <article className="prose prose-lg dark:prose-invert mx-auto p-6">
      <h1>{post.title}</h1>
      <p className="text-gray-400">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
