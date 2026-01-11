import { Project } from './types';

/* =======================
   VIDEO IMPORTS (o‘zgarmadi)
======================= */
import StudioPr from './assets/works/VIDEO/studioPrV.mp4';
import muhiddinTour from './assets/works/VIDEO/muhiddinAka.mp4';
import sardorAka from './assets/works/VIDEO/sardorAka.mp4';
import expertDoktor from './assets/works/VIDEO/expertDoktor.mp4';
import proxMedia from './assets/works/VIDEO/proxMedia.mp4';
import maxsumaOpa from './assets/works/VIDEO/maxsumaOpa.mp4';
import alisherAka from './assets/works/VIDEO/alisherAka.mp4';
import shaxRep from './assets/works/VIDEO/shaxRep.mp4';
import GPT_JIGAR from './assets/works/VIDEO/GPT_JIGAR.mp4';
import farruhAka from './assets/works/VIDEO/farruhAka.mp4';
import porsche911 from './assets/works/VIDEO/porsche911.mp4';
import makimaOpa from './assets/works/VIDEO/makimaOpa.mp4';
import himenoOpa from './assets/works/VIDEO/Dead_Himeno.mp4';
import sadeRitser from './assets/works/VIDEO/sadeRitser.mp4';
import porsche from './assets/works/VIDEO/porsche.mp4';

/* =======================
   IMAGE IMPORTS (MUHIM)
======================= */
import studioPrImg from './assets/works/IMG/studioPr.png';
import muhiddinImg from './assets/works/IMG/muhiddinTour.png';
import sardorImg from './assets/works/IMG/sardorAka.png';
import expertImg from './assets/works/IMG/expertDoktor.png';
import maxsumaImg from './assets/works/IMG/maxsumOpa.png';
import proxMediaImg from './assets/works/IMG/proxMedia.png';
import alisherImg from './assets/works/IMG/alisherAka.png';
import shaxriyorImg from './assets/works/IMG/shaxriyor.png';
import farruhImg from './assets/works/IMG/farruhAka.png';
import chatGptImg from './assets/works/IMG/chatGpt.png';
import porsche911Img from './assets/works/IMG/porsche911.png';
import makimaImg from './assets/works/IMG/makimaOpa.png';
import himenoImg from './assets/works/IMG/himenoOpa.png';
import ritserImg from './assets/works/IMG/ritserOpa.png';
import porscheImg from './assets/works/IMG/porsche.png';

/* =======================
   PROJECTS
======================= */
export const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'studiopr.uz',
        category: 'Motion',
        thumbnail: studioPrImg,
        videoUrl: StudioPr,
        description: 'Motion Edit Made in After Effects for the studiopr.uz Instagram page.',
    },
    {
        id: 2,
        title: 'muhiddin_otkurov',
        category: 'Motion',
        thumbnail: muhiddinImg,
        videoUrl: muhiddinTour,
        description: 'Motion Edit Made in After Effects for the Instagram page muhiddin_otkurov.',
    },
    {
        id: 3,
        title: 'Sardor Xudoyberdiyev',
        category: 'Motion',
        thumbnail: sardorImg,
        videoUrl: sardorAka,
        description: 'Motion Edit Made in After Effects for Sardor Khudoyberdiev Instagram Page.',
    },
    {
        id: 4,
        title: 'Personal brand',
        category: 'Motion',
        thumbnail: expertImg,
        videoUrl: expertDoktor,
        description: 'Motion Edit Made in After Effects for a Medical Expert Instagram Page.',
    },
    {
        id: 5,
        title: 'maxsuma_ashirmetova',
        category: 'Motion',
        thumbnail: maxsumaImg,
        videoUrl: maxsumaOpa,
        description: 'Motion Edit Made in After Effects for Maxsuma Ashirmetova Instagram Page.',
    },
    {
        id: 6,
        title: 'proxmedia.uz',
        category: 'Motion',
        thumbnail: proxMediaImg,
        videoUrl: proxMedia,
        description: 'Motion Edit Made in After Effects for proxmedia.uz Instagram Page.',
    },
    {
        id: 7,
        title: 'alisherturapovv',
        category: 'Motion',
        thumbnail: alisherImg,
        videoUrl: alisherAka,
        description: 'Motion Edit Made in After Effects for alisherturapovv Instagram Page.',
    },
    {
        id: 8,
        title: 'shaxriyor_rep_official',
        category: 'Flayer',
        thumbnail: shaxriyorImg,
        videoUrl: shaxRep,
        description: 'Motion Edit Made in After Effects for shaxriyor_rep_official Instagram Page.',
    },
    {
        id: 9,
        title: 'farrukhsaliev_',
        category: 'Motion',
        thumbnail: farruhImg,
        videoUrl: farruhAka,
        description: 'Motion Edit Made in After Effects for farrukhsaliev_ Instagram Page.',
    },
    {
        id: 10,
        title: 'Open Ai',
        category: 'Motion',
        thumbnail: chatGptImg,
        videoUrl: GPT_JIGAR,
        description: 'Motion Edit Made in After Effects for ChatGPT.',
    },
    {
        id: 11,
        title: 'Porsche 911 GT3 RS',
        category: 'Ai Video',
        thumbnail: porsche911Img,
        videoUrl: porsche911,
        description: 'AI video generation using Nano Banana and Google Veo 3.1.',
    },
    {
        id: 12,
        title: 'Chainsaw Man "Makima"',
        category: 'Ai Video',
        thumbnail: makimaImg,
        videoUrl: makimaOpa,
        description: '2D MAPPA style AI video generation made using Nano Banana and Sora 2.',
    },
    {
        id: 13,
        title: 'Chainsaw Man "Himeno"',
        category: 'Ai Video',
        thumbnail: himenoImg,
        videoUrl: himenoOpa,
        description: '2D MAPPA style AI video generation made using Nano Banana and Sora 2.',
    },
    {
        id: 14,
        title: 'Female Knight in Battle',
        category: 'Ai Video',
        thumbnail: ritserImg,
        videoUrl: sadeRitser,
        description: 'AI video generation using Nano Banana and Google Veo 3.1.',
    },
    {
        id: 15,
        title: 'Porsche 911 GT3 RS',
        category: 'Ai Video',
        thumbnail: porscheImg,
        videoUrl: porsche,
        description: 'AI video generation using Nano Banana and Google Veo 3.1.',
    },
];

export const TOOLS = [
    {
        id: 1,
        title: 'Inertial Bounce',
        category: 'Expression',
        description:
            'Add organic bounce to position, scale, or rotation with zero keyframes. Customizable decay and frequency.',
        price: 'Free',
        previewUrl:
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        codeSnippet: `amp = .1; freq = 2.0; decay = 2.0;
n = 0;
if (numKeys > 0){
  n = nearestKey(time).index;
  if (key(n).time > time){n--;}
}
if (n == 0){ t = 0; }
else{ t = time - key(n).time; }
if (n > 0 && t < 1){
  v = velocityAtTime(key(n).time - thisComp.frameDuration/10);
  value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);
}else{value}`,
    },
    {
        id: 2,
        title: 'dark Panel',
        category: 'Plugin',
        description:
            'Professional CEP EXTENSION with ready-made text animations, effects, transitions and Curves.',
        price: '$49',
        previewUrl:
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        codeSnippet: null,
    },
    {
        id: 3,
        title: 'Auto-Crop',
        category: 'Script',
        description:
            'Automatically crops the composition duration to the selected layers or active work area.',
        price: 'Free',
        previewUrl:
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        codeSnippet: `app.beginUndoGroup("Auto Crop");
var comp = app.project.activeItem;
if (comp && comp instanceof CompItem) {
    comp.workAreaDuration = comp.duration;
}
app.endUndoGroup();`,
    },
    {
        id: 4,
        title: 'LoopMaster',
        category: 'Expression',
        description:
            'The ultimate loop expression that handles cycle, pingpong, and offset with a single checkbox controller.',
        price: '$5',
        previewUrl:
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        codeSnippet: `// Smart Loop v2.0
var loopType = "cycle";
try {
    if (effect("PingPong?")("Checkbox") == 1) {
        loopType = "pingpong";
    }
    loopOut(loopType);
} catch(err) {
    loopOut("cycle");
}`,
    },
];

export const SYSTEM_INSTRUCTION = `You are "darken Ai", the intelligent assistant for the portfolio website of darken.
Your goal is to answer visitor questions about darken's work, skills, and availability.

Facts about darken:
- Experience: 2 years in Video Editing and Motion Design.
- Expertise: Motion Design, AI Video/Image Generation, Tool Development.
- Special Skills: Creating crazy images and videos using AI.
- Technical Skills: Created a custom Plugin for Adobe After Effects, writes complex expressions.
- Hobbies: Frontend programming (React, TypeScript).
- Tools: After Effects, Premiere Pro, DaVinci Resolve, Generative AI models.
- Location: Based in New York, open to remote freelance.
- Rates: Open to discussion based on project scope.
- Availability: Currently booking for next month.

Tone: Creative, tech-savvy, enthusiastic, and helpful.
If asked about coding, mention his passion for Frontend development and AE scripting.
If someone wants to hire darken, suggest they use the contact form or email darkenae2005@gmail.com directly.
`;
