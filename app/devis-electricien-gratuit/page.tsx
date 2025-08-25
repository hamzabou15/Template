// app/devis/page.js
'use client';

import { Phone, Mail, Clock, Euro, Shield } from 'lucide-react';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// Les métadonnées doivent être définies dans un composant serveur, donc nous les déplaçons
// dans un layout parent ou dans une configuration séparée

export default function DevisPage() {
    const [phone, setPhone] = useState('');

    return (
        <>
            {/* Schema.org structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Devis Électricité Gratuit à Nice",
                        "description": "Demande de devis en ligne pour travaux d'électricité à Nice",
                        "url": "https://electriciennice-expert.fr/devis",
                        "publisher": {
                            "@type": "Electrician",
                            "name": "Electricien Nice Expert",
                            "telephone": "+33756935200",
                            "areaServed": "Nice et sa région"
                        }
                    })
                }}
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Devis Électricité <span className="text-orange-500">Gratuit</span> à Nice
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Obtenez une estimation précise pour tous vos travaux d&apos;électricité à Nice.
                        Réponse sous 24h et sans engagement.
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                        Pourquoi demander un devis ?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center p-6">
                            <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Euro className="text-orange-600" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparence des prix</h3>
                            <p className="text-gray-600">Devis détaillé avec prix transparents, sans surprise ni frais cachés.</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Shield className="text-orange-600" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Garantie de qualité</h3>
                            <p className="text-gray-600">Travaux garantis et réalisés par des électriciens certifiés Qualifelec.</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <Clock className="text-orange-600" size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapidité d&apos;intervention</h3>
                            <p className="text-gray-600">Intervention rapide sur Nice et la Côte d&apos;Azur, sous 24 à 48h.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="md:flex">
                            {/* Form Column */}
                            <div className="md:w-2/3 p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Demande de devis en ligne</h2>
                                <p className="text-gray-600 mb-6">Remplissez ce formulaire pour recevoir votre devis personnalisé sous 24h.</p>

                                <form
                                    action="https://formspree.io/f/mrbazygb"
                                    method="POST"
                                    className="space-y-6"
                                >
                                    <input type="hidden" name="_subject" value="Nouvelle demande de devis - Electricien Nice" />
                                    <input type="hidden" name="_language" value="fr" />

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                                            <input
                                                type="text"
                                                id="prenom"
                                                name="prenom"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                                            <input
                                                type="text"
                                                id="nom"
                                                name="nom"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                                            <PhoneInput
                                                country={'fr'}
                                                value={phone}
                                                onChange={setPhone}
                                                inputProps={{
                                                    name: 'telephone',
                                                    required: true,
                                                    id: 'telephone',
                                                }}
                                                inputStyle={{
                                                    width: '100%',
                                                    paddingLeft: '48px',
                                                    paddingTop: '12px',
                                                    paddingBottom: '12px',
                                                    border: '1px solid #D1D5DB',
                                                    borderRadius: '0.5rem',
                                                }}
                                                buttonStyle={{
                                                    border: '1px solid #D1D5DB',
                                                    borderRight: 'none',
                                                    borderTopLeftRadius: '0.5rem',
                                                    borderBottomLeftRadius: '0.5rem',
                                                    backgroundColor: '#F9FAFB',
                                                }}
                                                containerStyle={{
                                                    marginBottom: '0',
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="adresse" className="block text-sm font-medium text-gray-700 mb-2">Adresse à Nice *</label>
                                        <input
                                            type="text"
                                            id="adresse"
                                            name="adresse"
                                            required
                                            placeholder="Votre adresse complète à Nice"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Type de service *</label>
                                        <select
                                            id="service"
                                            name="service"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white"
                                        >
                                            <option value="">Sélectionnez un service</option>
                                            <option value="installation">Installation neuve</option>
                                            <option value="renovation">Rénovation électrique</option>
                                            <option value="depannage">Dépannage urgent</option>
                                            <option value="mise-aux-normes">Mise aux normes</option>
                                            <option value="borne">Installation borne VE</option>
                                            <option value="domotique">Domotique et automatismes</option>
                                            <option value="autre">Autre service</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description des travaux *</label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows={4}
                                            required
                                            placeholder="Décrivez en détail les travaux que vous souhaitez réaliser..."
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        ></textarea>
                                    </div>

                                    <div>
                                        <label className="flex items-start">
                                            <input type="checkbox" required className="mt-1 mr-3 text-orange-500" />
                                            <span className="text-sm text-gray-600">
                                                J&apos;accepte que mes données soient utilisées pour traiter ma demande de devis.
                                                Consultez notre <a href="/politique-confidentialite" className="text-orange-500 hover:underline">politique de confidentialité</a>.
                                            </span>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                    >
                                        Envoyer ma demande de devis
                                    </button>
                                </form>
                            </div>

                            {/* Info Column */}
                            <div className="md:w-1/3 bg-gradient-to-b from-blue-900 to-blue-800 text-white p-8">
                                <h3 className="text-xl font-bold mb-6">Votre devis en 3 étapes</h3>

                                <div className="space-y-6 mb-8">
                                    <div className="flex items-start">
                                        <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                                        <div>
                                            <h4 className="font-semibold">Demande en ligne</h4>
                                            <p className="text-blue-200 text-sm">Remplissez le formulaire avec les détails de votre projet</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                                        <div>
                                            <h4 className="font-semibold">Analyse par un expert</h4>
                                            <p className="text-blue-200 text-sm">Nos électriciens étudient votre demande sous 24h</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                                        <div>
                                            <h4 className="font-semibold">Devis personnalisé</h4>
                                            <p className="text-blue-200 text-sm">Réceptionnez votre devis détaillé par email</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-blue-700 pt-6">
                                    <h3 className="text-lg font-bold mb-4">Contact direct</h3>

                                    <div className="space-y-4">
                                        <a href="tel:+33756935200" className="flex items-center text-blue-200 hover:text-white">
                                            <Phone size={20} className="mr-3" />
                                            <span>07 56 93 52 00</span>
                                        </a>

                                        <a href="mailto:contact@electriciennice-expert.fr" className="flex items-center text-blue-200 hover:text-white">
                                            <Mail size={20} className="mr-3" />
                                            <span>contact@electriciennice-expert.fr</span>
                                        </a>

                                        <div className="flex items-center text-blue-200">
                                            <Clock size={20} className="mr-3" />
                                            <span>Lun-Ven: 8h-19h | Sam: 9h-17h</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Questions fréquentes</h2>

                    <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Combien de temps pour recevoir mon devis ?</h3>
                            <p className="text-gray-600">Nous nous engageons à vous répondre sous 24h ouvrées. Pour les projets complexes, un technicien peut prendre contact pour une visite sur place à Nice.</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Le devis est-il vraiment gratuit ?</h3>
                            <p className="text-gray-600">Oui, l&apos;établissement du devis est entièrement gratuit et sans engagement. Vous ne payez que si vous acceptez notre proposition et que les travaux sont réalisés.</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Proposez-vous des financements ?</h3>
                            <p className="text-gray-600">Oui, nous vous accompagnons dans les démarches pour bénéficier des aides financières (MaPrimeRénov&apos;, CEE, etc.) et proposons des solutions de paiement échelonné.</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Intervenez-vous sur tout Nice ?</h3>
                            <p className="text-gray-600">Oui, nous couvrons toute la ville de Nice et ses alentours (Cagnes-sur-Mer, Saint-Laurent-du-Var, Villefranche-sur-Mer, etc.).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ils nous ont fait confiance à Nice</h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                            <div className="text-3xl font-bold mb-2">850+</div>
                            <p className="text-blue-200">Clients satisfaits</p>
                        </div>

                        <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                            <div className="text-3xl font-bold mb-2">15 ans</div>
                            <p className="text-blue-200">D&apos;expérience à Nice</p>
                        </div>

                        <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                            <div className="text-3xl font-bold mb-2">24h</div>
                            <p className="text-blue-200">Délai moyen de réponse</p>
                        </div>
                    </div>

                    <div className="bg-white/10 p-6 rounded-xl">
                        <p className="text-xl italic mb-4">
                            &quot;Équipe professionnelle et réactive. Devis détaillé et transparent, sans mauvaise surprise.
                            Je recommande vivement pour tous travaux électriques à Nice.&quot;
                        </p>
                        <p className="font-semibold">Martine D. - Nice Centre</p>
                    </div>
                </div>
            </section>
        </>
    );
}

















