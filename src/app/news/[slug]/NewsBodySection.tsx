import React from "react";

interface NewsBodySectionProps {
  children: React.ReactNode;
}

const NewsBodySection: React.FC<NewsBodySectionProps> = ({ children }) => (
  <section className="absolute left-1/2 -translate-x-1/2 top-[220px] w-full max-w-3xl z-20">
    <div className="bg-white rounded-xl shadow-lg p-8">
      {children}
    </div>
  </section>
);

export default NewsBodySection; 