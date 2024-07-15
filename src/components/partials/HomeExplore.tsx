import { explore } from "@/constant/ui";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const HomeExplore = () => {
    const { t } = useTranslation();
    const [showDesc, setShowDesc] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setShowDesc(prevState => prevState === index? null : index); // Toggle showDesc state
      };

    return (
        <div className="bg-[#E8D3B7] pb-10">
            <div className="flex flex-row justify-between">
                <div className="space-y-4 text-center mt-5">
                    <p className="text-2xl font-semibold">{t('home.explore.title')}</p>
                    <p className="text-base">
                        {t('home.explore.desc')}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-9 gap-8 mt-8">
                {explore.map((e, index) => (
                    <div
                        key={e.title}
                        className="h-40 sm:h-80 col-span-12 sm:col-span-3 relative shadow-lg rounded-lg overflow-hidden group ml-10"
                        onClick={() => handleCardClick(index)}
                    >
                        <img
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            src={e.image}
                            alt="Descriptive alt text"
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative p-4 flex flex-col items-start justify-end h-full">
                            <p className="text-white text-center">{e.title}</p>
                            {showDesc === index && (
                                <p className="text-sm sm:text-base text-white text-center text-justify mt-2">{e.desc}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
