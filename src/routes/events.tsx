import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/events.css?raw";

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [{ title: "Events | Uniserv Education" }] }),
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
          <main data-v-0a5b9278="">
            <ImportedSectionMeetUsAskQuestions />
            <ImportedSectionAlreadyUnderwayAndYou />
            <ImportedSectionACalendarWorthChecking />
            <ImportedSectionEarlierSessionsAndVisits />
            <section className={"\x62g-[#\x3171717]"} data-v-0a5b9278="">
              <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24" data-v-0a5b9278="">
                <div className="mx-auto max-w-2xl text-center" data-v-0a5b9278="">
                  <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary" data-v-0a5b9278=""><span className="inline-block h-px w-8 bg-primary" data-v-0a5b9278="" /> Keep the momentum going <span className="inline-block h-px w-8 bg-primary" data-v-0a5b9278="" /></p>
                  <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-white text-balance sm:text-4xl" data-v-0a5b9278=""> Not sure which event is right for you? </h2>
                  <p className={"mt-6 text-lg leading-relaxed \x74ext-white/\x370"} data-v-0a5b9278=""> Events are one way to learn. A counsellor can help you understand your options, prepare for applications and identify university routes worth investigating further. </p>
                  <div className={"mt-9 flex flex-col items-center justify-center gap-3 \x73m:\x66lex-row"} data-v-0a5b9278="">
                    <button className={"btn btn-primary min-h-0 \x62order-0 px-8 py-3.5 text-base font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-0a5b9278="" type="button"> Talk to a counsellor </button>
                    <a className={"btn min-h-0 \x62order \x62order-white/\x330 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-colors duration-150 \x68over:\x62order-white hover:bg-white hover:text-neutral \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-0a5b9278="" href="/find-your-options"> Find my university options </a>
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
              <a className="nav-link nav-link--active" aria-current="page" data-v-9790ec4b="" href="#">Events</a>
            </li>
            <li data-v-9790ec4b="">
              <a className="nav-link" data-v-9790ec4b="" href="/about">About Us</a>
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

function ImportedSectionMeetUsAskQuestions() {
  return (
    <section className="relative overflow-hidden bg-base-100" data-v-0a5b9278="">
      <div className="events-hero__bg" data-v-0a5b9278="" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-24 lg:pt-20" data-v-0a5b9278="">
        <div className={"events-hero__content \x6frder-1"} style={{ transform: "translateY(0px)", opacity: "1" }} data-v-0a5b9278="">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary" data-v-0a5b9278=""><span className="inline-block h-px w-8 bg-primary" data-v-0a5b9278="" /> Events </p>
          <h1 className={"max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-base-content text-balance sm:text-5xl \x78l:\x74ext-[\x33.\x325rem]"} data-v-0a5b9278=""> Meet us, ask questions and plan your next step. </h1>
          <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"} data-v-0a5b9278=""> University visits, information sessions and study-abroad events give students a chance to ask real questions, see how the process works and get a clearer sense of what studying abroad involves. </p>
          <p className={"mt-4 max-w-xl text-base leading-relaxed \x74ext-neutral/\x370"} data-v-0a5b9278=""> Some events are open to everyone; others are shaped around a specific university or destination. Registering your interest is the easiest way to keep the details current. </p>
          <div className={"mt-9 flex flex-col gap-3 \x73m:\x66lex-row \x73m:\x69tems-center"} data-v-0a5b9278="">
            <a className={"btn btn-primary min-h-0 \x62order-0 px-7 py-3.5 text-base font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-0a5b9278="" href="#upcoming-events"> See upcoming events </a>
            <button className={"btn min-h-0 \x62order \x62order-secondary bg-transparent px-7 py-3.5 text-base font-semibold text-neutral transition-colors duration-150 \x68over:\x62order-neutral hover:bg-neutral hover:text-neutral-content \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-0a5b9278="" type="button"> Talk to a counsellor </button>
          </div>
        </div>
        <div className={"events-hero__visual \x6frder-2"} style={{ transform: "translateY(0px)", opacity: "1" }} data-v-0a5b9278="">
          <div className={"relative overflow-hidden rounded-box \x62order \x62order-secondary/\x325 bg-base-200 \x73hadow-[\x30_20px_60px_-30px_rgba(\x326,\x326,\x326,\x30.\x335)]"} data-v-0a5b9278="">
            <svg className={"absolute -right-8 -top-8 h-40 w-40 \x74ext-primary/\x315"} viewBox="0 0 48 48" fill="none" aria-hidden="true" data-v-0a5b9278="">
              <path d="M9 9h30v30H9z" stroke="currentColor" strokeWidth="1.5" data-v-0a5b9278="" />
              <path d="M9 17h30M15 5v8M33 5v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-v-0a5b9278="" />
              <circle cx="24" cy="29" r="4.5" stroke="currentColor" strokeWidth="1.5" data-v-0a5b9278="" />
              <path d="M24 26v3l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" data-v-0a5b9278="" />
            </svg>
            <div className="relative p-8 lg:p-10" data-v-0a5b9278="">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent" data-v-0a5b9278=""><span className="relative flex h-2 w-2" data-v-0a5b9278=""><span className={"absolute inline-flex h-full w-full \x61nimate-ping rounded-full bg-accent opacity-75"} data-v-0a5b9278="" /><span className="relative inline-flex h-2 w-2 rounded-full bg-accent" data-v-0a5b9278="" /></span> Happening now</p>
              <div className="mt-6 flex items-center gap-4" data-v-0a5b9278="">
                <span className={"flex h-16 w-16 flex-col items-center justify-center rounded-field bg-primary text-primary-content \x73hadow-lg"} data-v-0a5b9278="">
                  <span className="text-2xl font-bold leading-none" data-v-0a5b9278="">31</span>
                  <span className="mt-0.5 text-[0.65rem] font-bold uppercase tracking-widest" data-v-0a5b9278="">Oct</span>
                </span>
                <div data-v-0a5b9278="">
                  <h2 className="text-xl font-bold tracking-tight text-base-content" data-v-0a5b9278="">Study in the UK: University of Plymouth</h2>
                  <p className={"mt-1 text-sm \x74ext-neutral/\x370"} data-v-0a5b9278="">Saturday, October 31, 2026 · 10:30 PM</p>
                </div>
              </div>
              <p className={"mt-5 leading-relaxed \x74ext-neutral/\x375 \x6cine-clamp-3"} data-v-0a5b9278="">Thinking about studying in the UK? 🎓 Discover the University of Plymouth, explore available programmes, and learn how to begin your application.</p>
              <a className={"btn btn-primary mt-6 min-h-0 \x62order-0 px-6 py-3 text-sm font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-0a5b9278="" href="/events/study-in-the-uk-university-of-plymouth/register">Register your interest</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionAlreadyUnderwayAndYou() {
  return (
    <section className="bg-base-100" data-v-0a5b9278="">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28" data-v-0a5b9278="">
        <div data-v-0a5b9278="">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> Running now</p>
          <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-base-content"}>Already underway — and you can still join.</h2>
          <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}>These events have started but have not finished yet. Depending on the format, you may still be able to join or register for the remainder.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6" data-v-0a5b9278="">
          <article className={"group h-full overflow-hidden rounded-box \x62order bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-shadow duration-200 \x68over:\x73hadow-[\x30_18px_45px_-26px_rgba(\x326,\x326,\x326,\x30.\x35)] \x62order-primary/\x340 flex flex-col"} data-v-0a5b9278="">
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
            <div className="flex flex-1 flex-col p-6 lg:p-7">
              <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">Study in the UK: University of Plymouth</h3>
              <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375 \x6cine-clamp-3"}>Thinking about studying in the UK? 🎓 Discover the University of Plymouth, explore available programmes, and learn how to begin your application.</p>
              <div className={"mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm \x74ext-neutral/\x370"} />
              <div className={"mt-6 flex items-center justify-between gap-3 \x62order-t \x62order-secondary/\x320 pt-5"}>
                <a className={"btn btn-primary min-h-0 \x62order-0 px-5 py-2.5 text-sm font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/events/study-in-the-uk-university-of-plymouth/register">Register your interest</a>
              </div>
            </div>
          </article>
          <article className={"group h-full overflow-hidden rounded-box \x62order bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-shadow duration-200 \x68over:\x73hadow-[\x30_18px_45px_-26px_rgba(\x326,\x326,\x326,\x30.\x35)] \x62order-primary/\x340 flex flex-col"} data-v-0a5b9278="">
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
          <article className={"group h-full overflow-hidden rounded-box \x62order bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-shadow duration-200 \x68over:\x73hadow-[\x30_18px_45px_-26px_rgba(\x326,\x326,\x326,\x30.\x35)] \x62order-primary/\x340 flex flex-col"} data-v-0a5b9278="">
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
          <article className={"group h-full overflow-hidden rounded-box \x62order bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-shadow duration-200 \x68over:\x73hadow-[\x30_18px_45px_-26px_rgba(\x326,\x326,\x326,\x30.\x35)] \x62order-primary/\x340 flex flex-col"} data-v-0a5b9278="">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img className={"h-full w-full object-cover transition-transform duration-500 \x67roup-hover:\x73cale-[\x31.\x303]"} src="/site-assets/88f85d8017ebc1f0.jpg" alt="Study Medicine in 2027" loading="lazy" />
              <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-[#\x3171717]/\x375 \x76ia-[#\x3171717]/\x310 \x74o-transparent"} aria-hidden="true" />
              <span className={"absolute left-4 top-4 rounded-full \x62order \x62order-white/\x320 \x62g-[#\x3171717]/\x355 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}>Application day</span>
              <span className={"absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full \x62order \x62order-primary/\x340 \x62g-[#\x3171717]/\x360 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}><span className="relative flex h-2 w-2"><span className={"absolute inline-flex h-full w-full \x61nimate-ping rounded-full bg-primary opacity-75"} /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span> Running </span>
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <span className={"flex h-14 w-14 flex-col items-center justify-center rounded-field bg-primary text-primary-content \x73hadow-lg"}>
                  <span className="text-xl font-bold leading-none">08</span>
                  <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest">Nov</span>
                </span>
                <div className="text-white">
                  <p className="text-sm font-semibold">Sun, Nov 8</p>
                  <p className={"mt-0.5 text-xs \x74ext-white/\x375"}>9:30 PM</p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6 lg:p-7">
              <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">Study Medicine in 2027</h3>
              <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375 \x6cine-clamp-3"}>Your journey in medicine could begin in 2027! 🎓 Explore international medical schools, understand admission requirements, and get guidance on pursuing your dream career.</p>
              <div className={"mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm \x74ext-neutral/\x370"} />
              <div className={"mt-6 flex items-center justify-between gap-3 \x62order-t \x62order-secondary/\x320 pt-5"}>
                <a className={"btn btn-primary min-h-0 \x62order-0 px-5 py-2.5 text-sm font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/events/study-medicine-in-2027/register">Register your interest</a>
              </div>
            </div>
          </article>
          <article className={"group h-full overflow-hidden rounded-box \x62order bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-shadow duration-200 \x68over:\x73hadow-[\x30_18px_45px_-26px_rgba(\x326,\x326,\x326,\x30.\x35)] \x62order-primary/\x340 flex flex-col"} data-v-0a5b9278="">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img className={"h-full w-full object-cover transition-transform duration-500 \x67roup-hover:\x73cale-[\x31.\x303]"} src="/site-assets/dbaa18ac4afd7601.jpg" alt="UCAS Applications Ongoing" loading="lazy" />
              <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-[#\x3171717]/\x375 \x76ia-[#\x3171717]/\x310 \x74o-transparent"} aria-hidden="true" />
              <span className={"absolute left-4 top-4 rounded-full \x62order \x62order-white/\x320 \x62g-[#\x3171717]/\x355 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}>Application day</span>
              <span className={"absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full \x62order \x62order-primary/\x340 \x62g-[#\x3171717]/\x360 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}><span className="relative flex h-2 w-2"><span className={"absolute inline-flex h-full w-full \x61nimate-ping rounded-full bg-primary opacity-75"} /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span> Running </span>
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <span className={"flex h-14 w-14 flex-col items-center justify-center rounded-field bg-primary text-primary-content \x73hadow-lg"}>
                  <span className="text-xl font-bold leading-none">08</span>
                  <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest">Nov</span>
                </span>
                <div className="text-white">
                  <p className="text-sm font-semibold">Sun, Nov 8</p>
                  <p className={"mt-0.5 text-xs \x74ext-white/\x375"}>9:30 PM</p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6 lg:p-7">
              <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">UCAS Applications Ongoing</h3>
              <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375 \x6cine-clamp-3"}>Planning to study in the UK? UCAS applications are ongoing! Explore available university options and get guidance on navigating the UK undergraduate application process.</p>
              <div className={"mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm \x74ext-neutral/\x370"} />
              <div className={"mt-6 flex items-center justify-between gap-3 \x62order-t \x62order-secondary/\x320 pt-5"}>
                <a className={"btn btn-primary min-h-0 \x62order-0 px-5 py-2.5 text-sm font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/events/ucas-applications-ongoing/register">Register your interest</a>
              </div>
            </div>
          </article>
          <article className={"group h-full overflow-hidden rounded-box \x62order bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-shadow duration-200 \x68over:\x73hadow-[\x30_18px_45px_-26px_rgba(\x326,\x326,\x326,\x30.\x35)] \x62order-primary/\x340 flex flex-col"} data-v-0a5b9278="">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img className={"h-full w-full object-cover transition-transform duration-500 \x67roup-hover:\x73cale-[\x31.\x303]"} src="/site-assets/9bbbdf79bf2c0f8c.jpg" alt="Study in Germany - Applications Ongoing" loading="lazy" />
              <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-[#\x3171717]/\x375 \x76ia-[#\x3171717]/\x310 \x74o-transparent"} aria-hidden="true" />
              <span className={"absolute left-4 top-4 rounded-full \x62order \x62order-white/\x320 \x62g-[#\x3171717]/\x355 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}>Application day</span>
              <span className={"absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full \x62order \x62order-primary/\x340 \x62g-[#\x3171717]/\x360 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}><span className="relative flex h-2 w-2"><span className={"absolute inline-flex h-full w-full \x61nimate-ping rounded-full bg-primary opacity-75"} /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span> Running </span>
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <span className={"flex h-14 w-14 flex-col items-center justify-center rounded-field bg-primary text-primary-content \x73hadow-lg"}>
                  <span className="text-xl font-bold leading-none">12</span>
                  <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest">Oct</span>
                </span>
                <div className="text-white">
                  <p className="text-sm font-semibold">Mon, Oct 12</p>
                  <p className={"mt-0.5 text-xs \x74ext-white/\x375"}>10:30 PM</p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6 lg:p-7">
              <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">Study in Germany - Applications Ongoing</h3>
              <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375 \x6cine-clamp-3"}>Your German study journey could start now! 🎓 Discover available study opportunities in Germany and get guidance on the application process.</p>
              <div className={"mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm \x74ext-neutral/\x370"} />
              <div className={"mt-6 flex items-center justify-between gap-3 \x62order-t \x62order-secondary/\x320 pt-5"}>
                <a className={"btn btn-primary min-h-0 \x62order-0 px-5 py-2.5 text-sm font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/events/study-in-germany-applications-ongoing/register">Register your interest</a>
              </div>
            </div>
          </article>
          <article className={"group h-full overflow-hidden rounded-box \x62order bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-shadow duration-200 \x68over:\x73hadow-[\x30_18px_45px_-26px_rgba(\x326,\x326,\x326,\x30.\x35)] \x62order-primary/\x340 flex flex-col"} data-v-0a5b9278="">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img className={"h-full w-full object-cover transition-transform duration-500 \x67roup-hover:\x73cale-[\x31.\x303]"} src="/site-assets/c85a52d1d3bcd169.jpg" alt="Study in Ireland - Applications Ongoing" loading="lazy" />
              <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-[#\x3171717]/\x375 \x76ia-[#\x3171717]/\x310 \x74o-transparent"} aria-hidden="true" />
              <span className={"absolute left-4 top-4 rounded-full \x62order \x62order-white/\x320 \x62g-[#\x3171717]/\x355 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}>Application day</span>
              <span className={"absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full \x62order \x62order-primary/\x340 \x62g-[#\x3171717]/\x360 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}><span className="relative flex h-2 w-2"><span className={"absolute inline-flex h-full w-full \x61nimate-ping rounded-full bg-primary opacity-75"} /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span> Running </span>
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <span className={"flex h-14 w-14 flex-col items-center justify-center rounded-field bg-primary text-primary-content \x73hadow-lg"}>
                  <span className="text-xl font-bold leading-none">13</span>
                  <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest">Oct</span>
                </span>
                <div className="text-white">
                  <p className="text-sm font-semibold">Tue, Oct 13</p>
                  <p className={"mt-0.5 text-xs \x74ext-white/\x375"}>10:30 PM</p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6 lg:p-7">
              <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">Study in Ireland - Applications Ongoing</h3>
              <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375 \x6cine-clamp-3"}>🇮🇪 Explore study opportunities in Ireland with applications currently ongoing. Discover programmes, entry requirements, and your options for studying abroad.</p>
              <div className={"mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm \x74ext-neutral/\x370"} />
              <div className={"mt-6 flex items-center justify-between gap-3 \x62order-t \x62order-secondary/\x320 pt-5"}>
                <a className={"btn btn-primary min-h-0 \x62order-0 px-5 py-2.5 text-sm font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/events/study-in-ireland-applications-ongoing/register">Register your interest</a>
              </div>
            </div>
          </article>
          <article className={"group h-full overflow-hidden rounded-box \x62order bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-shadow duration-200 \x68over:\x73hadow-[\x30_18px_45px_-26px_rgba(\x326,\x326,\x326,\x30.\x35)] \x62order-primary/\x340 flex flex-col"} data-v-0a5b9278="">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img className={"h-full w-full object-cover transition-transform duration-500 \x67roup-hover:\x73cale-[\x31.\x303]"} src="/site-assets/0a0d6a9af5b106d8.png" alt="Study in the UK: January Intake 2027" loading="lazy" />
              <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-[#\x3171717]/\x375 \x76ia-[#\x3171717]/\x310 \x74o-transparent"} aria-hidden="true" />
              <span className={"absolute left-4 top-4 rounded-full \x62order \x62order-white/\x320 \x62g-[#\x3171717]/\x355 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}>Application day</span>
              <span className={"absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full \x62order \x62order-primary/\x340 \x62g-[#\x3171717]/\x360 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}><span className="relative flex h-2 w-2"><span className={"absolute inline-flex h-full w-full \x61nimate-ping rounded-full bg-primary opacity-75"} /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span> Running </span>
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <span className={"flex h-14 w-14 flex-col items-center justify-center rounded-field bg-primary text-primary-content \x73hadow-lg"}>
                  <span className="text-xl font-bold leading-none">10</span>
                  <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest">Nov</span>
                </span>
                <div className="text-white">
                  <p className="text-sm font-semibold">Tue, Nov 10</p>
                  <p className={"mt-0.5 text-xs \x74ext-white/\x375"}>9:30 PM</p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6 lg:p-7">
              <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">Study in the UK: January Intake 2027</h3>
              <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375 \x6cine-clamp-3"}>A new year brings new academic possibilities. 🌍 Discover study opportunities across the UK and explore programmes available for the January 2027 intake.</p>
              <div className={"mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm \x74ext-neutral/\x370"} />
              <div className={"mt-6 flex items-center justify-between gap-3 \x62order-t \x62order-secondary/\x320 pt-5"}>
                <a className={"btn btn-primary min-h-0 \x62order-0 px-5 py-2.5 text-sm font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/events/study-in-the-uk-january-intake-2027/register">Register your interest</a>
              </div>
            </div>
          </article>
          <article className={"group h-full overflow-hidden rounded-box \x62order bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-shadow duration-200 \x68over:\x73hadow-[\x30_18px_45px_-26px_rgba(\x326,\x326,\x326,\x30.\x35)] \x62order-primary/\x340 flex flex-col"} data-v-0a5b9278="">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img className={"h-full w-full object-cover transition-transform duration-500 \x67roup-hover:\x73cale-[\x31.\x303]"} src="/site-assets/dc4c5ac887dc6743.jpg" alt="Study Abroad: 2027 Intakes Currently Ongoing" loading="lazy" />
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
            <div className="flex flex-1 flex-col p-6 lg:p-7">
              <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">Study Abroad: 2027 Intakes Currently Ongoing</h3>
              <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375 \x6cine-clamp-3"}>Ready for 2027? 🎓 Explore universities, programmes, entry requirements, and application options for upcoming study abroad intakes.</p>
              <div className={"mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm \x74ext-neutral/\x370"}>
                <span className="inline-flex items-center gap-1.5"><svg className="h-4 w-4 text-accent" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 14s4-3.4 4-7a4 4 0 1 0-8 0c0 3.6 4 7 4 7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><circle cx="8" cy="7" r="1.6" stroke="currentColor" strokeWidth="1.4" /></svg> Uniserv Offices</span>
                <span className="inline-flex items-center gap-1.5"><svg className="h-4 w-4 text-accent" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 14s4-3.4 4-7a4 4 0 1 0-8 0c0 3.6 4 7 4 7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><circle cx="8" cy="7" r="1.6" stroke="currentColor" strokeWidth="1.4" /></svg> All Branches, Kenya | Uganda | Zambia | Tanzania | UK | Dubai</span>
              </div>
              <div className={"mt-6 flex items-center justify-between gap-3 \x62order-t \x62order-secondary/\x320 pt-5"}>
                <a className={"btn btn-primary min-h-0 \x62order-0 px-5 py-2.5 text-sm font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/events/study-abroad-2027-intakes-currently-ongoing/register">Register your interest</a>
              </div>
            </div>
          </article>
          <article className={"group h-full overflow-hidden rounded-box \x62order bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-shadow duration-200 \x68over:\x73hadow-[\x30_18px_45px_-26px_rgba(\x326,\x326,\x326,\x30.\x35)] \x62order-primary/\x340 flex flex-col"} data-v-0a5b9278="">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img className={"h-full w-full object-cover transition-transform duration-500 \x67roup-hover:\x73cale-[\x31.\x303]"} src="/site-assets/bbb52f3e46c1f1be.png" alt="WHAT NEXT AFTER KCSE? - Inquire Now!" loading="lazy" />
              <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-[#\x3171717]/\x375 \x76ia-[#\x3171717]/\x310 \x74o-transparent"} aria-hidden="true" />
              <span className={"absolute left-4 top-4 rounded-full \x62order \x62order-white/\x320 \x62g-[#\x3171717]/\x355 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}>Application day</span>
              <span className={"absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full \x62order \x62order-primary/\x340 \x62g-[#\x3171717]/\x360 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}><span className="relative flex h-2 w-2"><span className={"absolute inline-flex h-full w-full \x61nimate-ping rounded-full bg-primary opacity-75"} /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span> Running </span>
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <span className={"flex h-14 w-14 flex-col items-center justify-center rounded-field bg-primary text-primary-content \x73hadow-lg"}>
                  <span className="text-xl font-bold leading-none">19</span>
                  <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest">Nov</span>
                </span>
                <div className="text-white">
                  <p className="text-sm font-semibold">Thu, Nov 19</p>
                  <p className={"mt-0.5 text-xs \x74ext-white/\x375"}>9:30 PM</p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6 lg:p-7">
              <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">WHAT NEXT AFTER KCSE? - Inquire Now!</h3>
              <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375 \x6cine-clamp-3"}>🎓 Done with KCSE or waiting for your results? Discover what comes next! Explore university options, courses, and opportunities to study locally or abroad.</p>
              <div className={"mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm \x74ext-neutral/\x370"}>
                <span className="inline-flex items-center gap-1.5"><svg className="h-4 w-4 text-accent" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 14s4-3.4 4-7a4 4 0 1 0-8 0c0 3.6 4 7 4 7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><circle cx="8" cy="7" r="1.6" stroke="currentColor" strokeWidth="1.4" /></svg> 9th Floor, Fortis Tower, Westlands</span>
                <span className="inline-flex items-center gap-1.5"><svg className="h-4 w-4 text-accent" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 14s4-3.4 4-7a4 4 0 1 0-8 0c0 3.6 4 7 4 7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><circle cx="8" cy="7" r="1.6" stroke="currentColor" strokeWidth="1.4" /></svg> Nairobi, Kenya</span>
              </div>
              <div className={"mt-6 flex items-center justify-between gap-3 \x62order-t \x62order-secondary/\x320 pt-5"}>
                <a className={"btn btn-primary min-h-0 \x62order-0 px-5 py-2.5 text-sm font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/events/what-next-after-kcse-inquire-now/register">Register your interest</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionACalendarWorthChecking() {
  return (
    <section className={"\x73croll-mt-24 bg-base-200"} data-v-0a5b9278="" id="upcoming-events">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28" data-v-0a5b9278="">
        <div data-v-0a5b9278="">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> Upcoming events</p>
          <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-base-content"}>A calendar worth checking before you decide.</h2>
          <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}>Whether you want to meet a university in person or join from anywhere online, these are the sessions currently open for registration.</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-2" data-v-0a5b9278="" role="tablist" aria-label="Filter events by format">
          <button className={"min-h-0 rounded-full \x62order px-5 py-2.5 text-sm font-semibold transition-colors duration-150 \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary \x62order-primary bg-primary text-primary-content"} data-v-0a5b9278="" type="button" role="tab" aria-selected="true">All events</button>
          <button className={"min-h-0 rounded-full \x62order px-5 py-2.5 text-sm font-semibold transition-colors duration-150 \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary \x62order-secondary/\x330 bg-base-100 text-neutral \x68over:\x62order-neutral"} data-v-0a5b9278="" type="button" role="tab" aria-selected="false">In person</button>
          <button className={"min-h-0 rounded-full \x62order px-5 py-2.5 text-sm font-semibold transition-colors duration-150 \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary \x62order-secondary/\x330 bg-base-100 text-neutral \x68over:\x62order-neutral"} data-v-0a5b9278="" type="button" role="tab" aria-selected="false">Online</button>
          <button className={"min-h-0 rounded-full \x62order px-5 py-2.5 text-sm font-semibold transition-colors duration-150 \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary \x62order-secondary/\x330 bg-base-100 text-neutral \x68over:\x62order-neutral"} data-v-0a5b9278="" type="button" role="tab" aria-selected="false">Hybrid</button>
        </div>
        <div className="mt-12" data-v-0a5b9278="">
          <article className={"group h-full overflow-hidden rounded-box \x62order bg-base-100 \x73hadow-[\x30_10px_30px_-22px_rgba(\x326,\x326,\x326,\x30.\x335)] transition-shadow duration-200 \x68over:\x73hadow-[\x30_18px_45px_-26px_rgba(\x326,\x326,\x326,\x30.\x35)] \x62order-secondary/\x320 flex flex-col \x6cg:\x67rid lg:grid-cols-[0.85fr_1.15fr]"} data-v-0a5b9278="">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img className={"h-full w-full object-cover transition-transform duration-500 \x67roup-hover:\x73cale-[\x31.\x303]"} src="/site-assets/fd053525c9894caf.jpg" alt="Study in the USA - August Intake 2027 " loading="lazy" />
              <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-[#\x3171717]/\x375 \x76ia-[#\x3171717]/\x310 \x74o-transparent"} aria-hidden="true" />
              <span className={"absolute left-4 top-4 rounded-full \x62order \x62order-white/\x320 \x62g-[#\x3171717]/\x355 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}>Application day</span>
              <span className={"absolute right-4 top-4 rounded-full \x62order \x62order-white/\x320 \x62g-[#\x3171717]/\x355 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white \x62ackdrop-blur-sm"}>Hybrid</span>
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <span className={"flex h-14 w-14 flex-col items-center justify-center rounded-field bg-primary text-primary-content \x73hadow-lg"}>
                  <span className="text-xl font-bold leading-none">30</span>
                  <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest">Nov</span>
                </span>
                <div className="text-white">
                  <p className="text-sm font-semibold">Mon, Nov 30</p>
                  <p className={"mt-0.5 text-xs \x74ext-white/\x375"}>9:30 PM</p>
                </div>
              </div>
            </div>
            <div className={"flex flex-1 flex-col p-6 lg:p-7 \x6cg:\x6austify-center lg:p-10"}>
              <h3 className="text-xl font-bold tracking-tight text-base-content lg:text-2xl">Study in the USA - August Intake 2027 </h3>
              <p className={"mt-3 leading-relaxed \x74ext-neutral/\x375 \x6cine-clamp-3"}>Dreaming of an American university experience? 🌎 Start preparing for August 2027 and explore the academic opportunities waiting for you in the USA.</p>
              <div className={"mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm \x74ext-neutral/\x370"} />
              <div className={"mt-6 flex items-center justify-between gap-3 \x62order-t \x62order-secondary/\x320 pt-5"}>
                <a className={"btn btn-primary min-h-0 \x62order-0 px-5 py-2.5 text-sm font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/events/study-in-the-usa-august-intake-2027/register">Register your interest</a>
                <a className={"inline-flex items-center gap-2 text-sm font-semibold text-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} href="/events/study-in-the-usa-august-intake-2027/register"> View details <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionEarlierSessionsAndVisits() {
  return (
    <section className="bg-base-100" data-v-0a5b9278="">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24" data-v-0a5b9278="">
        <div data-v-0a5b9278="">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> Past events</p>
          <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-base-content"}>Earlier sessions and visits.</h2>
          <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}>A record of the conversations we have hosted recently. Past events are not open for registration, but they give a sense of the topics Uniserv covers.</p>
        </div>
        <ol className={"mt-12 \x64ivide-y \x64ivide-secondary/\x325 \x62order-y \x62order-secondary/\x325"} data-v-0a5b9278="">
          <li className={"flex flex-col gap-4 py-6 \x73m:\x66lex-row \x73m:\x69tems-center \x73m:\x6austify-between"} data-v-0a5b9278="">
            <div className="flex items-center gap-4" data-v-0a5b9278="">
              <span className={"flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-field \x62order \x62order-secondary/\x330 bg-base-200"} data-v-0a5b9278="">
                <span className="text-lg font-bold leading-none text-base-content" data-v-0a5b9278="">19</span>
                <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-accent" data-v-0a5b9278="">Nov</span>
              </span>
              <div data-v-0a5b9278="">
                <h3 className="font-bold tracking-tight text-base-content" data-v-0a5b9278="">Meet the University Representatives: Northern Lights College &amp; University Fraser Valley - Students/Parents Seminar</h3>
                <p className={"mt-0.5 text-sm \x74ext-neutral/\x370"} data-v-0a5b9278="">Thursday, November 19, 2026 · In person</p>
              </div>
            </div>
            <span className={"shrink-0 text-xs font-semibold uppercase tracking-wider \x74ext-neutral/\x350"} data-v-0a5b9278="">Completed</span>
          </li>
          <li className={"flex flex-col gap-4 py-6 \x73m:\x66lex-row \x73m:\x69tems-center \x73m:\x6austify-between"} data-v-0a5b9278="">
            <div className="flex items-center gap-4" data-v-0a5b9278="">
              <span className={"flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-field \x62order \x62order-secondary/\x330 bg-base-200"} data-v-0a5b9278="">
                <span className="text-lg font-bold leading-none text-base-content" data-v-0a5b9278="">06</span>
                <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-accent" data-v-0a5b9278="">Nov</span>
              </span>
              <div data-v-0a5b9278="">
                <h3 className="font-bold tracking-tight text-base-content" data-v-0a5b9278="">Meet Leah Odada - Carleton University</h3>
                <p className={"mt-0.5 text-sm \x74ext-neutral/\x370"} data-v-0a5b9278="">Friday, November 6, 2026 · In person</p>
              </div>
            </div>
            <span className={"shrink-0 text-xs font-semibold uppercase tracking-wider \x74ext-neutral/\x350"} data-v-0a5b9278="">Completed</span>
          </li>
          <li className={"flex flex-col gap-4 py-6 \x73m:\x66lex-row \x73m:\x69tems-center \x73m:\x6austify-between"} data-v-0a5b9278="">
            <div className="flex items-center gap-4" data-v-0a5b9278="">
              <span className={"flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-field \x62order \x62order-secondary/\x330 bg-base-200"} data-v-0a5b9278="">
                <span className="text-lg font-bold leading-none text-base-content" data-v-0a5b9278="">05</span>
                <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-accent" data-v-0a5b9278="">Nov</span>
              </span>
              <div data-v-0a5b9278="">
                <h3 className="font-bold tracking-tight text-base-content" data-v-0a5b9278="">St. Lawrence College - Students/Parents Information Session</h3>
                <p className={"mt-0.5 text-sm \x74ext-neutral/\x370"} data-v-0a5b9278="">Thursday, November 5, 2026 · In person</p>
              </div>
            </div>
            <span className={"shrink-0 text-xs font-semibold uppercase tracking-wider \x74ext-neutral/\x350"} data-v-0a5b9278="">Completed</span>
          </li>
          <li className={"flex flex-col gap-4 py-6 \x73m:\x66lex-row \x73m:\x69tems-center \x73m:\x6austify-between"} data-v-0a5b9278="">
            <div className="flex items-center gap-4" data-v-0a5b9278="">
              <span className={"flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-field \x62order \x62order-secondary/\x330 bg-base-200"} data-v-0a5b9278="">
                <span className="text-lg font-bold leading-none text-base-content" data-v-0a5b9278="">05</span>
                <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-accent" data-v-0a5b9278="">Nov</span>
              </span>
              <div data-v-0a5b9278="">
                <h3 className="font-bold tracking-tight text-base-content" data-v-0a5b9278="">Study Abroad Open Day - Kisumu Edition</h3>
                <p className={"mt-0.5 text-sm \x74ext-neutral/\x370"} data-v-0a5b9278="">Thursday, November 5, 2026 · In person</p>
              </div>
            </div>
            <span className={"shrink-0 text-xs font-semibold uppercase tracking-wider \x74ext-neutral/\x350"} data-v-0a5b9278="">Completed</span>
          </li>
          <li className={"flex flex-col gap-4 py-6 \x73m:\x66lex-row \x73m:\x69tems-center \x73m:\x6austify-between"} data-v-0a5b9278="">
            <div className="flex items-center gap-4" data-v-0a5b9278="">
              <span className={"flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-field \x62order \x62order-secondary/\x330 bg-base-200"} data-v-0a5b9278="">
                <span className="text-lg font-bold leading-none text-base-content" data-v-0a5b9278="">04</span>
                <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-accent" data-v-0a5b9278="">Nov</span>
              </span>
              <div data-v-0a5b9278="">
                <h3 className="font-bold tracking-tight text-base-content" data-v-0a5b9278="">St. Lawrence College - Students/Parents Information Session (Eldoret)</h3>
                <p className={"mt-0.5 text-sm \x74ext-neutral/\x370"} data-v-0a5b9278="">Wednesday, November 4, 2026 · In person</p>
              </div>
            </div>
            <span className={"shrink-0 text-xs font-semibold uppercase tracking-wider \x74ext-neutral/\x350"} data-v-0a5b9278="">Completed</span>
          </li>
          <li className={"flex flex-col gap-4 py-6 \x73m:\x66lex-row \x73m:\x69tems-center \x73m:\x6austify-between"} data-v-0a5b9278="">
            <div className="flex items-center gap-4" data-v-0a5b9278="">
              <span className={"flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-field \x62order \x62order-secondary/\x330 bg-base-200"} data-v-0a5b9278="">
                <span className="text-lg font-bold leading-none text-base-content" data-v-0a5b9278="">03</span>
                <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-accent" data-v-0a5b9278="">Nov</span>
              </span>
              <div data-v-0a5b9278="">
                <h3 className="font-bold tracking-tight text-base-content" data-v-0a5b9278="">Meet Michael Klein: Wilfred Laurier College</h3>
                <p className={"mt-0.5 text-sm \x74ext-neutral/\x370"} data-v-0a5b9278="">Tuesday, November 3, 2026 · In person</p>
              </div>
            </div>
            <span className={"shrink-0 text-xs font-semibold uppercase tracking-wider \x74ext-neutral/\x350"} data-v-0a5b9278="">Completed</span>
          </li>
          <li className={"flex flex-col gap-4 py-6 \x73m:\x66lex-row \x73m:\x69tems-center \x73m:\x6austify-between"} data-v-0a5b9278="">
            <div className="flex items-center gap-4" data-v-0a5b9278="">
              <span className={"flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-field \x62order \x62order-secondary/\x330 bg-base-200"} data-v-0a5b9278="">
                <span className="text-lg font-bold leading-none text-base-content" data-v-0a5b9278="">17</span>
                <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-accent" data-v-0a5b9278="">Oct</span>
              </span>
              <div data-v-0a5b9278="">
                <h3 className="font-bold tracking-tight text-base-content" data-v-0a5b9278="">Northeastern University: Global Study Expo Africa</h3>
                <p className={"mt-0.5 text-sm \x74ext-neutral/\x370"} data-v-0a5b9278="">Saturday, October 17, 2026 · In person</p>
              </div>
            </div>
            <span className={"shrink-0 text-xs font-semibold uppercase tracking-wider \x74ext-neutral/\x350"} data-v-0a5b9278="">Completed</span>
          </li>
          <li className={"flex flex-col gap-4 py-6 \x73m:\x66lex-row \x73m:\x69tems-center \x73m:\x6austify-between"} data-v-0a5b9278="">
            <div className="flex items-center gap-4" data-v-0a5b9278="">
              <span className={"flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-field \x62order \x62order-secondary/\x330 bg-base-200"} data-v-0a5b9278="">
                <span className="text-lg font-bold leading-none text-base-content" data-v-0a5b9278="">11</span>
                <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-accent" data-v-0a5b9278="">Oct</span>
              </span>
              <div data-v-0a5b9278="">
                <h3 className="font-bold tracking-tight text-base-content" data-v-0a5b9278="">Study Canadian Programmes in Dubai</h3>
                <p className={"mt-0.5 text-sm \x74ext-neutral/\x370"} data-v-0a5b9278="">Sunday, October 11, 2026 · Hybrid</p>
              </div>
            </div>
            <span className={"shrink-0 text-xs font-semibold uppercase tracking-wider \x74ext-neutral/\x350"} data-v-0a5b9278="">Completed</span>
          </li>
          <li className={"flex flex-col gap-4 py-6 \x73m:\x66lex-row \x73m:\x69tems-center \x73m:\x6austify-between"} data-v-0a5b9278="">
            <div className="flex items-center gap-4" data-v-0a5b9278="">
              <span className={"flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-field \x62order \x62order-secondary/\x330 bg-base-200"} data-v-0a5b9278="">
                <span className="text-lg font-bold leading-none text-base-content" data-v-0a5b9278="">06</span>
                <span className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-accent" data-v-0a5b9278="">Oct</span>
              </span>
              <div data-v-0a5b9278="">
                <h3 className="font-bold tracking-tight text-base-content" data-v-0a5b9278="">Study in Canada: Georgian College</h3>
                <p className={"mt-0.5 text-sm \x74ext-neutral/\x370"} data-v-0a5b9278="">Tuesday, October 6, 2026 · Hybrid</p>
              </div>
            </div>
            <span className={"shrink-0 text-xs font-semibold uppercase tracking-wider \x74ext-neutral/\x350"} data-v-0a5b9278="">Completed</span>
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
                <a className={"text-sm font-medium \x74ext-white/\x385 transition-colors duration-150 hover:text-primary \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} aria-current="page" href="#">Events</a>
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
