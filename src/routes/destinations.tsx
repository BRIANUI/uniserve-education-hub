import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/destinations.css?raw";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Study Abroad Destinations | Uniserv Education" },
      { name: "description", content: "Compare study destinations and consider universities, costs, courses, and student life with Uniserv Education." },
      { property: "og:title", content: "Study Abroad Destinations | Uniserv Education" },
      { property: "og:description", content: "Compare study destinations and consider universities, costs, courses, and student life with Uniserv Education." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  const [counsellorOpen, setCounsellorOpen] = useState(false);
  const counsellorDialogRef = useRef<HTMLDialogElement | null>(null);
  const openCounsellor = () => setCounsellorOpen(true);

  useEffect(() => {
    const dialog = counsellorDialogRef.current;
    if (!dialog) return;
    if (counsellorOpen && !dialog.open) dialog.showModal();
    if (!counsellorOpen && dialog.open) dialog.close();
  }, [counsellorOpen]);

  useImportedLayout();
  return (
    <>
      <style>{capturedCSS}</style>
      <div id="app">
        <div>
          <ImportedHeader currentPath="/destinations" onOpenCounsellor={openCounsellor} />
          <main data-v-c7af1ba9="">
            <ImportedSectionChooseADestinationThat />
            <ImportedSectionYourDestinationIsPart />
            <ImportedSectionDifferentDestinationsForDifferent />
            <ImportedSectionSeeWhatEachDestination />
            <ImportedSectionWhatDoYouWant />
            <ImportedSectionQuestionsWorthAskingBefore />
            <ImportedSectionYouDoNotNeed />
            <section className={"\x62g-[#\x3171717]"} data-v-c7af1ba9="">
              <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24" data-v-c7af1ba9="">
                <div className="mx-auto max-w-2xl text-center" data-v-c7af1ba9="">
                  <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary" data-v-c7af1ba9=""><span className="inline-block h-px w-8 bg-primary" data-v-c7af1ba9="" /> Find your direction <span className="inline-block h-px w-8 bg-primary" data-v-c7af1ba9="" /></p>
                  <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-white text-balance sm:text-4xl" data-v-c7af1ba9=""> Tell us what you want from your study experience. </h2>
                  <p className={"mt-6 text-lg leading-relaxed \x74ext-white/\x370"} data-v-c7af1ba9=""> Share your qualifications, preferred course, budget, destination interests and intended intake. We will use those details to narrow the university options worth exploring with a counsellor. </p>
                  <div className={"mt-9 flex flex-col items-center justify-center gap-3 \x73m:\x66lex-row"} data-v-c7af1ba9="">
                    <button className={"btn btn-primary min-h-0 \x62order-0 px-8 py-3.5 text-base font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-c7af1ba9="" type="button"> Find my university options </button>
                    <button className={"btn min-h-0 \x62order \x62order-white/\x330 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-colors duration-150 \x68over:\x62order-white hover:bg-white hover:text-neutral \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-c7af1ba9="" type="button"> Talk to a counsellor </button>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <ImportedFooterStudyAbroad />
          <dialog ref={counsellorDialogRef} onCancel={() => setCounsellorOpen(false)} onClose={() => setCounsellorOpen(false)} onClick={event => { if (event.target === event.currentTarget) setCounsellorOpen(false); }} className="counsellor-dialog" data-v-c6d60915="" role="dialog" aria-modal="true" aria-labelledby="counsellor-modal-title">
            <div className="flex max-h-[90vh] flex-col rounded-box bg-base-100" data-v-c6d60915="">
              <div className={"flex items-center justify-between gap-4 \x62order-b \x62order-secondary/\x320 px-6 py-4 sm:px-8"} data-v-c6d60915="">
                <div data-v-c6d60915="">
                  <h2 className="text-xl font-bold tracking-tight text-base-content" data-v-c6d60915="" id="counsellor-modal-title"> Find your university options </h2>
                  <p className={"mt-1 text-sm \x74ext-neutral/\x370"} data-v-c6d60915=""> Tell us about your plans and we'll help identify options worth exploring. </p>
                </div>
                <button className={"flex h-11 w-11 shrink-0 items-center justify-center rounded-field text-neutral transition-colors duration-150 hover:bg-base-200 \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} onClick={() => setCounsellorOpen(false)} data-v-c6d60915="" type="button" aria-label="Close">
                  <svg className="h-6 w-6" data-v-c6d60915="" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path data-v-c6d60915="" d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <div className="overflow-y-auto px-6 py-6 sm:px-8" data-v-c6d60915="">
                <div data-v-9d4a49e6="" data-v-c6d60915="">
                  <div className={"rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-6 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] lg:p-8"} data-v-9d4a49e6="">
                    <div className="mb-8" data-v-9d4a49e6="">
                      <div className="flex items-center justify-between gap-4" data-v-9d4a49e6="">
                        <p className="text-sm font-semibold text-base-content" data-v-9d4a49e6=""> Step 1 of 6</p>
                        <p className={"text-sm \x74ext-neutral/\x370"} data-v-9d4a49e6="">Personal information</p>
                      </div>
                      <div className="mt-3 flex h-2 overflow-hidden rounded-full bg-base-300" data-v-9d4a49e6="" role="progressbar" aria-valuenow={17} aria-valuemin={0} aria-valuemax={100} aria-label="Questionnaire progress">
                        <div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: "17%" }} data-v-9d4a49e6="" />
                      </div>
                    </div>
                    <form data-v-9d4a49e6="" noValidate>
                      <div className={"\x73pace-y-6"} data-v-9d4a49e6="">
                        <p className="text-lg font-bold tracking-tight text-base-content" data-v-9d4a49e6="">Personal information</p>
                        <div className="grid gap-5 sm:grid-cols-2" data-v-9d4a49e6="">
                          <div className="sm:col-span-2" data-v-9d4a49e6="">
                            <label className="mb-2 block text-sm font-semibold text-base-content" data-v-9d4a49e6="" htmlFor="fyo-full-name">Full name</label>
                            <input className={"w-full rounded-field \x62order \x62order-secondary/\x340 bg-base-100 px-4 py-3 text-base text-base-content \x66ocus:\x62order-primary \x66ocus:\x6futline-none \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-9d4a49e6="" id="fyo-full-name" type="text" autoComplete="name" />
                          </div>
                          <div data-v-9d4a49e6="">
                            <label className="mb-2 block text-sm font-semibold text-base-content" data-v-9d4a49e6="" htmlFor="fyo-email">Email address</label>
                            <input className={"w-full rounded-field \x62order \x62order-secondary/\x340 bg-base-100 px-4 py-3 text-base text-base-content \x66ocus:\x62order-primary \x66ocus:\x6futline-none \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-9d4a49e6="" id="fyo-email" type="email" autoComplete="email" />
                          </div>
                          <div data-v-9d4a49e6="">
                            <label className="mb-2 block text-sm font-semibold text-base-content" data-v-9d4a49e6="" htmlFor="fyo-phone">Phone or WhatsApp number</label>
                            <input className={"w-full rounded-field \x62order \x62order-secondary/\x340 bg-base-100 px-4 py-3 text-base text-base-content \x66ocus:\x62order-primary \x66ocus:\x6futline-none \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-9d4a49e6="" id="fyo-phone" type="tel" autoComplete="tel" />
                          </div>
                          <div data-v-9d4a49e6="">
                            <label className="mb-2 block text-sm font-semibold text-base-content" data-v-9d4a49e6="" htmlFor="fyo-country">Current country of residence</label>
                            <input className={"w-full rounded-field \x62order \x62order-secondary/\x340 bg-base-100 px-4 py-3 text-base text-base-content \x66ocus:\x62order-primary \x66ocus:\x6futline-none \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-9d4a49e6="" id="fyo-country" type="text" />
                          </div>
                          <div data-v-9d4a49e6="">
                            <label className="mb-2 block text-sm font-semibold text-base-content" data-v-9d4a49e6="" htmlFor="fyo-nationality">Nationality</label>
                            <input className={"w-full rounded-field \x62order \x62order-secondary/\x340 bg-base-100 px-4 py-3 text-base text-base-content \x66ocus:\x62order-primary \x66ocus:\x6futline-none \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-9d4a49e6="" id="fyo-nationality" type="text" />
                          </div>
                          <div data-v-9d4a49e6="">
                            <label className="mb-2 block text-sm font-semibold text-base-content" data-v-9d4a49e6="" htmlFor="fyo-dob">Date of birth</label>
                            <input className={"w-full rounded-field \x62order \x62order-secondary/\x340 bg-base-100 px-4 py-3 text-base text-base-content \x66ocus:\x62order-primary \x66ocus:\x6futline-none \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-9d4a49e6="" id="fyo-dob" type="date" />
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 flex items-center justify-between gap-4" data-v-9d4a49e6="">
                        <span data-v-9d4a49e6="" />
                        <button className={"btn btn-primary min-h-0 \x62order-0 px-7 py-3.5 text-base font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-9d4a49e6="" type="submit"> Continue </button>
                      </div>
                      <div className="mt-6" data-v-9d4a49e6="" aria-hidden="true">
                        <label className={"\x73r-only"} data-v-9d4a49e6="" htmlFor="fyo-website">Website (do not fill)</label>
                        <input className={"\x73r-only"} data-v-9d4a49e6="" id="fyo-website" type="text" tabIndex={-1} autoComplete="off" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
}

function ImportedHeader({ currentPath, onOpenCounsellor }: { currentPath: string; onOpenCounsellor: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className={"sticky top-0 z-40 \x62order-b \x62order-secondary/\x320 \x62g-base-100/\x330"} data-v-9790ec4b="" data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"shadow-[0_6px_24px_-18px_rgba(26,26,26,0.45)]\"],\"removed\":[],\"threshold\":648},\"mobile\":{\"added\":[\"shadow-[0_6px_24px_-18px_rgba(26,26,26,0.45)]\"],\"removed\":[],\"threshold\":633}}"}>
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6 sm:px-8 lg:h-[4.5rem]" data-v-9790ec4b="">
        <a className={"shrink-0 rounded-field transition-opacity duration-150 hover:opacity-80 \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} aria-label="Uniserv Education — home" data-v-9790ec4b="" href="/">
          <img className="h-8 w-auto lg:h-9" data-v-9790ec4b="" src="/site-assets/00bf6ad4619775b2.png" alt="Uniserv Education" />
        </a>
        <nav className={"hidden flex-1 justify-center \x6cg:\x66lex"} data-v-9790ec4b="" aria-label="Primary">
          <ul className="flex items-center gap-1 xl:gap-2" data-v-9790ec4b="">
            <li data-v-9790ec4b="">
              <a className="nav-link nav-link--active" aria-current="page" data-v-9790ec4b="" href="/destinations">Study Abroad</a>
            </li>
            <li data-v-9790ec4b="">
              <a className="nav-link" data-v-9790ec4b="" href="/universities">University Partners</a>
            </li>
            <li data-v-9790ec4b="">
              <a className="nav-link" data-v-9790ec4b="" href="/events">Events</a>
            </li>
            <li data-v-9790ec4b="">
              <a className="nav-link" data-v-9790ec4b="" href="/about">About Us</a>
            </li>
          </ul>
        </nav>
        <div className={"hidden \x6cg:\x62lock"} data-v-9790ec4b="">
          <button className={"btn btn-primary min-h-0 \x62order-0 px-5 py-2.5 text-sm font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} onClick={onOpenCounsellor} data-v-9790ec4b="" type="button"> Talk to a counsellor </button>
        </div>
        <button className={"btn btn-ghost ml-auto h-11 min-h-0 w-11 \x62order-0 p-0 \x6cg:\x68idden"} data-v-9790ec4b="" type="button" onClick={() => setMobileMenuOpen(open => !open)} onKeyDown={event => { if (event.key === "Escape") setMobileMenuOpen(false); }} aria-expanded={mobileMenuOpen} aria-controls="mobile-menu" aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}>
          <svg className="h-6 w-6" data-v-9790ec4b="" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {mobileMenuOpen ? <path data-v-9790ec4b="" d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /> : <path data-v-9790ec4b="" d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />}
          </svg>
        </button>
      </div>
      {mobileMenuOpen && <div id="mobile-menu" className="lg:hidden">
        <nav className={"border-t border-secondary/20 bg-base-100 px-6 pb-6 pt-2 sm:px-8"} aria-label="Mobile" onKeyDown={event => { if (event.key === "Escape") setMobileMenuOpen(false); }}>
          <ul className="flex flex-col">
            <li><a className={currentPath === "/destinations" ? "mobile-link mobile-link--active" : "mobile-link"} aria-current={currentPath === "/destinations" ? "page" : undefined} href="/destinations" onClick={() => setMobileMenuOpen(false)}>Study Abroad</a></li>
            <li><a className={currentPath === "/universities" ? "mobile-link mobile-link--active" : "mobile-link"} aria-current={currentPath === "/universities" ? "page" : undefined} href="/universities" onClick={() => setMobileMenuOpen(false)}>University Partners</a></li>
            <li><a className={currentPath === "/events" ? "mobile-link mobile-link--active" : "mobile-link"} aria-current={currentPath === "/events" ? "page" : undefined} href="/events" onClick={() => setMobileMenuOpen(false)}>Events</a></li>
            <li><a className={currentPath === "/about" ? "mobile-link mobile-link--active" : "mobile-link"} aria-current={currentPath === "/about" ? "page" : undefined} href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
          </ul>
          <button className={"btn btn-primary mt-4 min-h-0 w-full border-0 py-3 text-base font-semibold transition-colors duration-150 hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"} type="button" onClick={() => { setMobileMenuOpen(false); onOpenCounsellor(); }}>Talk to a counsellor</button>
        </nav>
      </div>}
    </header>
  );
}

function ImportedSectionChooseADestinationThat() {
  return (
    <section className="relative overflow-hidden bg-base-100" data-v-c7af1ba9="">
      <div className="destinations-hero__bg" data-v-c7af1ba9="" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-24 lg:pt-20" data-v-c7af1ba9="">
        <div className={"destinations-hero__content \x6frder-1"} style={{ transform: "translateY(0px)", opacity: "1" }} data-v-c7af1ba9="">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary" data-v-c7af1ba9=""><span className="inline-block h-px w-8 bg-primary" data-v-c7af1ba9="" /> Study abroad </p>
          <h1 className={"max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-base-content text-balance sm:text-5xl \x78l:\x74ext-[\x33.\x325rem]"} data-v-c7af1ba9=""> Choose a destination that supports your goals. </h1>
          <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"} data-v-c7af1ba9=""> Where you study shapes more than your university experience. It can influence the courses available to you, the qualifications you can pursue, your living costs, your learning environment and the opportunities you explore after graduation. </p>
          <p className={"mt-4 max-w-xl text-base leading-relaxed \x74ext-neutral/\x370"} data-v-c7af1ba9=""> Uniserv helps students look beyond the destination name and consider how each option fits their academic background, ambitions, budget and preferred way of living. </p>
          <div className={"mt-9 flex flex-col gap-3 \x73m:\x66lex-row \x73m:\x69tems-center"} data-v-c7af1ba9="">
            <a className={"btn btn-primary min-h-0 \x62order-0 px-7 py-3.5 text-base font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-c7af1ba9="" href="#destination-portfolio"> Explore the destinations </a>
            <button className={"btn min-h-0 \x62order \x62order-secondary bg-transparent px-7 py-3.5 text-base font-semibold text-neutral transition-colors duration-150 \x68over:\x62order-neutral hover:bg-neutral hover:text-neutral-content \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-c7af1ba9="" type="button"> Find my university options </button>
          </div>
        </div>
        <div className={"destinations-hero__visual \x6frder-2"} style={{ transform: "translateY(0px)", opacity: "1" }} data-v-c7af1ba9="">
          <div className={"relative overflow-hidden rounded-box \x62order \x62order-secondary/\x325 \x73hadow-[\x30_20px_60px_-30px_rgba(\x326,\x326,\x326,\x30.\x335)]"} data-v-c7af1ba9="">
            <img className="aspect-[4/3] w-full object-cover" data-v-c7af1ba9="" src="/site-assets/21f1bdcc673fd263.jpg" alt="A quiet view of a study-abroad destination" />
            <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-[#\x3171717]/\x340 \x74o-transparent"} aria-hidden="true" data-v-c7af1ba9="" />
            <svg className={"absolute right-4 top-4 h-10 w-10 \x74ext-white/\x390"} viewBox="0 0 40 40" fill="none" aria-hidden="true" data-v-c7af1ba9="">
              <circle cx="6" cy="6" r="3" fill="currentColor" opacity="0.9" data-v-c7af1ba9="" />
              <circle cx="34" cy="20" r="3" fill="currentColor" opacity="0.9" data-v-c7af1ba9="" />
              <circle cx="18" cy="34" r="3" fill="currentColor" opacity="0.9" data-v-c7af1ba9="" />
              <path d="M9 7C16 10 22 16 32 20" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 4" strokeLinecap="round" data-v-c7af1ba9="" />
              <path d="M19 32c1-6 4-12 13-14" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 4" strokeLinecap="round" data-v-c7af1ba9="" />
            </svg>
            <p className={"absolute bottom-4 left-4 rounded-full \x62order \x62order-white/\x320 \x62g-[#\x3171717]/\x360 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white \x62ackdrop-blur-sm"} data-v-c7af1ba9=""> A decision, not just a destination </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionYourDestinationIsPart() {
  return (
    <section className="bg-base-200" data-v-c7af1ba9="">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-28" data-v-c7af1ba9="">
        <div className={"\x6cg:\x73ticky lg:top-32 lg:self-start"} data-v-c7af1ba9="">
          <div data-v-c7af1ba9="">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> More than a country</p>
            <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-base-content"}>Your destination is part of your study plan.</h2>
            <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}>A country may first attract you because of its reputation, culture or lifestyle. A stronger decision considers whether its universities, courses, entry routes, costs and academic environment make sense for your plans.</p>
          </div>
        </div>
        <ol className="grid gap-4" data-v-c7af1ba9="">
          <li className={"flex gap-5 rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-6"} data-v-c7af1ba9="">
            <span className={"flex h-10 w-10 shrink-0 items-center justify-center rounded-full \x62order \x62order-secondary/\x330 bg-base-200 text-sm font-bold text-accent"} data-v-c7af1ba9="">01</span>
            <div data-v-c7af1ba9="">
              <h3 className="text-lg font-bold tracking-tight text-base-content" data-v-c7af1ba9="">Academic fit</h3>
              <p className={"mt-2 leading-relaxed \x74ext-neutral/\x375"} data-v-c7af1ba9="">The destination needs to offer institutions and courses that match the student’s intended study level, subject and academic background.</p>
            </div>
          </li>
          <li className={"flex gap-5 rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-6"} data-v-c7af1ba9="">
            <span className={"flex h-10 w-10 shrink-0 items-center justify-center rounded-full \x62order \x62order-secondary/\x330 bg-base-200 text-sm font-bold text-accent"} data-v-c7af1ba9="">02</span>
            <div data-v-c7af1ba9="">
              <h3 className="text-lg font-bold tracking-tight text-base-content" data-v-c7af1ba9="">Financial reality</h3>
              <p className={"mt-2 leading-relaxed \x74ext-neutral/\x375"} data-v-c7af1ba9="">Tuition, accommodation, transport and everyday living costs should be considered together, not separately.</p>
            </div>
          </li>
          <li className={"flex gap-5 rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-6"} data-v-c7af1ba9="">
            <span className={"flex h-10 w-10 shrink-0 items-center justify-center rounded-full \x62order \x62order-secondary/\x330 bg-base-200 text-sm font-bold text-accent"} data-v-c7af1ba9="">03</span>
            <div data-v-c7af1ba9="">
              <h3 className="text-lg font-bold tracking-tight text-base-content" data-v-c7af1ba9="">Application timing</h3>
              <p className={"mt-2 leading-relaxed \x74ext-neutral/\x375"} data-v-c7af1ba9="">Available intakes, document requirements and preparation timelines can affect whether a destination is realistic for the student’s preferred start date.</p>
            </div>
          </li>
          <li className={"flex gap-5 rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-6"} data-v-c7af1ba9="">
            <span className={"flex h-10 w-10 shrink-0 items-center justify-center rounded-full \x62order \x62order-secondary/\x330 bg-base-200 text-sm font-bold text-accent"} data-v-c7af1ba9="">04</span>
            <div data-v-c7af1ba9="">
              <h3 className="text-lg font-bold tracking-tight text-base-content" data-v-c7af1ba9="">Student experience</h3>
              <p className={"mt-2 leading-relaxed \x74ext-neutral/\x375"} data-v-c7af1ba9="">Climate, city size, culture, transport, accommodation and distance from home can shape the overall experience.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

function ImportedSectionDifferentDestinationsForDifferent() {
  return (
    <section className="bg-base-100" data-v-c7af1ba9="">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28" data-v-c7af1ba9="">
        <div data-v-c7af1ba9="">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> Our destination portfolio</p>
          <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-base-content"}>Different destinations for different ambitions.</h2>
          <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}>Students do not all need the same study environment. Uniserv's destination portfolio should give students access to different types of institutions, courses, entry pathways and international experiences.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8" data-v-c7af1ba9="">
          <div className={"rounded-box \x62order \x62order-primary/\x330 bg-base-200 p-8 lg:p-10"} data-v-c7af1ba9="">
            <svg className="h-8 w-8 text-primary" viewBox="0 0 32 32" fill="none" aria-hidden="true" data-v-c7af1ba9="">
              <path d="M4 20c6-8 12-8 24-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-v-c7af1ba9="" />
              <path d="M4 24c6-8 12-8 24-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" data-v-c7af1ba9="" />
              <circle cx="28" cy="19" r="2.5" fill="currentColor" data-v-c7af1ba9="" />
              <circle cx="4" cy="23" r="2.5" fill="currentColor" data-v-c7af1ba9="" />
            </svg>
            <h3 className="mt-5 text-xl font-bold tracking-tight text-base-content" data-v-c7af1ba9=""> The destination should fit the student. </h3>
            <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375"} data-v-c7af1ba9=""> Our destination portfolio is intended to support a broad range of student plans. Some students prioritise specialist courses, some need flexible entry pathways, some are focused on postgraduate study, and others are comparing costs, locations or learning environments. </p>
          </div>
          <div className={"rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-8 lg:p-10"} data-v-c7af1ba9="">
            <svg className="h-8 w-8 text-accent" viewBox="0 0 32 32" fill="none" aria-hidden="true" data-v-c7af1ba9="">
              <path d="M16 4v24M4 16h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-v-c7af1ba9="" />
              <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1.5" data-v-c7af1ba9="" />
              <circle cx="16" cy="16" r="2.5" fill="currentColor" data-v-c7af1ba9="" />
            </svg>
            <h3 className="mt-5 text-xl font-bold tracking-tight text-base-content" data-v-c7af1ba9=""> The student should not be forced to fit a fashionable destination. </h3>
            <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375"} data-v-c7af1ba9=""> The destinations represented by Uniserv offer different combinations of university types, subject areas, study levels, locations and student experiences. The purpose of the portfolio is to give counsellors and students options to compare rather than pushing every student towards the same country. The right destination depends on how these factors come together. </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionSeeWhatEachDestination() {
  return (
    <section className={"\x73croll-mt-24 bg-base-200"} data-v-c7af1ba9="" id="destination-portfolio">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28" data-v-c7af1ba9="">
        <div data-v-c7af1ba9="">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> Explore destinations</p>
          <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-base-content"}>See what each destination could add to your journey.</h2>
          <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}>Every destination offers a different academic environment and student experience. Explore the options available through Uniserv and consider which advantages matter most to you.</p>
        </div>
        <div className={"mt-14 \x73pace-y-8"} data-v-c7af1ba9="">
          <article className={"flex h-full flex-col overflow-hidden rounded-box \x62order \x62order-secondary/\x320 bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)]"} data-v-c7af1ba9="">
            <div className="relative overflow-hidden aspect-[16/9]">
              <img className="h-full w-full object-cover" src="/site-assets/ea5d3873e4307f0f.jpg" alt="City view of the United Kingdom with riverside buildings" loading="lazy" />
              <span className={"absolute left-4 top-4 rounded-full \x62order \x62order-secondary/\x330 bg-base-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral"}>UK</span>
            </div>
            <div className="flex flex-1 flex-col p-6 lg:p-7">
              <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">United Kingdom</h3>
              <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375"}>A wide choice of universities, courses and study environments across England, Scotland, Wales and Northern Ireland.</p>
              <dl className={"mt-5 \x73pace-y-4"}>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-accent"> Why students consider it </dt>
                  <dd>
                    <ul className={"mt-2 \x73pace-y-1.\x35"}>
                      <li className={"flex items-start gap-2 text-sm leading-relaxed \x74ext-neutral/\x380"}>
                        <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>A wide range of universities and courses to compare</span>
                      </li>
                      <li className={"flex items-start gap-2 text-sm leading-relaxed \x74ext-neutral/\x380"}>
                        <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>English-speaking study environment across four nations</span>
                      </li>
                      <li className={"flex items-start gap-2 text-sm leading-relaxed \x74ext-neutral/\x380"}>
                        <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Well-established routes for international applications</span>
                      </li>
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-accent"> Explore if you are looking for </dt>
                  <dd>
                    <p className={"mt-2 text-sm leading-relaxed \x74ext-neutral/\x380"}>Students comparing many universities and course options · Undergraduate and postgraduate study in English</p>
                  </dd>
                </div>
              </dl>
              <div className={"mt-6 \x62order-t \x62order-secondary/\x320 pt-5"}>
                <a className={"inline-flex items-center gap-2 text-sm font-semibold text-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/contact"> Discuss this destination <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
              </div>
            </div>
          </article>
          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6" data-v-c7af1ba9="">
            <article className={"flex h-full flex-col overflow-hidden rounded-box \x62order \x62order-secondary/\x320 bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)]"} data-v-c7af1ba9="">
              <div className="relative overflow-hidden aspect-[16/10]">
                <img className="h-full w-full object-cover" src="/site-assets/797e2a23c84a95f5.jpg" alt="City skyline of Canada seen across the water" loading="lazy" />
                <span className={"absolute left-4 top-4 rounded-full \x62order \x62order-secondary/\x330 bg-base-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral"}>North America</span>
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">Canada</h3>
                <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375"}>A welcoming study destination with universities known for research, community and a strong international outlook.</p>
                <dl className={"mt-5 \x73pace-y-4"}>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-accent"> Why students consider it </dt>
                    <dd>
                      <ul className={"mt-2 \x73pace-y-1.\x35"}>
                        <li className={"flex items-start gap-2 text-sm leading-relaxed \x74ext-neutral/\x380"}>
                          <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>Universities known for research and community</span>
                        </li>
                        <li className={"flex items-start gap-2 text-sm leading-relaxed \x74ext-neutral/\x380"}>
                          <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>A strong international outlook among institutions</span>
                        </li>
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-accent"> Explore if you are looking for </dt>
                    <dd>
                      <p className={"mt-2 text-sm leading-relaxed \x74ext-neutral/\x380"}>Students seeking a research-focused academic environment · Students who value a welcoming, community-based study setting</p>
                    </dd>
                  </div>
                </dl>
                <div className={"mt-6 \x62order-t \x62order-secondary/\x320 pt-5"}>
                  <a className={"inline-flex items-center gap-2 text-sm font-semibold text-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/contact"> Discuss this destination <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
                </div>
              </div>
            </article>
            <article className={"flex h-full flex-col overflow-hidden rounded-box \x62order \x62order-secondary/\x320 bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)]"} data-v-c7af1ba9="">
              <div className="relative overflow-hidden aspect-[16/10]">
                <img className="h-full w-full object-cover" src="/site-assets/caf6f72003dbd514.jpg" alt="Coastal city view of Australia at dusk" loading="lazy" />
                <span className={"absolute left-4 top-4 rounded-full \x62order \x62order-secondary/\x330 bg-base-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral"}>Oceania</span>
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">Australia</h3>
                <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375"}>Popular coastal universities with a practical, outward-looking approach to learning and student life.</p>
                <dl className={"mt-5 \x73pace-y-4"}>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-accent"> Why students consider it </dt>
                    <dd>
                      <ul className={"mt-2 \x73pace-y-1.\x35"}>
                        <li className={"flex items-start gap-2 text-sm leading-relaxed \x74ext-neutral/\x380"}>
                          <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>Coastal university settings</span>
                        </li>
                        <li className={"flex items-start gap-2 text-sm leading-relaxed \x74ext-neutral/\x380"}>
                          <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>A practical, outward-looking approach to study</span>
                        </li>
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-accent"> Explore if you are looking for </dt>
                    <dd>
                      <p className={"mt-2 text-sm leading-relaxed \x74ext-neutral/\x380"}>Students drawn to coastal cities and an outdoor lifestyle · Students comparing a hands-on, applied learning culture</p>
                    </dd>
                  </div>
                </dl>
                <div className={"mt-6 \x62order-t \x62order-secondary/\x320 pt-5"}>
                  <a className={"inline-flex items-center gap-2 text-sm font-semibold text-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/contact"> Discuss this destination <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
                </div>
              </div>
            </article>
            <article className={"flex h-full flex-col overflow-hidden rounded-box \x62order \x62order-secondary/\x320 bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)]"} data-v-c7af1ba9="">
              <div className="relative overflow-hidden aspect-[16/10]">
                <img className="h-full w-full object-cover" src="/site-assets/73e27a1dd9a84e7e.jpg" alt="Coastal landscape of Ireland with cliffs and sea" loading="lazy" />
                <span className={"absolute left-4 top-4 rounded-full \x62order \x62order-secondary/\x330 bg-base-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral"}>Europe</span>
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">Ireland</h3>
                <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375"}>A compact, English-speaking destination with a growing reputation for technology and the humanities.</p>
                <dl className={"mt-5 \x73pace-y-4"}>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-accent"> Why students consider it </dt>
                    <dd>
                      <ul className={"mt-2 \x73pace-y-1.\x35"}>
                        <li className={"flex items-start gap-2 text-sm leading-relaxed \x74ext-neutral/\x380"}>
                          <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>A compact, English-speaking destination</span>
                        </li>
                        <li className={"flex items-start gap-2 text-sm leading-relaxed \x74ext-neutral/\x380"}>
                          <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>Growing strengths in technology and the humanities</span>
                        </li>
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-accent"> Explore if you are looking for </dt>
                    <dd>
                      <p className={"mt-2 text-sm leading-relaxed \x74ext-neutral/\x380"}>Students interested in technology or humanities programmes · Students who prefer a smaller, more connected environment</p>
                    </dd>
                  </div>
                </dl>
                <div className={"mt-6 \x62order-t \x62order-secondary/\x320 pt-5"}>
                  <a className={"inline-flex items-center gap-2 text-sm font-semibold text-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/contact"> Discuss this destination <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
                </div>
              </div>
            </article>
            <article className={"flex h-full flex-col overflow-hidden rounded-box \x62order \x62order-secondary/\x320 bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)]"} data-v-c7af1ba9="">
              <div className="relative overflow-hidden aspect-[16/10]">
                <img className="h-full w-full object-cover" src="/site-assets/d8631f9cb8e8f920.jpg" alt="Mountain and lake landscape of New Zealand" loading="lazy" />
                <span className={"absolute left-4 top-4 rounded-full \x62order \x62order-secondary/\x330 bg-base-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral"}>Oceania</span>
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">New Zealand</h3>
                <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375"}>A small, close-knit study environment known for outdoor life and supportive teaching.</p>
                <dl className={"mt-5 \x73pace-y-4"}>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-accent"> Why students consider it </dt>
                    <dd>
                      <ul className={"mt-2 \x73pace-y-1.\x35"}>
                        <li className={"flex items-start gap-2 text-sm leading-relaxed \x74ext-neutral/\x380"}>
                          <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>A small, close-knit study environment</span>
                        </li>
                        <li className={"flex items-start gap-2 text-sm leading-relaxed \x74ext-neutral/\x380"}>
                          <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>Supportive teaching and an outdoor lifestyle</span>
                        </li>
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-accent"> Explore if you are looking for </dt>
                    <dd>
                      <p className={"mt-2 text-sm leading-relaxed \x74ext-neutral/\x380"}>Students who prefer a smaller university community · Students who value supportive teaching and outdoor life</p>
                    </dd>
                  </div>
                </dl>
                <div className={"mt-6 \x62order-t \x62order-secondary/\x320 pt-5"}>
                  <a className={"inline-flex items-center gap-2 text-sm font-semibold text-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/contact"> Discuss this destination <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
                </div>
              </div>
            </article>
            <article className={"flex h-full flex-col overflow-hidden rounded-box \x62order \x62order-secondary/\x320 bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)]"} data-v-c7af1ba9="">
              <div className="relative overflow-hidden aspect-[16/10]">
                <img className="h-full w-full object-cover" src="/site-assets/40bad2c8b07b1703.jpg" alt="Downtown skyline of the United States with skyscrapers" loading="lazy" />
                <span className={"absolute left-4 top-4 rounded-full \x62order \x62order-secondary/\x330 bg-base-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral"}>North America</span>
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">United States</h3>
                <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375"}>A broad landscape of colleges and universities suited to many different study interests.</p>
                <dl className={"mt-5 \x73pace-y-4"}>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-accent"> Why students consider it </dt>
                    <dd>
                      <ul className={"mt-2 \x73pace-y-1.\x35"}>
                        <li className={"flex items-start gap-2 text-sm leading-relaxed \x74ext-neutral/\x380"}>
                          <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>A very broad range of institution types</span>
                        </li>
                        <li className={"flex items-start gap-2 text-sm leading-relaxed \x74ext-neutral/\x380"}>
                          <svg className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>Many different course environments and study paths</span>
                        </li>
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-accent"> Explore if you are looking for </dt>
                    <dd>
                      <p className={"mt-2 text-sm leading-relaxed \x74ext-neutral/\x380"}>Students exploring a wide range of institution types · Students comparing many different course environments</p>
                    </dd>
                  </div>
                </dl>
                <div className={"mt-6 \x62order-t \x62order-secondary/\x320 pt-5"}>
                  <a className={"inline-flex items-center gap-2 text-sm font-semibold text-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/contact"> Discuss this destination <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionWhatDoYouWant() {
  return (
    <section className="bg-base-100" data-v-c7af1ba9="">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28" data-v-c7af1ba9="">
        <div data-v-c7af1ba9="">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> Start with your goals</p>
          <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-base-content"}>What do you want your destination to make possible?</h2>
          <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}>Rather than beginning with a country name, begin with what you need from your education and student experience.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-v-c7af1ba9="">
          <div className={"flex flex-col rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-6"} data-v-c7af1ba9="">
            <h3 className="text-base font-bold tracking-tight text-base-content" data-v-c7af1ba9="">Find a course in my chosen field</h3>
            <p className={"mt-2 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-c7af1ba9="">Start with the subject you want to study, then identify the destinations and institutions offering suitable options.</p>
          </div>
          <div className={"flex flex-col rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-6"} data-v-c7af1ba9="">
            <h3 className="text-base font-bold tracking-tight text-base-content" data-v-c7af1ba9="">Explore undergraduate options</h3>
            <p className={"mt-2 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-c7af1ba9="">Compare first-degree programmes and the entry routes available in each destination.</p>
          </div>
          <div className={"flex flex-col rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-6"} data-v-c7af1ba9="">
            <h3 className="text-base font-bold tracking-tight text-base-content" data-v-c7af1ba9="">Progress to postgraduate study</h3>
            <p className={"mt-2 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-c7af1ba9="">Look at how masters and research programmes are structured and what qualifications are expected.</p>
          </div>
          <div className={"flex flex-col rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-6"} data-v-c7af1ba9="">
            <h3 className="text-base font-bold tracking-tight text-base-content" data-v-c7af1ba9="">Compare different entry pathways</h3>
            <p className={"mt-2 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-c7af1ba9="">Academic entry routes vary. Some students may need to investigate foundation, undergraduate, postgraduate or other progression options.</p>
          </div>
          <div className={"flex flex-col rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-6"} data-v-c7af1ba9="">
            <h3 className="text-base font-bold tracking-tight text-base-content" data-v-c7af1ba9="">Consider tuition and living costs</h3>
            <p className={"mt-2 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-c7af1ba9="">Compare the full financial picture rather than looking only at the advertised tuition fee.</p>
          </div>
          <div className={"flex flex-col rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-6"} data-v-c7af1ba9="">
            <h3 className="text-base font-bold tracking-tight text-base-content" data-v-c7af1ba9="">Study in a particular type of city</h3>
            <p className={"mt-2 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-c7af1ba9="">Think about whether you prefer a large city, a smaller town, a coastal setting or a campus-focused environment.</p>
          </div>
          <div className={"flex flex-col rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-6"} data-v-c7af1ba9="">
            <h3 className="text-base font-bold tracking-tight text-base-content" data-v-c7af1ba9="">Plan for a specific intake</h3>
            <p className={"mt-2 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-c7af1ba9="">Different institutions start programmes at different times, so your preferred start date matters.</p>
          </div>
          <div className={"flex flex-col rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-6"} data-v-c7af1ba9="">
            <h3 className="text-base font-bold tracking-tight text-base-content" data-v-c7af1ba9="">Explore scholarship and funding possibilities</h3>
            <p className={"mt-2 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-c7af1ba9="">Funding options vary widely and have their own deadlines and eligibility requirements.</p>
          </div>
        </div>
        <p className={"mt-8 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-c7af1ba9=""> These are starting points for your thinking, not automatic results. A counsellor can help you explore how your goals connect to specific destinations and university options. </p>
        <div className="mt-6" data-v-c7af1ba9="">
          <a className={"btn btn-primary min-h-0 \x62order-0 px-7 py-3.5 text-base font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-c7af1ba9="" href="/contact"> Talk through your goals </a>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionQuestionsWorthAskingBefore() {
  return (
    <section className="bg-base-200" data-v-c7af1ba9="">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28" data-v-c7af1ba9="">
        <div data-v-c7af1ba9="">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> Compare the full picture</p>
          <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-base-content"}>Questions worth asking before you decide.</h2>
          <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}>A practical comparison framework helps you weigh academic and practical factors together rather than focusing on a single destination name.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8" data-v-c7af1ba9="">
          <div className={"rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-8"} data-v-c7af1ba9="">
            <h3 className="text-lg font-bold tracking-tight text-base-content" data-v-c7af1ba9="">Academic plan</h3>
            <ol className={"mt-5 \x73pace-y-3"} data-v-c7af1ba9="">
              <li className={"flex gap-3 text-sm leading-relaxed \x74ext-neutral/\x380"} data-v-c7af1ba9="">
                <span className="shrink-0 font-bold text-accent" data-v-c7af1ba9="">01</span>
                <span data-v-c7af1ba9="">Does the destination offer my intended course and study level?</span>
              </li>
              <li className={"flex gap-3 text-sm leading-relaxed \x74ext-neutral/\x380"} data-v-c7af1ba9="">
                <span className="shrink-0 font-bold text-accent" data-v-c7af1ba9="">02</span>
                <span data-v-c7af1ba9="">Which universities provide relevant options?</span>
              </li>
              <li className={"flex gap-3 text-sm leading-relaxed \x74ext-neutral/\x380"} data-v-c7af1ba9="">
                <span className="shrink-0 font-bold text-accent" data-v-c7af1ba9="">03</span>
                <span data-v-c7af1ba9="">Do I understand the academic and English-language requirements?</span>
              </li>
              <li className={"flex gap-3 text-sm leading-relaxed \x74ext-neutral/\x380"} data-v-c7af1ba9="">
                <span className="shrink-0 font-bold text-accent" data-v-c7af1ba9="">04</span>
                <span data-v-c7af1ba9="">What is the institution type, and does it suit how I learn?</span>
              </li>
              <li className={"flex gap-3 text-sm leading-relaxed \x74ext-neutral/\x380"} data-v-c7af1ba9="">
                <span className="shrink-0 font-bold text-accent" data-v-c7af1ba9="">05</span>
                <span data-v-c7af1ba9="">Which intake fits my preferred start date?</span>
              </li>
            </ol>
          </div>
          <div className={"rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-8"} data-v-c7af1ba9="">
            <h3 className="text-lg font-bold tracking-tight text-base-content" data-v-c7af1ba9="">Practical plan</h3>
            <ol className={"mt-5 \x73pace-y-3"} data-v-c7af1ba9="">
              <li className={"flex gap-3 text-sm leading-relaxed \x74ext-neutral/\x380"} data-v-c7af1ba9="">
                <span className="shrink-0 font-bold text-accent" data-v-c7af1ba9="">01</span>
                <span data-v-c7af1ba9="">What are the tuition fees?</span>
              </li>
              <li className={"flex gap-3 text-sm leading-relaxed \x74ext-neutral/\x380"} data-v-c7af1ba9="">
                <span className="shrink-0 font-bold text-accent" data-v-c7af1ba9="">02</span>
                <span data-v-c7af1ba9="">What should I expect to spend on accommodation and daily living?</span>
              </li>
              <li className={"flex gap-3 text-sm leading-relaxed \x74ext-neutral/\x380"} data-v-c7af1ba9="">
                <span className="shrink-0 font-bold text-accent" data-v-c7af1ba9="">03</span>
                <span data-v-c7af1ba9="">What type of location and student environment do I prefer?</span>
              </li>
              <li className={"flex gap-3 text-sm leading-relaxed \x74ext-neutral/\x380"} data-v-c7af1ba9="">
                <span className="shrink-0 font-bold text-accent" data-v-c7af1ba9="">04</span>
                <span data-v-c7af1ba9="">What does travel and arrival involve?</span>
              </li>
              <li className={"flex gap-3 text-sm leading-relaxed \x74ext-neutral/\x380"} data-v-c7af1ba9="">
                <span className="shrink-0 font-bold text-accent" data-v-c7af1ba9="">05</span>
                <span data-v-c7af1ba9="">What official visa information do I still need to confirm?</span>
              </li>
              <li className={"flex gap-3 text-sm leading-relaxed \x74ext-neutral/\x380"} data-v-c7af1ba9="">
                <span className="shrink-0 font-bold text-accent" data-v-c7af1ba9="">06</span>
                <span data-v-c7af1ba9="">What support will I need before travelling?</span>
              </li>
            </ol>
          </div>
        </div>
        <p className={"mt-8 max-w-3xl rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-5 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-c7af1ba9=""> Requirements, costs and immigration rules can change. Confirm current information with the relevant university and official government sources before making a decision. </p>
      </div>
    </section>
  );
}

function ImportedSectionYouDoNotNeed() {
  return (
    <section className="bg-base-100" data-v-c7af1ba9="">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-28" data-v-c7af1ba9="">
        <div className={"\x6cg:\x73ticky lg:top-32 lg:self-start"} data-v-c7af1ba9="">
          <div data-v-c7af1ba9="">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> From interest to a shortlist</p>
            <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-base-content"}>You do not need to compare every option alone.</h2>
            <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}>A counsellor can help you organise the information around your qualifications, course interests, destination preferences, budget and intended intake before identifying options worth investigating further.</p>
            <div className="mt-9">
              <button className={"btn btn-primary min-h-0 \x62order-0 px-7 py-3.5 text-base font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-c7af1ba9="" type="button"> Talk to a counsellor </button>
            </div>
          </div>
        </div>
        <ol className={"\x73pace-y-3"} data-v-c7af1ba9="">
          <li className={"flex gap-5 rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-5"} data-v-c7af1ba9="">
            <span className={"flex h-9 w-9 shrink-0 items-center justify-center rounded-full \x62order \x62order-secondary/\x330 bg-base-200 text-sm font-bold text-accent"} data-v-c7af1ba9="">01</span>
            <p className={"leading-relaxed \x74ext-neutral/\x380"} data-v-c7af1ba9="">Understanding the student’s academic background</p>
          </li>
          <li className={"flex gap-5 rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-5"} data-v-c7af1ba9="">
            <span className={"flex h-9 w-9 shrink-0 items-center justify-center rounded-full \x62order \x62order-secondary/\x330 bg-base-200 text-sm font-bold text-accent"} data-v-c7af1ba9="">02</span>
            <p className={"leading-relaxed \x74ext-neutral/\x380"} data-v-c7af1ba9="">Clarifying course and study-level preferences</p>
          </li>
          <li className={"flex gap-5 rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-5"} data-v-c7af1ba9="">
            <span className={"flex h-9 w-9 shrink-0 items-center justify-center rounded-full \x62order \x62order-secondary/\x330 bg-base-200 text-sm font-bold text-accent"} data-v-c7af1ba9="">03</span>
            <p className={"leading-relaxed \x74ext-neutral/\x380"} data-v-c7af1ba9="">Identifying important practical constraints</p>
          </li>
          <li className={"flex gap-5 rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-5"} data-v-c7af1ba9="">
            <span className={"flex h-9 w-9 shrink-0 items-center justify-center rounded-full \x62order \x62order-secondary/\x330 bg-base-200 text-sm font-bold text-accent"} data-v-c7af1ba9="">04</span>
            <p className={"leading-relaxed \x74ext-neutral/\x380"} data-v-c7af1ba9="">Comparing relevant destinations</p>
          </li>
          <li className={"flex gap-5 rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-5"} data-v-c7af1ba9="">
            <span className={"flex h-9 w-9 shrink-0 items-center justify-center rounded-full \x62order \x62order-secondary/\x330 bg-base-200 text-sm font-bold text-accent"} data-v-c7af1ba9="">05</span>
            <p className={"leading-relaxed \x74ext-neutral/\x380"} data-v-c7af1ba9="">Narrowing the university options</p>
          </li>
          <li className={"flex gap-5 rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-5"} data-v-c7af1ba9="">
            <span className={"flex h-9 w-9 shrink-0 items-center justify-center rounded-full \x62order \x62order-secondary/\x330 bg-base-200 text-sm font-bold text-accent"} data-v-c7af1ba9="">06</span>
            <p className={"leading-relaxed \x74ext-neutral/\x380"} data-v-c7af1ba9="">Highlighting requirements that need confirmation</p>
          </li>
          <li className={"flex gap-5 rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-5"} data-v-c7af1ba9="">
            <span className={"flex h-9 w-9 shrink-0 items-center justify-center rounded-full \x62order \x62order-secondary/\x330 bg-base-200 text-sm font-bold text-accent"} data-v-c7af1ba9="">07</span>
            <p className={"leading-relaxed \x74ext-neutral/\x380"} data-v-c7af1ba9="">Helping the student understand the next steps</p>
          </li>
        </ol>
      </div>
    </section>
  );
}

function ImportedFooterStudyAbroad() {
  return (
    <footer className={"\x62g-[#\x3171717]"}>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-16">
          <div className="max-w-sm">
            <a className={"inline-flex items-center gap-3 rounded-field transition-opacity duration-150 hover:opacity-80 \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} aria-label="Uniserv Education — home" href="/">
              <img className="h-9 w-auto" src="/site-assets/00bf6ad4619775b2.png" alt="Uniserv Education" loading="lazy" />
            </a>
            <p className={"mt-5 leading-relaxed \x74ext-white/\x370"}>Master Your Own Destiny</p>
            <button className={"mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary hover:text-accent"} type="button"> Talk to a counsellor <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
          </div>
          <nav aria-label="Study Abroad">
            <h2 className={"text-xs font-semibold uppercase tracking-[0.2em] \x74ext-white/\x350"}>Study Abroad</h2>
            <ul className={"mt-5 \x73pace-y-3"}>
              <li>
                <a className={"text-sm font-medium \x74ext-white/\x385 transition-colors duration-150 hover:text-primary \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} aria-current="page" href="#">Explore destinations</a>
              </li>
              <li>
                <a className={"text-sm font-medium \x74ext-white/\x385 transition-colors duration-150 hover:text-primary \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/universities">University partners</a>
              </li>
            </ul>
          </nav>
          <nav aria-label="How We Help">
            <h2 className={"text-xs font-semibold uppercase tracking-[0.2em] \x74ext-white/\x350"}>How We Help</h2>
            <ul className={"mt-5 \x73pace-y-3"}>
              <li>
                <a className={"text-sm font-medium \x74ext-white/\x385 transition-colors duration-150 hover:text-primary \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/services">Our services</a>
              </li>
              <li>
                <a className={"text-sm font-medium \x74ext-white/\x385 transition-colors duration-150 hover:text-primary \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/events">Events</a>
              </li>
              <li>
                <a className={"text-sm font-medium \x74ext-white/\x385 transition-colors duration-150 hover:text-primary \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/contact">Talk to a counsellor</a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Uniserv">
            <h2 className={"text-xs font-semibold uppercase tracking-[0.2em] \x74ext-white/\x350"}>Uniserv</h2>
            <ul className={"mt-5 \x73pace-y-3"}>
              <li>
                <a className={"text-sm font-medium \x74ext-white/\x385 transition-colors duration-150 hover:text-primary \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/about">About us</a>
              </li>
              <li>
                <a className={"text-sm font-medium \x74ext-white/\x385 transition-colors duration-150 hover:text-primary \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/partners">Our partners</a>
              </li>
              <li>
                <a className={"text-sm font-medium \x74ext-white/\x385 transition-colors duration-150 hover:text-primary \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/contact">Contact</a>
              </li>
              <li>
                <a className={"text-sm font-medium \x74ext-white/\x385 transition-colors duration-150 hover:text-primary \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/privacy-policy">Privacy policy</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={"mt-14 flex flex-col gap-4 \x62order-t \x62order-white/\x315 pt-8 \x73m:\x66lex-row \x73m:\x69tems-center \x73m:\x6austify-between"}>
          <div>
            <p className={"text-sm \x74ext-white/\x360"}> © 2026 Uniserv Education. All rights reserved. </p>
          </div>
          <div>
            <span id="iasBadge">
              <a href="https://www.icef.com/agency/0012000000UQ2hxAAD" target="_blank">
                <img style={{ width: "120px" }} src="/site-assets/17943246f487115f.png" alt="logo" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}


function useImportedLayout() {
  useEffect(() => {
    const scrollingAreas = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-root]"));
    const scrollTop = () =>
      scrollingAreas.find(
        (node) =>
          node.clientHeight > 0 &&
          node.scrollHeight > node.clientHeight &&
          /^(auto|scroll)$/.test(getComputedStyle(node).overflowY),
      )?.scrollTop ?? window.scrollY;
    const scrollHeaders = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-header]"))
      .slice(0, 128)
      .flatMap((node) => {
        try {
          const states = JSON.parse(node.dataset["siteImportScrollHeader"] || "{}");
          if (!states || typeof states !== "object") return [];
          for (const key of ["desktop", "mobile"]) {
            const state = states[key];
            if (
              !state ||
              !Array.isArray(state.added) ||
              !Array.isArray(state.removed) ||
              state.added.length + state.removed.length > 32
            )
              delete states[key];
          }
          return [
            {
              node,
              states,
              original: new Set(node.classList),
              originalFill: node.getAttribute("fill"),
              transform: node.style.getPropertyValue("transform"),
              priority: node.style.getPropertyPriority("transform"),
            },
          ];
        } catch {
          return [];
        }
      });
    function syncScrollHeaders(reset = false) {
      for (const { node, states, original, originalFill, transform, priority } of scrollHeaders) {
        if (!reset && node.getAttribute("data-import-menu-open") === "true") continue;
        const state = states[innerWidth < 768 ? "mobile" : "desktop"];
        if ([states.desktop, states.mobile].some((entry) => entry && Object.hasOwn(entry, "fill"))) {
          if (originalFill === null) node.removeAttribute("fill");
          else node.setAttribute("fill", originalFill);
        }
        if (states.desktop?.transform || states.mobile?.transform) {
          if (transform) node.style.setProperty("transform", transform, priority);
          else node.style.removeProperty("transform");
        }
        for (const value of [states.desktop, states.mobile].filter(Boolean) as {
          added: string[];
          removed: string[];
        }[]) {
          for (const token of [...(value.added || []), ...(value.removed || [])]) {
            if (typeof token !== "string" || !token || /\s/.test(token)) continue;
            node.classList.toggle(token, original.has(token));
          }
        }
        if (reset || !state || !Number.isFinite(state.threshold) || scrollTop() < state.threshold) continue;
        let until = state.until;
        if (
          typeof state.untilAnchor === "string" &&
          /^\d$/.test(state.untilAnchor) &&
          Number.isFinite(state.untilProgress) &&
          Math.abs(state.untilProgress) <= 2
        ) {
          const anchor = document.querySelector<HTMLElement>(
            '[data-site-import-header-end="' + state.untilAnchor + '"]',
          );
          if (anchor) until = anchor.getBoundingClientRect().top + scrollTop() + innerHeight * state.untilProgress;
        }
        if (Number.isFinite(until) && scrollTop() >= until) continue;
        if (state.fill === null) node.removeAttribute("fill");
        else if (typeof state.fill === "string" && state.fill.length <= 256 && !/url\(/i.test(state.fill))
          node.setAttribute("fill", state.fill);
        if (
          typeof state.transform === "string" &&
          state.transform.length <= 128 &&
          CSS.supports("transform", state.transform)
        )
          node.style.setProperty("transform", state.transform, "important");
        for (const token of state.added || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.add(token);
        for (const token of state.removed || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.remove(token);
      }
    }
    const handleScroll = () => {
      syncScrollHeaders();
    };
    function resizeSummaries() {
      syncScrollHeaders();
    }
    document.addEventListener("load", handleScroll, true);
    resizeSummaries();
    const parallaxFrame = requestAnimationFrame(handleScroll);
    window.addEventListener("resize", resizeSummaries);
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    return () => {
      cancelAnimationFrame(parallaxFrame);
      syncScrollHeaders(true);
      document.removeEventListener("load", handleScroll, true);
      window.removeEventListener("resize", resizeSummaries);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);
}
