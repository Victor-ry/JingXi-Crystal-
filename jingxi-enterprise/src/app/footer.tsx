import Image from "next/image";

export function Footer() {
  return (
    <section className="py-8 bg-black">
      <footer>
        <div className="grid grid-cols-2 gap-8 bg-black lg:grid-cols-4 px-12 lg:px-32">
          <div className="col-span-2 mb-8 lg:mb-0">
            <div className="flex items-center gap-2 lg:justify-start">
              <Image
                src="/company-logo.png"
                width={74}
                height={76}
                className="bg-transparent"
                alt="company-logo"
              />
              <p className="text-3xl text-white font-semibold">
                Jing Xi Enterprise
              </p>
            </div>
            <p className="mt-4 text-xl text-white italic font-bold">
              Renovation made easy
            </p>
          </div>
          <div>
            <h3 className="mt-5 mb-4 text-xl text-white font-bold">
              CONTACT <>&nbsp;</>
              <>&nbsp;</>————
            </h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="font-medium text-lg text-white">
                <p>012 - 779 7877</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mt-5 mb-4 text-xl text-white font-bold">
              WORKING HOURS <>&nbsp;</>
              <>&nbsp;</>————
            </h3>
            <ul className="space-y-4 text-muted-foreground">
              {/* Dekstop View */}
              <li className="hidden md:block font-medium text-lg text-white">
                <p>
                  Mon - Sun <>&nbsp;</>
                  <>&nbsp;</>
                  <>&nbsp;</>
                  <>&nbsp;</>9am - 6pm
                </p>
              </li>
              {/* Mobile View */}
              <li className="md:hidden font-medium text-lg text-white">
                <p>Mon - Sun </p>
                <p>9am - 6pm</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center px-12 lg:px-32">
          <p>
            © {new Date().getFullYear()} Copyright Jing Xi Enterprise. All
            rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
