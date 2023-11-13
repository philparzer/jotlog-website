interface PageProps {}

const Page = ({}: PageProps) => {
  return (
    <main className="mt-[80px] overflow-hidden min-h-[100vh]">
      <div className="flex w-full justify-between px-[5vw] lg:px-[25vw] flex-col">
        <h1 className="text-[30px] leading-[119%]">Privacy</h1>
        <div>
          The jotlog mobile application
          (hereinafter referred to as the "Service") is operated by Philipp Parzer and adlerlagune [hereinafter referred to as "us", "our", "we"]. This page informs you of
          our policies regarding the collection, use, and disclosure of personal
          data when you use our Service and the choices you have associated with
          that data.
          <h2 className="font-bold text-xl pt-10">Information Collection and Use</h2>
          <p>We do not collect any personal data with our Service.</p>
          <h2 className="font-bold text-xl pt-10">Types of Data Not Collected</h2>
          <p>
            While using our Service, we do not require you to provide us with
            any personally identifiable information.
          </p>
          <h2 className="font-bold text-xl pt-10">Use of Data</h2>
          <p>As no data is collected, no use of data occurs.</p>
          <h2 className="font-bold text-xl pt-10">Transfer of Data</h2>
          <p>
            Your information, including Personal Data, is not collected and
            therefore not transferred to any other place.
          </p>
          <h2 className="font-bold text-xl pt-10">Disclosure of Data</h2>
          <p>We do not disclose any personal data as none is collected.</p>
          <h2 className="font-bold text-xl pt-10">Security of Data</h2>
          <p>
            The security of your data is important to us, but remember that no
            method of transmission over the internet, or method of electronic
            storage is 100% secure. However, as we do not collect any personal
            data, your data remains secure.
          </p>
          <h2 className="font-bold text-xl pt-10">Service Providers</h2>
          <p>
            We do not employ third-party companies and individuals due to our no
            data collection policy.
          </p>
          <h2 className="font-bold text-xl pt-10">Links to other Sites</h2>
          <p>
            Our Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by us. Therefore, we strongly advise
            you to review the Privacy Policy of these websites.
          </p>
          <h2 className="font-bold text-xl pt-10">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          By email: hi@adlerlagune.com
        </div>
      </div>
    </main>
  );
};

export default Page;
