import Nav from './components/Nav';
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from './sections';

const App = () => {
  return (
    <main className="relative">
      <Nav />

      <section className="xl:padding-l wide:padding-r padding-b">
        {/* Hero Section */}
        <Hero />
      </section>

      <section className="padding">
        {/* PopularProducts Section */}
        <PopularProducts />
      </section>

      <section className="padding">
        {/* SuperQuality Section */}
        <SuperQuality />
      </section>

      <section className="padding-x py-10">
        {/* Services Section */}
        <Services />
      </section>

      <section className="padding">
        {/* SpecialOffer Section */}
        <SpecialOffer />
      </section>

      <section className="padding bg-pale-blue">
        {/* CustomerReviews Section */}
        <CustomerReviews />
      </section>

      <section className="padding-x w-full py-16 sm:py-32">
        {/* Subscribe Section */}
        <Subscribe />
      </section>

      <section className="padding-x padding-t bg-black pb-8">
        {/* Footer Section */}
        <Footer />
      </section>
    </main>
  );
};

export default App;
