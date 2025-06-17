import { Header } from "@/components/Header";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#cbd2c6] text-foreground flex flex-col items-center p-4 sm:p-8">
      {/* Main Container */}
      <div className="w-full max-w-[902px] mx-auto flex flex-col gap-[34px]">
        
        {/* Header Section */}
        <Card className="w-full">
          <CardContent className="p-0">
            <div className="flex flex-row items-center justify-between p-6 font-mono text-[16px] tracking-[-0.8px] text-[#404b51]">
              <div className="leading-[16px]">
                <p className="text-[#5e7c72] mb-0">ELSEWHERE</p>
                <p className="mb-0">&nbsp;</p>
                <p className="mb-0">ABOUT ZIFF</p>
                <p className="mb-0">BLOG</p>
                <p className="mb-0">LINKEDIN</p>
              </div>
              <div className="leading-[16px]">
                <p className="text-[#5e7c72] mb-0">CONTACT</p>
                <p className="mb-0">&nbsp;</p>
                <p className="mb-0">ZIFF.LAU@GMAIL.COM</p>
                <p className="mb-0">+9322 7317</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Container */}
        <div className="flex flex-col gap-[60px]">
          
          {/* Intro Section */}
          <div className="flex flex-row gap-[38px] items-center">
            <Card className="w-[432px] h-[436px] bg-white">
              <CardContent className="p-[49px] flex flex-col justify-between h-full">
                <div className="font-mono text-[16px] tracking-[-0.8px] text-[#404b51]">
                  <p className="leading-[16px]">_INTRO</p>
                </div>
                <div className="font-bold text-[20px] tracking-[-1px] text-[#404b51]">
                  <p className="leading-[22px]">
                    <span className="font-bold">ZIFF LAU</span><br />
                    <span className="font-normal">LIKES HATS</span>
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="w-[432px] h-[436px] bg-[#d9d9d9] rounded-[15px] flex items-center justify-center">
              <span className="text-gray-600">[Image Placeholder]</span>
            </div>
          </div>

          {/* About Section */}
          <div className="text-[#323e45] text-[30px] leading-normal">
            <p className="mb-4">My salaryman days began in advertising. A discipline that taught me the value of narrative precision, the power of productive tension, and a religious belief that there's always space for tongues in cheeks.</p>
            <p className="mb-4">This mindset became my OS and has informed every subsequent endeavor: from framing consumer mindsets and articulating the future of industries, to branding personal experiments and performing improv on stage.</p>
            <p className="mb-4">
              Currently, I'm developing a platform to <span className="underline">help parents find classes their kids won't immediately hate</span>. It's behavioral economics disguised as a class directory.
            </p>
            <p className="mb-4">However, I remain available for:</p>
            <ul className="list-disc ml-[45px] mb-4">
              <li>Strategy and research work that needs fresh perspective (design research, service design, futures foresight.)</li>
              <li>Building things that surprisingly work (especially if AI is involved)</li>
              <li>Teaching gigs (I currently teach Innovation Design at SIT, where students pretend to listen)</li>
            </ul>
            <p>Yes, I wear many hats, and yes, I has one for each context. Below, you'll find what those hats look like, and how I think when I'm wearing them.</p>
          </div>

          {/* Services Container */}
          <div className="flex flex-col gap-[38px]">
            
            {/* Service Design Card */}
            <Card className="bg-[#6a8f7b] text-[#e5eddf] rounded-[15px] h-[552px] relative overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="absolute top-[49px] left-[49px] font-mono text-[16px] tracking-[-0.8px]">
                  <p className="leading-[16px]">_01</p>
                </div>
                <div className="absolute top-[81px] left-[49px] w-[289px]">
                  <h2 className="text-[50px] font-bold leading-[45px] tracking-[-2.5px]">
                    Service Design<br />
                    <span className="font-light">+</span> Research
                  </h2>
                </div>
                <div className="absolute top-[49px] right-[49px] w-[432px]">
                  <div className="mb-[15px]">
                    <p className="text-[18px] font-bold leading-[22px] tracking-[-0.9px] mb-4">Making Sense, Together.</p>
                    <p className="text-[16px] leading-[22px] tracking-[-0.9px] mb-4">Whether you're launching a new product or trying to fix what's not working, real insight beats guesswork. I help lean teams understand what matters most to their users. We'll unpack what's motivating them, where they're stuck, and what they'll actually pay for, so you can move faster, smarter.</p>
                    <p className="text-[18px] font-bold leading-[22px] mb-2">Think of it as...</p>
                    <p className="text-[16px] leading-[22px] tracking-[-0.9px]">Strategic research without the fluff. We get close to your customers, make sense of their world, and translate that into sharp, usable direction for product, service, or messaging.</p>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-[211px]">
                      <h3 className="text-[20px] font-bold leading-[45px] tracking-[-1px] mb-2.5">Questions we explore</h3>
                      <ul className="text-[14px] leading-[18px] tracking-[-0.7px] list-disc ml-[21px]">
                        <li>What's really driving our customers' decisions?</li>
                        <li>Why aren't people using what we built?</li>
                        <li>How do we reduce friction or unlock trust?</li>
                        <li>Where should we focus first?</li>
                        <li>Why aren't employees adopting this new way of working?</li>
                      </ul>
                    </div>
                    <div className="w-[211px]">
                      <h3 className="text-[20px] font-bold leading-[45px] tracking-[-1px] mb-2.5">Things we might do</h3>
                      <ul className="text-[14px] leading-[18px] tracking-[-0.7px] list-disc ml-[21px]">
                        <li>Interview your users, even the quiet ones</li>
                        <li>Test hypotheses with low-lift provocations</li>
                        <li>Spot behaviour patterns and opportunity gaps</li>
                        <li>Co-create simple blueprints or MVP experiments</li>
                        <li>Translate messy feedback into clear product direction</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[52px] left-[49px] w-[289px]">
                  <h3 className="text-[20px] font-bold leading-[45px] tracking-[-1px] mb-2.5">Ideal for:</h3>
                  <p className="font-mono text-[16px] leading-[16px] tracking-[-0.8px]">Startup founders, SME teams, product owners, L&D teams, innovation leads</p>
                </div>
              </CardContent>
            </Card>

            {/* Service Links */}
            <div className="flex gap-[30px] font-mono text-[16px] tracking-[-0.8px] text-[#5e7c72] leading-[16px]">
              <div className="flex-1">
                <p>VIEW <span className="underline font-bold">DESIGN RESEARCH + SERVICE DESIGN PROJECTS</span></p>
              </div>
              <div>
                <p>ENQUIRE ON DESIGN RESEARCH WORK</p>
              </div>
            </div>

            {/* Futures Card */}
            <Card className="bg-[#547068] text-[#e5eddf] rounded-[15px] h-[552px] relative overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="absolute top-[49px] left-[49px] font-mono text-[16px] tracking-[-0.8px]">
                  <p className="leading-[16px]">_02</p>
                </div>
                <div className="absolute top-[81px] left-[49px] w-[289px]">
                  <h2 className="text-[50px] font-bold leading-[45px] tracking-[-2.5px]">
                    Futures<br />
                    <span className="font-light">+</span> Foresight
                  </h2>
                </div>
                <div className="absolute top-[49px] right-[49px] w-[432px]">
                  <div className="mb-[15px]">
                    <p className="text-[18px] font-bold leading-[22px] tracking-[-0.9px] mb-4">You can't predict the future.<br />But you can prepare for the ones that matter.</p>
                    <p className="text-[16px] leading-[22px] tracking-[-0.9px] mb-4">Futures work isn't about crystal balls, it's about stretching perspectives. I help teams make sense of change, anticipate risks, and imagine bold alternatives before it's too late (or too late to do anything meaningful). It's strategic imagination, grounded in real-world signals.</p>
                    <p className="text-[18px] font-bold leading-[22px] mb-2">Think of it as...</p>
                    <p className="text-[16px] leading-[22px] tracking-[-0.9px]">Foresight you can actually act on. Not just trend decks, but structured provocation, scenario thinking, and facilitated reflection that shifts how people plan and build.</p>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-[211px]">
                      <h3 className="text-[20px] font-bold leading-[45px] tracking-[-1px] mb-2.5">Questions we explore</h3>
                      <ul className="text-[14px] leading-[18px] tracking-[-0.7px] list-disc ml-[21px]">
                        <li>What shifts will change how we operate in 5–10 years?</li>
                        <li>What are we currently blind to?</li>
                        <li>What future are we unconsciously designing for?</li>
                        <li>How might emerging tech reshape our mission or business?</li>
                        <li>What risks are we ignoring because they feel uncomfortable?</li>
                      </ul>
                    </div>
                    <div className="w-[211px]">
                      <h3 className="text-[20px] font-bold leading-[45px] tracking-[-1px] mb-2.5">Things we might do</h3>
                      <ul className="text-[14px] leading-[18px] tracking-[-0.7px] list-disc ml-[21px]">
                        <li>Run scenario-planning and trend-mapping workshops</li>
                        <li>Create design fictions that dramatize implications</li>
                        <li>Facilitate sensemaking across siloed teams</li>
                        <li>Develop uncertainty matrices or system maps</li>
                        <li>Translate foresight into strategy triggers or project briefs</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[52px] left-[49px] w-[289px]">
                  <h3 className="text-[20px] font-bold leading-[45px] tracking-[-1px] mb-2.5">Ideal for:</h3>
                  <p className="font-mono text-[16px] leading-[16px] tracking-[-0.8px]">Ministries, educators, orgs on the edge of disruption, or anyone dreaming responsibly.</p>
                </div>
              </CardContent>
            </Card>

            {/* Futures Links */}
            <div className="flex gap-[30px] font-mono text-[16px] tracking-[-0.8px] text-[#5e7c72] leading-[16px]">
              <div className="flex-1">
                <p>VIEW <span className="underline font-bold">FUTURES + FORESIGHT PROJECTS</span></p>
              </div>
              <div>
                <p>ENQUIRE ON FUTURES + FORESIGHT WORK</p>
              </div>
            </div>

            {/* AI Card */}
            <Card className="bg-[#37494c] text-[#e5eddf] rounded-[15px] h-[552px] relative overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="absolute top-[49px] left-[49px] font-mono text-[16px] tracking-[-0.8px]">
                  <p className="leading-[16px]">_03</p>
                </div>
                <div className="absolute top-[81px] left-[49px] w-[289px]">
                  <h2 className="text-[50px] font-bold leading-[45px] tracking-[-2.5px]">
                    Generative AI <span className="font-light">+</span> Automation
                  </h2>
                </div>
                <div className="absolute top-[49px] right-[49px] w-[432px]">
                  <div className="mb-[15px]">
                    <p className="text-[18px] font-bold leading-[22px] tracking-[-0.9px] mb-4">Thinking with Machines, Creatively</p>
                    <p className="text-[16px] leading-[22px] tracking-[-0.9px] mb-4">I help teams cut through the AI hype to find practical, creative, or strategic uses of automation. Whether you're a small business trying to streamline operations or a creative team looking to augment your workflow, we'll find use cases that actually matter and build smartly around them.</p>
                    <p className="text-[18px] font-bold leading-[22px] mb-2">Think of it as...</p>
                    <p className="text-[16px] leading-[22px] tracking-[-0.9px]">Practical AI strategy and prototyping. From figuring out your first automation loop to designing AI-powered customer experiences, I work with you to make it tangible, without the jargon.</p>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-[211px]">
                      <h3 className="text-[20px] font-bold leading-[45px] tracking-[-1px] mb-2.5">Questions we explore</h3>
                      <ul className="text-[14px] leading-[18px] tracking-[-0.7px] list-disc ml-[21px]">
                        <li>Where can AI meaningfully save us time or create new value?</li>
                        <li>What processes can we automate without losing the human touch?</li>
                        <li>How might AI enhance (not replace) our creative or service workflows?</li>
                        <li>What does a 'right-sized' AI tool stack look like for us?</li>
                        <li>How do we keep it ethical, aligned, and not annoying to use?</li>
                      </ul>
                    </div>
                    <div className="w-[211px]">
                      <h3 className="text-[20px] font-bold leading-[45px] tracking-[-1px] mb-2.5">Things we might do</h3>
                      <ul className="text-[14px] leading-[18px] tracking-[-0.7px] list-disc ml-[21px]">
                        <li>Map automation or AI opportunity areas in your org</li>
                        <li>Build MVPs using tools like ChatGPT, Make, Airtable, or Bubble</li>
                        <li>Prototype AI-powered experiences (chat, content, recommendations)</li>
                        <li>Train your team to use and adapt AI tools responsibly</li>
                        <li>Create internal workflows that save hours weekly</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[52px] left-[49px] w-[289px]">
                  <h3 className="text-[20px] font-bold leading-[45px] tracking-[-1px] mb-2.5">Ideal for:</h3>
                  <p className="font-mono text-[16px] leading-[16px] tracking-[-0.8px]">SMEs, creative studios, educators, founders, innovation and operations teams</p>
                </div>
              </CardContent>
            </Card>

            {/* AI Links */}
            <div className="flex gap-[30px] font-mono text-[16px] tracking-[-0.8px] text-[#5e7c72] leading-[16px]">
              <div className="flex-1">
                <p>VIEW <span className="underline font-bold">GENERATIVE AI + AUTOMATION PROJECTS</span></p>
              </div>
              <div>
                <p>ENQUIRE ON DESIGN RESEARCH WORK</p>
              </div>
            </div>

            {/* Teaching Card */}
            <Card className="bg-[#2f3a41] text-[#e5eddf] rounded-[15px] h-[552px] relative overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="absolute top-[49px] left-[49px] font-mono text-[16px] tracking-[-0.8px]">
                  <p className="leading-[16px]">_04</p>
                </div>
                <div className="absolute top-[81px] left-[49px] w-[289px]">
                  <h2 className="text-[50px] font-bold leading-[45px] tracking-[-2.5px]">
                    Teaching, Facilitation <span className="font-light">+</span> Capability Building
                  </h2>
                </div>
                <div className="absolute top-[49px] right-[49px] w-[432px]">
                  <div className="mb-[15px]">
                    <p className="text-[18px] font-bold leading-[22px] tracking-[-0.9px] mb-4">Making Sense, Together.</p>
                    <p className="text-[16px] leading-[22px] tracking-[-0.9px] mb-4">I design learning experiences that unlock clarity, confidence, and curiosity. From corporate innovation sprints to undergraduate classrooms, I bring structure, story, and soul to help teams and individuals build new creative muscles and actually enjoy the process.</p>
                    <p className="text-[18px] font-bold leading-[22px] mb-2">Think of it as...</p>
                    <p className="text-[16px] leading-[22px] tracking-[-0.9px]">Hands-on, brains-on learning. I adapt to your group's energy and needs, layering just enough structure to stretch minds — whether we're learning design, building futures literacy, or unlearning tired ways of working.</p>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-[211px]">
                      <h3 className="text-[20px] font-bold leading-[45px] tracking-[-1px] mb-2.5">Questions we explore</h3>
                      <ul className="text-[14px] leading-[18px] tracking-[-0.7px] list-disc ml-[21px]">
                        <li>Why aren't employees thinking like owners, innovators, or collaborators?</li>
                        <li>How might we shift from knowing what to do to knowing how to act on it?</li>
                        <li>What does it take to grow a culture of learning and experimentation?</li>
                        <li>How do we get people excited to try (and fail) better together?</li>
                      </ul>
                    </div>
                    <div className="w-[211px]">
                      <h3 className="text-[20px] font-bold leading-[45px] tracking-[-1px] mb-2.5">Things we might do</h3>
                      <ul className="text-[14px] leading-[18px] tracking-[-0.7px] list-disc ml-[21px]">
                        <li>Facilitate high-energy, low-jargon design thinking or futures workshops</li>
                        <li>Teach creativity and critical thinking to students or professionals</li>
                        <li>Coach individuals in storytelling, career design, or strategic clarity</li>
                        <li>Build custom toolkits or learning programs for your team or org</li>
                        <li>Run immersive learning journeys for adults or families</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[52px] left-[49px] w-[289px]">
                  <h3 className="text-[20px] font-bold leading-[45px] tracking-[-1px] mb-2.5">Ideal for:</h3>
                  <p className="font-mono text-[16px] leading-[16px] tracking-[-0.8px]">SMEs, creative studios, educators, founders, innovation and operations teams</p>
                </div>
              </CardContent>
            </Card>

            {/* Teaching Links */}
            <div className="flex gap-[30px] font-mono text-[16px] tracking-[-0.8px] text-[#5e7c72] leading-[16px]">
              <div className="flex-1">
                <p>VIEW <span className="underline font-bold">DESIGN RESEARCH/SERVICE DESIGN PROJECTS</span></p>
              </div>
              <div>
                <p>ENQUIRE ON DESIGN RESEARCH WORK</p>
              </div>
            </div>

            {/* Testimonials Section */}
            <Card className="bg-white rounded-[15px] h-[423px] relative">
              <CardContent className="p-0 h-full">
                <div className="absolute top-[49px] left-[49px] font-mono text-[16px] tracking-[-0.8px] text-[#404b51]">
                  <p className="leading-[16px]">_TESTIMONIALS</p>
                </div>
                <div className="absolute top-[132px] left-[49px] right-[49px] bottom-[49px]">
                  <div className="flex flex-col gap-5 h-full">
                    <blockquote className="text-[24px] font-semibold italic leading-[30px] tracking-[-1.2px] text-[#404b51]">
                      Whether you're building something new or fixing what's broken, it starts with understanding. I help teams uncover the messy, nuanced context behind a challenge: what people are really doing, feeling, deciding, so you're not designing in the dark. This is immersive, in-field sensemaking that leads to sharper decisions, not just slick decks.
                    </blockquote>
                    <div className="font-mono text-[16px] leading-[16px] tracking-[-0.8px] text-[#404b51]">
                      <p className="mb-0">Name</p>
                      <p>Role, Company</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}
