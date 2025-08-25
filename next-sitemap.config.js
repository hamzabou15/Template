module.exports = {
  siteUrl: 'https://electriciennice-expert.fr',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/depannage-urgence-electrique-nice': 0.9,
      '/devis-electricien-gratuit': 0.9,
      '/services': 0.8,
      '/contact-electricien-nice': 0.8,
      // Priorités pour les pages géo
      '/electricien-nice-centre': 0.85,
      '/electricien-vieux-nice': 0.85,
      // Pages villes alentour
      '/electricien-cagnes-sur-mer': 0.8,
      '/electricien-saint-laurent-du-var': 0.8,
    };

    const changefreqs = {
      '/': 'daily',
      '/blog': 'weekly',
      '/blog/[slug]': 'monthly',
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};