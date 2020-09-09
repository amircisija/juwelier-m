// plugins/aos.js
import AOS from "aos";
import "aos/dist/aos.css";
export default ({
  app
}) => {
  app.AOS = new AOS.init({
    disable: "phone",
    offset: 20,
    once: true,
    startEvent: 'load'
  }); // or any other options you need
};
