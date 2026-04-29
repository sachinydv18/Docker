import React, { useState, useEffect } from 'react'

const places = [
  {
    num: '01',
    name: 'Phewa Lake',
    desc: 'The second largest lake in Nepal, Phewa stretches across 4.43 sq km in the heart of Pokhara. Its glassy surface mirrors the peak of Machhapuchhre (Fishtail) and the entire Annapurna range on clear mornings. Rent a wooden rowboat and drift toward the island temple, or simply sit at a lakeside café and watch the mountains appear and vanish in the clouds.',
    tags: ['Lake', 'Boating', 'Scenic'],
  },
  {
    num: '02',
    name: 'Sarangkot Viewpoint',
    desc: 'Rise before dawn and climb to 1,592 metres. As daylight creeps over the horizon, Annapurna I (8,091m), Annapurna South, Hiunchuli, and the iconic Machhapuchhre emerge from purple shadow into blazing orange. Sarangkot is also the launch point for paragliding over Phewa Lake — one of the finest tandem paragliding experiences on earth.',
    tags: ['Sunrise', 'Paragliding', 'Viewpoint'],
  },
  {
    num: '03',
    name: 'World Peace Pagoda',
    desc: 'Perched on a ridge south of Phewa Lake at 1,113 metres, this gleaming white Buddhist stupa was built by Japanese Buddhist monks in 1996. Four golden statues of Buddha face the four cardinal directions. The hike up through dense forest takes about an hour and rewards you with panoramic views of Pokhara city, the lake below, and the full arc of the Annapurna Himalaya.',
    tags: ['Buddhism', 'Stupa', 'Hiking'],
  },
  {
    num: '04',
    name: 'Tal Barahi Temple',
    desc: 'Reachable only by boat, this two-storied pagoda temple sits on a small island in the middle of Phewa Lake. Dedicated to Goddess Durga (Barahi), it is one of the most revered Hindu shrines in Gandaki Province. The short boat crossing adds a sense of pilgrimage even for non-religious visitors, and the lake views from the island are exceptional.',
    tags: ['Temple', 'Hindu', 'Island'],
  },
  {
    num: '05',
    name: 'Gupteshwor Mahadev Cave',
    desc: 'A sacred limestone cave that stretches 3 km underground, making it the longest cave in South Asia. Inside, a large stalagmite formation is worshipped as a Shiva Lingam. The cave also offers a dramatic subterranean view of Devi\'s Fall — you can see the waterfall crashing into a chasm from below. Entry is around NPR 100.',
    tags: ['Cave', 'Shiva', 'Sacred'],
  },
  {
    num: '06',
    name: "Devi's Falls",
    desc: "Locally called Patale Chhango (Hell's Waterfall), this unusual waterfall plunges into a narrow gorge and disappears underground into the Gupteshwor Cave system. The name comes from a Swiss tourist, Davide, who was swept away in 1961. Most dramatic during and just after monsoon (July–September). Located right next to Gupteshwor Cave — visit both together.",
    tags: ['Waterfall', 'Geological'],
  },
  {
    num: '07',
    name: 'Mahendra Cave',
    desc: 'Named after the late King Mahendra, this large limestone cave in Batulechaur contains impressive stalactites and stalagmites shaped over millennia. A statue of Lord Shiva stands inside, making it a site of both natural and religious interest. The cave stretches about 120 metres and is lit for visitors. The nearby Bat Cave, just a short walk away, houses hundreds of horseshoe bats.',
    tags: ['Cave', 'Limestone', 'Natural'],
  },
  {
    num: '08',
    name: 'International Mountain Museum',
    desc: 'Opened in 2004, this is one of the finest mountaineering museums in the world. It honours the history of Himalayan exploration — exhibits document the lives of legendary climbers like Herzog, Hillary, and Tenzing. You will find preserved specimens of Himalayan flora and fauna, scale models of all 8,000-metre peaks, and extensive displays on the indigenous peoples of the mountain region.',
    tags: ['Museum', 'History', 'Mountaineering'],
  },
  {
    num: '09',
    name: 'Bindabasini Temple',
    desc: 'Seated atop a small hillock in the old bazaar area, Bindabasini Temple is one of Pokhara\'s oldest and most important Hindu shrines. Dedicated to Goddess Bhagavati (an incarnation of Durga), it offers panoramic views of the Annapurna range. The temple is particularly lively during the Dashain and Tihar festivals when thousands of devotees come to offer prayers.',
    tags: ['Temple', 'Hindu', 'Festival'],
  },
  {
    num: '10',
    name: 'Tibetan Refugee Camp',
    desc: 'Four official Tibetan settlements exist in Pokhara, established after the Chinese takeover of Tibet in the 1950s. These communities have preserved their unique culture, craft traditions, and Buddhist religious practices. Visitors can browse shops selling hand-knotted carpets, silver jewellery, prayer wheels, and thangka paintings — all made by community artisans. Tashiling and Tashi Palkhiel are the two main camps.',
    tags: ['Culture', 'Crafts', 'History'],
  },
  {
    num: '11',
    name: 'Old Pokhara Bazaar',
    desc: 'Far removed from the tourist cafes of Lakeside, the old bazaar near Bhimsen Tole preserves the medieval streetscape of the original market town. Narrow alleys are lined with traditional Newari architecture, craft workshops, spice sellers, and local eateries serving dal bhat and sel roti. This is where Pokhara\'s everyday life happens, unchanged for generations.',
    tags: ['Market', 'Culture', 'Newari'],
  },
  {
    num: '12',
    name: 'Pokhara Lakeside (Baidam)',
    desc: 'The main tourist district runs along the northern shore of Phewa Lake. It is a pleasant, walkable strip of guest houses, restaurants serving everything from momos to wood-fired pizza, gear rental shops, and bookstores. Not a "sight" in the traditional sense, but the relaxed lakeside promenade — especially at sunset, with the mountains as backdrop — is itself the experience Pokhara is famous for.',
    tags: ['Lakeside', 'Dining', 'Shopping'],
  },
]

const treks = [
  {
    name: 'Annapurna Base Camp (ABC)',
    desc: 'The classic Pokhara trek. You walk through rice terraces, rhododendron forests, and Gurung villages before reaching the glacial amphitheatre at 4,130m, ringed by Annapurna I, Annapurna South, Machapuchhre, and Hiunchuli.',
    detail: '10–14 days · Moderate–Demanding',
  },
  {
    name: 'Annapurna Circuit',
    desc: 'One of the world\'s great long-distance hikes. The full circuit circumnavigates the entire Annapurna massif, crossing the Thorong La pass (5,416m) and descending into the Mustang rain-shadow valley.',
    detail: '14–21 days · Demanding',
  },
  {
    name: 'Ghorepani Poon Hill',
    desc: 'The most popular short trek from Pokhara. The 4-day loop via Ulleri, Ghorepani, and Tadapani delivers stunning rhododendron forests and the famous Poon Hill sunrise panorama — arguably the best mountain vista in Nepal.',
    detail: '4–5 days · Moderate',
  },
  {
    name: 'Mardi Himal Trek',
    desc: 'A quieter, less-trafficked alternative that climbs directly above the Modi Khola valley toward Mardi Himal base camp (4,500m). Spectacular close-up views of Machhapuchhre. Far fewer teahouses and crowds than ABC.',
    detail: '5–7 days · Moderate',
  },
  {
    name: 'Khopra Ridge Trek',
    desc: 'An emerging trail in the Annapurna Conservation Area that passes through untouched oak and rhododendron forests to the Khopra Danda ridge at 3,660m, with extraordinary views of Dhaulagiri, Annapurna South, and the entire Nilgiri range.',
    detail: '7–9 days · Moderate',
  },
  {
    name: 'Australian Camp Day Hike',
    desc: 'If you have only a day, hike to Australian Camp (2,060m) via Kande village. A gentle 3-hour ascent through terraced farmland gives you your first dramatic Annapurna panorama without an overnight stay.',
    detail: '1 day · Easy',
  },
]

const activities = [
  { name: 'Paragliding', desc: 'Launch from Sarangkot and soar 45 minutes over Phewa Lake with a tandem pilot. Around USD 80–100. One of the world\'s top paragliding destinations.' },
  { name: 'Boating on Phewa Lake', desc: 'Rent a wooden rowboat or paddle boat by the hour from the Lakeside ghat. Early morning is best — the reflections are perfect and the lake is calm.' },
  { name: 'Zipline', desc: 'The High Ground Zipline near Sarangkot claims to be one of the world\'s steepest and longest at 1.8 km, dropping 600 vertical metres at up to 120 km/h.' },
  { name: 'Upper Seti River Rafting', desc: 'A half-day family-friendly rafting trip through Class III–IV rapids on the Seti River. Lush gorges and occasional waterfalls line the route. Around NPR 5,700.' },
  { name: 'Sunrise Viewpoints', desc: 'Sarangkot is most famous but Poon Hill (on the Ghorepani trek) and Australian Camp are also excellent. Arrive before 5:30am in clear weather.' },
  { name: 'Mountain Biking', desc: 'Hire a mountain bike from Lakeside for around NPR 500–800/day. Trails lead to Sarangkot, Begnas Lake, and villages north of the city.' },
  { name: 'Skydiving', desc: 'For the bold: tandem skydiving over the Himalayas from 10,000 feet. A handful of operators in Pokhara run seasonal skydive programmes (Oct–Nov, Mar–Apr).' },
  { name: 'Ultralight Flight', desc: 'A 30-minute ultralight aircraft tour gives you an aerial perspective of Phewa Lake and Annapurna that few experience. Pilots follow the valley north for close Himalayan views.' },
]

const seasons = [
  { name: 'Autumn', months: 'Sep – Nov', recommended: true, desc: 'The best season. Crystal-clear skies, stable weather, and the year\'s finest mountain views. Peak trekking season — book accommodation early.' },
  { name: 'Spring', months: 'Mar – May', recommended: true, desc: 'Second-best season. Rhododendrons bloom on the hillsides. Good visibility before the monsoon builds. Lively and warm.' },
  { name: 'Winter', months: 'Dec – Feb', recommended: false, desc: 'Cold but often clear. Fewer crowds, lower prices. Snow on high passes closes some treks. Lakeside is still pleasant and snowcapped peaks are spectacular.' },
  { name: 'Monsoon', months: 'Jun – Aug', recommended: false, desc: 'Heavy rainfall, leeches on trails, and obscured mountain views. Devi\'s Falls is dramatic. Mostly not recommended for trekking but landscapes are intensely green.' },
]

const practical = [
  {
    title: 'Getting There',
    items: [
      { label: 'By Air', val: '25–30 min domestic flight from Kathmandu. ~17 daily departures. Pokhara International Airport (PKR) also receives some regional flights.' },
      { label: 'By Bus', val: '6–8 hours from Kathmandu via Prithvi Highway. Tourist buses cost NPR 800–1,500. Luxury coaches available. Scenic but slow.' },
      { label: 'By Road', val: 'Private car or taxi from Kathmandu takes roughly 5–6 hours depending on traffic conditions.' },
    ],
  },
  {
    title: 'Getting Around',
    items: [
      { label: 'Taxi', val: 'Metered taxis available. Always negotiate or confirm the meter. NPR 200–500 for most city trips.' },
      { label: 'E-Rickshaw', val: 'Cheap electric three-wheelers connect Lakeside, New Bus Park, and Mahendrapul. NPR 20–50 per person.' },
      { label: 'Bicycle / Scooter', val: 'Widely available for rent from Lakeside. Best for independent exploration of the city and nearby trails.' },
    ],
  },
  {
    title: 'Where to Stay',
    items: [
      { label: 'Lakeside (Baidam)', val: 'The main tourist strip. Hundreds of guesthouses from NPR 500 budget dorms to NPR 5,000+ boutique hotels.' },
      { label: 'Begnas Lake', val: '15km east of the city. Quieter, fewer tourists, and a more local feel.' },
      { label: 'High-End', val: 'Several starred resorts on the southern shore of Phewa Lake with unobstructed mountain views and pool facilities.' },
    ],
  },
  {
    title: 'Money & Costs',
    items: [
      { label: 'Currency', val: 'Nepalese Rupee (NPR). ATMs available throughout Lakeside.' },
      { label: 'Budget Travel', val: 'NPR 2,000–3,500/day covers guesthouse, meals, and local transport.' },
      { label: 'Mid-Range', val: 'NPR 5,000–10,000/day for a comfortable hotel and sit-down restaurants.' },
      { label: 'Tipping', val: 'Customary in restaurants (10%) and expected for trekking guides and porters.' },
    ],
  },
  {
    title: 'Permits',
    items: [
      { label: 'ACAP Permit', val: 'Annapurna Conservation Area Permit required for most treks. NPR 3,000 (foreigners).' },
      { label: 'TIMS Card', val: 'Trekkers\' Information Management System card. NPR 2,000 (foreigners). Obtained at Nepal Tourism Board office in Pokhara.' },
      { label: 'Restricted Areas', val: 'Mustang and Manaslu require additional special permits obtainable through a registered agency.' },
    ],
  },
  {
    title: 'Health & Safety',
    items: [
      { label: 'Altitude', val: 'Pokhara city (827m) poses no altitude risk. Treks climbing above 3,500m require proper acclimatisation.' },
      { label: 'Water', val: 'Drink bottled or purified water only. Most guesthouses and tea houses refill bottles to reduce plastic.' },
      { label: 'Medical', val: 'Gandaki Hospital and several private clinics serve Pokhara. Travel insurance with evacuation cover strongly recommended.' },
    ],
  },
]

export default function App() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <nav>
        <a href="#hero" className="nav-brand">Pokhara · Nepal</a>
        <ul className="nav-links">
          <li><a href="#places" style={activeSection==='places'?{color:'var(--gold)'}:{}}>Places</a></li>
          <li><a href="#trekking" style={activeSection==='trekking'?{color:'var(--gold)'}:{}}>Trekking</a></li>
          <li><a href="#activities" style={activeSection==='activities'?{color:'var(--gold)'}:{}}>Activities</a></li>
          <li><a href="#practical" style={activeSection==='practical'?{color:'var(--gold)'}:{}}>Plan</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero" id="hero">
        <p className="hero-eyebrow">Tourism Capital of Nepal · Officially declared 2024</p>
        <h1>Where the <em>Himalayas</em> meet the lakes</h1>
        <p className="hero-desc">
          Pokhara sits at 827 metres in the Gandaki Province of western Nepal, cradled between the world's highest mountains and the shimmering waters of Phewa Lake. It is Nepal's second-largest city and its adventure capital — the starting point for legendary Himalayan treks, a base for paragliding over clouds, and a place where evenings slow down to the rhythm of oars on still water.
        </p>
        <div className="hero-stats">
          <div className="stat-item"><strong>827m</strong><span>City Elevation</span></div>
          <div className="stat-item"><strong>8,091m</strong><span>Annapurna I</span></div>
          <div className="stat-item"><strong>4.43 km²</strong><span>Phewa Lake</span></div>
          <div className="stat-item"><strong>200 km</strong><span>From Kathmandu</span></div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <p className="section-label">Overview</p>
        <h2 className="section-title">The city that has it all</h2>
        <div className="about-grid">
          <p>
            Pokhara has been welcoming trekkers since the 1960s, when the first Western adventurers arrived on foot from India to find a market town of traditional Newar and Gurung architecture beside a quiet lake. Today the city is Nepal's premier tourist destination — declared the official Tourism Capital of Nepal in March 2024 — yet it retains a pace and atmosphere that feels unhurried compared to Kathmandu.
          </p>
          <p>
            The city sits in a wide valley on the southern edge of the Annapurna Conservation Area, the world's most-trekked protected region. On clear mornings, the full sweep of Dhaulagiri (8,167m), Annapurna I (8,091m), and the distinctive fishtail silhouette of Machapuchhre (6,993m) rises above the rooftops — visible from street level, from your hotel room, from the restaurant where you are having breakfast.
          </p>
          <p>
            The people of Pokhara are predominantly Gurung, Brahmin, Newar, and Magar. The Gurungs hail from the hill villages that surround the city — Ghandruk, Sikles, Lumle — and many serve in the famed Gurkha battalions of the British and Indian armies. Their culture, cuisine, and hospitality define the character of the region.
          </p>
          <p>
            Unlike many tourist cities, Pokhara works for every type of traveller: trekkers preparing for 14-day high-altitude circuits, families on a week's holiday, retired couples seeking mountain views and lakeside calm, and backpackers who arrive intending to stay three days and end up staying three weeks. It is that kind of place.
          </p>
        </div>
      </section>

      {/* QUOTE */}
      <div className="quote-block">
        <blockquote>"Few cities on earth offer the combination of high Himalayan peaks, serene lakes, and a warm, walking-paced lakeside life that Pokhara has made entirely its own."</blockquote>
        <cite>— Nepal Tourism Board</cite>
      </div>

      {/* PLACES */}
      <section id="places">
        <p className="section-label">Tourist Attractions</p>
        <h2 className="section-title">12 places to visit in Pokhara</h2>
        <p className="section-intro">From sacred island temples to underground cave systems, from panoramic sunrise viewpoints to a living Tibetan refugee community — Pokhara rewards the curious at every turn.</p>
        <div className="places-grid">
          {places.map((p) => (
            <div className="place-card" key={p.num}>
              <div className="place-number">{p.num}</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="place-meta">
                {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TREKKING */}
      <section id="trekking">
        <p className="section-label">Himalayan Trekking</p>
        <h2 className="section-title">Gateway to the Annapurna</h2>
        <p className="section-intro">Pokhara is the trailhead for the Annapurna Conservation Area — the most popular trekking region in the Himalayas, with routes ranging from one-day hikes to month-long expeditions.</p>
        <div className="trek-list">
          {treks.map((t) => (
            <div className="trek-card" key={t.name}>
              <h4>{t.name}</h4>
              <p>{t.desc}</p>
              <span className="trek-detail">{t.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITIES */}
      <section id="activities">
        <p className="section-label">Things to Do</p>
        <h2 className="section-title">Adventure, culture & calm</h2>
        <p className="section-intro">Beyond the trails, Pokhara offers everything from adrenaline-fuelled adventure sports to quiet moments on the lake and evenings in the bazaar.</p>
        <div className="activities-list">
          {activities.map((a) => (
            <div className="activity-item" key={a.name}>
              <h4>{a.name}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BEST TIME */}
      <section id="besttime">
        <p className="section-label">When to Visit</p>
        <h2 className="section-title">Four seasons, four experiences</h2>
        <p className="section-intro">Pokhara is a year-round destination, but the quality of your experience varies significantly by season. Mountain visibility and trail conditions are the primary factors.</p>
        <div className="seasons-grid">
          {seasons.map((s) => (
            <div className={`season-card${s.recommended ? ' recommended' : ''}`} key={s.name}>
              {s.recommended && <div className="season-badge">Recommended</div>}
              <h4>{s.name}</h4>
              <p style={{fontSize:'0.75rem', color:'var(--saffron)', marginBottom:'0.5rem', fontWeight:600}}>{s.months}</p>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICAL */}
      <section id="practical">
        <p className="section-label">Travel Information</p>
        <h2 className="section-title">Planning your visit</h2>
        <p className="section-intro">Everything you need to know before you arrive — transport, accommodation, permits, money, and health.</p>
        <div className="practical-grid">
          {practical.map((block) => (
            <div className="practical-card" key={block.title}>
              <h4>{block.title}</h4>
              <ul>
                {block.items.map((item) => (
                  <li key={item.label}><strong>{item.label}:</strong> {item.val}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <span className="footer-brand">Pokhara — Tourism Capital of Nepal</span>
        <p>Information accurate as of 2025 · Always verify local conditions before travel</p>
      </footer>
    </>
  )
}
