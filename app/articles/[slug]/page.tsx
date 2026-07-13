import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import type { Options } from "@contentful/rich-text-react-renderer";
import { getArticleBySlug, getAllSlugs } from "@/lib/contentful";
import { Footer } from "../../components/Footer";

/* ── Static params ── */
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

/* ── Rich text render options ── */
const richTextOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <strong className="font-bold text-gray-900">{text}</strong>
    ),
    [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>,
    [MARKS.CODE]: (text) => (
      <code className="bg-gray-100 text-rose-600 px-1.5 py-0.5 rounded text-sm font-mono">
        {text}
      </code>
    ),
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-4xl font-bold text-gray-900 mt-10 mb-4 leading-tight">
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-3 leading-tight">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
        {children}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="text-xl font-semibold text-gray-800 mt-5 mb-2">
        {children}
      </h4>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-gray-700 leading-relaxed mb-5 text-[17px]">
        {children}
      </p>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc list-outside ml-6 mb-5 space-y-2 text-gray-700 text-[17px]">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal list-outside ml-6 mb-5 space-y-2 text-gray-700 text-[17px]">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="leading-relaxed">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 bg-amber-50 rounded-r-xl italic text-gray-700 text-[17px]">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => (
      <hr className="my-10 border-gray-200" />
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const asset = node.data?.target;
      if (!asset?.fields?.file) return null;
      const { url, details } = asset.fields.file;
      const imageUrl = url?.startsWith("//") ? `https:${url}` : url;
      const alt = asset.fields.title ?? asset.fields.description ?? "";
      const width = details?.image?.width ?? 800;
      const height = details?.image?.height ?? 450;

      return (
        <figure className="my-8 rounded-2xl overflow-hidden shadow-md">
          <Image
            src={imageUrl}
            alt={alt}
            width={width}
            height={height}
            className="w-full object-cover"
          />
          {alt && (
            <figcaption className="text-center text-sm text-gray-500 mt-2 pb-2">
              {alt}
            </figcaption>
          )}
        </figure>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-700 underline underline-offset-2 hover:text-amber-900 transition-colors"
      >
        {children}
      </a>
    ),
  },
};

/* ── Page ── */
export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <main className="min-h-screen bg-cream text-gray-900">
      {/* ── Hero Banner ── */}
      <div className="relative w-full h-[55vh] min-h-[360px] max-h-[600px]">
        {article.bannerImageUrl ? (
          <Image
            src={article.bannerImageUrl}
            alt={article.bannerImageAlt ?? article.title}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-200" />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Back button */}
        <div className="absolute top-8 left-6 md:left-16 z-10">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-white/25"
          >
            <ArrowLeft size={15} />
            All Articles
          </Link>
        </div>

        {/* Title over hero */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-10 max-w-5xl mx-auto">
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
            {article.title}
          </h1>
        </div>
      </div>

      {/* ── Article Body ── */}
      <article className="max-w-3xl mx-auto px-6 md:px-8 py-14">
        {/* Meta row */}
        <div className="flex items-center gap-4 mb-10 pb-8 border-b border-gray-200">
          <span className="inline-flex items-center gap-1.5 text-gray-500 text-sm">
            <Calendar size={14} />
            Explore Jogja Editorial
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span className="text-sm text-gray-400">
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Rich text content */}
        {article.content ? (
          <div className="prose-custom">
            {documentToReactComponents(article.content, richTextOptions)}
          </div>
        ) : (
          <p className="text-gray-400 italic">No content available.</p>
        )}

        {/* Back link at bottom */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <a
            href="/articles"
            className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to all articles
          </a>
        </div>
      </article>

      <Footer />
    </main>
  );
}
