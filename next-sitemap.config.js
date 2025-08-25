module.exports = {
  siteUrl: 'https://electriciennice-expert.fr',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/services/depannage-urgence-electrique-nice': 0.9,
      '/devis-electricien-gratuit': 0.9,
      '/services': 0.8,
      '/contact': 0.8,
      '/a-propos': 0.8,
      '/portfolio': 0.8,
      '/projets': 0.8,
      '/blog': 0.8,
      // Pages géographiques
      '/zones/nice/electricien-nice-centre': 0.85,
      '/zones/nice/electricien-vieux-nice': 0.85,
      '/zones/nice/electricien-cagnes-sur-mer': 0.8,
      '/zones/nice/electricien-saint-laurent-du-var': 0.8,
      '/zones/nice/electricien-liberation': 0.8,
      '/zones/nice/electricien-carabacel': 0.8,
      '/zones/nice/electricien-cimiez': 0.8,
      '/zones/nice/electricien-riquier': 0.8,
      // Services
      '/services/installation-electrique-nice': 0.85,
      '/services/mise-aux-normes-electrique-nice': 0.85,
      '/services/renovation-electrique-nice': 0.85,
      '/services/domotique-automatisme-nice': 0.8,
      '/services/installation-climatisation-ventilation-nice': 0.8,
      '/services/installation-eclairage-luminaires-nice': 0.8,
      '/services/installation-prise-tableau-electrique-nice': 0.8,
      '/services/installation-volets-portails-electriques-nice': 0.8,
    };

    const changefreqs = {
      '/': 'daily',
      '/blog': 'weekly',
      // Dynamic routes
      '/blog/[slug]': 'monthly',
      '/portfolio/[slug]': 'monthly',
      '/projets/[slug]': 'monthly',
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};