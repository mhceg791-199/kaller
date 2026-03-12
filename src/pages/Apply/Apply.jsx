
import ApplicationForm from "../../components/apply/ApplicationForm/ApplicationForm";
import JoinUsHero from "../../components/apply/JoinUsHero/JoinUsHero";
import WhyJoinUs from "../../components/apply/WhyJoinUs/WhyJoinUs";

export default function Apply() {
  return (
    <>
      <JoinUsHero />
      <WhyJoinUs />
      <ApplicationForm/>

      {/* Bottom CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Questions About Working With Us?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Feel free to reach out to our HR team for any inquiries about
            careers at Kaller Architecture
          </p>
          <a
            href="mailto:careers@kallerarchitects.com"
            className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact HR Team
          </a>
        </div>
      </section>
    </>
  );
}