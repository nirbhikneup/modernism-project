// app/page.tsx
import Image from "next/image";

type WorkSide = "rejection" | "healing";
type WorkType = "painting" | "poem";

type Work = {
  id: string;
  side: WorkSide;
  title: string;
  creator: string;
  year: string;
  type: WorkType;
  medium?: string; // kept for data, not shown in UI
  imageSrc?: string;
  excerpt?: string;
  analysis: string;
};

const works: Work[] = [
  // 🔴 REJECTION SIDE
  {
    id: "war-cripples",
    side: "rejection",
    title: "The War Cripples",
    creator: "Otto Dix",
    year: "1920",
    type: "painting",
    medium: "Oil and tempera on canvas",
    imageSrc: "/images/war-cripples.jpg",
    analysis:
      "Dix shows injured veterans walking through the city like living proof of what the war really did. Their damaged bodies and harsh details push back against any easy idea of honor or glory.",
  },
  {
    id: "shock-troops",
    side: "rejection",
    title: "Shock Troops Advance Under Gas",
    creator: "Otto Dix",
    year: "c. 1924",
    type: "painting",
    medium: "Etching / aquatint (Der Krieg series)",
    imageSrc: "/images/shock-troops.jpg",
    analysis:
      "The gas masks hide faces and make the soldiers look almost nonhuman. Dix shows modern war as cold, mechanical, and built to erase identity.",
  },
  {
    id: "suicide-trenches",
    side: "rejection",
    title: "Suicide in the Trenches",
    creator: "Siegfried Sassoon",
    year: "1918",
    type: "poem",
    excerpt:
      `"You smug-faced crowds with kindling eye\nWho cheer when soldier lads march by,\nSneak home and pray you’ll never know\nThe hell where youth and laughter go."`,
    analysis:
      "Sassoon shows how war destroys a young soldier’s mind, not just his body. The final angry address blames civilians who cheer for war without knowing its cost.",
  },

  // ✅ NEW ADDITION (prof-friendly, high-impact rejection text)
  {
    id: "dulce-et-decorum",
    side: "rejection",
    title: "Dulce et Decorum Est",
    creator: "Wilfred Owen",
    year: "1917–1918",
    type: "poem",
    excerpt:
      `"If you could hear, at every jolt, the blood\nCome gargling from the froth-corrupted lungs,\nObscene as cancer, bitter as the cud\nOf vile, incurable sores on innocent tongues—"`,
    analysis:
      "Owen uses shocking details from a gas attack to destroy the old idea that dying for your country is sweet or noble. The body becomes the proof that patriotic slogans can be lies.",
  },

  // 🟢 HEALING SIDE
  {
    id: "grieving-parents",
    side: "healing",
    title: "The Parents / Grieving Parents",
    creator: "Käthe Kollwitz",
    year: "1921–1932",
    type: "painting",
    medium: "Woodcut series and sculptural memorial",
    imageSrc: "/images/grieving-parents.jpg",
    analysis:
      "Kollwitz turns personal loss into a public act of mourning. The heavy, bowed figures honor the dead without celebrating war, suggesting healing through remembrance.",
  },
  {
    id: "wild-swans",
    side: "healing",
    title: "The Wild Swans at Coole",
    creator: "W.B. Yeats",
    year: "1917",
    type: "poem",
    excerpt:
      `"The nineteenth autumn has come upon me\nSince I first made my count;\nI saw, before I had well finished,\nAll suddenly mount\nAnd scatter wheeling in great broken rings\nUpon their clamorous wings."`,
    analysis:
      "Yeats feels time and change deeply, but the swans still carry beauty and energy. The poem holds loss and stability at once, offering a quiet kind of renewal.",
  },
  {
    id: "everyone-sang",
    side: "healing",
    title: "Everyone Sang",
    creator: "Siegfried Sassoon",
    year: "1919",
    type: "poem",
    excerpt:
      `"My heart was shaken with tears; and horror\nDrifted away... O, but Everyone\nWas a bird; and the song was wordless; the singing will never be done."`,
    analysis:
      "Sassoon captures a brief moment of release after horror. It’s not a simple happy ending, but it suggests people can still feel collective relief after trauma.",
  },
];

const splitWorks = (side: WorkSide): Work[] =>
  works.filter((work) => work.side === side);

const getTypeLabel = (work: Work): string =>
  work.type === "painting" ? "Painting" : "Poem";

/**
 * Essay text: EXACT same words as your block.
 * Only separated into paragraphs for readability.
 */
const essayParagraphs: string[] = [
  "This project argues that World War I did not create one unified modernist response. Instead, it pushed artists and writers into two competing ways of making meaning after extreme violence. The works on this website are connected not only by theme, but by overlapping war histories. Otto Dix fought for Germany and later painted the damaged bodies that the public could not comfortably celebrate. Wilfred Owen and Siegfried Sassoon wrote as soldier-poets who experienced trench war directly. Kathe Kollwitz made memorial art shaped by personal loss. W.B. Yeats was not a trench poet, but he wrote during the same era of instability and change. The shared historical pressure is clear that after industrial warfare, older heroic stories no longer felt believable. Each artist answers that crisis differently.",
  "On the rejection side, Dix’s The War Cripples is not only a depiction of injured veterans, it is a critique of postwar society. The veterans are shown in public space, suggesting that the war’s consequences cannot be contained or forgotten. The physical distortions and prosthetics reject the idea that sacrifice can be made noble through patriotic language. Dix’s style is intentionally uncomfortable. The grotesque body becomes the argument that modern national pride collapses when confronted with what modern war actually does to people.",
  "This idea continues in Shock Troops Advance Under Gas. The gas masks erase faces and remove individuality. The soldiers look more like instruments than people. The image makes a specific historical point about mechanized warfare, anonymity is part of modern violence. Dix is showing that modernity’s “progress” produced a system where identity disappears inside the war machine. That is a deeper rejection than simple anger, it is an attack on the belief that rational modern society leads to moral improvement.",
  "Owen’s “Dulce et Decorum Est” matches Dix’s strategy because it uses bodily detail to destroy ideology. Owen does not argue abstractly that war is bad. He stages a scene of gas attack and shows how the body’s suffering makes the famous patriotic slogan ethically false. The poem’s authority comes from the speaker’s position as witness. Like Dix, Owen makes the reader face what propaganda hides.",
  "Sassoon’s “Suicide in the Trenches” extends this critique into the social world. The poem starts with an ordinary young soldier and ends with the collapse of his spirit. The final address to civilians is not a general complaint; it targets the culture of cheering and myth-making that allowed war to continue. Sassoon and Owen show that modern warfare destroys not just bodies but mental life and social truth.",
  "The healing side does not deny trauma. It asks how meaning can return after the lie has been exposed. Kollwitz’s Grieving Parents offers a stark alternative to heroic memorials. The figures are heavy, bowed, and stripped of triumph. The work suggests that the only honest postwar meaning may come through mourning and remembrance rather than celebration. This is not optimism: it is a moral posture shaped by loss.",
  "Sassoon’s “Everyone Sang” shows a fragile shift. The poem does not erase the horrors of war, it captures a brief moment where collective emotion lets people breathe again. That makes it a bridge work in this project because the same poet who condemned civilians also records the human need for release.",
  "Yeats’s “The Wild Swans at Coole” adds a quieter model of repair. The speaker feels that life has changed and that he is aging into a different world. The swans represent continuity and enduring beauty. In a postwar atmosphere, that stability becomes meaningful. Yeats suggests that re-enchantment might come not through denial, but through attention to what still persists.",
  "Together, these works show a historically grounded contrast. Dix, Owen, and early Sassoon expose the collapse of heroic modern narratives through the damaged body and direct moral accusation. Kollwitz, Yeats, and later Sassoon offer the possibility of meaning rebuilt through mourning, continuity, and limited emotional recovery. The website format makes this argument visible by making two postwar modernisms emerging from shared historical trauma but moving toward different ways of living after it.",
];

export default function Page() {
  const disenchantmentWorks = splitWorks("rejection");
  const healingWorks = splitWorks("healing");

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-slate-50 to-emerald-50 text-slate-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:px-8">
          <div className="flex flex-col">
            <span className="text-xs tracking-[0.22em] uppercase text-slate-500">
              Modernism Project
            </span>
            <span className="text-sm md:text-base font-semibold text-slate-800">
              WWI Art & Poetry: Two Responses
            </span>
          </div>
          <div className="hidden md:flex gap-6 text-xs md:text-sm text-slate-600">
            <a href="#overview" className="hover:text-slate-900 transition-colors">
              Overview
            </a>
            <a href="#works" className="hover:text-slate-900 transition-colors">
              Works
            </a>
            <a href="#essay" className="hover:text-slate-900 transition-colors">
              Essay
            </a>
            <a href="#sources" className="hover:text-slate-900 transition-colors">
              Sources
            </a>
          </div>
        </div>
      </nav>

      <div className="px-4 py-8 md:px-10 lg:px-16">
        {/* HEADER */}
        <header id="overview" className="max-w-5xl mx-auto mb-12">

          World War I · Modernism · Trauma · Protest · Mourning

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Analyzing Two Postwar Modernisms:
            <span className="block md:inline">
              {" "}
              Dada’s Rejection vs Spiritual Healing
            </span>
          </h1>

          {/* More modest, specific framing */}
          
            This site places a small set of WWI and postwar works in conversation. The “rejection” side focuses on damaged bodies, lost identity, and anger at public myths. The “healing” side stays close to grief but looks for careful forms of endurance, mourning, memory, and moments of relief.The goal is not to claim these approaches are total opposites. It is to show how 
        </header>

        {/* TWO-COLUMN WORKS SECTION */}
        <section
          id="works"
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12"
        >
          <Column
            title="Disruption & Rejection"
            subtitle="These works lean on shock, blunt witness, and the injured body to challenge heroic stories of war. They ask viewers to face what public memory often avoids."
            accent="rose"
            works={disenchantmentWorks}
          />
          <Column
            title="Healing & Re-enchantment"
            subtitle="These works do not erase trauma. Instead, they show how mourning, continuity, and brief communal feeling can offer a limited but real way forward."
            accent="emerald"
            works={healingWorks}
          />
        </section>

        {/* DIVIDER LABEL */}
        <div className="max-w-6xl mx-auto mt-16 mb-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-300" />
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-slate-500">
            Analytical Essay
          </span>
          <div className="h-px flex-1 bg-slate-300" />
        </div>

        {/* ESSAY SECTION */}
        <section id="essay" className="max-w-4xl mx-auto mb-14">
          <article className="rounded-3xl border border-slate-200 bg-white/90 shadow-lg px-6 py-8 md:px-10 md:py-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Analytical Essay
            </h2>

            {/* Same words, now real paragraphs */}
            <div className="prose prose-slate max-w-none">
              {essayParagraphs.map((para, i) => (
                <p key={i} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </article>
        </section>

        {/* DIVIDER LABEL */}
        <div className="max-w-6xl mx-auto mb-6 flex items-center gap-4" id="sources">
          <div className="h-px flex-1 bg-slate-300" />
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-slate-500">
            Works Cited
          </span>
          <div className="h-px flex-1 bg-slate-300" />
        </div>

        {/* SOURCES SECTION */}
        <section className="max-w-4xl mx-auto mb-20">
          <article className="rounded-3xl border border-slate-200 bg-white/95 shadow-lg px-6 py-8 md:px-10 md:py-10">


            This list includes the core works analyzed on the site. I’m keeping it short and targeted so each source clearly supports specific historical or interpretive points.


            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-slate-800">
              <li>
                Dix, Otto. <i>The War Cripples</i>. 1920.
              </li>
              <li>
                Dix, Otto. <i>Shock Troops Advance Under Gas</i>. ca. 1924.
              </li>
              <li>
                Kollwitz, Käthe. <i>The Parents (Grieving Parents)</i>. 1921–1932.
              </li>
              <li>
                Owen, Wilfred. “Dulce et Decorum Est.” 1917–1918.
              </li>
              <li>
                Sassoon, Siegfried. “Suicide in the Trenches.” <i>Counter-Attack and Other Poems</i>, 1918.
              </li>
              <li>
                Sassoon, Siegfried. “Everyone Sang.” <i>Counter-Attack and Other Poems</i>, 1919.
              </li>
              <li>
                Yeats, W. B. “The Wild Swans at Coole.” <i>The Wild Swans at Coole</i>, 1917.
              </li>
              <li>
                West, Rebecca. <i>The Return of the Soldier</i>. 1918.
              </li>
              <li>
                Fox, Paul. “Confronting Postwar Shame in Weimar Germany: Trauma, Heroism and the War Art of Otto Dix.”{" "}
                <i>Oxford Art Journal</i>, vol. 29, no. 2, 2006, pp. 247–67.
              </li>
              <li>
                Pividori, Cristina. “Eros and Thanatos Revisited: The Poetics of Trauma in Rebecca West’s <i>The Return of the Soldier</i>.”{" "}
                <i>Atlantis</i>, vol. 32, no. 2, 2010, pp. 89–104.
              </li>
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
}

/** Reusable column for each side */
type ColumnProps = {
  title: string;
  subtitle: string;
  accent: "rose" | "emerald";
  works: Work[];
};

function Column({ title, subtitle, accent, works }: ColumnProps) {
  const accentBorder =
    accent === "rose" ? "border-rose-300" : "border-emerald-300";
  const cardBorder =
    accent === "rose" ? "border-rose-100" : "border-emerald-100";
  const cardBg =
    accent === "rose" ? "bg-rose-50/80" : "bg-emerald-50/80";
  const typeColor =
    accent === "rose" ? "text-rose-500" : "text-emerald-600";

  return (
    <div className="space-y-5">
      <div className={`border-l-4 ${accentBorder} pl-4`}>
        <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
        <p className="text-slate-700 text-sm md:text-base mt-2 leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="space-y-5">
        {works.map((work) => (
          <article
            key={work.id}
            className={`rounded-2xl ${cardBorder} ${cardBg} border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-150`}
          >
            <div className="px-4 py-4 md:px-5 md:py-5">
              <header className="mb-3">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                    {work.title}
                  </h3>
                  <span className="text-xs md:text-sm text-slate-500 whitespace-nowrap">
                    {work.creator}, {work.year}
                  </span>
                </div>
                <p
                  className={`text-xs uppercase tracking-wide ${typeColor} mt-1`}
                >
                  {getTypeLabel(work)}
                </p>
              </header>

              {work.imageSrc && (
                <div className="relative w-full aspect-[4/3] mb-3 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                  <Image
                    src={work.imageSrc}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {work.excerpt && (
                <pre className="whitespace-pre-wrap text-sm md:text-[0.95rem] text-slate-800 bg-white border border-slate-200 rounded-xl p-3 mb-3 leading-relaxed">
                  {work.excerpt}
                </pre>
              )}

              <p className="text-sm md:text-[0.95rem] text-slate-800 leading-relaxed">
                {work.analysis}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
