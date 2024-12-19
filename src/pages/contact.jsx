import FooterPage from "../components/Fragments/FooterPage";

const ContactPage = () => {
  const classInput = `bg-[#F5F5F5] p-2 rounded text-sm`;
  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <div className="flex-grow">
        <div className="flex flex-col p-5 md:flex-row md:justify-between">
          <div className="mb-5 md:w-1/2">
            <div className="text-sm mb-2">
              <h1 className="text-lg">Call To Us</h1>
              <p>we are available 24/7, 7 days a week</p>
              <p>Phone: +6287187373801</p>
            </div>
            <div className="text-sm">
              <h1 className="text-lg">Write To Us</h1>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@bukatoko.com</p>
              <p>Emails: support@bukatoko.com</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex gap-2 flex-wrap justify-between">
              <input
                type="text"
                name="name"
                id="name"
                className={classInput}
                placeholder="Your Name"
              />
              <input
                type="email"
                name=""
                id=""
                className={classInput}
                placeholder="Your Email"
              />
              <input
                type="tel"
                name=""
                id=""
                className={classInput}
                placeholder="Your Phone"
              />
            </div>
            <div>
              <textarea
                name=""
                id=""
                className={`${classInput} w-full mt-3 h-32`}
                placeholder="Your messa}ge"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default ContactPage;
