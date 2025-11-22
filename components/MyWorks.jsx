import Image from "next/image";
import data from "../data/Portfolios.json";

export default function MyWorks() {
  return (
    <div className="bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-10">أعمالنا</h1>

      <div className="w-full flex flex-wrap justify-center gap-6">
        {data.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col w-72"
          >
            <div className="relative w-full h-48">
              <Image
                src={`/${p.img}`}
                alt={p.title}
                fill
                className="object-cover brightness-80"
              />
            </div>

            <h2 className="text-xl font-semibold m-2 text-center">{p.title}</h2>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center m-5 text-xl font-semibold text-blue-500"
            >
              انقر للاطلاع على المشروع
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
