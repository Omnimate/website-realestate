import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const fallbackImage =
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'

function PostCard({ post }) {
  const { ref, inView } = useScrollAnimation({
    threshold: 0.15,
  })

  const handleReadMore = (event) => {
    event.preventDefault()

    // TEMPORARY FIX FOR 404 BLOG LINKS
    alert('Luxury market insights and review videos coming soon.')
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[2.2rem] border border-[#ebe5d9] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.06)] transition-all duration-500"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={post.image || fallbackImage}
          alt={post.title}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            event.target.src = fallbackImage
          }}
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="absolute bottom-5 left-5">
          <span className="rounded-full bg-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white backdrop-blur-xl">
            Market Insight
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-8">

        <h3 className="text-2xl font-semibold leading-tight text-[#151515]">
          {post.title}
        </h3>

        <p className="mt-5 text-base leading-8 text-[#5e5e5e]">
          {post.excerpt}
        </p>

        {/* BUTTON */}
        <button
          type="button"
          onClick={handleReadMore}
          className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b89554] transition-all duration-300 hover:gap-5"
        >
          Read More
          <span>→</span>
        </button>
      </div>
    </motion.article>
  )
}

PostCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    image: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
}

function SeoContent({ blogPosts }) {
  return (
    <section className="bg-[#f8f6f2] px-6 py-24 md:px-12">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-16 text-center">

          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#b79b5b]">
            Editorial Content
          </p>

          <h2 className="text-4xl font-semibold text-[#151515] md:text-5xl">
            Market Intelligence
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#5e5e5e]">
            Timely commentary on luxury real estate trends, portfolio strategy,
            wealth preservation, and global investment opportunities.
          </p>
        </div>

        {/* POSTS */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post, index) => (
            <PostCard
              key={`${post.title}-${index}`}
              post={post}
            />
          ))}
        </div>

        {/* COMING SOON SECTION */}
        <div className="mt-20 rounded-[2.5rem] border border-dashed border-[#ddd3c3] bg-white/70 p-12 text-center">

          <p className="text-xs uppercase tracking-[0.4em] text-[#b79b5b]">
            More Content
          </p>

          <h3 className="mt-5 text-3xl font-semibold text-[#151515]">
            Expert Articles & Reviews Coming Soon
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5e5e5e]">
            We are currently preparing exclusive luxury real estate reports,
            cinematic property showcases, and client investment stories.
          </p>
        </div>
      </div>
    </section>
  )
}

SeoContent.propTypes = {
  blogPosts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      image: PropTypes.string,
      link: PropTypes.string,
    }),
  ).isRequired,
}

export default SeoContent