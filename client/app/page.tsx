import Banner from '@/components/features/Banner/Banner';
import FeaturedProduct from '@/components/features/FeaturedProduct/FeaturedProduct';
import LatestDealSlider from '@/components/features/LatestDealSlider/LatestDealSlider';

export default function Home() {
  return (
    <>
      <Banner />
      <LatestDealSlider />
      <FeaturedProduct />
    </>
  );
}
