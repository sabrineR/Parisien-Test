//This is an static component for the bloc 'en-continu'
import EnContinu from "./static/en-continu";
import articles from "./../../data/articles.json";
import { Actu } from "./dynamic/Actu";
import Une from "./static/une";
import "./content.css";
export default function Content() {
  return (
    <div className="layout-homepage__top">
      <div className="lp-container lp-container--fixed-narrow">
        <section>
          <Une />
        </section>
        <div
          className="arcad__wrapper"
          style={{ display: "flex", position: "relative" }}
        >
          <section style={{ width: "60%" }}>
            <Actu articles={articles} />
          </section>
          <aside className="relative continue-article" style={{ width: "40%" }}>
            <EnContinu className="continue-article" />
          </aside>
        </div>
      </div>
    </div>
  );
}
