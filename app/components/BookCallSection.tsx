import IClosedEmbed from './IClosedEmbed';
import { ScrollFadeIn } from './ScrollAnimations';

// Full-width "book your call" block: small eyebrow + headline above a wide iClosed embed.
// The embed needs ~1000px+ width for iClosed's side-by-side form + calendar layout.
export default function BookCallSection({ id }: { id?: string }) {
    return (
        <section id={id} className="-scroll-mt-20 px-4 py-[clamp(80px,12vh,140px)]">
            <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-[clamp(40px,6vh,72px)]">
                <ScrollFadeIn direction="up" duration={0.8}>
                    <div className="flex flex-col items-center gap-4 text-center">
                        <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
                            Book your call
                        </span>
                        <h2 className="text-3xl md:text-5xl font-sans font-medium text-white -tracking-[0.03em]">
                            Claim A <span className="accent-serif">Seat</span>
                        </h2>
                    </div>
                </ScrollFadeIn>
                <IClosedEmbed className="self-stretch" />
            </div>
        </section>
    );
}
