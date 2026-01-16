const features = [
  {
    title: "Secure Authentication",
    desc: "JWT-based login with protected routes",
  },
  { title: "Scalable Architecture", desc: "Clean frontend-backend separation" },
  { title: "Modern UI", desc: "Responsive design using Tailwind CSS" },
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl hover:shadow transition"
          >
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
