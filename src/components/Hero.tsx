import { Phone } from "lucide-react";
import { PHONE_HREF } from "../data";
import Messengers from "./Messengers";

export default function Hero() {
  return (
    <section id="top" className="bg-white pt-[72px]">
      <div className="relative isolate overflow-hidden bg-graphite lg:aspect-video lg:min-h-[760px]">
        <img
          src="/images/hero-severodvinsk-square.webp"
          alt="Дом корабела и площадь Победы в Северодвинске через панорамное окно современного интерьера — сгенерированное изображение"
          className="block aspect-[4/3] w-full object-cover object-right sm:aspect-video lg:absolute lg:inset-0 lg:h-full lg:aspect-auto lg:object-[62%_center]"
          fetchPriority="high"
          width={1600}
          height={900}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(12,20,20,0.48)_0%,rgba(12,20,20,0.40)_38%,rgba(12,20,20,0.05)_64%,transparent_80%)] lg:block"
        />
        <div className="container-x relative z-10 py-10 text-white md:py-14 lg:flex lg:h-full lg:items-center lg:py-10">
          <div className="max-w-[510px]">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-white/50" />
              <span className="text-sm font-bold uppercase tracking-widest2 text-white/85">Вершина</span>
              <span className="h-px w-8 bg-white/50" />
            </div>
            <h1 className="sr-only">Клининг в Северодвинске — уборка квартир и домов</h1>
            <div aria-hidden="true" className="text-[76px] font-bold leading-[0.95] tracking-tight text-white md:text-[104px]">
              Чисто.
            </div>
            <span
              className="mt-2 block text-[42px] leading-[1.05] text-white md:text-[58px]"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              в Северодвинске
            </span>
            <p className="mt-5 max-w-[430px] text-base leading-7 text-white/90 md:text-lg md:leading-8">
              Доступный клининг в каждую квартиру и дом Северодвинска.
              Точная цена за 2 минуты — до приезда, а не после.
            </p>
            <div className="mt-7">
              <a href={PHONE_HREF} className="btn-primary">
                Позвонить <Phone size={16} />
              </a>
            </div>
            <Messengers className="mt-5" />
            <dl className="mt-9 grid grid-cols-3 gap-5 border-t border-white/25 pt-6">
              <div>
                <dt className="text-2xl font-bold text-white">47</dt>
                <dd className="mt-1 text-xs leading-5 text-white/80">пунктов чек-листа приёмки</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-white">48 ч</dt>
                <dd className="mt-1 text-xs leading-5 text-white/80">гарантии после уборки</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-white">0 ₽</dt>
                <dd className="mt-1 text-xs leading-5 text-white/80">доплат на месте</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
