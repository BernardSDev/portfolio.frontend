interface Skill {
    image: string
    credit: string
    title: string
    text: string
    slug: string
}

function slugify(text: string) {
    return text.toLowerCase().replace(/\s+/g, "-")
}

export const SkillData: Skill[] = [
    {
        image: "/thinking.jpg",
        credit: "milad fakurian",
        title: "Thinking technical",
        text: "Donec quis libero sagittis, suscipit justo et, commodo lectus.",
        slug: slugify("Thinking technical"),
    },
    {
        image: "/execution.jpg",
        credit: "vitaly gariev",
        title: "Execution and delivery",
        text: "Donec quis libero sagittis, suscipit justo et, commodo lectus.",
        slug: slugify("Execution and delivery"),
    },
    {
        image: "/adaptability.jpg",
        credit: "brett jordan",
        title: "Adaptability",
        text: "Donec quis libero sagittis, suscipit justo et, commodo lectus.",
        slug: slugify("Adaptability"),
    },
    {
        image: "/values.jpg",
        credit: "walls.io",
        title: "Values",
        text: "Donec quis libero sagittis, suscipit justo et, commodo lectus.",
        slug: slugify("Values"),
    },
    {
        image: "/mentorship2.jpg",
        credit: "gilles roux",
        title: "Mentorship",
        text: "Donec quis libero sagittis, suscipit justo et, commodo lectus.",
        slug: slugify("Mentorship"),
    },
]