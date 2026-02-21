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
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae " +
            "pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam " +
            "urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia " +
            "integer nunc posuere ut hendrerit.",
        slug: slugifyText("Thinking technical"),
    },
    {
        image: "/execution.jpg",
        credit: "vitaly gariev",
        title: "Execution and delivery",
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id " +
            "cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec " +
            "metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit.",
        slug: slugifyText("Execution and delivery"),
    },
    {
        image: "/adaptability.jpg",
        credit: "brett jordan",
        title: "Adaptability",
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat " +
            "in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus " +
            "nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit.",
        slug: slugifyText("Adaptability"),
    },
    {
        image: "/values.jpg",
        credit: "walls.io",
        title: "Values",
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque " +
            "sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar " +
            "vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut " +
            "hendrerit..",
        slug: slugifyText("Values"),
    },
    {
        image: "/mentorship2.jpg",
        credit: "gilles roux",
        title: "Mentorship",
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae " +
            "pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna " +
            "tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer " +
            "nunc posuere ut hendrerit.",
        slug: slugifyText("Mentorship"),
    },
]