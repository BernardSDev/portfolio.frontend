export function slugifyText(text: string) {
    return text.toLowerCase().replace(/\s+/g, "-")
}
