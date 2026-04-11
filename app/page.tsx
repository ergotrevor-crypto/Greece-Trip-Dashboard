export default function GreeceTripDashboard() {
  const itinerary = [
    {
      date: "Tue, Sep 16",
      city: "Athens",
      title: "Arrival and first-night Athens",
      morning: [
        "Fly from the U.S. and arrive in Athens",
        "Private transfer or taxi to Hotel Grande Bretagne",
      ],
      afternoon: [
        "Check in, refresh, and take it easy after the flight",
        "Walk through Syntagma into Plaka and Anafiotika",
        "Coffee stop at Kudu Coffee Roasters or Taf Coffee",
      ],
      evening: [
        "Drinks or dinner at GB Roof Garden for an elegant first night",
        "Alternative dinner: Mani Mani for refined Greek cuisine",
        "Optional nightcap at 360 Cocktail Bar",
      ],
    },
    {
      date: "Wed, Sep 17",
      city: "Athens",
      title: "History day and signature Athens dinner",
      morning: [
        "Early guided Acropolis and Parthenon tour",
        "Continue with the Acropolis Museum",
      ],
      afternoon: [
        "Lunch at Yiasemi or Ergon House",
        "Optional stroll through the Ancient Agora or Koukaki",
        "Coffee at Dope Roasting Co. or Taf Coffee",
      ],
      evening: [
        "Main Athens dinner at Hytra",
        "Alternative elegant option: return to GB Roof Garden",
        "Optional cocktails at The Clumsies",
      ],
    },
    {
      date: "Thu, Sep 18",
      city: "Santorini",
      title: "Transfer to Santorini and settle into Astra Suites",
      morning: [
        "Breakfast at the hotel",
        "Transfer to airport and flight from Athens to Santorini",
      ],
      afternoon: [
        "Check into Astra Suites in Imerovigli",
        "Relax on the terrace and soak in the caldera views",
        "Light lunch at Avocado",
      ],
      evening: [
        "Dinner at Athenian House",
        "Slow walk back to Astra and enjoy the suite terrace or jetted tub",
      ],
    },
    {
      date: "Fri, Sep 19",
      city: "Santorini",
      title: "Signature Santorini day",
      morning: [
        "Slow morning with breakfast and coffee on the terrace",
        "Short scenic walk toward Fira if you feel like moving",
      ],
      afternoon: [
        "Preferred plan: catamaran cruise with swimming and caldera views",
        "Alternate plan: beach club time at Perivolos",
      ],
      evening: [
        "Sunset at sea if doing the cruise",
        "Lighter dinner afterward near Fira or back near the hotel",
        "Good easy option: Naoussa in Fira",
      ],
    },
    {
      date: "Sat, Sep 20",
      city: "Santorini",
      title: "Flex day: explore, relax, and birthday-style finish",
      morning: [
        "Coffee and a slow start at Astra Suites",
        "Choose one: Oia, winery stop, or extra hotel relaxation",
      ],
      afternoon: [
        "Lunch at Metaxi Mas for an authentic island meal",
        "Optional beach or winery after lunch",
      ],
      evening: [
        "Final Santorini dinner at Varoulko Santorini or another night at Athenian House",
        "Last terrace night at Astra Suites",
      ],
    },
    {
      date: "Sun, Sep 21",
      city: "Cyprus transfer",
      title: "Departure day",
      morning: [
        "Coffee and breakfast with a final caldera view",
        "Transfer to the airport",
      ],
      afternoon: [
        "Fly onward to Cyprus for the wedding",
      ],
      evening: [
        "Keep the schedule light and protected for arrival",
      ],
    },
  ];

  const hotels = [
    {
      city: "Athens",
      name: "Hotel Grande Bretagne",
      why: "Classic grand hotel in a top Syntagma location with strong service, polished arrival energy, and easy logistics for a short stay.",
      notes: [
        "Best for heritage, tradition, and an iconic Athens feel",
        "Use Amex Fine Hotels + Resorts if pricing is competitive",
        "GB Roof Garden is ideal for a first-night dinner or drinks",
      ],
    },
    {
      city: "Santorini",
      name: "Astra Suites",
      why: "Romantic, refined, and ideally positioned in Imerovigli for caldera views, privacy, and a quieter luxury feel.",
      notes: [
        "Best match for a milestone couple’s trip",
        "Target Senior Suite with Outdoor Jacuzzi or Superior Suite if the price jump is reasonable",
        "Request strong privacy and unobstructed caldera views when booking",
      ],
    },
  ];

  const athensDining = {
    coffee: ["Kudu Coffee Roasters", "Taf Coffee", "Dope Roasting Co.", "Anana Coffee"],
    casual: ["Yiasemi", "Ergon House", "Karamanlidika tou Fani"],
    nice: ["Hytra", "GB Roof Garden", "Mani Mani"],
    drinks: ["360 Cocktail Bar", "The Clumsies"],
  };

  const santoriniDining = {
    coffee: ["Passaggio (Fira)", "Confetti Dessert Boutique", "Terrace coffee at Astra Suites"],
    casual: ["Avocado", "Naoussa", "Beach lunch at Forty One or Wet Stories"],
    nice: ["Athenian House", "Varoulko Santorini", "Metaxi Mas"],
    extras: ["Santo Wines", "Venetsanos Winery"],
  };

  const weather = [
    {
      place: "Athens",
      highs: "Around 80–86°F",
      lows: "Around 68–72°F",
      notes: "Warm and sunny with strong midday sun. Best for early touring and rooftop evenings.",
    },
    {
      place: "Santorini",
      highs: "Around 75–82°F",
      lows: "Around 65–70°F",
      notes: "Warm with a noticeable breeze, especially at sunset and on exposed caldera terraces.",
    },
  ];

  const quickNotes = [
    "English is widely spoken in Athens and Santorini, especially at hotels, restaurants, and tours.",
    "Freddo espresso and freddo cappuccino are must-try coffee orders in Greece.",
    "Athens to Santorini should be done by flight for this trip, not ferry.",
    "Book the Acropolis tour, key Santorini dinners, and the catamaran in advance.",
    "Pack light layers for Santorini evenings because the breeze can pick up.",
  ];

  const sectionCard = "rounded-3xl border border-black/10 bg-white shadow-sm";
  const pill = "inline-flex rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-medium tracking-wide text-black/70";

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="mb-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-100 via-white to-amber-100 p-8 shadow-sm ring-1 ring-black/5 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-3 inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600 shadow-sm">
                Greece Birthday Trip Dashboard
              </div>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Athens + Santorini
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-700 md:text-lg">
                A polished, shareable plan for Trevor and his wife: culture and history in Athens, then a scenic and romantic Santorini finish before Cyprus.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:min-w-[320px]">
              <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-black/5">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Dates</div>
                <div className="mt-2 text-lg font-semibold">Sep 16–21</div>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-black/5">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Trip Style</div>
                <div className="mt-2 text-lg font-semibold">Culture + Romance</div>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-black/5">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Athens Stay</div>
                <div className="mt-2 text-lg font-semibold">Grande Bretagne</div>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-black/5">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Santorini Stay</div>
                <div className="mt-2 text-lg font-semibold">Astra Suites</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className={`${sectionCard} p-6`}>
            <div className={pill}>Why this split works</div>
            <p className="mt-4 text-sm leading-7 text-zinc-700">
              Athens gives you the historic substance and iconic city energy in a compact, efficient stay. Santorini gets the extra time because it delivers the emotional peak, the birthday feel, and the visual payoff.
            </p>
          </div>
          <div className={`${sectionCard} p-6`}>
            <div className={pill}>Signature moments</div>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-700">
              <li>• Guided Acropolis and Parthenon tour</li>
              <li>• GB rooftop first-night atmosphere</li>
              <li>• Astra terrace mornings in Imerovigli</li>
              <li>• Santorini catamaran or beach-club day</li>
            </ul>
          </div>
          <div className={`${sectionCard} p-6`}>
            <div className={pill}>Booking priorities</div>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-700">
              <li>• Santorini room category</li>
              <li>• Athens guided tour</li>
              <li>• Athenian House / Hytra dinner reservations</li>
              <li>• Catamaran cruise</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="space-y-6">
            <div className={`${sectionCard} p-6 md:p-7`}>
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">Play-by-play itinerary</h2>
                  <p className="mt-1 text-sm text-zinc-600">Morning, afternoon, and evening blocks built for pace, logistics, and energy.</p>
                </div>
              </div>
              <div className="space-y-5">
                {itinerary.map((day) => (
                  <div key={day.date} className="rounded-3xl border border-black/10 bg-stone-50 p-5">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="text-sm font-medium text-zinc-500">{day.date} · {day.city}</div>
                        <h3 className="text-xl font-semibold tracking-tight">{day.title}</h3>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-4 md:grid-cols-3">
                      <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
                        <div className="mb-2 text-sm font-semibold">Morning</div>
                        <ul className="space-y-2 text-sm leading-6 text-zinc-700">
                          {day.morning.map((item) => <li key={item}>• {item}</li>)}
                        </ul>
                      </div>
                      <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
                        <div className="mb-2 text-sm font-semibold">Afternoon</div>
                        <ul className="space-y-2 text-sm leading-6 text-zinc-700">
                          {day.afternoon.map((item) => <li key={item}>• {item}</li>)}
                        </ul>
                      </div>
                      <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
                        <div className="mb-2 text-sm font-semibold">Evening</div>
                        <ul className="space-y-2 text-sm leading-6 text-zinc-700">
                          {day.evening.map((item) => <li key={item}>• {item}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className={`${sectionCard} p-6`}>
              <h2 className="text-2xl font-semibold tracking-tight">Stay strategy</h2>
              <div className="mt-4 space-y-4">
                {hotels.map((hotel) => (
                  <div key={hotel.name} className="rounded-2xl bg-stone-50 p-4 ring-1 ring-black/5">
                    <div className="text-sm font-medium text-zinc-500">{hotel.city}</div>
                    <div className="mt-1 text-lg font-semibold">{hotel.name}</div>
                    <p className="mt-2 text-sm leading-6 text-zinc-700">{hotel.why}</p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                      {hotel.notes.map((note) => <li key={note}>• {note}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${sectionCard} p-6`}>
              <h2 className="text-2xl font-semibold tracking-tight">Athens food + coffee</h2>
              <div className="mt-4 space-y-4 text-sm text-zinc-700">
                <div>
                  <div className="font-semibold">Coffee</div>
                  <div className="mt-2 flex flex-wrap gap-2">{athensDining.coffee.map((x) => <span key={x} className={pill}>{x}</span>)}</div>
                </div>
                <div>
                  <div className="font-semibold">Casual / local</div>
                  <div className="mt-2 flex flex-wrap gap-2">{athensDining.casual.map((x) => <span key={x} className={pill}>{x}</span>)}</div>
                </div>
                <div>
                  <div className="font-semibold">Nice dinner</div>
                  <div className="mt-2 flex flex-wrap gap-2">{athensDining.nice.map((x) => <span key={x} className={pill}>{x}</span>)}</div>
                </div>
                <div>
                  <div className="font-semibold">Drinks</div>
                  <div className="mt-2 flex flex-wrap gap-2">{athensDining.drinks.map((x) => <span key={x} className={pill}>{x}</span>)}</div>
                </div>
              </div>
            </div>

            <div className={`${sectionCard} p-6`}>
              <h2 className="text-2xl font-semibold tracking-tight">Santorini food + coffee</h2>
              <div className="mt-4 space-y-4 text-sm text-zinc-700">
                <div>
                  <div className="font-semibold">Coffee</div>
                  <div className="mt-2 flex flex-wrap gap-2">{santoriniDining.coffee.map((x) => <span key={x} className={pill}>{x}</span>)}</div>
                </div>
                <div>
                  <div className="font-semibold">Casual / lighter</div>
                  <div className="mt-2 flex flex-wrap gap-2">{santoriniDining.casual.map((x) => <span key={x} className={pill}>{x}</span>)}</div>
                </div>
                <div>
                  <div className="font-semibold">Signature meals</div>
                  <div className="mt-2 flex flex-wrap gap-2">{santoriniDining.nice.map((x) => <span key={x} className={pill}>{x}</span>)}</div>
                </div>
                <div>
                  <div className="font-semibold">Wine / extras</div>
                  <div className="mt-2 flex flex-wrap gap-2">{santoriniDining.extras.map((x) => <span key={x} className={pill}>{x}</span>)}</div>
                </div>
              </div>
            </div>

            <div className={`${sectionCard} p-6`}>
              <h2 className="text-2xl font-semibold tracking-tight">Weather snapshot</h2>
              <div className="mt-4 space-y-4">
                {weather.map((w) => (
                  <div key={w.place} className="rounded-2xl bg-stone-50 p-4 ring-1 ring-black/5">
                    <div className="text-lg font-semibold">{w.place}</div>
                    <div className="mt-1 text-sm text-zinc-600">Highs: {w.highs} · Lows: {w.lows}</div>
                    <p className="mt-2 text-sm leading-6 text-zinc-700">{w.notes}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${sectionCard} p-6`}>
              <h2 className="text-2xl font-semibold tracking-tight">Useful notes</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700">
                {quickNotes.map((note) => <li key={note}>• {note}</li>)}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
