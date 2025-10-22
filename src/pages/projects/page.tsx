
import { motion } from 'framer-motion';
import ProjectCard from '../../components/Cards/ProjectCard';
import { pageTransition, fadeIn, staggerContainer } from '../../animations/animations';
import { projects } from '../../constants/constants';

const ProjectsPage = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-black"
    >
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Workspace <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Transformations</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our portfolio of successful workspace transformations that have revolutionized how businesses operate
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20tech%20startup%20office%20headquarters%20with%20open%20workspace%2C%20collaborative%20areas%2C%20contemporary%20furniture%2C%20dark%20theme%20with%20golden%20accents%2C%20innovative%20design%2C%20large%20space&width=1200&height=600&seq=featured-project&orientation=landscape"
                alt="Featured Project"
                className="w-full h-96 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                  Featured Project
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Tech Startup Headquarters
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl">
                  A dynamic workspace designed for a fast-growing tech company, featuring collaborative zones and innovation labs that foster creativity and productivity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
                stats={project.stats}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let's discuss how we can transform your workspace into an environment that drives success and innovation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 whitespace-nowrap"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectsPage;
