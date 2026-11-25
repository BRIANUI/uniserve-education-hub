import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/index.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uniserv Education | Study Abroad Guidance" },
      { name: "description", content: "Explore study destinations and university options with practical guidance from Uniserv Education." },
      { property: "og:title", content: "Uniserv Education | Study Abroad Guidance" },
      { property: "og:description", content: "Explore study destinations and university options with practical guidance from Uniserv Education." },
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
          <ImportedHeader currentPath="/" onOpenCounsellor={openCounsellor} />
          <main>
            <ImportedSectionAClearerPathTo />
            <ImportedSectionWhereWillYourStudies />
            <ImportedSectionSupportForEveryStep />
            <ImportedSectionAClearerPathFrom />
            <ImportedSectionMeetAskQuestionsAnd />
            <section className="bg-base-200">
              <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
                <div>
                  <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> Practical guidance</p>
                  <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-base-content"}>Start with the questions that matter.</h2>
                  <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}>Explore practical guidance for comparing universities, preparing applications and planning for life abroad.</p>
                </div>
                <div className="mt-14 grid gap-5 lg:gap-6 grid-cols-1">
                  <article className={"rounded-box \x62order \x62order-secondary/\x320 bg-base-100 p-7 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)]"}>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Student &amp; parent guide · UK study</p>
                    <h3 className="mt-3 text-xl font-bold tracking-tight text-base-content">Choosing an education agent with confidence</h3>
                    <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375"}>A student and parent guide to the questions, checks and safeguards that matter when planning UK study. Includes a practical checklist and official British Council resources.</p>
                    <a className={"mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/resources/choosing-an-education-agent"> Read the guide <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
                  </article>
                </div>
              </div>
            </section>
            <ImportedSectionGuidanceCloserToHome />
            <section className="bg-base-100">
              <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
                <div className={"rounded-box \x62order \x62order-secondary/\x320 bg-base-200 px-8 py-14 lg:px-16 lg:py-20"}>
                  <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                      <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> Next steps </p>
                      <h2 className={"max-w-xl text-3xl font-bold leading-[1.15] tracking-tight text-base-content text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem]"}> Ready to explore your study options? </h2>
                      <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}> Tell us where you are in your journey, and a counsellor will help you understand the next steps. </p>
                    </div>
                    <div className={"flex flex-col gap-3 \x73m:\x66lex-row \x6cg:\x66lex-col \x6cg:\x69tems-start \x78l:\x66lex-row \x78l:\x69tems-center"}>
                      <a className={"btn btn-primary min-h-0 \x62order-0 px-8 py-3.5 text-base font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/contact"> Start your enquiry </a>
                      <a className={"btn min-h-0 \x62order \x62order-secondary bg-transparent px-8 py-3.5 text-base font-semibold text-neutral transition-colors duration-150 \x68over:\x62order-neutral hover:bg-neutral hover:text-neutral-content \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/contact"> Find an office </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <ImportedFooterStudyAbroad onOpenCounsellor={openCounsellor} />
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
  const links = [
    { path: "/destinations", label: "Study Abroad" },
    { path: "/universities", label: "University Partners" },
    { path: "/events", label: "Events" },
    { path: "/about", label: "About Us" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-secondary/20 bg-base-100/95" data-v-9790ec4b="" data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"shadow-[0_6px_24px_-18px_rgba(26,26,26,0.45)]\"],\"removed\":[],\"threshold\":648},\"mobile\":{\"added\":[\"shadow-[0_6px_24px_-18px_rgba(26,26,26,0.45)]\"],\"removed\":[],\"threshold\":633}}"}>
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6 sm:px-8 lg:h-[4.5rem]" data-v-9790ec4b="">
        <a className="shrink-0 rounded-field transition-opacity duration-150 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" aria-current={currentPath === "/" ? "page" : undefined} aria-label="Uniserv Education — home" data-v-9790ec4b="" href="/">
          <img className="h-8 w-auto lg:h-9" data-v-9790ec4b="" src="/site-assets/00bf6ad4619775b2.png" alt="Uniserv Education" />
        </a>
        <nav className="hidden flex-1 justify-center lg:flex" data-v-9790ec4b="" aria-label="Primary">
          <ul className="flex items-center gap-1 xl:gap-2" data-v-9790ec4b="">
            {links.map(link => <li key={link.path} data-v-9790ec4b=""><a className={currentPath === link.path ? "nav-link nav-link--active" : "nav-link"} aria-current={currentPath === link.path ? "page" : undefined} data-v-9790ec4b="" href={link.path}>{link.label}</a></li>)}
          </ul>
        </nav>
        <div className="hidden lg:block" data-v-9790ec4b="">
          <button className="btn btn-primary min-h-0 border-0 px-5 py-2.5 text-sm font-semibold transition-colors duration-150 hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" data-v-9790ec4b="" type="button" onClick={onOpenCounsellor}>Talk to a counsellor</button>
        </div>
        <button className="btn btn-ghost ml-auto h-11 min-h-0 w-11 border-0 p-0 lg:hidden" data-v-9790ec4b="" type="button" onClick={() => setMobileMenuOpen(open => !open)} onKeyDown={event => { if (event.key === "Escape") setMobileMenuOpen(false); }} aria-expanded={mobileMenuOpen} aria-controls="mobile-menu" aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}>
          <svg className="h-6 w-6" data-v-9790ec4b="" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {mobileMenuOpen ? <path data-v-9790ec4b="" d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /> : <path data-v-9790ec4b="" d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />}
          </svg>
        </button>
      </div>
      <div id="mobile-menu" className="lg:hidden" data-v-9790ec4b="" hidden={!mobileMenuOpen}>
        <nav className="border-t border-secondary/20 bg-base-100 px-6 pb-6 pt-2 sm:px-8" data-v-9790ec4b="" aria-label="Mobile" onKeyDown={event => { if (event.key === "Escape") setMobileMenuOpen(false); }}>
          <ul className="flex flex-col" data-v-9790ec4b="">
            {links.map(link => <li key={link.path} data-v-9790ec4b=""><a className={currentPath === link.path ? "mobile-link mobile-link--active" : "mobile-link"} aria-current={currentPath === link.path ? "page" : undefined} data-v-9790ec4b="" href={link.path} onClick={() => setMobileMenuOpen(false)}>{link.label}</a></li>)}
          </ul>
          <button className="btn btn-primary mt-4 min-h-0 w-full border-0 py-3 text-base font-semibold transition-colors duration-150 hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" data-v-9790ec4b="" type="button" onClick={() => { setMobileMenuOpen(false); onOpenCounsellor(); }}>Talk to a counsellor</button>
        </nav>
      </div>
    </header>
  );
}
function ImportedSectionAClearerPathTo() {
  return (
    <section className="hero relative flex min-h-screen items-center justify-center overflow-hidden bg-base-100" data-v-44eb398e="">
      <img className="hero__map pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60" data-v-44eb398e="" src="/site-assets/c46fe2e458bf854c-06afe65858c7577c4d42981ce9b0b426.png" alt="" aria-hidden="true" srcSet="/site-assets/c46fe2e458bf854c-06afe65858c7577c4d42981ce9b0b426.png 2048w" sizes="2754px" />
      <div className="hero__map-fade pointer-events-none absolute inset-0" data-v-44eb398e="" aria-hidden="true" />
      <div className="mx-auto w-full max-w-3xl px-6 py-24 sm:px-8" data-v-44eb398e="">
        <div className="hero__content text-center" data-v-44eb398e="">
          <a className={"hero__logo mx-auto inline-flex justify-center rounded-field transition-opacity duration-150 hover:opacity-80 \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} style={{ transform: "translateY(0px)", opacity: "1" }} aria-current="page" aria-label="Uniserv Education — home" data-v-44eb398e="" href="/">
            <img className="h-18 w-auto sm:h-32" data-v-44eb398e="" src="/site-assets/8b342bdf83bc1afe.png" alt="Uniserv Education" />
          </a>
          <h1 className="hero__title mx-auto mt-8 max-w-2xl text-balance text-4xl font-bold leading-[1.1] tracking-tight text-base-content sm:text-5xl lg:text-6xl" style={{ transform: "translateY(0px)", opacity: "1" }} data-v-44eb398e=""> A clearer path to studying abroad starts here. </h1>
          <p className={"hero__subtitle mx-auto mt-7 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"} style={{ transform: "translateY(1.77636e-15px)", opacity: "1" }} data-v-44eb398e=""> Explore universities and courses across leading global study destinations, with guidance for every step of the journey. </p>
          <div className={"hero__cta mt-10 flex flex-col items-center justify-center gap-3 \x73m:\x66lex-row \x73m:\x69tems-center"} style={{ transform: "translateY(0px)", opacity: "1" }} data-v-44eb398e="">
            <a className={"btn btn-primary min-h-0 \x62order-0 px-8 py-3.5 text-base font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-44eb398e="" href="/destinations"> Explore study destinations </a>
            <button className={"btn min-h-0 \x62order \x62order-secondary bg-transparent px-8 py-3.5 text-base font-semibold text-neutral transition-colors duration-150 \x68over:\x62order-neutral hover:bg-neutral hover:text-neutral-content \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-44eb398e="" type="button"> Talk to a counsellor </button>
          </div>
          <p className={"hero__meta mt-10 text-sm font-medium \x74ext-neutral/\x360"} style={{ transform: "translateY(0px)", opacity: "1" }} data-v-44eb398e=""> University applications <span className="mx-2 text-secondary" data-v-44eb398e="" aria-hidden="true">·</span> Visa guidance <span className="mx-2 text-secondary" data-v-44eb398e="" aria-hidden="true">·</span> Pre-departure support </p>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionWhereWillYourStudies() {
  return (
    <section className="bg-base-200">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> Explore your options</p>
          <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-base-content"}>Where will your studies take you?</h2>
          <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}>Compare popular study destinations, explore different university experiences and find an option that fits your goals, qualifications and budget.</p>
          <div className="mt-9">
            <a className={"btn btn-primary min-h-0 \x62order-0 px-7 py-3.5 text-base font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/destinations"> Explore all destinations </a>
          </div>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <article className={"group relative overflow-hidden rounded-box \x62order \x62order-secondary/\x320 bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-transform duration-200 \x68over:\x2dtranslate-y-1 sm:col-span-2 lg:col-span-2 lg:row-span-2"}>
            <a className={"flex h-full flex-col \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/destinations">
              <div className="relative overflow-hidden aspect-[16/10]">
                <img className="h-full w-full object-cover" src="/site-assets/ea5d3873e4307f0f.jpg" alt="City view of the United Kingdom with riverside buildings" loading="lazy" />
                <span className={"absolute left-4 top-4 rounded-full \x62order \x62order-secondary/\x330 bg-base-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral"}> Popular choice </span>
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">UK</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-base-content lg:text-3xl">United Kingdom</h3>
                <p className={"mt-4 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}>A wide choice of universities, courses and study environments across England, Scotland, Wales and Northern Ireland.</p>
                <ul className={"mt-6 \x73pace-y-3"}>
                  <li className={"flex items-start gap-3 leading-relaxed \x74ext-neutral/\x380"}>
                    <svg className="mt-1 h-4 w-4 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>A wide range of universities and courses to compare</span>
                  </li>
                  <li className={"flex items-start gap-3 leading-relaxed \x74ext-neutral/\x380"}>
                    <svg className="mt-1 h-4 w-4 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>English-speaking study environment across four nations</span>
                  </li>
                  <li className={"flex items-start gap-3 leading-relaxed \x74ext-neutral/\x380"}>
                    <svg className="mt-1 h-4 w-4 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3.5 8.5l3 3 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Well-established routes for international applications</span>
                  </li>
                </ul>
                <p className="mt-auto flex items-center gap-2 pt-6 text-base font-semibold text-accent"> Explore study options <svg className={"h-4 w-4 transition-transform duration-200 \x67roup-hover:\x74ranslate-x-1"} viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></p>
              </div>
            </a>
          </article>
          <article className={"group relative overflow-hidden rounded-box \x62order \x62order-secondary/\x320 bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-transform duration-200 \x68over:\x2dtranslate-y-1"}>
            <a className={"flex h-full flex-col \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/destinations">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img className="h-full w-full object-cover" src="/site-assets/797e2a23c84a95f5.jpg" alt="City skyline of Canada seen across the water" loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">Canada</h3>
                <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375"}>A welcoming study destination with universities known for research, community and a strong international outlook.</p>
                <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-accent"> Explore study options <svg className={"h-4 w-4 transition-transform duration-200 \x67roup-hover:\x74ranslate-x-1"} viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></p>
              </div>
            </a>
          </article>
          <article className={"group relative overflow-hidden rounded-box \x62order \x62order-secondary/\x320 bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-transform duration-200 \x68over:\x2dtranslate-y-1"}>
            <a className={"flex h-full flex-col \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/destinations">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img className="h-full w-full object-cover" src="/site-assets/caf6f72003dbd514.jpg" alt="Coastal city view of Australia at dusk" loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">Australia</h3>
                <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375"}>Popular coastal universities with a practical, outward-looking approach to learning and student life.</p>
                <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-accent"> Explore study options <svg className={"h-4 w-4 transition-transform duration-200 \x67roup-hover:\x74ranslate-x-1"} viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></p>
              </div>
            </a>
          </article>
          <article className={"group relative overflow-hidden rounded-box \x62order \x62order-secondary/\x320 bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-transform duration-200 \x68over:\x2dtranslate-y-1"}>
            <a className={"flex h-full flex-col \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/destinations">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img className="h-full w-full object-cover" src="/site-assets/73e27a1dd9a84e7e.jpg" alt="Coastal landscape of Ireland with cliffs and sea" loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">Ireland</h3>
                <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375"}>A compact, English-speaking destination with a growing reputation for technology and the humanities.</p>
                <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-accent"> Explore study options <svg className={"h-4 w-4 transition-transform duration-200 \x67roup-hover:\x74ranslate-x-1"} viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></p>
              </div>
            </a>
          </article>
          <article className={"group relative overflow-hidden rounded-box \x62order \x62order-secondary/\x320 bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-transform duration-200 \x68over:\x2dtranslate-y-1"}>
            <a className={"flex h-full flex-col \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/destinations">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img className="h-full w-full object-cover" src="/site-assets/d8631f9cb8e8f920.jpg" alt="Mountain and lake landscape of New Zealand" loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">New Zealand</h3>
                <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375"}>A small, close-knit study environment known for outdoor life and supportive teaching.</p>
                <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-accent"> Explore study options <svg className={"h-4 w-4 transition-transform duration-200 \x67roup-hover:\x74ranslate-x-1"} viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></p>
              </div>
            </a>
          </article>
          <article className={"group relative overflow-hidden rounded-box \x62order \x62order-secondary/\x320 bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-transform duration-200 \x68over:\x2dtranslate-y-1"}>
            <a className={"flex h-full flex-col \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/destinations">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img className="h-full w-full object-cover" src="/site-assets/40bad2c8b07b1703.jpg" alt="Downtown skyline of the United States with skyscrapers" loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">United States</h3>
                <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375"}>A broad landscape of colleges and universities suited to many different study interests.</p>
                <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-accent"> Explore study options <svg className={"h-4 w-4 transition-transform duration-200 \x67roup-hover:\x74ranslate-x-1"} viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></p>
              </div>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionSupportForEveryStep() {
  return (
    <section className="bg-base-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className={"\x6cg:\x73ticky lg:top-32 lg:self-start"}>
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> How we help</p>
            <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-base-content"}>Support for every step that needs a clearer answer.</h2>
            <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}>From comparing courses to preparing for departure, our counsellors help you understand your options and complete each stage with greater confidence.</p>
            <div className="mt-9">
              <a className={"btn btn-primary min-h-0 \x62order-0 px-7 py-3.5 text-base font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/services"> See how we can help </a>
            </div>
          </div>
        </div>
        <ol className={"\x64ivide-y \x64ivide-secondary/\x325 \x62order-y \x62order-secondary/\x325"}>
          <li className="py-7 first:pt-0 last:pb-0">
            <div className="flex gap-5">
              <div className="flex flex-col items-center">
                <span className={"flex h-10 w-10 shrink-0 items-center justify-center rounded-full \x62order \x62order-secondary/\x330 bg-base-200 text-sm font-bold text-accent"}>01</span>
                <span className={"mt-3 w-px flex-1 \x62order-l \x62order-dashed \x62order-secondary/\x340"} aria-hidden="true" />
              </div>
              <div className="pt-1.5">
                <h3 className="text-lg font-bold tracking-tight text-base-content lg:text-xl">Course and university guidance</h3>
                <p className={"mt-2 leading-relaxed \x74ext-neutral/\x375"}>Compare suitable courses, institutions and destinations based on your goals, academic background and preferences.</p>
              </div>
            </div>
          </li>
          <li className="py-7 first:pt-0 last:pb-0">
            <div className="flex gap-5">
              <div className="flex flex-col items-center">
                <span className={"flex h-10 w-10 shrink-0 items-center justify-center rounded-full \x62order \x62order-secondary/\x330 bg-base-200 text-sm font-bold text-accent"}>02</span>
                <span className={"mt-3 w-px flex-1 \x62order-l \x62order-dashed \x62order-secondary/\x340"} aria-hidden="true" />
              </div>
              <div className="pt-1.5">
                <h3 className="text-lg font-bold tracking-tight text-base-content lg:text-xl">Application support</h3>
                <p className={"mt-2 leading-relaxed \x74ext-neutral/\x375"}>Understand requirements, organise your documents and prepare a complete university application.</p>
              </div>
            </div>
          </li>
          <li className="py-7 first:pt-0 last:pb-0">
            <div className="flex gap-5">
              <div className="flex flex-col items-center">
                <span className={"flex h-10 w-10 shrink-0 items-center justify-center rounded-full \x62order \x62order-secondary/\x330 bg-base-200 text-sm font-bold text-accent"}>03</span>
                <span className={"mt-3 w-px flex-1 \x62order-l \x62order-dashed \x62order-secondary/\x340"} aria-hidden="true" />
              </div>
              <div className="pt-1.5">
                <h3 className="text-lg font-bold tracking-tight text-base-content lg:text-xl">Visa guidance</h3>
                <p className={"mt-2 leading-relaxed \x74ext-neutral/\x375"}>Get practical guidance on the application process, required documents and important preparation steps.</p>
              </div>
            </div>
          </li>
          <li className="py-7 first:pt-0 last:pb-0">
            <div className="flex gap-5">
              <div className="flex flex-col items-center">
                <span className={"flex h-10 w-10 shrink-0 items-center justify-center rounded-full \x62order \x62order-secondary/\x330 bg-base-200 text-sm font-bold text-accent"}>04</span>
                <span className={"mt-3 w-px flex-1 \x62order-l \x62order-dashed \x62order-secondary/\x340"} aria-hidden="true" />
              </div>
              <div className="pt-1.5">
                <h3 className="text-lg font-bold tracking-tight text-base-content lg:text-xl">Accommodation guidance</h3>
                <p className={"mt-2 leading-relaxed \x74ext-neutral/\x375"}>Explore available accommodation options and understand what to consider before booking.</p>
              </div>
            </div>
          </li>
          <li className="py-7 first:pt-0 last:pb-0">
            <div className="flex gap-5">
              <div className="flex flex-col items-center">
                <span className={"flex h-10 w-10 shrink-0 items-center justify-center rounded-full \x62order \x62order-secondary/\x330 bg-base-200 text-sm font-bold text-accent"}>05</span>
              </div>
              <div className="pt-1.5">
                <h3 className="text-lg font-bold tracking-tight text-base-content lg:text-xl">Pre-departure support</h3>
                <p className={"mt-2 leading-relaxed \x74ext-neutral/\x375"}>Prepare for travel, arrival and the practical changes that come with studying in another country.</p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

function ImportedSectionAClearerPathFrom() {
  return (
    <section className={"\x62g-[#\x3171717]"}>
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> Your journey</p>
          <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-white"}>A clearer path from first conversation to departure.</h2>
          <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-white/\x370"}>Every application is different, but knowing the main stages makes it easier to prepare for what comes next.</p>
        </div>
        <ol className={"mt-14 flex flex-col gap-0 \x6cg:\x66lex-row"}>
          <li className="relative flex-1 pb-10 lg:pb-0">
            <div className={"flex items-center gap-5 \x6cg:\x62lock"}>
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-content">01 <span className={"absolute left-14 top-1/2 hidden h-px w-[calc(100%+2rem)] \x2dtranslate-y-1/\x32 \x62g-primary/\x340 \x6cg:\x62lock"} aria-hidden="true" /></div>
              <div className="lg:mt-6 lg:pr-8">
                <h3 className="text-lg font-bold tracking-tight text-white lg:text-xl">Discover your options</h3>
                <p className={"mt-2 max-w-xs leading-relaxed \x74ext-white/\x370"}>Discuss your academic background, goals, preferred destinations and budget.</p>
              </div>
            </div>
            <span className={"absolute bottom-2 left-6 top-14 w-px \x62order-l \x62order-dashed \x62order-white/\x325 \x6cg:\x68idden"} aria-hidden="true" />
          </li>
          <li className="relative flex-1 pb-10 lg:pb-0">
            <div className={"flex items-center gap-5 \x6cg:\x62lock"}>
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-content">02 <span className={"absolute left-14 top-1/2 hidden h-px w-[calc(100%+2rem)] \x2dtranslate-y-1/\x32 \x62g-primary/\x340 \x6cg:\x62lock"} aria-hidden="true" /></div>
              <div className="lg:mt-6 lg:pr-8">
                <h3 className="text-lg font-bold tracking-tight text-white lg:text-xl">Choose your direction</h3>
                <p className={"mt-2 max-w-xs leading-relaxed \x74ext-white/\x370"}>Compare courses and universities before deciding where to apply.</p>
              </div>
            </div>
            <span className={"absolute bottom-2 left-6 top-14 w-px \x62order-l \x62order-dashed \x62order-white/\x325 \x6cg:\x68idden"} aria-hidden="true" />
          </li>
          <li className="relative flex-1 pb-10 lg:pb-0">
            <div className={"flex items-center gap-5 \x6cg:\x62lock"}>
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-content">03 <span className={"absolute left-14 top-1/2 hidden h-px w-[calc(100%+2rem)] \x2dtranslate-y-1/\x32 \x62g-primary/\x340 \x6cg:\x62lock"} aria-hidden="true" /></div>
              <div className="lg:mt-6 lg:pr-8">
                <h3 className="text-lg font-bold tracking-tight text-white lg:text-xl">Prepare your application</h3>
                <p className={"mt-2 max-w-xs leading-relaxed \x74ext-white/\x370"}>Organise the required documents and submit your university application.</p>
              </div>
            </div>
            <span className={"absolute bottom-2 left-6 top-14 w-px \x62order-l \x62order-dashed \x62order-white/\x325 \x6cg:\x68idden"} aria-hidden="true" />
          </li>
          <li className="relative flex-1 pb-10 lg:pb-0">
            <div className={"flex items-center gap-5 \x6cg:\x62lock"}>
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-content">04 <span className={"absolute left-14 top-1/2 hidden h-px w-[calc(100%+2rem)] \x2dtranslate-y-1/\x32 \x62g-primary/\x340 \x6cg:\x62lock"} aria-hidden="true" /></div>
              <div className="lg:mt-6 lg:pr-8">
                <h3 className="text-lg font-bold tracking-tight text-white lg:text-xl">Navigate the next steps</h3>
                <p className={"mt-2 max-w-xs leading-relaxed \x74ext-white/\x370"}>Respond to offer conditions and prepare for the relevant visa process.</p>
              </div>
            </div>
            <span className={"absolute bottom-2 left-6 top-14 w-px \x62order-l \x62order-dashed \x62order-white/\x325 \x6cg:\x68idden"} aria-hidden="true" />
          </li>
          <li className="relative flex-1 pb-10 lg:pb-0">
            <div className={"flex items-center gap-5 \x6cg:\x62lock"}>
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-content">05 </div>
              <div className="lg:mt-6 lg:pr-8">
                <h3 className="text-lg font-bold tracking-tight text-white lg:text-xl">Get ready to leave</h3>
                <p className={"mt-2 max-w-xs leading-relaxed \x74ext-white/\x370"}>Plan your accommodation, travel and arrival with pre-departure guidance.</p>
              </div>
            </div>
          </li>
        </ol>
        <div className="mt-14 lg:mt-16">
          <a className={"btn btn-primary min-h-0 \x62order-0 px-7 py-3.5 text-base font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/services"> Understand the application process </a>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionMeetAskQuestionsAnd() {
  return (
    <section className="bg-base-100">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28">
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> Upcoming events</p>
          <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-base-content"}>Meet, ask questions and plan your next step.</h2>
          <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}>Join university visits, information sessions and study-abroad events designed to help you make more informed decisions.</p>
          <div className="mt-9">
            <a className={"btn min-h-0 \x62order \x62order-secondary bg-transparent px-6 py-3 text-base font-semibold text-neutral transition-colors duration-150 \x68over:\x62order-neutral hover:bg-neutral hover:text-neutral-content \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/events"> View all events </a>
          </div>
        </div>
        <div className="mt-14">
          <article className={"group h-full overflow-hidden rounded-box \x62order bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-shadow duration-200 \x68over:\x73hadow-[\x30_18px_45px_-26px_rgba(\x326,\x326,\x326,\x30.\x35)] \x62order-primary/\x340 flex flex-col \x6cg:\x67rid lg:grid-cols-[0.85fr_1.15fr]"}>
            <div className="relative overflow-hidden aspect-[3/4]">
              <img className={"h-full w-full object-cover transition-transform duration-500 \x67roup-hover:\x73cale-[\x31.\x303]"} src="/site-assets/b1218f034557105d.jpg" alt="Study in the UK: University of Plymouth" loading="lazy" />
              <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-[#\x3171717]/\x375 \x76ia-[#\x3171717]/\x310 \x74o-transparent"} aria-hidden="true" />
              <span className={"absolute left-4 top-4 rounded-full \x62order \x62order-white/\x320 \x62g-[#\x3171717]/\x355 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}>Application day</span>
              <span className={"absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full \x62order \x62order-primary/\x340 \x62g-[#\x3171717]/\x360 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}><span className="relative flex h-2 w-2"><span className={"absolute inline-flex h-full w-full \x61nimate-ping rounded-full bg-primary opacity-75"} /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span> Running </span>
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <span className={"flex h-14 w-14 flex-col items-center justify-center rounded-field bg-primary text-primary-content \x73hadow-lg"}>
                  <span className="text-xl font-bold leading-none">31</span>
                  <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest">Oct</span>
                </span>
                <div className="text-white">
                  <p className="text-sm font-semibold">Sat, Oct 31</p>
                  <p className={"mt-0.5 text-xs \x74ext-white/\x375"}>10:30 PM</p>
                </div>
              </div>
            </div>
            <div className={"flex flex-1 flex-col p-6 lg:p-7 \x6cg:\x6austify-center lg:p-10"}>
              <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">Study in the UK: University of Plymouth</h3>
              <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375 \x6cine-clamp-3"}>Thinking about studying in the UK? 🎓 Discover the University of Plymouth, explore available programmes, and learn how to begin your application.</p>
              <div className={"mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm \x74ext-neutral/\x370"} />
              <div className={"mt-6 flex items-center justify-between gap-3 \x62order-t \x62order-secondary/\x320 pt-5"}>
                <a className={"btn btn-primary min-h-0 \x62order-0 px-5 py-2.5 text-sm font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/events/study-in-the-uk-university-of-plymouth/register">Register your interest</a>
                <a className={"inline-flex items-center gap-2 text-sm font-semibold text-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/events/study-in-the-uk-university-of-plymouth/register"> View details <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
              </div>
            </div>
          </article>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <article className={"group h-full overflow-hidden rounded-box \x62order bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-shadow duration-200 \x68over:\x73hadow-[\x30_18px_45px_-26px_rgba(\x326,\x326,\x326,\x30.\x35)] \x62order-primary/\x340 flex flex-col"}>
              <div className="relative overflow-hidden aspect-[3/4]">
                <img className={"h-full w-full object-cover transition-transform duration-500 \x67roup-hover:\x73cale-[\x31.\x303]"} src="/site-assets/58be6c2c5b08d8c7.png" alt="Study in Canada - September 2027 Intake" loading="lazy" />
                <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-[#\x3171717]/\x375 \x76ia-[#\x3171717]/\x310 \x74o-transparent"} aria-hidden="true" />
                <span className={"absolute left-4 top-4 rounded-full \x62order \x62order-white/\x320 \x62g-[#\x3171717]/\x355 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}>Application day</span>
                <span className={"absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full \x62order \x62order-primary/\x340 \x62g-[#\x3171717]/\x360 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}><span className="relative flex h-2 w-2"><span className={"absolute inline-flex h-full w-full \x61nimate-ping rounded-full bg-primary opacity-75"} /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span> Running </span>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <span className={"flex h-14 w-14 flex-col items-center justify-center rounded-field bg-primary text-primary-content \x73hadow-lg"}>
                    <span className="text-xl font-bold leading-none">30</span>
                    <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest">Sep</span>
                  </span>
                  <div className="text-white">
                    <p className="text-sm font-semibold">Wed, Sep 30</p>
                    <p className={"mt-0.5 text-xs \x74ext-white/\x375"}>2:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">Study in Canada - September 2027 Intake</h3>
                <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375 \x6cine-clamp-3"}>Canada offers globally recognised education, a multicultural student experience, and opportunities to build valuable international experience after graduation.</p>
                <div className={"mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm \x74ext-neutral/\x370"} />
                <div className={"mt-6 flex items-center justify-between gap-3 \x62order-t \x62order-secondary/\x320 pt-5"}>
                  <a className={"btn btn-primary min-h-0 \x62order-0 px-5 py-2.5 text-sm font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/events/study-in-canada-september-2027-intake/register">Register your interest</a>
                </div>
              </div>
            </article>
            <article className={"group h-full overflow-hidden rounded-box \x62order bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-shadow duration-200 \x68over:\x73hadow-[\x30_18px_45px_-26px_rgba(\x326,\x326,\x326,\x30.\x35)] \x62order-primary/\x340 flex flex-col"}>
              <div className="relative overflow-hidden aspect-[3/4]">
                <img className={"h-full w-full object-cover transition-transform duration-500 \x67roup-hover:\x73cale-[\x31.\x303]"} src="/site-assets/3874e90935e173c2.png" alt="Study in Canada: Georgian College" loading="lazy" />
                <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-[#\x3171717]/\x375 \x76ia-[#\x3171717]/\x310 \x74o-transparent"} aria-hidden="true" />
                <span className={"absolute left-4 top-4 rounded-full \x62order \x62order-white/\x320 \x62g-[#\x3171717]/\x355 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}>University visit</span>
                <span className={"absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full \x62order \x62order-primary/\x340 \x62g-[#\x3171717]/\x360 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}><span className="relative flex h-2 w-2"><span className={"absolute inline-flex h-full w-full \x61nimate-ping rounded-full bg-primary opacity-75"} /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span> Running </span>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <span className={"flex h-14 w-14 flex-col items-center justify-center rounded-field bg-primary text-primary-content \x73hadow-lg"}>
                    <span className="text-xl font-bold leading-none">31</span>
                    <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest">Oct</span>
                  </span>
                  <div className="text-white">
                    <p className="text-sm font-semibold">Sat, Oct 31</p>
                    <p className={"mt-0.5 text-xs \x74ext-white/\x375"}>10:30 PM</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">Study in Canada: Georgian College</h3>
                <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375 \x6cine-clamp-3"}>Your Canadian study journey starts with the right information. 🍁 Explore Georgian College programmes, entry requirements, and application guidance.</p>
                <div className={"mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm \x74ext-neutral/\x370"} />
                <div className={"mt-6 flex items-center justify-between gap-3 \x62order-t \x62order-secondary/\x320 pt-5"}>
                  <a className={"btn btn-primary min-h-0 \x62order-0 px-5 py-2.5 text-sm font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/events/meet-evelyne-macharia-georgian-college/register">Register your interest</a>
                </div>
              </div>
            </article>
            <a className={"group flex flex-col items-center justify-center gap-4 rounded-box \x62order-2 \x62order-dashed \x62order-secondary/\x330 bg-base-100 p-8 text-center transition-colors duration-200 \x68over:\x62order-primary/\x360 \x68over:\x62g-primary/[\x30.\x304] \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/events">
              <span className={"flex h-12 w-12 items-center justify-center rounded-full \x62g-primary/\x310 text-accent transition-colors duration-200 \x67roup-hover:\x62g-primary \x67roup-hover:\x74ext-primary-content"}>
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 2v4M18 2v4M4 8h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <p className="font-bold tracking-tight text-base-content">View more events</p>
                <p className={"mt-1 text-sm \x74ext-neutral/\x370"}>8 more events to explore</p>
              </div>
              <span className={"inline-flex items-center gap-1.5 text-sm font-semibold text-accent \x67roup-hover:\x75nderline"}> View all <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionGuidanceCloserToHome() {
  return (
    <section className="bg-base-200">
      <div className={"mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-2 \x6cg:\x69tems-center lg:gap-16 lg:py-28"}>
        <div>
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> Find Uniserv</p>
            <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-base-content"}>Guidance closer to home.</h2>
            <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}>Connect with a Uniserv office or speak with a counsellor about your study plans.</p>
          </div>
        </div>
        <div className={"\x6cg:\x6austify-self-end"}>
          <div className={"max-w-md rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-8 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)]"}>
            <svg className="h-12 w-12 text-accent" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <circle cx="12" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <h3 className="mt-5 text-xl font-bold tracking-tight text-base-content"> Talk to a real team </h3>
            <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375"}> Office locations are being confirmed. If you have questions about studying abroad, speak directly with a counsellor who can point you in the right direction. </p>
            <div className={"mt-7 flex flex-col gap-3 \x73m:\x66lex-row"}>
              <a className={"btn btn-primary min-h-0 \x62order-0 px-6 py-3 text-base font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/contact"> Find an office </a>
              <button className={"btn min-h-0 \x62order \x62order-secondary bg-transparent px-6 py-3 text-base font-semibold text-neutral transition-colors duration-150 \x68over:\x62order-neutral hover:bg-neutral hover:text-neutral-content \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} type="button"> Talk to a counsellor </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedFooterStudyAbroad({ onOpenCounsellor }: { onOpenCounsellor: () => void }) {
  return (
    <footer className={"\x62g-[#\x3171717]"}>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-16">
          <div className="max-w-sm">
            <a className={"inline-flex items-center gap-3 rounded-field transition-opacity duration-150 hover:opacity-80 \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} aria-current="page" aria-label="Uniserv Education — home" href="/">
              <img className="h-9 w-auto" src="/site-assets/00bf6ad4619775b2.png" alt="Uniserv Education" loading="lazy" />
            </a>
            <p className={"mt-5 leading-relaxed \x74ext-white/\x370"}>Master Your Own Destiny</p>
            <button className={"mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary hover:text-accent"} type="button" onClick={onOpenCounsellor}> Talk to a counsellor <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
          </div>
          <nav aria-label="Study Abroad">
            <h2 className={"text-xs font-semibold uppercase tracking-[0.2em] \x74ext-white/\x350"}>Study Abroad</h2>
            <ul className={"mt-5 \x73pace-y-3"}>
              <li>
                <a className={"text-sm font-medium \x74ext-white/\x385 transition-colors duration-150 hover:text-primary \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/destinations">Explore destinations</a>
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
