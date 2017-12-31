export class Utility {
    public static showElements(elements: Element[]): void {
        elements.forEach(element => {
            if (element.classList.contains("hidden")) {
                element.classList.remove("hidden");
            }
        });
    }

    public static hideElements(elements: Element[]): void {
        elements.forEach(element => {
            if (!element.classList.contains("hidden")) {
                element.classList.add("hidden");
            }
        });
    }
}