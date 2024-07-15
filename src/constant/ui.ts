export const candi = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ruwatan_Tirta_Candi_Jolotundo_1.jpg/1280px-Ruwatan_Tirta_Candi_Jolotundo_1.jpg';
export const majapahit = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgokoHUj8SqTg1z18kvVbKkwh2oY2uXa1c-QBoMXJ3PYVNcheB4AQXh-0ehQAkT5wOS7JjNaojpuOkCE5uCDmfqmkkg0FGKAi8JL6Dt8qHZNhbygqwMSUVspoKiHzmsgSqP5cPjlf0wO10_/s501/lambang+majapahit-01.png';
import { t } from 'i18next';

type Explore = {
    image: string,
    title: string,
    desc: string
}

export const explore: Explore[] = [
    {
        image: 'https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/melasti.jpg',
        title: 'Melasti',
        desc: t('explore.melasti.desc') // Menggunakan fungsi t untuk menerjemahkan deskripsi
    },
    {
        image: 'https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/ruwatan.jpg',
        title: 'Ruwat Agung',
        desc: t('explore.ruwatAgung.desc')
    },
    {
        image: 'https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/tari_topeng.jpg',
        title: 'Tari Topeng',
        desc: t('explore.topeng.desc')
    },
    {
        image: '/src/components/images/ritual_suro.jpg',
        title: 'Ritual 1 Suro',
        desc: t('explore.suro.desc')
    },
    {
        image: '/src/components/images/ruwat_sumber.jpg',
        title: 'Ruwat Sumber Masyarakat',
        desc: t('explore.ruwatSumber.desc')
    },

    

];


export const kemendikbud = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg/800px-Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg.png";

