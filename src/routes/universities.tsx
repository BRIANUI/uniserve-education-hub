import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/universities.css?raw";
import { universityDirectory } from "../data/university-directory";

export const Route = createFileRoute("/universities")({
  head: () => ({ meta: [{ title: "University Partners | Uniserv Education" }, { name: "description", content: "Browse university partners and compare study options, destinations, and application paths with Uniserv Education." }, { property: "og:title", content: "University Partners | Uniserv Education" }, { property: "og:description", content: "Browse university partners and compare study options, destinations, and application paths with Uniserv Education." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: { } } },
  component: Index,
});

function Index() {
  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(null);
  const [counsellorOpen, setCounsellorOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [countryFilter, setCountryFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("recommended");
  const [directoryPage, setDirectoryPage] = useState(1);
  const counsellorDialogRef = useRef<HTMLDialogElement | null>(null);
  const universityDialogRef = useRef<HTMLDialogElement | null>(null);
  const openCounsellor = () => setCounsellorOpen(true);
  const destinationOptions = Array.from(new Set(universityDirectory.map(university => university.country))).sort((a, b) => a.localeCompare(b));
  const filteredUniversities = universityDirectory.filter(university =>
    university.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) &&
    (countryFilter === "all" || university.country === countryFilter)
  );
  const sortedUniversities = sortOrder === "name-asc"
    ? [...filteredUniversities].sort((a, b) => a.name.localeCompare(b.name))
    : sortOrder === "name-desc"
      ? [...filteredUniversities].sort((a, b) => b.name.localeCompare(a.name))
      : filteredUniversities;
  const pageCount = Math.max(1, Math.ceil(sortedUniversities.length / 24));
  const currentPage = Math.min(directoryPage, pageCount);
  const visibleUniversities = sortedUniversities.slice((currentPage - 1) * 24, currentPage * 24);
  useEffect(() => {
    const dialog = counsellorDialogRef.current;
    if (!dialog) return;
    if (counsellorOpen && !dialog.open) dialog.showModal();
    if (!counsellorOpen && dialog.open) dialog.close();
  }, [counsellorOpen]);
  useEffect(() => {
    const dialog = universityDialogRef.current;
    if (!dialog) return;
    if (selectedUniversity && !dialog.open) dialog.showModal();
    if (!selectedUniversity && dialog.open) dialog.close();
  }, [selectedUniversity]);
  useImportedLayout();
  return (
    <>
      <style>{capturedCSS}</style>
      <div id="app">
        <div>
          <ImportedHeader currentPath="/universities" onOpenCounsellor={openCounsellor} />
          <main data-v-c5db6352="">
            <ImportedSectionExploreUniversitiesAcrossOur />
            <section className="bg-base-200" data-v-c5db6352="">
              <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28" data-v-c5db6352="">
                <div data-v-c5db6352="">
                  <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-block h-px w-8 bg-primary" /> Find an institution</p>
                  <h2 className={"max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl \x6cg:\x74ext-[\x32.\x375rem] text-base-content"}>Start with the university—or start with your goals.</h2>
                  <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"}>Explore the universities currently available through Uniserv. Selecting an institution will allow you to continue towards a more personalised review of your qualifications and study preferences.</p>
                </div>
                <p className={"mt-6 max-w-2xl rounded-box \x62order \x62order-secondary/\x325 bg-base-100 p-5 text-sm leading-relaxed \x74ext-neutral/\x375"} data-v-c5db6352=""> Course availability and entry requirements vary by university, programme and intake. A university appearing in this directory does not guarantee admission or eligibility. </p>
              </div>
            </section>
            <section className={"\x73croll-mt-24 bg-base-100"} data-v-c5db6352="" id="directory">
              <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-28" data-v-c5db6352="">
                <div data-v-c5db6352="">
                  <form className={"grid gap-4 rounded-box \x62order \x62order-secondary/\x325 bg-base-200 p-6 lg:grid-cols-[1fr_auto_auto_auto] lg:p-8"} data-v-c5db6352="" role="search" onSubmit={event => event.preventDefault()}>
                    <div data-v-c5db6352="">
                      <label className="mb-2 block text-sm font-semibold text-base-content" data-v-c5db6352="" htmlFor="university-search"> Search universities </label>
                      <input className={"w-full rounded-field \x62order \x62order-secondary/\x340 bg-base-100 px-4 py-3 text-base text-base-content \x70laceholder:\x74ext-neutral/\x350 \x66ocus:\x62order-primary \x66ocus:\x6futline-none \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-c5db6352="" id="university-search" type="search" autoComplete="off" value={searchTerm} onChange={event => { setSearchTerm(event.target.value); setDirectoryPage(1); }} placeholder="Search by university name" />
                    </div>
                    <div data-v-c5db6352="">
                      <label className="mb-2 block text-sm font-semibold text-base-content" data-v-c5db6352="" htmlFor="university-country" id="bb-customSelect-IacH1-label"> Country or destination </label>
                      <div>
                        <span role="combobox" hidden aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-IacH1-panel" aria-activedescendant="bb-customSelect-IacH1-selectedOption" aria-labelledby="bb-customSelect-IacH1-label" tabIndex={0}>
                          <span>All countries</span>
                        </span>
                        <select className={"w-full cursor-pointer rounded-field \x62order \x62order-secondary/\x340 bg-base-100 px-4 py-3 text-base text-base-content \x66ocus:\x62order-primary \x66ocus:\x6futline-none \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-c5db6352="" id="university-country" value={countryFilter} onChange={event => { setCountryFilter(event.target.value); setDirectoryPage(1); }}>
                          <option data-v-c5db6352="" value="all">All countries</option>{destinationOptions.map(destination => <option key={destination} value={destination}>{destination}</option>)}
                        </select>
                        <div id="bb-customSelect-IacH1-panel" role="listbox" hidden>
                          <div role="option" id="bb-customSelect-IacH1-selectedOption">All countries</div>
                        </div>
                      </div>
                    </div>
                    <div data-v-c5db6352="">
                      <label className="mb-2 block text-sm font-semibold text-base-content" data-v-c5db6352="" htmlFor="university-sort" id="bb-customSelect-xIzIV-label"> Sort </label>
                      <div>
                        <span role="combobox" hidden aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-xIzIV-panel" aria-activedescendant="bb-customSelect-xIzIV-selectedOption" aria-labelledby="bb-customSelect-xIzIV-label" tabIndex={0}>
                          <span>Recommended</span>
                        </span>
                        <select className={"w-full cursor-pointer rounded-field \x62order \x62order-secondary/\x340 bg-base-100 px-4 py-3 text-base text-base-content \x66ocus:\x62order-primary \x66ocus:\x6futline-none \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-c5db6352="" id="university-sort" value={sortOrder} onChange={event => { setSortOrder(event.target.value); setDirectoryPage(1); }}>
                          <option data-v-c5db6352="" value="recommended">Recommended</option>
                          <option data-v-c5db6352="" value="name-asc">University name: A–Z</option>
                          <option data-v-c5db6352="" value="name-desc">University name: Z–A</option>
                        </select>
                        <div id="bb-customSelect-xIzIV-panel" role="listbox" hidden>
                          <div role="option" id="bb-customSelect-xIzIV-selectedOption">Recommended</div>
                          <div role="option">University name: A–Z</div>
                          <div role="option">University name: Z–A</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-end" data-v-c5db6352="">
                      <button className={"btn min-h-0 w-full \x62order \x62order-secondary bg-transparent px-5 py-3 text-base font-semibold text-neutral transition-colors duration-150 \x68over:\x62order-neutral hover:bg-neutral hover:text-neutral-content \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary lg:w-auto"} data-v-c5db6352="" type="button" onClick={() => { setSearchTerm(""); setCountryFilter("all"); setSortOrder("recommended"); setDirectoryPage(1); }}> Clear filters </button>
                    </div>
                  </form>
                  <p className={"mt-5 text-sm font-medium \x74ext-neutral/\x375"} data-v-c5db6352="" aria-live="polite">Showing {visibleUniversities.length} of {sortedUniversities.length} universities</p>
                  <div className="mt-8" data-v-c5db6352="">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6" data-v-c5db6352="">
                      {visibleUniversities.map(university => <article key={university.name} className="flex h-full flex-col rounded-box border border-secondary/20 bg-base-100 p-6 shadow-[0_10px_30px_-22px_rgba(26,26,26,0.35)]" data-v-c5db6352="">
                        <div className="flex h-20 items-center justify-center rounded-field border border-secondary/25 bg-base-200 px-4"><span className="text-center text-sm font-semibold text-neutral/60">{university.name}</span></div>
                        <div className="mt-5 flex flex-1 flex-col"><h3 className="text-lg font-bold tracking-tight text-base-content">{university.name}</h3><p className="mt-1 text-sm font-medium text-neutral/75">{university.location}</p><p className="mt-3 text-sm leading-relaxed text-neutral/75">{university.description}</p></div>
                        <button className="mt-5 inline-flex items-center justify-center gap-2 rounded-field border border-primary/40 px-4 py-3 text-sm font-semibold text-accent transition-colors duration-150 hover:border-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" aria-expanded={selectedUniversity === university.name} aria-haspopup="dialog" aria-controls="site-import-university-dialog" type="button" onClick={() => setSelectedUniversity(university.name)}>Explore options at {university.name}<svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
                      </article>)}
                    </div>
                    <nav className="mt-12 flex flex-col items-center gap-4" data-v-c5db6352="" aria-label="University results pages">
                      <div className="flex items-center gap-2" data-v-c5db6352="">
                        <button className="btn min-h-0 border border-secondary bg-transparent px-4 py-2.5 text-sm font-semibold text-neutral disabled:cursor-not-allowed disabled:opacity-40" data-v-c5db6352="" type="button" disabled={currentPage === 1} aria-label="Previous page" onClick={() => setDirectoryPage(Math.max(1, currentPage - 1))}>Previous</button>
                        <span className="px-3 text-sm font-medium text-neutral/75" data-v-c5db6352="">Page {currentPage} of {pageCount}</span>
                        <button className="btn min-h-0 border border-secondary bg-transparent px-4 py-2.5 text-sm font-semibold text-neutral disabled:cursor-not-allowed disabled:opacity-40" data-v-c5db6352="" type="button" disabled={currentPage === pageCount} aria-label="Next page" onClick={() => setDirectoryPage(Math.min(pageCount, currentPage + 1))}>Next</button>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </section>
            <section className={"\x62g-[#\x3171717]"} data-v-c5db6352="">
              <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24" data-v-c5db6352="">
                <div className="mx-auto max-w-2xl text-center" data-v-c5db6352="">
                  <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary" data-v-c5db6352=""><span className="inline-block h-px w-8 bg-primary" data-v-c5db6352="" /> Find your options <span className="inline-block h-px w-8 bg-primary" data-v-c5db6352="" /></p>
                  <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-white text-balance sm:text-4xl" data-v-c5db6352=""> Not sure which university fits your plans? </h2>
                  <p className={"mt-6 text-lg leading-relaxed \x74ext-white/\x370"} data-v-c5db6352=""> Tell us about your qualifications, course interests, preferred destinations, budget and intended intake. We will help narrow the university options worth exploring. </p>
                  <div className={"mt-9 flex flex-col items-center justify-center gap-3 \x73m:\x66lex-row"} data-v-c5db6352="">
                    <button className={"btn min-h-0 \x62order \x62order-secondary bg-transparent px-7 py-3.5 text-base font-semibold text-neutral transition-colors duration-150 \x68over:\x62order-neutral hover:bg-neutral hover:text-neutral-content \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-c5db6352="" type="button" onClick={openCounsellor}> Find my university options </button>
                    <button className={"btn min-h-0 \x62order \x62order-white/\x330 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-colors duration-150 \x68over:\x62order-white hover:bg-white hover:text-neutral \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-c5db6352="" type="button" onClick={openCounsellor}> Talk to a counsellor </button>
                  </div>
                </div>
              </div>
            </section>
            <dialog ref={universityDialogRef} onCancel={() => setSelectedUniversity(null)} onClose={() => setSelectedUniversity(null)} onClick={event => { if (event.target === event.currentTarget) setSelectedUniversity(null); }} className="university-dialog" data-v-748569c5="" data-v-c5db6352="" role="dialog" aria-modal="true" aria-labelledby="university-modal-title" id="site-import-university-dialog">
              <div className="rounded-box bg-base-100 p-6 sm:p-8" data-v-748569c5="">
                <div className="flex items-start justify-between gap-4" data-v-748569c5=""><h2 className="text-2xl font-bold tracking-tight text-base-content" data-v-748569c5="" id="university-modal-title">Interested in {selectedUniversity}?</h2>
                  <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-field text-neutral transition-colors duration-150 hover:bg-base-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" onClick={() => setSelectedUniversity(null)} type="button" aria-label="Close"><svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></button>
                </div>
                <p className="mt-5 leading-relaxed text-neutral/75" data-v-748569c5="">This university offers a range of study options, but the courses and entry routes relevant to you will depend on your qualifications, preferred study level, subject interests, budget and intended intake.</p>
                <p className="mt-4 leading-relaxed text-neutral/75" data-v-748569c5="">Tell us more about your plans so we can help narrow the university and course options worth exploring.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center" data-v-748569c5="">
                  <button className="btn btn-primary min-h-0 border-0 px-6 py-3 text-base font-semibold transition-colors duration-150 hover:bg-accent" type="button" onClick={() => { universityDialogRef.current?.close(); setSelectedUniversity(null); openCounsellor(); }}>Find my university options</button>
                  <button className="btn min-h-0 border border-secondary bg-transparent px-6 py-3 text-base font-semibold text-neutral transition-colors duration-150 hover:border-neutral hover:bg-neutral hover:text-neutral-content" type="button" onClick={() => setSelectedUniversity(null)}>Continue exploring</button>
                </div>
              </div>
            </dialog>
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
function ImportedSectionExploreUniversitiesAcrossOur() {
  return (
    <section className="relative overflow-hidden bg-base-100" data-v-c5db6352="">
      <div className="universities-hero__bg" data-v-c5db6352="" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 lg:pb-24 lg:pt-20" data-v-c5db6352="">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16" data-v-c5db6352="">
          <div className="universities-hero__content" style={{ transform: "translateY(0px)", opacity: "1" }} data-v-c5db6352="">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary" data-v-c5db6352=""><span className="inline-block h-px w-8 bg-primary" data-v-c5db6352="" /> University partners </p>
            <h1 className={"max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-base-content text-balance sm:text-5xl \x78l:\x74ext-[\x33.\x325rem]"} data-v-c5db6352=""> Explore universities across our study destinations. </h1>
            <p className={"mt-6 max-w-xl text-lg leading-relaxed \x74ext-neutral/\x375"} data-v-c5db6352=""> Browse institutions in Uniserv's university portfolio and discover where your qualifications, interests and study plans could take you. </p>
            <p className={"mt-4 max-w-xl text-base leading-relaxed \x74ext-neutral/\x370"} data-v-c5db6352=""> The right university depends on more than its name. Course availability, entry requirements, study level, budget and intended intake all need to fit your plans. </p>
            <div className={"mt-9 flex flex-col gap-3 \x73m:\x66lex-row \x73m:\x69tems-center"} data-v-c5db6352="">
              <a className={"btn btn-primary min-h-0 \x62order-0 px-7 py-3.5 text-base font-semibold transition-colors duration-150 hover:bg-accent \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-c5db6352="" href="#directory"> Explore universities </a>
              <button className={"btn min-h-0 \x62order \x62order-secondary bg-transparent px-7 py-3.5 text-base font-semibold text-neutral transition-colors duration-150 \x68over:\x62order-neutral hover:bg-neutral hover:text-neutral-content \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} data-v-c5db6352="" type="button"> Find my university options </button>
            </div>
          </div>
          <div className={"universities-hero__visual \x6frder-2"} style={{ transform: "translateY(0px)", opacity: "1" }} data-v-c5db6352="">
            <div className={"relative overflow-hidden rounded-box \x62order \x62order-secondary/\x325 \x73hadow-[\x30_20px_60px_-30px_rgba(\x326,\x326,\x326,\x30.\x335)]"} data-v-c5db6352="">
              <img className="aspect-[4/3] w-full object-cover" data-v-c5db6352="" src="/site-assets/797e2a23c84a95f5.jpg" alt="A university district viewed across a city" />
              <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-[#\x3171717]/\x340 \x74o-transparent"} aria-hidden="true" data-v-c5db6352="" />
              <svg className={"absolute right-4 top-4 h-10 w-10 \x74ext-white/\x390"} viewBox="0 0 40 40" fill="none" aria-hidden="true" data-v-c5db6352="">
                <path d="M8 30c6-8 12-8 24-1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" data-v-c5db6352="" />
                <path d="M8 34c6-8 12-8 24-1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" data-v-c5db6352="" />
                <circle cx="32" cy="29" r="3" fill="currentColor" data-v-c5db6352="" />
                <circle cx="8" cy="33" r="3" fill="currentColor" data-v-c5db6352="" />
              </svg>
              <p className={"absolute bottom-4 left-4 rounded-full \x62order \x62order-white/\x320 \x62g-[#\x3171717]/\x360 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white \x62ackdrop-blur-sm"} data-v-c5db6352=""> A directory, not a ranking </p>
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
            <a className={"inline-flex items-center gap-3 rounded-field transition-opacity duration-150 hover:opacity-80 \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} aria-label="Uniserv Education — home" href="/">
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
                <a className={"text-sm font-medium \x74ext-white/\x385 transition-colors duration-150 hover:text-primary \x66ocus-visible:\x6futline \x66ocus-visible:\x6futline-2 \x66ocus-visible:\x6futline-offset-2 \x66ocus-visible:\x6futline-primary"} aria-current="page" href="#">University partners</a>
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
