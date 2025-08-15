import NewsHeroSection from "./NewsHeroSection";
import NewsSidebar from "./NewsSidebar";
import NewsGrid from "./NewsGrid";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { getNewsList } from "./newsList";

export default async function NewsPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const newsList = await getNewsList();

  // Normalize and compute derived lists
  const latestSorted = [...newsList].sort(
    (a, b) => new Date(b.sys.createdAt).getTime() - new Date(a.sys.createdAt).getTime()
  );
  const policies = newsList.filter(
    (n) => n.fields.category?.fields?.category_name?.toLowerCase() === "policies"
  );
  const trending = latestSorted.slice(0, 3);

  const sp = await searchParams;
  const rawFilter = Array.isArray(sp?.filter) ? sp.filter[0] : (sp?.filter as string | undefined);
  const filter = (rawFilter || "").toLowerCase();
  const filteredList =
    filter === "policies" ? policies : filter === "trending" ? trending : filter === "latest" ? latestSorted : newsList;

  const categories = [
    { key: "latest", name: "Latest Updates", count: newsList.length },
    { key: "policies", name: "Policies", count: policies.length },
    { key: "trending", name: "Trending", count: trending.length },
  ];

  const popularNews = latestSorted.slice(0, 3).map((post) => ({
    title: post.fields.title,
    img: post.fields.featuredImage?.fields.file.url,
    badge: post.fields.category,
    desc: post.fields.content,
  }));

  return (
    <div className="bg-white">
      <NewsHeroSection newsList={newsList} />
      <div className="w-full max-w-[100%] mx-auto flex flex-col lg:flex-row gap-4 md:gap-8 px-2 md:px-8 py-8 md:py-20">
        <NewsSidebar categories={categories} popularNews={popularNews} selectedFilter={filter || "latest"} />
        <div className="flex-1">
          <NewsGrid newsList={filteredList} />
        </div>
      </div>
      <CTASection
        heading="Partner with Us Today!"
        subtext="You can partner with us in various ways, including but not limited to: Sponsoring our events, providing financial support, or partnering with us on a project."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
}
