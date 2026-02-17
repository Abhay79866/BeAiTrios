import { FC } from 'react';
import { SERVICES_DATA } from '../constants';

const ServiceSection: FC = () => {
    return (
        <section className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden" id="services">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl mix-blend-screen animate-blob"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl mix-blend-screen animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary/80">Our Expertise</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                        Beyond Development. <br />
                        <span className="italic text-primary">We Build Digital Growth.</span>
                    </h2>
                    <p className="text-lg md:text-xl opacity-70 max-w-3xl mx-auto leading-relaxed">
                        {SERVICES_DATA.subHeader}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {SERVICES_DATA.sections.map((service, index) => (
                        <div
                            key={index}
                            className="glass-card p-8 md:p-10 rounded-[2rem] hover:bg-white/40 transition-all duration-500 group border-white/20 hover:border-primary/20 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110 origin-top-right">
                                <span className="material-symbols-outlined text-9xl">
                                    {index === 0 ? 'smart_toy' : index === 1 ? 'layers' : index === 2 ? 'rocket_launch' : 'query_stats'}
                                </span>
                            </div>

                            <div className="mb-8 relative z-10">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-primary text-2xl">
                                        {index === 0 ? 'smart_toy' : index === 1 ? 'layers' : index === 2 ? 'rocket_launch' : 'query_stats'}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-3 font-serif">{service.head}</h3>
                                <p className="opacity-70 text-sm md:text-base leading-relaxed">{service.subHead}</p>
                            </div>

                            <ul className="space-y-4 relative z-10">
                                {service.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3 group/item">
                                        <span className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                                            <span className="material-symbols-outlined text-[10px]">check</span>
                                        </span>
                                        <div>
                                            <span className="font-bold text-sm block mb-1 group-hover/item:text-primary transition-colors">{point.title}</span>
                                            <span className="text-xs opacity-60 leading-relaxed block">{point.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
