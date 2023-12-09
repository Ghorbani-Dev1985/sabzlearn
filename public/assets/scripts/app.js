import { Header } from "../../Components/Header/Header.js";
import { CourseCard } from "../../Components/CourseCard/CourseCard.js";
import { HelpCard } from "../../Components/HelpCard/HelpCard.js";
import { Roadmap } from "../../Components/Roadmap/Roadmap.js";
import { PopularCourse } from "../../Components/PopularCourse/PopularCourse.js";
import { NewCourse } from "../../Components/NewCourse/NewCourse.js";
import { Blog } from "../../Components/Blog/Blog.js";
import { Footer } from "../../Components/Footer/Footer.js";
import { Pagination } from "../../Components/Pagination/Pagination.js";
window.customElements.define('site-header' , Header);
window.customElements.define('course-card' , CourseCard);
window.customElements.define('help-card' , HelpCard);
window.customElements.define('road-map' , Roadmap);
window.customElements.define('popular-course' , PopularCourse);
window.customElements.define('new-course' , NewCourse);
window.customElements.define('blog-card' , Blog);
window.customElements.define('site-footer' , Footer);
window.customElements.define('site-pagination' , Pagination);

//-----



