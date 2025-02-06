import Link from "next/link";

const pageTemplates = [
  { title: "Lead Generation", href: "/lead-generation" },
  { title: "Product Launch", href: "/product-launch" },
  { title: "Event/Webinar Registration", href: "/events" },
  { title: "Service-Based", href: "/service-based" },
];

export default function Home() {
  return (
    <div className="w-full h-screen items-center justify-center flex flex-row gap-6">
      {pageTemplates.map((template, index) => (
        <Link
          key={index}
          href={template.href}
          className="p-4 rounded-md shadow-lg bg-blue-300"
        >
          {template.title}
        </Link>
      ))}
    </div>
  );
}
