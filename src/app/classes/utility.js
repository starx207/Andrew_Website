var Utility = (function () {
    function Utility() {
    }
    Utility.showElements = function (elements) {
        elements.forEach(function (element) {
            if (element.classList.contains("hidden")) {
                element.classList.remove("hidden");
            }
        });
    };
    Utility.hideElements = function (elements) {
        elements.forEach(function (element) {
            if (!element.classList.contains("hidden")) {
                element.classList.add("hidden");
            }
        });
    };
    return Utility;
}());
export { Utility };
//# sourceMappingURL=utility.js.map