class DarkMode {
    constructor() {
        this.HTML = document.querySelector("html");
        this.BODY = document.querySelector("body");
        this.CANVAS = document.querySelector("canvas");
        this.GPU_VIEW_CONTENT = document.querySelector("div.gpu-view-content");
        this.TOOLBAR = document.querySelector("div#delightful-toolbar");
    }

    applyStyle(element, styles) {
        if (element) {
            Object.assign(element.style, styles);
        }
    }

    applyAttribute(element, attribute, value) {
        if (element) {
            element.setAttribute(attribute, value);
        }
    }

    make_html_darker() {
        console.log("Making HTML darker.");

        this.applyStyle(this.HTML, { background: "black" });
    }

    make_body_darker() {
        console.log("Making BODY darker.");

        this.applyAttribute(this.BODY, "data-preferred-theme", "dark");
        this.applyStyle(this.BODY, { colorScheme: "dark", background: "black" });
    }

    make_canvas_darker() {
        console.log("Making CANVAS darker.");

        this.applyStyle(this.CANVAS, { opacity: "0.5", background: "black" });
    }

    make_gpu_view_content_darker() {
        console.log("Making GPU_VIEW_CONTENT darker.");

        this.applyStyle(this.GPU_VIEW_CONTENT, { background: "black" });
    }

    make_toolbar_darker() {
        console.log("Making TOOLBAR darker.");

        this.applyStyle(this.TOOLBAR, { background: "#2f2f2f" });
    }

    make_other_elements_darker() {
        console.log("Making other elements darker.");

        const button = document.querySelector("button.meeting_tools_toolbar--toolbarItemButton--VBNmh.meeting_tools_toolbar--withHover--r7Sks");
        this.applyStyle(button, { border: "none" });
    }

    setup() {
        console.log("Darker setup has begun!");

        this.make_html_darker();
        this.make_body_darker();
        this.make_canvas_darker();
        this.make_gpu_view_content_darker();
        this.make_toolbar_darker();
        this.make_other_elements_darker();
    }
}

const darkMode = new DarkMode();
darkMode.setup();
