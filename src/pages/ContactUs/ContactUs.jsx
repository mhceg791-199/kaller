// import ContactForm from "../../components/ContactUs/ContactForm/ContactForm";
// import ContactMapDetails from "../../components/ContactUs/ContactMapDetails/ContactMapDetails";
// import Map from "../../components/ContactUs/Map/Map";

// function ContactUs() {
//   return (
//     <>
//       <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10 text-black px-6 md:px-16 items-start">
//         <div className="w-full flex justify-center md:justify-end">
//           <div className="w-full md:w-10/12">
//             <ContactForm />
//           </div>
//         </div>

//         <div className="w-full flex justify-center md:justify-start">
//           <div className="w-full md:w-10/12">
//             <ContactMapDetails />
//           </div>
//         </div>
//       </div>

//       <Map />
//     </>
//   );
// }

// export default ContactUs;
import ContactForm from "../../components/ContactUs/ContactForm/ContactForm";
import ContactMapDetails from "../../components/ContactUs/ContactMapDetails/ContactMapDetails";
import Map from "../../components/ContactUs/Map/Map";

function ContactUs() {
  return (
    <section className="bg-black py-10 md:py-20 min-h-screen">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 text-white px-6 md:px-16 pt-8 items-start max-w-7xl mx-auto">
        <div className="w-full flex justify-center md:justify-end">
          <div className="w-full lg:w-11/12">
            <ContactForm />
          </div>
        </div>

        <div className="w-full flex justify-center md:justify-start">
          <div className="w-full lg:w-11/12">
            <ContactMapDetails />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Map />
      </div>
    </section>
  );
}

export default ContactUs;