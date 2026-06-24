export interface FundedTrader {
    name: string;
    handle: string;
    avatar: string;
    text: string;
    certImage: string; // Primary certificate (for backwards compatibility)
    highestCertImage?: string; // Highest-value certificate shown on cards
    certificates?: string[]; // Multiple certificates (optional)
    payout?: string;
    is1o1Student?: boolean; // Flag to identify 1-on-1 students
}

// 1-on-1 Students - Featured prominently
export const oneOnOneStudents: FundedTrader[] = [
    {
        name: "Tom",
        handle: "@t0mbfx",
        avatar: "/1o1Students/1. Name_ Tom/pfp.jpg",
        text: "I came to David after getting some payouts but struggling with consistency a thing I think a lot of people struggle with. After discussing what my issues were and identifying a clear plan on how we are going to correct them David helped me gain consistency in the markets and I have been able to get multiple 6 figures in payouts. The main thing is sticking to the plan he gave me and making sure to attend all the calls and doing the journalling which I think is the most important part looking back on it now. This allows David to cover what you are doing well and also what to improve on in each weekly call. I would definitely recommend this to anyone!",
        certImage: "/1o1Students/1. Name_ Tom/certficate 1.jpeg",
        highestCertImage: "/1o1Students/1. Name_ Tom/certficate 1.jpeg", // $262k - highest payout
        certificates: [
            "/1o1Students/1. Name_ Tom/certficate 1.jpeg",  // $262k ← shown first
            "/1o1Students/1. Name_ Tom/certificate 3.jpeg", // $116k
            "/1o1Students/1. Name_ Tom/certificate 2.jpeg", // other
            "/1o1Students/1. Name_ Tom/certificate 4.jpeg", // $17k  ← shown last
        ],
        payout: "$198,076.77",
        is1o1Student: true
    },
    {
        name: "Saim",
        handle: "@saim123",
        avatar: "/1o1Students/2. Name_ Saim/pfp.jpg",
        text: "1o1 sessions with david and him playing building my personal playbook transformed my trading. I went from a break-even burnt out trader to 5 figures a month",
        certImage: "/1o1Students/2. Name_ Saim/certificate 2.webp",
        highestCertImage: "/1o1Students/2. Name_ Saim/certificate 2.webp", // highest payout cert
        certificates: [
            "/1o1Students/2. Name_ Saim/certificate 2.webp",
            "/1o1Students/2. Name_ Saim/certificate 1.webp"
        ],
        payout: "$198,076.77",
        is1o1Student: true
    },
    {
        name: "Dragos",
        handle: "@dbdragos1",
        avatar: "/1o1Students/3. Name_ Dragos/pfp.webp",
        text: "The psychology aspect changed everything. I used to give back profits immediately. Now I have a playbook that protects me from myself. The results speak for themselves.",
        certImage: "/1o1Students/3. Name_ Dragos/certificate 4.webp",
        highestCertImage: "/1o1Students/3. Name_ Dragos/certificate 4.webp", // highest payout cert
        certificates: [
            "/1o1Students/3. Name_ Dragos/certificate 4.webp",
            "/1o1Students/3. Name_ Dragos/certificate 3.jpeg",
            "/1o1Students/3. Name_ Dragos/certificate 2.jpeg",
            "/1o1Students/3. Name_ Dragos/certificate 1.jpeg"
        ],
        is1o1Student: true
    },
];

// Funded Traders from designer assets
export const fundedTraders: FundedTrader[] = [
    {
        name: "Trent",
        handle: "@masterycapital_",
        avatar: "/testimonials_academy/1 - name_ trent/pfp.png",
        text: "150K account passed with Tradeify. (+3R)\n\nAsia sweep, accumulation , expansion.\nExecution based on confirmation, risk managed.",
        certImage: "/testimonials_academy/1 - name_ trent/certificate.png"
    },
    {
        name: "Deividas",
        handle: "@deividasru",
        avatar: "/testimonials_academy/2 - name_ deividas/pfp.png",
        text: "Closed out a +21R week.\n\nIndices almost feel illegal right now, just hoping to maintain this level of performance and strike rate. on a $50k for now, gonna scale slowly with a few lucid accounts.",
        certImage: "/testimonials_academy/2 - name_ deividas/certificate.png"
    },
    {
        name: "Saim",
        handle: "@saim27",
        avatar: "/testimonials_academy/3 - name_ saim/pfp.png",
        text: "$7,200 payout with Lucid.\n\nBeen on indices for a while now. Trades feel a lot cleaner lately.",
        certImage: "/testimonials_academy/3 - name_ saim/certificate.png"
    },
    {
        name: "Rado",
        handle: "@radulitu",
        avatar: "/testimonials_academy/4 - name_ rado/pfp.png",
        text: "500k allocation since joining SZN Academy.\n\nJoining the Academy was the best decision I made. Was stuck in forex for ages. Within a couple of weeks, with David, the coaches and psychology sessions, it all clicked.",
        certImage: "/testimonials_academy/4 - name_ rado/certificate.png"
    },
    {
        name: "Phil",
        handle: "@phiiil7",
        avatar: "/testimonials_academy/5 - name_ phil/pfp.png",
        text: "Topstep combine passed.\n\nWorking on keeping risk fixed and refining execution when price moves fast. Feeling a lot more structured and consistent with how I approach trades now.",
        certImage: "/testimonials_academy/5 - name_ phil/certificate.png"
    },
    {
        name: "Tom",
        handle: "@john123b",
        avatar: "/testimonials_academy/6 - name_ tom/pfp.png",
        text: "",
        certImage: "/testimonials_academy/6 - name_ tom/certificate-1.png",
        certificates: [
            "/testimonials_academy/6 - name_ tom/certificate-1.png",
            "/testimonials_academy/6 - name_ tom/certificate-2.png",
            "/testimonials_academy/6 - name_ tom/certificate-3.png",
            "/testimonials_academy/6 - name_ tom/certificate-4.png"
        ]
    },
    {
        name: "Dragos",
        handle: "@dbdragos1",
        avatar: "/testimonials_academy/7 - name_ dragos/pfp.jpg",
        text: "Switching from fx was the right call. Took some weeks to adapt to NQ but is much cleaner \n\n$7,890 payout, so far this month.\n\nAiming for the second one before month end. Transition from FX to NQ was easier than expected.",
        certImage: "/testimonials_academy/7 - name_ dragos/certificate.png"
    },
    {
        name: "Pheonix",
        handle: "@whoisyouu",
        avatar: "/testimonials_academy/8 - name_ pheonix/pfp.png",
        text: "Confidence is coming back strong.\n\nStill adapting to David’s model but it’s already filtering out a lot of the bad entries I used to take. BE for now, but my trades of weeks my trades have been aligned.",
        certImage: "/testimonials_academy/8 - name_ pheonix/certificate.png"
    },
    {
        name: "J",
        handle: "@j.z.l",
        avatar: "/testimonials_academy/9 - name_ j/pfp.png",
        text: "4x50k evals passed in two weeks.\n\nFirst month live on NQ after switching from FX. My progress has come from eliminating low quality trades week on week and staying accountable to the process",
        certImage: "/testimonials_academy/9 - name_ j/certificate.png"
    },
    {
        name: "nx",
        handle: "@nx",
        avatar: "/funded_traders/1 - name_ nx/pfp.webp",
        text: "",
        certImage: "/funded_traders/1 - name_ nx/certificate.jpg",
    },
    {
        name: "Ruben",
        handle: "@Ruben",
        avatar: "/funded_traders/2 - name_ Ruben/pfp.webp",
        text: "@david thanks for such great quality knowledge you share, simply the best 🫡",
        certImage: "/funded_traders/2 - name_ Ruben/certificate.jpg",
    },
    {
        name: "tdemy",
        handle: "@tdemy",
        avatar: "/funded_traders/3 - name_ tdemy/pfp.webp",
        text: "",
        certImage: "/funded_traders/3 - name_ tdemy/certificate.webp",
    },
    {
        name: "svjdavid",
        handle: "@svjdavid",
        avatar: "/funded_traders/4 - name_ svjdavid/pfp.webp",
        text: "Without David I wouldn't be where I am today. Big thank you ❤️",
        certImage: "/funded_traders/4 - name_ svjdavid/certificate.webp",
    },
    {
        name: "sk",
        handle: "@sk",
        avatar: "/funded_traders/5 - name_ sk/pfp.webp",
        text: "",
        certImage: "/funded_traders/5 - name_ sk/certificate.webp",
    },
    {
        name: "marlon",
        handle: "@marlon",
        avatar: "/funded_traders/6 - name_ marlon/pfp.webp",
        text: "First payout since a longer span of time and also my biggest one so far. First fucking time i feel like its not just from a series of lucky trades, but rather from a pretty consistent approach in the market.\n\nHalfway through the bootcamp and already having such an achievement just shows how great this bootcamp is structured, thanks alot!",
        certImage: "/funded_traders/6 - name_ marlon/certificate.webp",
    },
    {
        name: "os",
        handle: "@os",
        avatar: "/funded_traders/7 - name_ os/pfp.webp",
        text: "",
        certImage: "/funded_traders/7 - name_ os/certificate.webp",
    },
    {
        name: "jorge",
        handle: "@jorge",
        avatar: "/funded_traders/8 - name_ jorge/pfp.webp",
        text: "",
        certImage: "/funded_traders/8 - name_ jorge/certificate.webp",
    },
    {
        name: "canse",
        handle: "@canse",
        avatar: "/funded_traders/9 - name_ canse/pfp.webp",
        text: "fill the bags baby💰",
        certImage: "/funded_traders/9 - name_ canse/certificate.jpg",
    },
    {
        name: "ivan",
        handle: "@ivan",
        avatar: "/funded_traders/10 - name_ ivan/pfp.webp",
        text: "First ever profit split🤩",
        certImage: "/funded_traders/10 - name_ ivan/certificate.webp",
    },
    {
        name: "micutron",
        handle: "@micutron",
        avatar: "/funded_traders/11 - name_ micutron/pfp.webp",
        text: "",
        certImage: "/funded_traders/11 - name_ micutron/certificate.webp",
    },
    {
        name: "alex",
        handle: "@alex",
        avatar: "/funded_traders/12 - name_ alex/pfp.webp",
        text: "Before the bootcamp I was a good analyst but a bad trader as I never knew when to actually execute/ was not confident in executing. So the only thing missing was the last part (which actually makes you a trader). Especially the case studies where David explained in live time what he wants to see to execute helped me a ton.",
        certImage: "/funded_traders/12 - name_ alex/certificate.jpg",
    },
    {
        name: "J1M",
        handle: "@J1M",
        avatar: "/funded_traders/13 - name_ J1M/pfp.webp",
        text: "Bootcamp coming in HOT",
        certImage: "/funded_traders/13 - name_ J1M/certificate.webp",
    },
    {
        name: "flau",
        handle: "@flau",
        avatar: "/funded_traders/14 - name_ flau/pfp.webp",
        text: "I've been here for approximately 1 year, my journey with fx trading started with david and his 4 step protocol. I thought I need to find someone who has a real system with real outcomes, whys and hows, as an engineer minded person I hardly get any other trading systems out there except this one. it has been a good journey, and it will be much better, thanks david",
        certImage: "/funded_traders/14 - name_ flau/certificate.jpeg",
    },
    {
        name: "Alex",
        handle: "@Alex",
        avatar: "/funded_traders/15 - name_ Alex/pfp.webp",
        text: "Im just here for the cap. But, without @david none of this would have been possible. So, thank you. Would recommend the cord, 10/10.",
        certImage: "/funded_traders/15 - name_ Alex/certificate.webp",
    },
];

// Combined array with 1o1 students featured first
export const allTraders: FundedTrader[] = [...oneOnOneStudents, ...fundedTraders];
