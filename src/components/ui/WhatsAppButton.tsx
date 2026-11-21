import { useState } from 'react';

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const phoneNumber = '917093642973';
  const defaultMessage = encodeURIComponent(
    'Hi SUDHVI TECH, I would like to know more about your technical courses and academic project mentorship.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="Instant WhatsApp Assistance"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none"
    >
      {/* Desktop Helper Pill / Tooltip */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-white text-gray-800 text-xs font-semibold font-body px-3.5 py-2 rounded-full shadow-lg border border-gray-100 transition-all duration-300 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Chat with Admissions on WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 group relative"
        aria-label="Chat with SUDHVI TECH on WhatsApp (+91 7093642973)"
      >
        {/* Pulsing Outer Glow Ring */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-75"
          aria-hidden="true"
        />

        {/* WhatsApp Vector Icon */}
        <svg
          className="w-7 h-7 fill-current relative z-10 drop-shadow-sm"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.027-.474-1.636-.677-2.69-2.34-2.771-2.45-.081-.109-.661-.88-.661-1.678 0-.798.419-1.191.568-1.353.149-.162.325-.203.433-.203.11 0 .217.001.312.006.101.005.237-.038.37.283.136.324.464 1.134.505 1.217.041.081.069.177.014.286-.054.108-.082.176-.163.27-.082.095-.172.212-.246.284-.082.08-.168.167-.072.331.096.163.427.705.916 1.141.63.561 1.161.734 1.324.815.163.081.258.068.353-.041.095-.108.406-.474.514-.636.108-.163.217-.136.366-.082.149.054.948.447 1.111.528.162.081.27.122.311.189.042.068.042.392-.102.797z" />
          <path d="M12.012 2.002C6.48 2.002 2 6.483 2 12.015c0 1.954.558 3.843 1.621 5.485L2 22l4.639-1.585a9.96 9.96 0 0 0 5.373 1.603c5.532 0 10.012-4.481 10.012-10.015 0-5.532-4.48-10.001-10.012-10.001zm0 18.232c-1.609 0-3.18-.432-4.551-1.25l-.326-.194-2.755.942.946-2.696-.213-.339A8.214 8.214 0 0 1 3.791 12.015C3.791 7.481 7.478 3.794 12.012 3.794c4.534 0 8.221 3.687 8.221 8.221 0 4.534-3.687 8.219-8.221 8.219z" />
        </svg>
      </a>
    </aside>
  );
}
