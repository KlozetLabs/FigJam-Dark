class DarkMode {
   constructor(_MAX_TRIES = 10) {
      this.MAX_TRIES = _MAX_TRIES;
      this.ACTIVATED = false;
   }

   fetchElements() {
      this.HTML = document.querySelector("html");
      this.BODY = document.querySelector("body");
      this.CANVAS = document.querySelector("canvas");
      this.GPU_VIEW_CONTENT = document.querySelector("div.gpu-view-content");
      this.TOOLBAR = document.querySelector("div#delightful-toolbar");
   }

   applyStyle(element, styles) {
      if (!element)
         throw new Error(`[applyStyle] -> Element: ${element} not found.`);

      Object.assign(element.style, styles);
   }

   applyAttribute(element, attribute, value) {
      if (!element)
         throw new Error(`[applyAttribute] -> Element: ${element} not found.`);

      element.setAttribute(attribute, value);
   }

   make_html_darker() {
      this.applyStyle(this.HTML, { background: "black" });
   }

   make_body_darker() {
      this.applyAttribute(this.BODY, "data-preferred-theme", "dark");
      this.applyStyle(this.BODY, { colorScheme: "dark", background: "black" });
   }

   make_canvas_darker() {
      this.applyStyle(this.CANVAS, { opacity: "0.5", background: "black" });
   }

   make_gpu_view_content_darker() {
      this.applyStyle(this.GPU_VIEW_CONTENT, { background: "black" });
   }

   make_toolbar_darker() {
      this.applyStyle(this.TOOLBAR, { background: "#2f2f2f" });
   }

   make_other_elements_darker() {
      const button = document.querySelector("button.meeting_tools_toolbar--toolbarItemButton--VBNmh.meeting_tools_toolbar--withHover--r7Sks");
      this.applyStyle(button, { border: "none" });
   }

   activate() {
      console.log("Activating dark mode!");
      this.fetchElements(); // Fetch all elements.

      let tries = 0;
      let intervalId = setInterval(() => {
         tries += 1;

         if (this.ACTIVATED) {
            console.log("Dark mode was activated successfully.");
            return clearInterval(intervalId);
         }

         if (tries > this.MAX_TRIES) {
            console.log("Something went wrong while activating darkmode to some elements.");
            return clearInterval(intervalId);
         }

         try {
            this.make_html_darker();
            this.make_body_darker();
            this.make_canvas_darker();
            this.make_gpu_view_content_darker();
            this.make_toolbar_darker();
            this.make_other_elements_darker();

            this.ACTIVATED = !this.ACTIVATED;
         } catch(e) {
            console.log(e);
            this.fetchElements(); // Fetch all elements again.
         }

      }, 1000);
   }
}

let darkMode = new DarkMode(15);
darkMode.activate(); // Activate the darkMode.
