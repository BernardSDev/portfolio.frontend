import {slugifyText} from "@/helpers/slugifyText";

interface Skill {
    image: string
    credit: string
    title: string
    text: string
    slug: string
}

export const SkillData: Skill[] = [
    {
        image: "/thinking.jpg",
        credit: "milad fakurian",
        title: "Thinking technical",
        text: "Thinking technically is at the core of how I approach problem solving and software development. I focus on understanding systems deeply before implementing solutions, ensuring that design decisions are aligned with long-term scalability and maintainability. Whether working on frontend interfaces, backend services, or data-related tasks, I prioritize clarity of logic and purposeful engineering.\n" +
            "\n" +
            "I enjoy analyzing existing systems and learning how they work before introducing improvements. This mindset helps me navigate legacy codebases, build reliable features, and deliver solutions with confidence. My goal is always to translate ideas into well-structured, efficient, and practical implementations that serve real user and business needs.\n",
        slug: slugifyText("Thinking technical"),
    },
    {
        image: "/execution.jpg",
        credit: "vitaly gariev",
        title: "Execution and delivery",
        text: "Execution and delivery are central to how I turn ideas into working solutions. I focus on writing clean, maintainable code while maintaining momentum from development through testing and deployment. My approach is to stay practical and results-oriented, ensuring that features are not only built but also work reliably in real-world scenarios.\n" +
            "\n" +
            "I value consistency, attention to detail, and clear progress tracking when working on projects. By balancing planning with action, I aim to deliver software that meets requirements, performs efficiently, and provides a solid foundation for future improvements. My goal is to ship meaningful work with confidence and quality.\n",
        slug: slugifyText("Execution and delivery"),
    },
    {
        image: "/adaptability.jpg",
        credit: "brett jordan",
        title: "Adaptability and collaboration",
        text: "Adaptability is essential to how I work within different environments and teams. I focus on understanding team dynamics, project goals, and existing workflows so I can contribute effectively without disrupting progress. Whether working with new technologies, legacy systems, or evolving requirements, I stay open to learning and adjusting when necessary.\n" +
            "\n" +
            "I value communication, teamwork, and flexibility when solving problems. My goal is to integrate smoothly into development processes, support shared objectives, and help move projects forward with confidence and consistency.",
        slug: slugifyText("Adaptability"),
    },
    {
        image: "/values.jpg",
        credit: "walls.io",
        title: "Values",
        text: "My work is guided by clarity, integrity, and a commitment to continuous growth. I believe good software is built not only through technical skill but also through patience, discipline, and thoughtful decision-making. I prioritize writing clean, maintainable code and delivering solutions that are meaningful and reliable.\n" +
            "\n" +
            "I value learning, knowledge sharing, and building technology that serves real needs. Whether working independently or with a team, I strive to approach challenges with professionalism, responsibility, and a focus on long-term impact.",
        slug: slugifyText("Values"),
    },
    {
        image: "/mentorship2.jpg",
        credit: "gilles roux",
        title: "Mentorship",
        text: "Mentorship is an important part of my professional journey. I enjoy sharing knowledge, guiding learners, and helping others build confidence in their technical growth. I believe teaching strengthens both understanding and community, and I take satisfaction in helping others progress in their development journey.\n" +
            "\n" +
            "Through mentorship, I focus on explaining concepts clearly, encouraging practical learning, and supporting problem-solving thinking. My goal is to help aspiring developers build strong foundations while developing the mindset needed to grow in the technology field.",
        slug: slugifyText("Mentorship"),
    },
    {
        image: "/data-development.jpg",
        credit: "conny schneider",
        title: "Data-driven development",
        text: "I incorporate data-driven thinking into development by using insights from data analysis to guide technical and design decisions. By examining usage patterns, evaluating outcomes, and interpreting relevant metrics, I aim to build applications that are not only functional but also optimized for real user behavior and system performance.\n" +
            "\n" +
            "This approach helps improve feature effectiveness, user experience, and overall system quality. I believe software development should be informed by evidence where possible, ensuring that solutions are both technically sound and aligned with practical needs.",
        slug: slugifyText("Data-driven development"),
    },
]