import { Link } from "react-router-dom";
import define from "../assets/images/define.jpg";
import prepare from "../assets/images/prepare.jpg";
import concept from "../assets/images/concept.jpg";
import build from "../assets/images/build.jpg";
import technical from "../assets/images/technical.jpg";
import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

const ProcessPhase = ({ 
  phaseNumber, 
  phaseTitle, 
  introQuestion, 
  description, 
  boldStatement, 
  additionalInfo, 
  finalNote,
  imageSrc 
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
        // Prevent body scroll when modal is open
        if (!isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const tasks = [
        "Initial client consultation and discovery session",
        "Comprehensive needs assessment",
        "Collaborative goal setting workshop",
        "Market and industry research",
        "Preliminary budget estimation",
        "Project timeline development",
        "Key stakeholder identification",
        "Feasibility analysis"
    ];

    return (
        <div className="w-full px-4 py-6 md:px-12 lg:px-16 relative bg-[##E9F1F7]">
            <div className="w-full max-w-7xl mx-auto">
                <h3 className="col uppercase text-sm tracking-wider mb-2">process phase</h3>

                <div className="w-full flex flex-col md:flex-row justify-between gap-8">
                    <div className="w-full md:w-1/2 space-y-5 text-lg">
                        <h3 className="text-2xl font-bold">{phaseNumber} - {phaseTitle}</h3>
                        <p className="italic">{introQuestion}</p>
                        <p>{description}</p>
                        <p className="font-bold text-lg">{boldStatement}</p>
                        <p>{additionalInfo}</p>
                        <p className="text-gray-600">{finalNote}</p>
                        
                        <button 
                            className="btn-fancy bg-white border-2 border-black mt-2 flex items-center 
                            gap-3  hover:bg-black hover:text-white transition-colors duration-300"
                            onClick={toggleExpansion}
                            aria-expanded={isExpanded}
                        >
                            View tasks <ArrowRight size={20} />
                        </button>
                    </div>
                
                    <div className="w-full md:w-1/2 h-96 md:h-auto">
                        <img 
                            src={imageSrc} 
                            alt={`${phaseTitle} phase illustration`} 
                            className="w-full h-full object-cover " 
                        />
                    </div>
                </div>
            </div>

            {isExpanded && (
                <div className="fixed inset-0 w-full h-full bg-black bg-opacity-95 text-white z-50 p-8 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-between col items-start mb-8   bg-black py-4">
                            <h4 className="text-2xl font-bold">{phaseTitle} </h4>
                            <button 
                                onClick={toggleExpansion}
                                className="col hover:text-gray-300 focus:outline-none transition-colors"
                                aria-label="Close tasks"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="w-full flex flex-col md:flex-row justify-between gap-8">
                            <div className="w-full md:w-1/2 h-96   top-20">
                                <img 
                                    src={imageSrc} 
                                    alt={`${phaseTitle} phase illustration`} 
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            <div className="w-full md:w-1/2 pb-12">
                                <ul className="space-y-4 text-lg">
                                    {tasks.map((task, index) => (
                                        <li key={index} className="flex items-start border-b border-gray-700 pb-4">
                                            <span className="mr-3 text-xl">•</span>
                                            <span className="flex-1">{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const ProcessText = () => {
    const phases = [
        {
            phaseNumber: "01",
            phaseTitle: "Define",
            introQuestion: "How does a successful design and construction project initiate?",
            description: "The journey begins when a client identifies the need to enhance their workspace. This realization might stem from business growth, evolving operational requirements, or an approaching lease expiration. Recognizing this need marks the first step toward transformation.",
            boldStatement: "Our expert team guides you through every step of this crucial phase.",
            additionalInfo: "We collaborate closely with you to develop a strategic action plan, gathering insights and aligning them with your business objectives to create a solid foundation for your project.",
            finalNote: "This essential stage establishes the framework needed before developing a comprehensive project brief.",
            imageSrc: define
        },
        {
            phaseNumber: "02",
            phaseTitle: "Discover",
            introQuestion: "What does it take to fully understand your project requirements?",
            description: "In this exploratory phase, we dive deep into your business operations, culture, and aspirations. Through workshops, interviews, and site analysis, we uncover the unique characteristics that will shape your ideal workspace.",
            boldStatement: "Discovery transforms assumptions into actionable insights.",
            additionalInfo: "We document spatial requirements, adjacencies, and special considerations that will inform the design direction. This phase often reveals opportunities the client hadn't initially considered.",
            finalNote: "The discovery findings become the compass for all subsequent design decisions.",
            imageSrc: prepare
        },
        {
            phaseNumber: "03",
            phaseTitle: "Conceptualize",
            introQuestion: "How do abstract ideas become tangible design solutions?",
            description: "With a clear understanding of your needs, our design team begins translating requirements into spatial concepts. We explore multiple approaches through sketches, mood boards, and preliminary space plans.",
            boldStatement: "Concept development is where creativity meets functionality.",
            additionalInfo: "We present these initial ideas to you for feedback, refining the direction based on your reactions. This iterative process ensures the final concept truly reflects your vision.",
            finalNote: "The selected concept will guide all detailed design work that follows.",
            imageSrc: concept
        },
        {
            phaseNumber: "04",
            phaseTitle: "Develop",
            introQuestion: "What transforms a good concept into an executable design?",
            description: "The approved concept undergoes rigorous development with attention to every detail. We refine materials, finishes, lighting, and furniture selections while coordinating with engineers and specialists.",
            boldStatement: "Design development bridges vision and reality.",
            additionalInfo: "During this phase, we balance aesthetic aspirations with practical considerations like budget, constructability, and timeline. The design becomes increasingly specific and technical.",
            finalNote: "By phase end, the design is sufficiently detailed for pricing and permitting.",
            imageSrc: technical
        },
        {
            phaseNumber: "05",
            phaseTitle: "Document",
            introQuestion: "How does design intent become builder-ready instructions?",
            description: "Here we produce the comprehensive construction documents that contractors will use to build your space. These detailed drawings and specifications leave no ambiguity about materials, dimensions, or quality standards.",
            boldStatement: "Precision in documentation prevents problems during construction.",
            additionalInfo: "We coordinate all technical aspects including structural, mechanical, electrical, and plumbing requirements. The documents also form the basis for accurate contractor bidding.",
            finalNote: "Thorough documentation is the foundation of a smooth construction process.",
            imageSrc: technical
        },
        {
            phaseNumber: "06",
            phaseTitle: "Procure",
            introQuestion: "What ensures materials and services meet your standards?",
            description: "With documents complete, we assist in selecting contractors and procuring materials. We manage the bidding process, evaluate submissions, and help you make informed decisions about trade-offs.",
            boldStatement: "Strategic procurement maximizes value without compromising quality.",
            additionalInfo: "For critical items with long lead times, we initiate early procurement to prevent delays. We also help navigate supply chain challenges through our industry relationships.",
            finalNote: "Effective procurement sets the stage for on-time, on-budget project delivery.",
            imageSrc: build
        },
        {
            phaseNumber: "07",
            phaseTitle: "Construct",
            introQuestion: "How do drawings become physical reality?",
            description: "During construction, we serve as your advocate, monitoring progress, quality, and compliance with design intent. Regular site visits and meetings ensure any issues get resolved promptly.",
            boldStatement: "Construction is where planning meets execution.",
            additionalInfo: "We review shop drawings, material samples, and mockups. When unforeseen conditions arise (as they often do), we develop practical solutions that maintain design integrity.",
            finalNote: "Our oversight helps deliver the space you envisioned, on time and within budget.",
            imageSrc: build
        },
        {
            phaseNumber: "08",
            phaseTitle: "Activate",
            introQuestion: "What ensures a successful transition to your new space?",
            description: "As construction completes, we assist with furniture installation, technology setup, and final touches. We develop move-in plans and conduct staff orientations to ease the transition.",
            boldStatement: "Activation turns a construction project into a functional workplace.",
            additionalInfo: "We remain available post-occupancy to address any teething issues and conduct a formal project review to capture lessons learned.",
            finalNote: "This phase completes the journey from concept to reality, delivering a space that supports your business goals.",
            imageSrc: prepare
        }
    ];

    return (
        <div className="space-y-16 py-12">
            {phases.map((phase, index) => (
                <ProcessPhase key={index} {...phase} />
            ))}
        </div>
    );
};

export default ProcessText;