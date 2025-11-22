import Image from "next/image";
export default function Footer() {
  return (
    <div
      dir="rtl"
      className={`w-full h-[250px] p-5  text-white 
        bg-[linear-gradient(180deg,rgba(9,86,230,1)_0%,rgba(42,110,235,1)_50%,rgba(109,157,247,1)_100%)]

    `}
    >
      <span className="flex flex-col justify-center items-center gap-5 mb-5">
        
      <span className={`text-[22px] font-semibold block`}>هل أعجبتك هذه النماذج؟ </span>
     <span>تواصل معنا الآن</span>
      </span>
      <div
        className={`contact flex flex-col gap-2 md:flex-row md:justify-center md:items-center md:gap-6`}
      >
        <a
          href="https://wa.me/966501508065"
          target="_blank"
          className={`flex items-center gap-2`}
        >
          <Image
            src="/whatsapp.svg"
            alt="whatsapp icon"
            width={30}
            height={30}
          />
          <span dir="ltr">+966 50 396 7490 </span>
        </a>

        <a
          href="https://wa.me/966501508065"
          target="_blank"
          className={`flex items-center gap-2`}
        >
          <Image
            src="/whatsapp.svg"
            alt="whatsapp icon"
            width={30}
            height={30}
          />
          <span dir="ltr">+966 56 186 7390 </span>
        </a>
       
        <a
          href="https://salla.sa/khdmtye-alalktrwnyet-"
          target="_blank"
          className={`flex items-center gap-2`}
        >
          <Image
            src="/salla.svg"
            alt="whatsapp icon"
            width={30}
            height={30}
          />
          <span dir="ltr">سلة</span>
        </a>
      </div>
    </div>
  );
}
