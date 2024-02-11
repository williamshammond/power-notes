import { HomeSectionCard } from "../navigation-components/HomeSectionCard";
import { TopBar } from "../navigation-components/TopBar";

const sections = ["Note", "Todo List", "Journal"];

export function HomePage() {
  return (
    <div>
      <TopBar />
      <h1>Home Page</h1>
      <div>
        {sections.map((section) => (
          <HomeSectionCard key={section} sectionTitle={section} />
        ))}
      </div>
    </div>
  );
}
