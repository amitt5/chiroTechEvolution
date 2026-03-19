'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChiroVoiceBot } from '@/components/voice-bot';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { DemoContent } from '@/content/demos';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

// ─── Calendar helpers ─────────────────────────────────────────────────────────
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAY_NAMES = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}
function isSunday(year: number, month: number, day: number) {
  return new Date(year, month, day).getDay() === 0;
}
function isSaturday(year: number, month: number, day: number) {
  return new Date(year, month, day).getDay() === 6;
}

const TIME_SLOTS_WEEKDAY = [
  '10:30','11:00','11:30',
  '14:30','15:00','15:30',
  '16:00','16:30','17:00',
];
const TIME_SLOTS_SATURDAY = [
  '10:30','11:00','11:30',
];

// ─── Data ─────────────────────────────────────────────────────────────────────
const specialties = [
  { en: 'Lower Back Pain', nl: 'Lage Rugpijn', slug: 'lage-rugpijn' },
  { en: 'Neck Pain', nl: 'Nekpijn', slug: 'nek' },
  { en: 'Headaches & Migraines', nl: 'Hoofdpijn en Migraine', slug: 'hoofdpijn-migraine' },
  { en: 'Whiplash', nl: 'Whiplash', slug: 'whiplash' },
  { en: 'Hernias & Disc Problems', nl: 'Hernia / Discushernia', slug: 'hernia' },
  { en: 'Upper Back & Shoulder Pain', nl: 'Bovenrug & Schouder', slug: 'bovenrug-schouder' },
  { en: 'Sciatica', nl: 'Ischias', slug: 'ischias' },
  { en: 'Sports Injuries', nl: 'Sportblessures', slug: 'sportblessures' },
  { en: 'Pregnancy-Related Pain', nl: 'Zwangerschap', slug: 'zwangerschap' },
  { en: "Infant & Children's Care", nl: "Kinderen & Baby's", slug: 'kinderen' },
  { en: 'Arthritis & Wear-and-Tear', nl: 'Artrose / Slijtage', slug: 'artrose-slijtage' },
  { en: 'Tension Headaches', nl: 'Spanningshoofdpijn', slug: 'spanningshoofdpijn' },
];

const conditionDetails: Record<string, { en: { title: string; what: string; how: string }; nl: { title: string; what: string; how: string } }> = {
  'lage-rugpijn': {
    nl: {
      title: 'Lage Rugpijn',
      what: 'Lage rugpijn is één van de meest voorkomende klachten in Nederland. Het kan variëren van een doffe pijn tot scherpe, uitstralende pijn naar de benen. Oorzaken zijn onder meer verkeerde houding, spierspanning, discusproblemen, of wervelgewricht-dysfunctie.',
      how: 'Neurologische chiropractie behandelt lage rugpijn door wervelkolom-correcties toe te passen die de mobiliteit herstellen, zenuwdruk verminderen, en het natuurlijke genezingsproces van het lichaam activeren. Veel patiënten ervaren al na enkele behandelingen significante verlichting.',
    },
    en: {
      title: 'Lower Back Pain',
      what: 'Lower back pain is extremely common — as many as 80% of people will experience it at some point. It can range from a dull ache or stiffness to nerve pain radiating into the legs. Causes include poor posture, muscle strain, disc problems, and joint dysfunction.',
      how: "Neuro-based chiropractic treats lower back pain through precise spinal adjustments that restore mobility, reduce nerve pressure, and activate the body's natural healing. Many patients notice significant improvement within just a few sessions.",
    },
  },
  'nek': {
    nl: {
      title: 'Nekpijn',
      what: 'Nekpijn kan ontstaan door langdurig beeldschermwerk, slechte slaaphouding, stress, of een whiplash-trauma. Symptomen variëren van stijfheid en spanning tot hoofdpijn en uitstralende pijn naar schouders of armen.',
      how: 'Door gerichte neurologisch-chiropractische correcties van de nekwervels wordt de mobiliteit hersteld en zenuwfunctie genormaliseerd. Combinatie met medische acupunctuur en massage versnelt het herstel en vermindert spierspanning effectief.',
    },
    en: {
      title: 'Neck Pain',
      what: 'Neck pain can arise from prolonged screen use, poor sleeping position, stress, or whiplash. Symptoms range from stiffness and tension to headaches and pain or tingling radiating to the shoulders and arms.',
      how: 'Targeted cervical adjustments restore mobility and normalise nerve function. Combined with medical acupuncture and massage, recovery is accelerated and muscle tension effectively reduced.',
    },
  },
  'hernia': {
    nl: {
      title: 'Hernia / Discushernia',
      what: 'Een hernia ontstaat wanneer de kern van een tussenwervelschijf door de buitenste ring heen drukt. Dit kan druk geven op zenuwen en leiden tot pijn, tintelingen, of krachtsverlies in benen of armen.',
      how: 'Neurologische chiropractie kan bij veel hernia-gevallen de druk op de aangedane zenuw verminderen door de wervelkolom te ontlasten en correcte uitlijning te bevorderen. Behandeling richt zich op symptoomverlichting en het voorkomen van verdere schade. In ernstige gevallen verwijzen we door.',
    },
    en: {
      title: 'Herniated Disc',
      what: 'A herniated disc occurs when the soft inner material of an intervertebral disc bulges through the outer layer, pressing on nearby nerves. This can cause back pain, radiating pain, tingling, or weakness in the legs or arms.',
      how: 'Neuro-based chiropractic can reduce nerve pressure by decompressing the spine and restoring alignment. Treatment focuses on relieving symptoms and preventing further damage. In severe cases, we refer you to a specialist.',
    },
  },
  'whiplash': {
    nl: {
      title: 'Whiplash',
      what: 'Whiplash is een nek-letsel veroorzaakt door plotselinge versnelling of vertraging (bijvoorbeeld bij een auto-ongeluk). Symptomen kunnen direct of vertraagd optreden: nekpijn, hoofdpijn, duizeligheid, concentratieproblemen.',
      how: 'Neurologisch-chiropractische behandeling helpt whiplash-klachten door de beschadigde wervels en gewrichten voorzichtig te mobiliseren, littekweefsel te verminderen, en het herstel van normale beweging te bevorderen. Vroege behandeling voorkomt chronische klachten.',
    },
    en: {
      title: 'Whiplash',
      what: 'Whiplash is a neck injury from sudden acceleration or deceleration — most commonly in car accidents. Symptoms include neck pain, headache, dizziness, and difficulty concentrating, and can appear days after the incident.',
      how: 'Gentle neuro-based chiropractic mobilisation of affected vertebrae and joints reduces scar tissue, relieves pain, and restores normal movement. Early treatment is key to preventing chronic symptoms.',
    },
  },
  'bovenrug-schouder': {
    nl: {
      title: 'Bovenrug & Schouder',
      what: 'Pijn in de bovenrug en schouders komt vaak voor bij kantoorwerk, stress, of slechte houding. Klachten kunnen uitstralen naar nek of armen en leiden tot hoofdpijn en vermoeidheid.',
      how: 'Neurologische chiropractie behandelt bovenrug- en schouderpijn door wervelkolom-correcties, mobilisatie van de schoudergewrichten, en het verminderen van spierspanning. Vaak gecombineerd met therapeutische massage voor optimaal resultaat.',
    },
    en: {
      title: 'Upper Back & Shoulder Pain',
      what: 'Pain between the shoulder blades and in the shoulders is common with desk work, stress, or poor posture. Complaints can radiate to the neck or arms and lead to headaches and fatigue.',
      how: 'Neuro-based chiropractic corrects spinal alignment, mobilises shoulder joints, and reduces muscle tension. Often combined with therapeutic massage for the best results.',
    },
  },
  'hoofdpijn-migraine': {
    nl: {
      title: 'Hoofdpijn en Migraine',
      what: 'Veel hoofdpijn en migraine heeft een cervicogene oorsprong: veroorzaakt door problemen in de nek en bovenrug. Symptomen variëren van doffe druk tot intense, bonzende pijn met misselijkheid en lichtgevoeligheid.',
      how: 'Neurologische chiropractie vermindert hoofdpijn door nekwervels te corrigeren, spierspanning te verlagen, en zenuwprikkeling te normaliseren. Studies tonen aan dat neurologische chiropractie effectief is bij chronische hoofdpijn en migraine.',
    },
    en: {
      title: 'Headache & Migraine',
      what: 'Many headaches have a cervicogenic origin — caused by problems in the neck and upper back. Migraines affect approximately 1 in 10 adults. Symptoms range from dull pressure to intense throbbing pain, nausea, and light sensitivity.',
      how: 'Neuro-based chiropractic corrects cervical vertebrae, lowers muscle tension, and normalises nerve function. Research shows neuro-based chiropractic is effective for chronic headaches and migraines.',
    },
  },
  'spanningshoofdpijn': {
    nl: {
      title: 'Spanningshoofdpijn',
      what: 'Spanningshoofdpijn voelt aan als een strakke band rond het hoofd en wordt vaak veroorzaakt door langdurige spierspanning in nek en schouders, stress, of verkeerde houding.',
      how: 'Door neurologisch-chiropractische correcties van de nekwervels en bovenrug, gecombineerd met massage en ontspanningstechnieken, wordt de onderliggende spierspanning effectief verminderd en de frequentie van hoofdpijn drastisch verlaagd.',
    },
    en: {
      title: 'Tension Headaches',
      what: 'Tension headaches feel like a tight band around the head and are often caused by prolonged muscle tension in the neck and shoulders, stress, or poor posture.',
      how: 'Neuro-based chiropractic corrections of the cervical vertebrae and upper back, combined with massage, effectively reduce the underlying muscle tension and lower headache frequency.',
    },
  },
  'zwangerschap': {
    nl: {
      title: 'Zwangerschap',
      what: 'Tijdens de zwangerschap ondergaat het lichaam grote veranderingen. Lage rugpijn, bekkenpijn, en ischias komen vaak voor door toegenomen gewicht, hormonale veranderingen, en verschuivingen in houding.',
      how: 'Neurologische chiropractie tijdens zwangerschap is veilig en effectief. Zachte correcties helpen het bekken in balans te houden, pijn te verminderen, en de bevalling te vergemakkelijken. Speciale behandeltafels en technieken worden gebruikt voor comfort en veiligheid.',
    },
    en: {
      title: 'Pregnancy-Related Pain',
      what: 'Hormonal changes, increased body weight, and postural shifts during pregnancy commonly cause lower back pain, pelvic instability, and sciatica. These symptoms can worsen as pregnancy progresses.',
      how: 'Neuro-based chiropractic during pregnancy is safe and effective. Gentle corrections balance the pelvis, reduce pain, and prepare the body for delivery. Special tables and techniques ensure comfort and safety.',
    },
  },
  'sportblessures': {
    nl: {
      title: 'Sportblessures',
      what: 'Sportblessures variëren van acute verwondingen (verstuikingen, scheuren) tot overbelasting-klachten (tennisarm, lopers-knie). Ze kunnen leiden tot pijn, bewegingsbeperking, en verminderde prestaties.',
      how: 'Neurologische chiropractie behandelt sportblessures door gewrichten te mobiliseren, ontstekingen te verminderen, en het herstel van weefsels te versnellen. Combinatie met revalidatie-oefeningen en adviezen voorkomt herhaling en verbetert prestaties.',
    },
    en: {
      title: 'Sports Injuries',
      what: "Sports injuries range from acute sprains and strains to chronic overuse complaints like tennis elbow or runner's knee. Small functional imbalances that aren't noticeable in daily life can cause repeated injuries.",
      how: 'Neuro-based chiropractic mobilises joints, reduces inflammation, and accelerates tissue recovery. A preventative approach can dramatically reduce injury rates and improve athletic performance.',
    },
  },
  'kinderen': {
    nl: {
      title: "Kinderen & Baby's",
      what: "Kinderen en baby's kunnen baat hebben bij chiropractie voor klachten zoals koliek, slaapproblemen, asymmetrische hoofdvorm, groei-pijnen, houdingsproblemen, en sportblessures.",
      how: 'Pediatrische neurologische chiropractie gebruikt zeer zachte, lage-kracht technieken die speciaal zijn aangepast voor jonge patiënten. Behandeling is veilig, effectief, en kan de ontwikkeling en gezondheid van kinderen aanzienlijk verbeteren.',
    },
    en: {
      title: 'Children & Infants',
      what: 'Children can develop musculoskeletal problems from falls, sports, or long hours sitting. Infants may experience complaints including colic, sleep problems, and asymmetrical posture. Recovery is typically faster than in adults.',
      how: 'Paediatric neuro-based chiropractic uses very gentle, low-force techniques adapted for young patients. Treatment is safe and effective for all ages. Neuro-based chiropractors have been treating children for over 100 years.',
    },
  },
  'artrose-slijtage': {
    nl: {
      title: 'Artrose / Slijtage',
      what: "Artrose is slijtage van gewrichtskraakbeen, vaak voorkomend in nek, rug, heupen en knieën. Symptomen zijn stijfheid, pijn, en verminderde mobiliteit, vooral 's ochtends of na inactiviteit.",
      how: 'Hoewel kraakbeen niet kan worden hersteld, helpt neurologische chiropractie de mobiliteit te behouden, pijn te verminderen, en verdere slijtage te vertragen door correcte gewrichtsuitlijning en beweging te bevorderen.',
    },
    en: {
      title: 'Arthrosis / Wear and Tear',
      what: 'Arthrosis is gradual wear of joint cartilage, most common in the neck, back, hips, and knees. Symptoms include stiffness, pain, and reduced mobility — especially in the morning or after periods of rest.',
      how: 'While cartilage cannot be restored, neuro-based chiropractic maintains mobility, reduces pain, and slows further deterioration through correct joint alignment and movement.',
    },
  },
  'ischias': {
    nl: {
      title: 'Ischias',
      what: 'Ischias is pijn die uitstraalt van de onderrug via de bil naar het been, veroorzaakt door irritatie of druk op de ischiaszenuw. Oorzaken kunnen zijn: hernia, bekken-dysfunctie, of spierverkorting.',
      how: 'Neurologische chiropractie behandelt ischias door de oorzaak aan te pakken: wervelkolom-correcties om zenuwdruk te verminderen, bekken-stabilisatie, en mobilisatie van gewrichten. Veel patiënten ervaren snelle verlichting.',
    },
    en: {
      title: 'Sciatica',
      what: 'Sciatica is pain radiating from the lower back through the buttock and down into the leg, caused by irritation or compression of the sciatic nerve — often from a herniated disc or pelvic dysfunction.',
      how: 'Neuro-based chiropractic addresses the root cause: spinal adjustments reduce nerve pressure, the pelvis is stabilised, and joints are mobilised. Many patients experience rapid relief.',
    },
  },
};

// ─── Booking widget ───────────────────────────────────────────────────────────
type BookingStep = 'calendar' | 'time' | 'details' | 'confirmed';

function BookingWidget() {
  const today = new Date();
  const [step, setStep] = useState<BookingStep>('calendar');
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const w = {
    steps: ['Select Date', 'Select Time', 'Your Details'],
    closedSunday: 'Clinic is closed on Sundays',
    selectDate: 'Select a date',
    selectTime: 'Select a time',
    availableSlots: 'Available time slots',
    continueDate: (d: string) => `Continue — ${d}`,
    continueTime: (s: string) => `Continue — ${s}`,
    contactDetails: 'Your contact details',
    nameLabel: 'Full Name *',
    emailLabel: 'Email Address *',
    phoneLabel: 'Phone Number *',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@example.com',
    phonePlaceholder: '06 ...',
    messageLabel: 'Message (optional)',
    messagePlaceholder: 'Any notes for the doctor...',
    submitError: 'Something went wrong. Please try again.',
    confirm: 'Confirm Appointment',
    confirmedTitle: 'Appointment Requested!',
    confirmedMsg: (name: string, phone: string) => `We will contact ${name} at ${phone} within a few hours to confirm.`,
    bookAnother: 'Book another appointment',
  };

  function prevMonth() {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
    setSelectedDay(null);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
    setSelectedDay(null);
  }

  function isPast(day: number) {
    const d = new Date(viewYear, viewMonth, day);
    d.setHours(23, 59, 59);
    return d < today;
  }
  function isDisabled(day: number) {
    return isPast(day) || isSunday(viewYear, viewMonth, day);
  }

  const selectedDate = selectedDay
    ? new Date(viewYear, viewMonth, selectedDay).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    : '';

  const timeSlots = selectedDay && isSaturday(viewYear, viewMonth, selectedDay)
    ? TIME_SLOTS_SATURDAY
    : TIME_SLOTS_WEEKDAY;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    const res = await fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: selectedDate, time: selectedTime, ...form }),
    });
    setIsSubmitting(false);
    if (res.ok) {
      setStep('confirmed');
    } else {
      setSubmitError(w.submitError);
    }
  }

  if (step === 'confirmed') {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center text-center gap-5">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">✓</div>
        <div>
          <h3 className="text-xl font-extrabold text-[#191919] mb-1">{w.confirmedTitle}</h3>
          <p className="text-[#403F3F] text-sm leading-relaxed">
            <span className="font-semibold text-[var(--accent)]">{selectedDate}</span> at <span className="font-semibold text-[var(--accent)]">{selectedTime}</span>
          </p>
          <p className="text-[#403F3F] text-sm mt-3">{w.confirmedMsg(form.name, form.phone)}</p>
        </div>
        <button
          onClick={() => { setStep('calendar'); setSelectedDay(null); setSelectedTime(null); setForm({ name: '', email: '', phone: '', message: '' }); }}
          className="text-[var(--accent)] text-sm font-semibold underline underline-offset-2"
        >
          {w.bookAnother}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Progress bar */}
      <div className="flex border-b border-[var(--accent)]/10">
        {(['calendar', 'time', 'details'] as BookingStep[]).map((s, i) => {
          const stepIdx = ['calendar', 'time', 'details'].indexOf(step);
          const done = i < stepIdx;
          const active = i === stepIdx;
          return (
            <div key={s} className={`flex-1 py-3 text-center text-xs font-semibold transition-colors ${active ? 'bg-[var(--accent)] text-white' : done ? 'bg-[var(--accent)]/10 text-[var(--accent)]' : 'text-[#403F3F]/50'}`}>
              <span className="inline-flex items-center gap-1.5">
                <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${active ? 'bg-white text-[var(--accent)]' : done ? 'bg-[var(--accent)] text-white' : 'bg-[#403F3F]/20 text-[#403F3F]'}`}>
                  {done ? '✓' : i + 1}
                </span>
                {w.steps[i]}
              </span>
            </div>
          );
        })}
      </div>

      <div className="p-6">
        {/* STEP 1: Calendar */}
        {step === 'calendar' && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <button onClick={prevMonth} className="w-8 h-8 rounded-full border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-colors">
                <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/></svg>
              </button>
              <span className="font-bold text-[#191919]">{MONTH_NAMES[viewMonth]} {viewYear}</span>
              <button onClick={nextMonth} className="w-8 h-8 rounded-full border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-colors">
                <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/></svg>
              </button>
            </div>
            <div className="grid grid-cols-7 mb-2">
              {DAY_NAMES.map((d, i) => (
                <div key={i} className={`text-center text-xs font-semibold py-1 ${i === 0 ? 'text-[#403F3F]/30' : 'text-[#403F3F]'}`}>{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const disabled = isDisabled(day);
                const selected = selectedDay === day;
                return (
                  <button
                    key={day}
                    disabled={disabled}
                    onClick={() => setSelectedDay(day)}
                    className={`aspect-square rounded-lg text-sm font-medium transition-colors
                      ${disabled ? 'opacity-30 cursor-not-allowed pointer-events-none' : ''}
                      ${selected ? 'bg-[var(--accent)] text-white font-bold' : ''}
                      ${!disabled && !selected ? 'hover:bg-[var(--accent)]/10 text-[#191919]' : ''}
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-[#403F3F]/60 mt-4 text-center">{w.closedSunday}</p>
            <button
              disabled={!selectedDay}
              onClick={() => setStep('time')}
              className="mt-5 w-full bg-[var(--accent)] text-white font-bold py-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--accent-dark)] transition-colors"
            >
              {selectedDay ? w.continueDate(`${MONTH_NAMES[viewMonth]} ${selectedDay}`) : w.selectDate}
            </button>
          </div>
        )}

        {/* STEP 2: Time slots */}
        {step === 'time' && (
          <div>
            <button onClick={() => setStep('calendar')} className="flex items-center gap-1.5 text-sm text-[var(--accent)] font-semibold mb-5 hover:opacity-75 transition-opacity">
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/></svg>
              {selectedDate}
            </button>
            <p className="text-sm font-semibold text-[#191919] mb-4">{w.availableSlots}</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {timeSlots.map(slot => (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`py-2.5 rounded-lg text-sm font-semibold border transition-colors
                    ${selectedTime === slot
                      ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                      : 'border-[var(--accent)]/20 text-[#403F3F] hover:border-[var(--accent)] hover:text-[var(--accent)]'
                    }`}
                >
                  {slot}
                </button>
              ))}
            </div>
            <button
              disabled={!selectedTime}
              onClick={() => setStep('details')}
              className="mt-6 w-full bg-[var(--accent)] text-white font-bold py-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--accent-dark)] transition-colors"
            >
              {selectedTime ? w.continueTime(selectedTime) : w.selectTime}
            </button>
          </div>
        )}

        {/* STEP 3: Contact details */}
        {step === 'details' && (
          <form onSubmit={handleSubmit}>
            <button type="button" onClick={() => setStep('time')} className="flex items-center gap-1.5 text-sm text-[var(--accent)] font-semibold mb-5 hover:opacity-75 transition-opacity">
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/></svg>
              {selectedDate} · {selectedTime}
            </button>
            <p className="text-sm font-semibold text-[#191919] mb-4">{w.contactDetails}</p>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#403F3F] uppercase tracking-wide block mb-1.5">{w.nameLabel}</label>
                <input required type="text" placeholder={w.namePlaceholder} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#F6F6F6] border border-[var(--accent)]/15 rounded-lg px-4 py-3 text-sm text-[#191919] placeholder-[#403F3F]/50 focus:outline-none focus:border-[var(--accent)] transition-colors" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#403F3F] uppercase tracking-wide block mb-1.5">{w.emailLabel}</label>
                <input required type="email" placeholder={w.emailPlaceholder} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#F6F6F6] border border-[var(--accent)]/15 rounded-lg px-4 py-3 text-sm text-[#191919] placeholder-[#403F3F]/50 focus:outline-none focus:border-[var(--accent)] transition-colors" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#403F3F] uppercase tracking-wide block mb-1.5">{w.phoneLabel}</label>
                <input required type="tel" placeholder={w.phonePlaceholder} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-[#F6F6F6] border border-[var(--accent)]/15 rounded-lg px-4 py-3 text-sm text-[#191919] placeholder-[#403F3F]/50 focus:outline-none focus:border-[var(--accent)] transition-colors" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#403F3F] uppercase tracking-wide block mb-1.5">{w.messageLabel}</label>
                <textarea rows={3} placeholder={w.messagePlaceholder} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#F6F6F6] border border-[var(--accent)]/15 rounded-lg px-4 py-3 text-sm text-[#191919] placeholder-[#403F3F]/50 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none" />
              </div>
            </div>
            <button type="submit" disabled={isSubmitting} className="mt-6 w-full bg-[var(--accent)] text-white font-bold py-3 rounded-full hover:bg-[var(--accent-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? '...' : w.confirm}
            </button>
            {submitError && <p className="mt-3 text-sm text-red-600 text-center">{submitError}</p>}
          </form>
        )}
      </div>
    </div>
  );
}

// ─── Main demo client ─────────────────────────────────────────────────────────
export default function DemoClient({ content }: { content: DemoContent }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showVoiceBot, setShowVoiceBot] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);
  const c = content;

  const accentStyle = { color: 'var(--accent)' };
  const svgIcons = [
    <svg key="neuro" viewBox="0 0 48 48" fill="none" className="w-10 h-10" style={accentStyle}><circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" /><path d="M16 24c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="24" cy="24" r="3" fill="currentColor" /></svg>,
    <svg key="acu" viewBox="0 0 48 48" fill="none" className="w-10 h-10" style={accentStyle}><path d="M14 10c2 6 4 10 4 18M20 10c1 8 2 12 2 18M26 28c0-6 1-10 2-18M32 28c0-8 2-12 4-18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><rect x="10" y="26" width="28" height="4" rx="2" fill="currentColor" fillOpacity=".15" stroke="currentColor" strokeWidth="1.5" /></svg>,
    <svg key="massage" viewBox="0 0 48 48" fill="none" className="w-10 h-10" style={accentStyle}><path d="M12 32c4-6 8-10 12-10s8 4 12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><ellipse cx="24" cy="18" rx="8" ry="6" stroke="currentColor" strokeWidth="2" /><circle cx="24" cy="18" r="2.5" fill="currentColor" /></svg>,
    <svg key="ortho" viewBox="0 0 48 48" fill="none" className="w-10 h-10" style={accentStyle}><path d="M10 32h28M14 32v-6a10 10 0 0 1 20 0v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M18 26c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" /></svg>,
  ];

  const condDetail = selectedCondition ? conditionDetails[selectedCondition] : null;
  const condContent = condDetail ? condDetail.en : null;

  return (
    <div
      className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-white`}
      style={{ '--accent': c.accentColor ?? '#45321A', '--accent-dark': c.accentColorDark ?? '#5a4228' } as React.CSSProperties}
    >

      {/* NAV */}
      <Navigation meta={c.meta} showPricing={c.showPricing !== false} logo={c.logo} />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/chiro-hero.mov" type="video/quicktime" />
          <source src="/chiro-hero.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 w-full">
          <div className="max-w-xl">
            <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 border border-white/20">
              {c.badge}
            </span>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-white mb-6">
              {c.h1[0]}<br />
              {c.h1[1]}<span className="text-[#c9a96e]">{c.h1[2]}</span><br />
              {c.h1[3]}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">{c.heroSub}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#booking" className="bg-[var(--accent)] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[var(--accent-dark)] transition-colors">{c.bookBtn}</a>
              <a href={c.meta.phoneHref} className="border-2 border-white text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors">{c.callBtn}</a>
            </div>

            <div className="mt-10 flex gap-10">
              {c.stats.map(({value: num, label}) => (
                <div key={label}>
                  <div className="text-2xl font-extrabold text-[#c9a96e]">{num}</div>
                  <div className="text-xs text-white/70 font-medium mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            {/* Social proof cluster */}
            <div className="mt-8 flex items-center gap-4">

              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-[#c9a96e]"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                  <span className="text-white font-bold ml-1 text-sm">{c.heroRating}</span>
                  {/* Google G */}
                  <svg viewBox="0 0 24 24" className="w-4 h-4 ml-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div className="text-white/70 text-xs mt-0.5">{c.heroReviewLabel}</div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[var(--accent)] text-sm font-semibold uppercase tracking-widest">{c.servicesLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-[#191919]">{c.servicesH2}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.services.map((s, i) => (
              <div key={s.title} className="bg-[#F6F6F6] rounded-2xl p-7 hover:shadow-md transition-shadow">
                <div className="mb-5">{svgIcons[i % svgIcons.length]}</div>
                <h3 className="font-bold text-[#191919] text-lg mb-2">{s.title}</h3>
                <p className="text-[#403F3F] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[var(--accent)]/5 border border-[var(--accent)]/15 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex-shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" fill="white" /></svg>
            </div>
            <div>
              <div className="font-bold text-[#191919]">{c.comboTitle}</div>
              <div className="text-sm text-[#403F3F] mt-0.5">{c.comboDesc}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="py-20 bg-[#F6F6F6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[var(--accent)] text-sm font-semibold uppercase tracking-widest">{c.conditionsLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-[#191919]">{c.conditionsH2}</h2>
            <p className="text-[#403F3F] mt-3 max-w-xl mx-auto">{c.conditionsDesc}</p>
            <p className="text-[var(--accent)] text-sm font-semibold mt-3">{c.conditionsClick}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {specialties.map((s) => (
              <button
                key={s.slug}
                onClick={() => setSelectedCondition(s.slug)}
                className="bg-white border border-[var(--accent)]/10 rounded-xl px-5 py-4 flex items-center gap-3 hover:border-[var(--accent)]/40 hover:shadow-sm hover:scale-[1.02] transition-all text-left cursor-pointer"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0" />
                <span className="text-sm font-medium text-[#403F3F]">{s.en}</span>
                <svg viewBox="0 0 20 20" className="w-4 h-4 flex-shrink-0 ml-auto fill-[var(--accent)]">
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                </svg>
              </button>
            ))}
          </div>
          <div className="mt-10 bg-white border-l-4 border-[var(--accent)] rounded-xl px-6 py-5 max-w-3xl mx-auto">
            <p className="text-[#403F3F] text-sm leading-relaxed">{c.conditionsNote}</p>
          </div>
        </div>
      </section>

      {/* THREE-PHASE APPROACH */}
      <section id="approach" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[var(--accent)] text-sm font-semibold uppercase tracking-widest">{c.approachLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-[#191919]">{c.approachH2}</h2>
            <p className="text-[#403F3F] mt-3 max-w-lg mx-auto">{c.approachDesc}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.phases.map((phase) => (
              <div key={phase.step} className="relative bg-[#F6F6F6] rounded-2xl p-8">
                <div className="text-6xl font-extrabold text-[var(--accent)]/10 absolute top-6 right-8 leading-none select-none">{phase.step}</div>
                <div className="text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-3">{c.phaseLabel} {phase.step}</div>
                <h3 className="text-xl font-extrabold text-[#191919] mb-3">{phase.title}</h3>
                <p className="text-[#403F3F] text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#403F3F] text-sm leading-relaxed mt-10 max-w-2xl mx-auto italic">{c.phasesNote}</p>
        </div>
      </section>

      {/* YOUR FIRST VISIT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[var(--accent)] text-sm font-semibold uppercase tracking-widest">{c.firstVisitLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-[#191919]">{c.firstVisitH2}</h2>
            <p className="text-[#403F3F] mt-3 max-w-2xl mx-auto">{c.firstVisitDesc}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.firstVisitSteps.map((item) => (
              <div key={item.step} className="bg-[#F6F6F6] rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[var(--accent)]/5 flex items-center justify-center">
                  <span className="text-xl font-extrabold text-[var(--accent)]">{item.step}</span>
                </div>
                <h3 className="font-bold text-[#191919] text-lg mb-2 pr-14">{item.title}</h3>
                <p className="text-[#403F3F] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      {c.showPricing !== false && <section id="pricing" className="py-20 bg-[#F6F6F6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[var(--accent)] text-sm font-semibold uppercase tracking-widest">{c.pricingLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-[#191919]">{c.pricingH2}</h2>
            <p className="text-[#403F3F] mt-3 max-w-2xl mx-auto">{c.pricingDesc}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[var(--accent)] text-white">
                  <tr>
                    <th className="text-left px-6 py-4 font-bold text-sm uppercase tracking-wide">{c.pricingHeaders[0]}</th>
                    <th className="text-right px-6 py-4 font-bold text-sm uppercase tracking-wide">{c.pricingHeaders[1]}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--accent)]/10">
                  {c.pricingRows.slice(0, 4).map(({treatment, price}) => (
                    <tr key={treatment} className="hover:bg-[var(--accent)]/5 transition-colors">
                      <td className="px-6 py-4 text-[#403F3F] text-sm">{treatment}</td>
                      <td className="px-6 py-4 text-right text-[#191919] font-bold text-sm">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-6 py-5 mb-4">
            <p className="text-[#403F3F] text-sm leading-relaxed">{c.pricingPackageNote}</p>
          </div>
          <div className="bg-[var(--accent)]/5 border border-[var(--accent)]/20 rounded-xl px-6 py-5 mb-8">
            <p className="text-[#403F3F] text-sm leading-relaxed">{c.paymentNote}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="white" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#191919] text-xl mb-3">{c.insuranceH3}</h3>
                <p className="text-[#403F3F] text-sm leading-relaxed mb-4">{c.insuranceP1}</p>
                <p className="text-[#403F3F] text-sm leading-relaxed mb-4">
                  <strong className="text-[#191919]">{c.insuranceP2}</strong>
                </p>
                <p className="text-sm">
                  <span className="text-[#403F3F]">{c.insuranceLinkPre} </span>
                  <a href={`https://${c.insuranceLink}`} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] font-semibold underline hover:text-[var(--accent-dark)] transition-colors">
                    {c.insuranceLink}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>}

      {/* CTA BANNER */}
      <section className="bg-[var(--accent)] py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{c.ctaH2}</h2>
          <p className="text-white/75 text-lg mb-8">{c.ctaP}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#booking" className="bg-white text-[var(--accent)] font-bold px-8 py-4 rounded-full text-sm hover:bg-[#F6F6F6] transition-colors">{c.ctaBook}</a>
            <a href={c.meta.phoneHref} className="border-2 border-white text-white font-bold px-8 py-4 rounded-full text-sm hover:bg-white/10 transition-colors">{c.ctaCall}</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div>
            <span className="text-[var(--accent)] text-sm font-semibold uppercase tracking-widest">{c.aboutLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-2 text-[#191919]">{c.aboutH2}</h2>
            <p className="text-[var(--accent)] font-semibold mb-5">{c.aboutSubtitle}</p>
            <p className="text-[#403F3F] leading-relaxed mb-4">{c.aboutP1}</p>
            <p className="text-[#403F3F] leading-relaxed mb-6">{c.aboutP2}</p>
            <div className="grid grid-cols-2 gap-5">
              {c.aboutStats.map(({value: n, label: l}) => (
                <div key={l} className="bg-[#F6F6F6] rounded-xl p-5">
                  <div className="text-2xl font-extrabold text-[var(--accent)]">{n}</div>
                  <div className="text-xs text-[#403F3F] font-medium mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 bg-[#F6F6F6] overflow-hidden">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <span className="text-[var(--accent)] text-sm font-semibold uppercase tracking-widest">{c.testimonialsLabel}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-[#191919]">{c.testimonialsH2}</h2>
          <div className="mt-5 inline-flex flex-col items-center gap-1">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" className="w-5 h-5 fill-[#c9a96e]"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
              <span className="text-[#191919] font-bold text-lg ml-1">{c.heroRating}</span>
              <svg viewBox="0 0 24 24" className="w-5 h-5 ml-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <span className="text-[#403F3F] text-sm">{c.reviewCount} Google Reviews</span>
          </div>
        </div>
        {/* Infinite marquee strip */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F6F6F6] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F6F6F6] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-6 animate-marquee" style={{ width: 'max-content' }}>
            {[...c.reviews, ...c.reviews].map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm flex-shrink-0 flex flex-col" style={{ width: '340px' }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-[var(--accent)]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#403F3F] text-sm leading-relaxed italic flex-1">&ldquo;{review.text}&rdquo;</p>
                <div className="font-semibold text-[#191919] text-sm mt-5">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[var(--accent)] text-sm font-semibold uppercase tracking-widest">{c.faqLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-[#191919]">{c.faqH2}</h2>
          </div>
          <div className="space-y-3">
            {c.faqs.map((faq, i) => (
              <div key={i} className="bg-[#F6F6F6] rounded-xl overflow-hidden border border-[var(--accent)]/10">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-[#191919] hover:bg-[var(--accent)]/5 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`ml-4 flex-shrink-0 w-6 h-6 rounded-full border-2 border-[var(--accent)] flex items-center justify-center transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>
                    <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" style={accentStyle}>
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-[#403F3F] text-sm leading-relaxed border-t border-[var(--accent)]/10 pt-4">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-20 bg-[#F6F6F6]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-[var(--accent)] text-sm font-semibold uppercase tracking-widest">{c.bookingLabel}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6 text-[#191919]">{c.bookingH2}</h2>
            <p className="text-[#403F3F] leading-relaxed mb-8">{c.bookingDesc}</p>
            <div className="space-y-5">
              {c.bookingInfo.map(({ label, value }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 text-[var(--accent)] text-xs font-bold">
                    {label[0]}
                  </div>
                  <div>
                    <div className="text-xs text-[#403F3F] font-semibold uppercase tracking-wide">{label}</div>
                    <div className="text-[#191919] font-medium mt-0.5">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <BookingWidget />
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      {c.meta.whatsapp && (
        <a
          href={c.meta.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#25D366] text-white font-semibold pl-4 pr-5 py-3.5 rounded-full shadow-xl hover:bg-[#1ebe5d] transition-all hover:scale-105 active:scale-95"
        >
          <span className="relative flex-shrink-0">
            <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
            <svg viewBox="0 0 24 24" className="relative w-5 h-5" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </span>
          <span className="text-sm">WhatsApp</span>
        </a>
      )}

      {/* VOICE BOT MODAL */}
      <ChiroVoiceBot isOpen={showVoiceBot} onClose={() => setShowVoiceBot(false)} />

      {/* CONDITION DETAILS MODAL */}
      {selectedCondition && condContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4" onClick={() => setSelectedCondition(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-[var(--accent)] text-white px-8 py-6 rounded-t-2xl flex items-center justify-between">
              <h2 className="text-2xl font-extrabold">{condContent.title}</h2>
              <button onClick={() => setSelectedCondition(null)} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                <svg viewBox="0 0 20 20" className="w-5 h-5 fill-white"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/></svg>
              </button>
            </div>
            <div className="px-8 py-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" style={accentStyle} stroke="currentColor" strokeWidth="2"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 className="font-bold text-[#191919] text-lg">{c.modalWhat}</h3>
                </div>
                <p className="text-[#403F3F] leading-relaxed text-sm">{condContent.what}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" style={accentStyle} stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 className="font-bold text-[#191919] text-lg">{c.modalHow}</h3>
                </div>
                <p className="text-[#403F3F] leading-relaxed text-sm">{condContent.how}</p>
              </div>
              <div className="bg-[#F6F6F6] rounded-xl px-6 py-6 mt-6">
                <p className="text-[#403F3F] text-sm mb-4 text-center">{c.modalCta.replace('{title}', condContent.title.toLowerCase())}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="#booking" onClick={() => setSelectedCondition(null)} className="bg-[var(--accent)] text-white font-semibold px-6 py-3 rounded-full hover:bg-[var(--accent-dark)] transition-colors text-center text-sm">{c.modalBook}</a>
                  <a href={c.meta.phoneHref} className="border-2 border-[var(--accent)] text-[var(--accent)] font-semibold px-6 py-3 rounded-full hover:bg-[var(--accent)]/5 transition-colors text-center text-sm">{c.modalCall}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer meta={c.meta} />
    </div>
  );
}
