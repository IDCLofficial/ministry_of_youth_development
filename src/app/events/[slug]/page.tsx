import Image from "next/image";
import ReadySection from "../../news/ReadySection";
import Footer from "../../components/Footer";

const event = {
  title: "Imo Digital Youth Summit 2025",
  img: "/images/initiatives.png",
  date: "30 May 2025",
  time: "8:00 am - 5:00 pm",
  organizer: "Imo Digital Limited",
  phone: "0809 8892 900",
  address: "Owerri Tech Innovation Hub",
  description:
    "Lorem ipsum dolor sit amet consectetur. Senectus a praesent nunc elit commodo ut maecenas volutpat sed. Orci purus a convallis consectetur sed morbi massa feugiat ipsum. Massa pellentesque a viverra molestie donec. Enim tincidunt commodo ac cursus. Tellus arcu et vel neque urna. In vestibulum tellus ullamcorper suspendisse et. Est habitant sollicitudin lacus lorem pellentesque ut. Pellentesque nibh ornare interdum blandit sagittis commodo. Elementum amet ipsum ac cras neque. Amet aliquam elementum amet eget ac leo sem pellentesque. Eget aliquam vestibulum accumsan nisi vitae commodo cras convallis. Mauris massa tellus sollicitudin volutpat sagittis scelerisque id est amet. Sit venenatis vitae ut libero aliquet.",
};

const speakers = Array(4).fill({
  name: "JAPHET GILBERT",
  role: "Lead Speaker",
  img: "/images/commissioner2.png",
});

function Countdown() {
  // Static mockup for now
  return (
    <div className="bg-green-700 text-white rounded-lg px-8 py-4 flex gap-6 items-center text-center w-max mt-4 mb-6 md:mb-0 md:absolute md:bottom-6 md:right-10 shadow-lg">
      <div>
        <div className="text-2xl font-bold">12</div>
        <div className="text-xs uppercase">Days</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div>
        <div className="text-2xl font-bold">54</div>
        <div className="text-xs uppercase">Hours</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div>
        <div className="text-2xl font-bold">36</div>
        <div className="text-xs uppercase">Minutes</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div>
        <div className="text-2xl font-bold">48</div>
        <div className="text-xs uppercase">Seconds</div>
      </div>
    </div>
  );
}

export default function EventDetailPage() {
  return (
    <div className="bg-white">
      {/* Hero Title */}
      <section className="relative w-full h-[220px] flex items-center justify-center bg-gradient-to-br from-green-900/80 to-black/80">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center z-10">{event.title}</h1>
      </section>
      {/* Event Image & Countdown */}
      <section className="relative w-full max-w-6xl mx-auto flex flex-col items-center pt-10 pb-6 px-4">
        <div className="w-full max-w-4xl relative">
          <Image src={event.img} alt={event.title} width={1200} height={500} className="rounded-xl object-cover w-full h-[340px]" />
          <div className="md:absolute md:bottom-6 md:right-10">
            <Countdown />
          </div>
        </div>
        <p className="text-gray-700 mt-8 mb-8 text-center max-w-3xl mx-auto">{event.description}</p>
      </section>
      {/* Event Details */}
      <section className="w-full max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-xl font-bold mb-4">EVENT DETAILS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
          <div><span className="font-semibold">DATE:</span> <span className="ml-2">{event.date}</span></div>
          <div><span className="font-semibold">ORGANIZER:</span> <span className="ml-2">{event.organizer}</span></div>
          <div><span className="font-semibold">ADDRESS:</span> <span className="ml-2">{event.address}</span></div>
          <div><span className="font-semibold">TIME:</span> <span className="ml-2">{event.time}</span></div>
          <div><span className="font-semibold">PHONE:</span> <span className="ml-2">{event.phone}</span></div>
        </div>
      </section>
      {/* Speakers */}
      <section className="w-full max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-xl font-bold mb-6">SPEAKERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((sp, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow p-4">
              <div className="w-40 h-48 relative mb-3 rounded-lg overflow-hidden">
                <Image src={sp.img} alt={sp.name} fill className="object-cover" />
              </div>
              <span className="text-green-700 font-semibold text-xs mb-1">{sp.role}</span>
              <span className="font-bold text-lg text-center">{sp.name}</span>
            </div>
          ))}
        </div>
      </section>
      <ReadySection />
      <Footer />
    </div>
  );
} 