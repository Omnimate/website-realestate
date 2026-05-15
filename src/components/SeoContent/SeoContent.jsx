import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const fallbackImage =
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'

function PostCard({ post }) {
  const { ref, inView } = useScrollAnimation({
    threshold: 0.15,
  })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-[#ebe5d9] bg-white shadow-[0_18px_52px_rgba(0,0,0,0.05)] transition-all duration-500"
    >
      <div className="relative overflow-hidden">
        <img
          src={post.image || fallbackImage}
          alt={post.title}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            event.currentTarget.src = fallbackImage
          }}
          className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        <div className="absolute bottom-5 left-5">
          <span className="rounded-full bg-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white backdrop-blur-xl">
            Market Insight
          </span>
        </div>
      </div>

      <div className="p-7">
        <h3 className="text-2xl font-semibold leading-tight text-[#151515]">
          {post.title}
        </h3>

        <p className="mt-4 text-base leading-8 text-[#5e5e5e]">
          {post.excerpt}
        </p>

        <div className="mt-7 inline-flex items-center rounded-full border border-[#c7a86b]/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a7a45]">
          Preview Coming Soon
        </div>
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
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-[#b79b5b]">
            Editorial Content
          </p>

          <h2 className="font-heading text-[clamp(2.1rem,4vw,3.35rem)] font-semibold leading-tight text-[#151515]">
            Market Intelligence
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5e5e5e]">
            Timely commentary on luxury real estate trends, portfolio strategy,
            wealth preservation, and global investment opportunities.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post, index) => (
            <PostCard
              key={`${post.title}-${index}`}
              post={post}
            />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-dashed border-[#ddd3c3] bg-white/70 p-8 text-center md:p-10">
          <p className="text-xs uppercase tracking-[0.32em] text-[#b79b5b]">
            More Content
          </p>

          <h3 className="mt-4 text-2xl font-semibold text-[#151515] md:text-3xl">
            Expert Articles & Reviews Coming Soon
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#5e5e5e]">
            We are preparing market reports, property notes, and selected client stories.
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
