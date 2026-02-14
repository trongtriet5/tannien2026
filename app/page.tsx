import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CountdownTimer from '@/components/CountdownTimer';
import Timeline from '@/components/Timeline';
import EventPlan from '@/components/EventPlan';
import Location from '@/components/Location';

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <HeroSection />
      <div id="countdown"><CountdownTimer /></div>
      {/* <div id="schedule"><Timeline /></div>
      <div id="activities"><EventPlan /></div>
      <div id="venue"><Location /></div> */}

      {/* Footer */}
      {/* <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="container text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-2">
            Thịnh Thế Vinh Hoa
          </p>
          <div className="w-8 h-px bg-stone-700 mx-auto my-6" />
          <p className="text-xs text-stone-600">
            &copy; 2026 Thịnh Thế Vinh Hoa
          </p>
        </div>
      </footer> */}
    </main>
  );
}
