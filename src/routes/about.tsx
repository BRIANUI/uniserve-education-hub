import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/about.css?raw";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About Uniserv | Uniserv Education" }] }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  useImportedLayout();
  return (
    <>
      <style>{capturedCSS}</style>
      <div id="app">
        <div>
          <ImportedHeader />
          <main data-v-de60a88a="">
            <ImportedSectionGuidanceShapedAroundThe />
            <section className="bg-base-200" data-v-de60a88a="">
              <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24" data-v-de60a88a="">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16" data-v-de60a88a="">
                  <div data-v-de60a88a="">
                    <div data-v-de60a88a="">
                      <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> Who we are</p>
                      <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-base-content"}>A practical connection between students and international education.</h2>
                    </div>
                  </div>
                  <div className="lg:pt-2" data-v-de60a88a="">
                    <p className={"text-lg leading-relaxed \x74ext-neutral/\x375"} data-v-de60a88a=""> Choosing where and what to study involves academic, financial and personal decisions. We help students organise those choices, understand the available routes and identify university options worth investigating further. </p>
                    <p className={"mt-4 text-lg leading-relaxed \x74ext-neutral/\x375"} data-v-de60a88a=""> Our role is to provide clearer information, honest conversations and practical preparation. Final admission and visa decisions remain with the relevant universities and authorities. </p>
                  </div>
                </div>
              </div>
            </section>
            <ImportedSectionPeopleBehindTheGuidance />
            <ImportedSectionListenFirstCompareCarefully />
            <ImportedSectionMeetUsWhereYour />
            <section className={"\x62g-[#\x3171717]"} data-v-de60a88a="">
              <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24" data-v-de60a88a="">
                <div className="mx-auto max-w-2xl text-center" data-v-de60a88a="">
                  <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary" data-v-de60a88a=""><span className="inline-block h-px w-8 bg-primary" data-v-de60a88a="" /> Next step <span className="inline-block h-px w-8 bg-primary" data-v-de60a88a="" /></p>
                  <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-white text-balance sm:text-4xl" data-v-de60a88a=""> Ready to explore your study options? </h2>
                  <p className={"mt-6 text-lg leading-relaxed \x74ext-white/\x370"} data-v-de60a88a=""> Tell us about your qualifications, course interests and preferences. We will help identify university options worth exploring. </p>
                  <div className={"mt-9 flex flex-col items-center justify-center gap-3 \x73m:\x66lex-row"} data-v-de60a88a="">
                    <button className={"btn btn-primary min-h-0 \x62order-0 px-8 py-3.5 text-base font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" type="button"> Find my university options </button>
                    <a className={"btn min-h-0 \x62order \x62order-white/\x330 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-colors duration-150 \x68over:\x62order-white hover:bg-white hover:text-neutral \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="/universities"> Explore university partners </a>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <ImportedFooterStudyAbroad />
          <dialog className="counsellor-dialog" data-v-c6d60915="" role="dialog" aria-modal="true" aria-labelledby="counsellor-modal-title">
            <div className="flex max-h-[90vh] flex-col rounded-box bg-base-100" data-v-c6d60915="">
              <div className={"flex items-center justify-between gap-4 \x62order-b \x62order-secondary/\x320 px-6 py-4 sm:px-8"} data-v-c6d60915="">
                <div data-v-c6d60915="">
                  <h2 className="text-xl font-bold tracking-tight text-base-content" data-v-c6d60915="" id="counsellor-modal-title"> Find your university options </h2>
                  <p className={"mt-1 text-sm \x74ext-neutral/\x370"} data-v-c6d60915=""> Tell us about your plans and we'll help identify options worth exploring. </p>
                </div>
                <button className={"flex h-11 w-11 shrink-0 items-center justify-center rounded-field text-neutral transition-colors duration-150 hover:bg-base-200 \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-c6d60915="" type="button" aria-label="Close">
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

function ImportedHeader() {
  return (
    <header className={"sticky top-0 z-40 \x62order-b \x62order-secondary/\x320 \x62g-base-100/\x330"} data-v-9790ec4b="" data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"shadow-[0_6px_24px_-18px_rgba(26,26,26,0.45)]\"],\"removed\":[],\"threshold\":648},\"mobile\":{\"added\":[\"shadow-[0_6px_24px_-18px_rgba(26,26,26,0.45)]\"],\"removed\":[],\"threshold\":633}}"}>
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6 sm:px-8 lg:h-[4.5rem]" data-v-9790ec4b="">
        <a className={"shrink-0 rounded-field transition-opacity duration-150 hover:opacity-80 \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} aria-label="Uniserv Education — home" data-v-9790ec4b="" href="/">
          <img className="h-8 w-auto lg:h-9" data-v-9790ec4b="" src="/site-assets/00bf6ad4619775b2.png" alt="Uniserv Education" />
        </a>
        <nav className={"hidden flex-1 justify-center \x6cg:\x66lex"} data-v-9790ec4b="" aria-label="Primary">
          <ul className="flex items-center gap-1 xl:gap-2" data-v-9790ec4b="">
            <li data-v-9790ec4b="">
              <a className="nav-link" data-v-9790ec4b="" href="/destinations">Study Abroad</a>
            </li>
            <li data-v-9790ec4b="">
              <a className="nav-link" data-v-9790ec4b="" href="/universities">University Partners</a>
            </li>
            <li data-v-9790ec4b="">
              <a className="nav-link" data-v-9790ec4b="" href="/events">Events</a>
            </li>
            <li data-v-9790ec4b="">
              <a className="nav-link nav-link--active" aria-current="page" data-v-9790ec4b="" href="#">About Us</a>
            </li>
          </ul>
        </nav>
        <div className={"hidden \x6cg:\x62lock"} data-v-9790ec4b="">
          <button className={"btn btn-primary min-h-0 \x62order-0 px-5 py-2.5 text-sm font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-9790ec4b="" type="button"> Talk to a counsellor </button>
        </div>
        <button className={"btn btn-ghost ml-auto h-11 min-h-0 w-11 \x62order-0 p-0 \x6cg:\x68idden"} data-v-9790ec4b="" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open navigation menu">
          <svg className="h-6 w-6" data-v-9790ec4b="" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path data-v-9790ec4b="" d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function ImportedSectionGuidanceShapedAroundThe() {
  return (
    <section className="relative overflow-hidden bg-base-100" data-v-de60a88a="">
      <div className="about-hero__bg" data-v-de60a88a="" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-24 lg:pt-20" data-v-de60a88a="">
        <div className={"about-hero__content \x6frder-1"} style={{ transform: "translateY(0px)", opacity: "1" }} data-v-de60a88a="">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary" data-v-de60a88a=""><span className="inline-block h-px w-8 bg-primary" data-v-de60a88a="" /> About Uniserv </p>
          <h1 className={"max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-base-content text-balance sm:text-5xl \x78l:\x74ext-[\x33.\x325rem]"} data-v-de60a88a=""> Guidance shaped around the student. </h1>
          <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"} data-v-de60a88a=""> Uniserv Education helps students and families explore international study options, compare universities and prepare for the steps involved in applying to study abroad. </p>
          <p className={"mt-4 max-w-xl text-base leading-relaxed \x74ext-neutral/\x370"} data-v-de60a88a=""> We believe the destination should fit the student—not the other way around. That begins with understanding each student's qualifications, interests, priorities and practical circumstances. </p>
          <div className={"mt-9 flex flex-col gap-3 \x73m:\x66lex-row \x73m:\x69tems-center"} data-v-de60a88a="">
            <button className={"btn btn-primary min-h-0 \x62order-0 px-7 py-3.5 text-base font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" type="button"> Find my university options </button>
            <a className={"btn min-h-0 \x62order \x62order-secondary bg-transparent px-7 py-3.5 text-base font-semibold text-neutral transition-colors duration-150 \x68over:\x62order-neutral hover:bg-neutral hover:text-neutral-content \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="#team"> Meet the team </a>
          </div>
        </div>
        <div className={"about-hero__visual \x6frder-2"} style={{ transform: "translateY(0px)", opacity: "1" }} data-v-de60a88a="">
          <div className={"relative overflow-hidden rounded-box \x62order \x62order-secondary/\x325 \x73hadow-[\x30_20px_60px_-30px_rgba(\x326,\x326,\x326,\x30.\x335)]"} data-v-de60a88a="">
            <img className="aspect-[2/3] w-full object-cover" data-v-de60a88a="" src="/site-assets/ece34421cb029b42.jpg" alt="A student discussing study plans with a counsellor" />
            <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-[#\x3171717]/\x335 \x74o-transparent"} data-v-de60a88a="" aria-hidden="true" />
            <p className={"absolute bottom-4 left-4 rounded-full \x62order \x62order-white/\x320 \x62g-[#\x3171717]/\x360 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white \x62ackdrop-blur-sm"} data-v-de60a88a=""> Student-centred guidance </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionPeopleBehindTheGuidance() {
  return (
    <section className={"\x73croll-mt-24 bg-base-100"} data-v-de60a88a="" id="team">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28" data-v-de60a88a="">
        <div data-v-de60a88a="">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> Meet the team</p>
          <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-base-content"}>People behind the guidance.</h2>
          <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}>Our team brings together leadership, regional knowledge and study-destination expertise to help students understand their options and prepare for the next steps.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6" data-v-de60a88a="">
          <article className={"flex flex-col rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-6"} data-v-de60a88a="">
            <div className={"flex h-24 w-24 items-center justify-center overflow-hidden rounded-full \x62order \x62order-secondary/\x325 bg-base-200"} data-v-de60a88a="">
              <span className={"text-2xl font-bold \x74ext-neutral/\x350"} data-v-de60a88a="" aria-hidden="true">AE</span>
            </div>
            <h3 className="mt-5 text-lg font-bold tracking-tight text-base-content" data-v-de60a88a="">Amin Esmail</h3>
            <p className="mt-1 text-sm font-medium text-accent" data-v-de60a88a="">Chief Executive Officer</p>
          </article>
        </div>
        <div className="mt-14" data-v-de60a88a="">
          <div className="flex flex-wrap gap-2" data-v-de60a88a="" role="tablist" aria-label="Team groups">
            <button className={"rounded-full \x62order \x62order-secondary/\x330 px-4 py-2 text-sm font-semibold transition-colors duration-150 \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary \x62order-primary bg-primary text-primary-content"} data-v-de60a88a="" type="button" aria-pressed="true">Leadership</button>
            <button className={"rounded-full \x62order \x62order-secondary/\x330 px-4 py-2 text-sm font-semibold transition-colors duration-150 \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary bg-base-100 text-neutral \x68over:\x62order-accent hover:text-accent"} data-v-de60a88a="" type="button" aria-pressed="false">Regional leaders</button>
            <button className={"rounded-full \x62order \x62order-secondary/\x330 px-4 py-2 text-sm font-semibold transition-colors duration-150 \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary bg-base-100 text-neutral \x68over:\x62order-accent hover:text-accent"} data-v-de60a88a="" type="button" aria-pressed="false">Counselling &amp; experts</button>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-v-de60a88a="">
            <li className={"flex items-start gap-4 rounded-box \x62order \x62order-secondary/\x320 bg-base-200 p-5"} data-v-de60a88a="">
              <div className={"flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full \x62order \x62order-secondary/\x325 bg-base-100"} data-v-de60a88a="">
                <span className={"text-base font-bold \x74ext-neutral/\x350"} data-v-de60a88a="" aria-hidden="true">AE</span>
              </div>
              <div className="min-w-0" data-v-de60a88a="">
                <h3 className="font-bold text-base-content" data-v-de60a88a="">Amin Esmail</h3>
                <p className={"mt-0.5 text-sm \x74ext-neutral/\x375"} data-v-de60a88a="">Chief Executive Officer</p>
              </div>
            </li>
            <li className={"flex items-start gap-4 rounded-box \x62order \x62order-secondary/\x320 bg-base-200 p-5"} data-v-de60a88a="">
              <div className={"flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full \x62order \x62order-secondary/\x325 bg-base-100"} data-v-de60a88a="">
                <span className={"text-base font-bold \x74ext-neutral/\x350"} data-v-de60a88a="" aria-hidden="true">JK</span>
              </div>
              <div className="min-w-0" data-v-de60a88a="">
                <h3 className="font-bold text-base-content" data-v-de60a88a="">Jordan Koech</h3>
                <p className={"mt-0.5 text-sm \x74ext-neutral/\x375"} data-v-de60a88a="">Senior VP of Marketing &amp; Procurement</p>
              </div>
            </li>
            <li className={"flex items-start gap-4 rounded-box \x62order \x62order-secondary/\x320 bg-base-200 p-5"} data-v-de60a88a="">
              <div className={"flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full \x62order \x62order-secondary/\x325 bg-base-100"} data-v-de60a88a="">
                <span className={"text-base font-bold \x74ext-neutral/\x350"} data-v-de60a88a="" aria-hidden="true">AW</span>
              </div>
              <div className="min-w-0" data-v-de60a88a="">
                <h3 className="font-bold text-base-content" data-v-de60a88a="">Anne Wambugu</h3>
                <p className={"mt-0.5 text-sm \x74ext-neutral/\x375"} data-v-de60a88a="">VP of Canadian Recruitment</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionListenFirstCompareCarefully() {
  return (
    <section className="bg-base-200" data-v-de60a88a="">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24" data-v-de60a88a="">
        <div data-v-de60a88a="">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> Our approach</p>
          <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-base-content"}>Listen first. Compare carefully. Plan clearly.</h2>
          <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}>A suitable option should reflect the student's qualifications, course interests, preferred study level, budget, intended intake and personal priorities.</p>
        </div>
        <ol className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3" data-v-de60a88a="">
          <li className={"flex flex-col gap-4 \x62order-t-2 \x62order-secondary/\x330 pt-6"} data-v-de60a88a="">
            <span className={"flex h-10 w-10 items-center justify-center rounded-full \x62order \x62order-secondary/\x330 bg-base-100 text-sm font-bold text-accent"} data-v-de60a88a="">01</span>
            <div data-v-de60a88a="">
              <h3 className="text-xl font-bold tracking-tight text-base-content" data-v-de60a88a="">Listen first</h3>
              <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375"} data-v-de60a88a="">We begin with the student’s academic background, ambitions and practical considerations.</p>
            </div>
          </li>
          <li className={"flex flex-col gap-4 \x62order-t-2 \x62order-secondary/\x330 pt-6"} data-v-de60a88a="">
            <span className={"flex h-10 w-10 items-center justify-center rounded-full \x62order \x62order-secondary/\x330 bg-base-100 text-sm font-bold text-accent"} data-v-de60a88a="">02</span>
            <div data-v-de60a88a="">
              <h3 className="text-xl font-bold tracking-tight text-base-content" data-v-de60a88a="">Compare carefully</h3>
              <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375"} data-v-de60a88a="">We consider relevant destinations and university options while identifying requirements that still need confirmation.</p>
            </div>
          </li>
          <li className={"flex flex-col gap-4 \x62order-t-2 \x62order-secondary/\x330 pt-6"} data-v-de60a88a="">
            <span className={"flex h-10 w-10 items-center justify-center rounded-full \x62order \x62order-secondary/\x330 bg-base-100 text-sm font-bold text-accent"} data-v-de60a88a="">03</span>
            <div data-v-de60a88a="">
              <h3 className="text-xl font-bold tracking-tight text-base-content" data-v-de60a88a="">Plan clearly</h3>
              <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375"} data-v-de60a88a="">We explain the next steps so students and families can prepare with a realistic understanding of the process.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

function ImportedSectionMeetUsWhereYour() {
  return (
    <section className={"\x73croll-mt-24 bg-base-100"} data-v-de60a88a="" id="offices">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28" data-v-de60a88a="">
        <div data-v-de60a88a="">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> Our locations</p>
          <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-base-content"}>Meet us where your journey begins.</h2>
          <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}>Connect with the Uniserv office closest to you for guidance on study destinations, university options and application preparation.</p>
        </div>
        <div className={"mt-12 \x73pace-y-12"} data-v-de60a88a="">
          <div data-v-de60a88a="">
            <h3 className="flex items-center gap-3 text-xl font-bold tracking-tight text-base-content" data-v-de60a88a="">Kenya <span className={"h-px flex-1 \x62g-secondary/\x330"} data-v-de60a88a="" aria-hidden="true" /></h3>
            <ul className="mt-5 grid gap-4 lg:grid-cols-2" data-v-de60a88a="">
              <li className={"rounded-box \x62order \x62order-secondary/\x325 bg-base-200 p-6"} data-v-de60a88a="">
                <h4 className="text-lg font-bold tracking-tight text-base-content" data-v-de60a88a="">Eldoret</h4>
                <p className={"mt-3 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-de60a88a="">1st Floor, Rupa’s Mall, Malaba Road, Eldoret</p>
                <address className={"mt-4 \x73pace-y-2 text-sm not-italic"} data-v-de60a88a="">
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Email: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="mailto:eldoret@uniserveducation.com">eldoret@uniserveducation.com</a>
                  </p>
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Telephone: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="tel:+254735536101">+254 735 536 101</a>
                  </p>
                </address>
              </li>
              <li className={"rounded-box \x62order \x62order-secondary/\x325 bg-base-200 p-6"} data-v-de60a88a="">
                <h4 className="text-lg font-bold tracking-tight text-base-content" data-v-de60a88a="">Kapsabet</h4>
                <p className={"mt-3 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-de60a88a="">4th Floor, Kapitol Arcade, Kisumu Road</p>
                <address className={"mt-4 \x73pace-y-2 text-sm not-italic"} data-v-de60a88a="">
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Email: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="mailto:kapsabet@uniserveducation.com">kapsabet@uniserveducation.com</a>
                  </p>
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Telephone: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="tel:+254735498975">+254 735 498 975</a>
                  </p>
                </address>
              </li>
              <li className={"rounded-box \x62order \x62order-secondary/\x325 bg-base-200 p-6"} data-v-de60a88a="">
                <h4 className="text-lg font-bold tracking-tight text-base-content" data-v-de60a88a="">Kisumu</h4>
                <p className={"mt-3 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-de60a88a="">United Mall, Mezzanine Floor, Wing A, Kisumu</p>
                <address className={"mt-4 \x73pace-y-2 text-sm not-italic"} data-v-de60a88a="">
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Email: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="mailto:kisumu@uniserveducation.com">kisumu@uniserveducation.com</a>
                  </p>
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Telephone: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="tel:+254780279350">+254 780 279 350</a>
                  </p>
                </address>
              </li>
              <li className={"rounded-box \x62order \x62order-secondary/\x325 bg-base-200 p-6"} data-v-de60a88a="">
                <h4 className="text-lg font-bold tracking-tight text-base-content" data-v-de60a88a="">Mombasa</h4>
                <p className={"mt-3 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-de60a88a="">2nd Floor, Nyali Bazaar Mall, Nyali Road</p>
                <address className={"mt-4 \x73pace-y-2 text-sm not-italic"} data-v-de60a88a="">
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Email: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="mailto:msa@uniserveducation.com">msa@uniserveducation.com</a>
                  </p>
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Telephone: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="tel:+254414472108">+254 41 4472108</a>
                  </p>
                </address>
              </li>
              <li className={"rounded-box \x62order \x62order-secondary/\x325 bg-base-200 p-6"} data-v-de60a88a="">
                <h4 className="text-lg font-bold tracking-tight text-base-content" data-v-de60a88a="">Nairobi</h4>
                <p className={"mt-3 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-de60a88a="">9th Floor, Fortis Tower, Woodvale Grove, Nairobi, Kenya</p>
                <address className={"mt-4 \x73pace-y-2 text-sm not-italic"} data-v-de60a88a="">
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Email: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="mailto:info@uniserveducation.com">info@uniserveducation.com</a>
                  </p>
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Telephone: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="tel:+254734004003">+254 734 004 003</a>
                  </p>
                </address>
              </li>
            </ul>
          </div>
          <div data-v-de60a88a="">
            <h3 className="flex items-center gap-3 text-xl font-bold tracking-tight text-base-content" data-v-de60a88a="">Mauritius <span className={"h-px flex-1 \x62g-secondary/\x330"} data-v-de60a88a="" aria-hidden="true" /></h3>
            <ul className="mt-5 grid gap-4 lg:grid-cols-2" data-v-de60a88a="">
              <li className={"rounded-box \x62order \x62order-secondary/\x325 bg-base-200 p-6"} data-v-de60a88a="">
                <h4 className="text-lg font-bold tracking-tight text-base-content" data-v-de60a88a="">Ebene</h4>
                <p className={"mt-3 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-de60a88a="">Ebene Junction, Office C020, Rue de la Democratie, Ebene, Mauritius</p>
                <address className={"mt-4 \x73pace-y-2 text-sm not-italic"} data-v-de60a88a="">
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Email: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="mailto:mauritius@uniserveducation.com">mauritius@uniserveducation.com</a>
                  </p>
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Telephone: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="tel:+23059066795">+230 5906 6795</a>
                  </p>
                </address>
              </li>
            </ul>
          </div>
          <div data-v-de60a88a="">
            <h3 className="flex items-center gap-3 text-xl font-bold tracking-tight text-base-content" data-v-de60a88a="">Rwanda <span className={"h-px flex-1 \x62g-secondary/\x330"} data-v-de60a88a="" aria-hidden="true" /></h3>
            <ul className="mt-5 grid gap-4 lg:grid-cols-2" data-v-de60a88a="">
              <li className={"rounded-box \x62order \x62order-secondary/\x325 bg-base-200 p-6"} data-v-de60a88a="">
                <h4 className="text-lg font-bold tracking-tight text-base-content" data-v-de60a88a="">Kigali</h4>
                <p className={"mt-3 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-de60a88a="">Yyussa Plaza, 1st Floor, opposite Chez Lando, Kisementi, Kigali, Rwanda</p>
                <address className={"mt-4 \x73pace-y-2 text-sm not-italic"} data-v-de60a88a="">
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Email: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="mailto:kigali@uniserveducation.com">kigali@uniserveducation.com</a>
                  </p>
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Telephone: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="tel:+250785368392">+250 785 368 392</a>
                  </p>
                </address>
              </li>
            </ul>
          </div>
          <div data-v-de60a88a="">
            <h3 className="flex items-center gap-3 text-xl font-bold tracking-tight text-base-content" data-v-de60a88a="">Tanzania <span className={"h-px flex-1 \x62g-secondary/\x330"} data-v-de60a88a="" aria-hidden="true" /></h3>
            <ul className="mt-5 grid gap-4 lg:grid-cols-2" data-v-de60a88a="">
              <li className={"rounded-box \x62order \x62order-secondary/\x325 bg-base-200 p-6"} data-v-de60a88a="">
                <h4 className="text-lg font-bold tracking-tight text-base-content" data-v-de60a88a="">Dar es Salaam</h4>
                <p className={"mt-3 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-de60a88a="">Office 705, Samora Tower, Samora Avenue, Dar es Salaam, Tanzania</p>
                <address className={"mt-4 \x73pace-y-2 text-sm not-italic"} data-v-de60a88a="">
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Email: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="mailto:tz@uniserveducation.com">tz@uniserveducation.com</a>
                  </p>
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Telephone: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="tel:+255212903617">+255 212 903617</a>
                  </p>
                </address>
              </li>
            </ul>
          </div>
          <div data-v-de60a88a="">
            <h3 className="flex items-center gap-3 text-xl font-bold tracking-tight text-base-content" data-v-de60a88a="">Uganda <span className={"h-px flex-1 \x62g-secondary/\x330"} data-v-de60a88a="" aria-hidden="true" /></h3>
            <ul className="mt-5 grid gap-4 lg:grid-cols-2" data-v-de60a88a="">
              <li className={"rounded-box \x62order \x62order-secondary/\x325 bg-base-200 p-6"} data-v-de60a88a="">
                <h4 className="text-lg font-bold tracking-tight text-base-content" data-v-de60a88a="">Kampala</h4>
                <p className={"mt-3 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-de60a88a="">SM Chambers, Plot 14, Hannington Road, opposite Kampala Serena</p>
                <address className={"mt-4 \x73pace-y-2 text-sm not-italic"} data-v-de60a88a="">
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Email: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="mailto:ug@uniserveducation.com">ug@uniserveducation.com</a>
                  </p>
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Telephone: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="tel:+256709688080">+256 709 688 080</a>
                  </p>
                </address>
              </li>
            </ul>
          </div>
          <div data-v-de60a88a="">
            <h3 className="flex items-center gap-3 text-xl font-bold tracking-tight text-base-content" data-v-de60a88a="">United Arab Emirates <span className={"h-px flex-1 \x62g-secondary/\x330"} data-v-de60a88a="" aria-hidden="true" /></h3>
            <ul className="mt-5 grid gap-4 lg:grid-cols-2" data-v-de60a88a="">
              <li className={"rounded-box \x62order \x62order-secondary/\x325 bg-base-200 p-6"} data-v-de60a88a="">
                <h4 className="text-lg font-bold tracking-tight text-base-content" data-v-de60a88a="">Dubai</h4>
                <p className={"mt-3 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-de60a88a="">F37, Block 2B, Knowledge Village, Dubai</p>
                <address className={"mt-4 \x73pace-y-2 text-sm not-italic"} data-v-de60a88a="">
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Email: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="mailto:dubai@uniserveducation.com">dubai@uniserveducation.com</a>
                  </p>
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Telephone: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="tel:+97142776943">+971 4 277 6943</a>
                  </p>
                </address>
              </li>
            </ul>
          </div>
          <div data-v-de60a88a="">
            <h3 className="flex items-center gap-3 text-xl font-bold tracking-tight text-base-content" data-v-de60a88a="">United Kingdom <span className={"h-px flex-1 \x62g-secondary/\x330"} data-v-de60a88a="" aria-hidden="true" /></h3>
            <ul className="mt-5 grid gap-4 lg:grid-cols-2" data-v-de60a88a="">
              <li className={"rounded-box \x62order \x62order-secondary/\x325 bg-base-200 p-6"} data-v-de60a88a="">
                <h4 className="text-lg font-bold tracking-tight text-base-content" data-v-de60a88a="">London</h4>
                <address className={"mt-4 \x73pace-y-2 text-sm not-italic"} data-v-de60a88a="">
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Email: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="mailto:london@uniserveducation.com">london@uniserveducation.com</a>
                  </p>
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Telephone: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="tel:+447813976257">+44 7813 976 257</a>
                  </p>
                </address>
              </li>
            </ul>
          </div>
          <div data-v-de60a88a="">
            <h3 className="flex items-center gap-3 text-xl font-bold tracking-tight text-base-content" data-v-de60a88a="">Zambia <span className={"h-px flex-1 \x62g-secondary/\x330"} data-v-de60a88a="" aria-hidden="true" /></h3>
            <ul className="mt-5 grid gap-4 lg:grid-cols-2" data-v-de60a88a="">
              <li className={"rounded-box \x62order \x62order-secondary/\x325 bg-base-200 p-6"} data-v-de60a88a="">
                <h4 className="text-lg font-bold tracking-tight text-base-content" data-v-de60a88a="">Lusaka</h4>
                <p className={"mt-3 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-de60a88a="">Foxdale Court, 609 South Zambezi Road, Lusaka, Zambia</p>
                <address className={"mt-4 \x73pace-y-2 text-sm not-italic"} data-v-de60a88a="">
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Email: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="mailto:zambia@uniserveducation.com">zambia@uniserveducation.com</a>
                  </p>
                  <p data-v-de60a88a="">
                    <span className={"\x73r-only"} data-v-de60a88a="">Telephone: </span>
                    <a className={"font-medium text-accent \x75nderline-offset-4 \x68over:\x75nderline \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-de60a88a="" href="tel:+260972075188">+260 972 075 188</a>
                  </p>
                </address>
              </li>
            </ul>
          </div>
        </div>
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
                <a className={"text-sm font-medium \x74ext-white/\x385 transition-colors duration-150 hover:text-primary \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} aria-current="page" href="#">About us</a>
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
