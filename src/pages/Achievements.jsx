import React, { useState, useMemo } from 'react';
import {
    Award, Calendar, Search,
    Trophy,
    GraduationCap,
    Star,
    Medal,
    ChevronRight,
    X
} from 'lucide-react';
import { achievements } from '../data/achievementsData';
import SEO from '../components/SEO';
import { pagesSEO } from '../data/seoData';

const Achievements = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    // Get unique categories
    const categories = useMemo(() => {
        return ['All', ...new Set(achievements.map(item => item.category))];
    }, []);

    // Filter achievements
    const filteredAchievements = useMemo(() => {
        if (selectedCategory === 'All') return achievements;
        return achievements.filter(item => item.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="bg-gray-50 min-h-screen">
            <SEO
                title={pagesSEO.achievements?.title || "Achievements"}
                description={pagesSEO.achievements?.description || "Our school achievements and awards."}
                keywords={pagesSEO.achievements?.keywords || ["achievements", "awards"]}
                url={pagesSEO.achievements?.url || "/achievements"}
                image={pagesSEO.achievements?.image || "/logo.jpg"}
            />

            {/* Hero Section */}
            <section className="bg-purple-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
                        Our Achievements
                    </h1>
                    <p className="text-xl text-purple-100 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Celebrating excellence in academics, sports, and co-curricular activities.
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-white shadow-sm sticky top-16 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                        ? 'bg-purple-600 text-white shadow-md'
                                        : 'bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Grid */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredAchievements.map((item, index) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full cursor-pointer group"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                onClick={() => setSelectedAchievement(item)}
                            >
                                {/* Image */}
                                <div className="h-56 overflow-hidden relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.style.backgroundColor = '#9333ea'; // Purple fallback
                                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTYgOWg2VjV4bTcgMGMtOSAwLTkgMTMtOSAxM3Y1aDE4VjE4YzAtOS45NTctNy42MjMtMTMuMTIzLTktMTN6Ii8+PHBhdGggZD0iTTYgMTBWM2EyIDIgMCAwIDEgMi0yaDhYTIgMiAwIDAgMSAyIDJ2OCIvPjwvc3ZnPg=='; // Trophy icon base64
                                            e.target.style.objectFit = 'contain';
                                            e.target.style.padding = '20px';
                                        }}
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-purple-700 shadow-sm">
                                        {item.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center text-gray-500 text-sm mb-3">
                                        <Calendar size={14} className="mr-2" />
                                        {item.date}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                                        {item.description}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-purple-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                                        Read More <ChevronRight size={16} className="ml-1" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredAchievements.length === 0 && (
                        <div className="text-center py-20">
                            <Trophy className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                            <h3 className="text-lg font-medium text-gray-900">No achievements found</h3>
                            <p className="text-gray-500">Try selecting a different category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Modal Detail View */}
            {selectedAchievement && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedAchievement(null)}>
                    <div
                        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
                        onClick={e => e.stopPropagation()}
                        data-aos="zoom-in"
                        data-aos-duration="300"
                    >
                        <button
                            onClick={() => setSelectedAchievement(null)}
                            className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors z-10"
                        >
                            <X size={24} className="text-gray-600" />
                        </button>

                        <div className="flex flex-col md:flex-row">
                            {/* Modal Image */}
                            <div className="md:w-1/2 h-64 md:h-auto relative">
                                <img
                                    src={selectedAchievement.image}
                                    alt={selectedAchievement.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.backgroundColor = '#9333ea';
                                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTYgOWg2VjV4bTcgMGMtOSAwLTkgMTMtOSAxM3Y1aDE4VjE4YzAtOS45NTctNy42MjMtMTMuMTIzLTktMTN6Ii8+PHBhdGggZD0iTTYgMTBWM2EyIDIgMCAwIDEgMi0yaDhYTIgMiAwIDAgMSAyIDJ2OCIvPjwvc3ZnPg==';
                                        e.target.style.objectFit = 'contain';
                                        e.target.style.padding = '40px';
                                    }}
                                />
                            </div>

                            {/* Modal Content */}
                            <div className="md:w-1/2 p-8 md:p-10">
                                <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                                    {selectedAchievement.category}
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    {selectedAchievement.title}
                                </h2>
                                <div className="flex items-center text-gray-500 mb-6 font-medium">
                                    <Calendar size={18} className="mr-2" />
                                    {selectedAchievement.date}
                                </div>

                                <div className="prose prose-purple max-w-none text-gray-600">
                                    <p className="text-lg leading-relaxed mb-4">
                                        {selectedAchievement.details || selectedAchievement.description}
                                    </p>
                                    {/* Additional details could go here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Achievements;
