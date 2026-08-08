import React, { useState } from "react";

const certificatesData = [
  {
    id: 1,
    title: "Web Design for Beginners",
    issuer: "Centre for Open & Distance Learning (CODL), University of Moratuwa",
    image: "/assets/bg.jpg",
  },
  {
    id: 2,
    title: "Python for Beginners",
    issuer: "Centre for Open & Distance Learning (CODL), University of Moratuwa",
    image: "/assets/bg.jpg",
  },
  {
    id: 3,
    title: "Cloud Computing for Absolute Beginners",
    issuer: "CodeKu DevOps Academy",
    image: "/assets/bg.jpg",
  },
  {
    id: 4,
    title: "Version Controlling 101: From Zero to Hero",
    issuer: "CodeKu DevOps Academy",
    image: "/assets/bg.jpg",
  },
  {
    id: 5,
    title: "Introduction to Containerization",
    issuer: "CodeKu DevOps Academy",
    image: "/assets/bg.jpg",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const topCertificates = certificatesData.slice(0, 3);
  const bottomCertificates = certificatesData.slice(3, 5);

  return (
    <section
      id="certificates"
      className="px-6 py-16 flex flex-col items-center scroll-mt-20"
    >
      {/* Header */}
      <div className="text-center max-w-4xl mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          &lt;Certifications & Courses/&gt;
        </h1>
        <p className="mt-4 text-white/60 text-sm md:text-base leading-relaxed">
          These are the certifications and courses I have completed to enhance my skills in various areas of IT, software development, and other fields of interest. Each course has played a key role in building my expertise for the projects I undertake.
        </p>
      </div>

      {/* Certificates Grid Container */}
      <div className="w-full max-w-6xl flex flex-col items-center gap-8">
        {/* Top Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {topCertificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer bg-white p-3 rounded-2xl border border-white/20 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-teal-400 hover:shadow-teal-400/30 overflow-hidden"
            >
              <div className="w-full h-52 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-3 text-center">
                <h3 className="text-sm font-bold text-gray-900 line-clamp-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1 line-clamp-1">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 Cards Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:max-w-[67%]">
          {bottomCertificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer bg-white p-3 rounded-2xl border border-white/20 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-teal-400 hover:shadow-teal-400/30 overflow-hidden"
            >
              <div className="w-full h-52 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-3 text-center">
                <h3 className="text-sm font-bold text-gray-900 line-clamp-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1 line-clamp-1">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview for Full Certificate */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white p-5 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col items-center overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold bg-gray-100 hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center transition"
            >
              ✕
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full max-h-[70vh] object-contain rounded-xl border border-gray-200"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-gray-900">
                {selectedCert.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {selectedCert.issuer}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
