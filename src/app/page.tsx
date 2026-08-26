'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import { Root } from "./_type/siteData"
import Loading from "./loading"
import {
  Github, Linkedin, Dribbble, Mail, ArrowUpRight, ExternalLink,
  Briefcase, Code2, Layers, Sparkles, Cpu, Database, Palette, Award, Star, Calendar, FileText, Send, AtSign, Globe, Box, Braces
} from "lucide-react"

const mock: Root = {
  "info": [
    {
      "id": 1,
      "desc": "توسعه‌دهنده Front-End با ۴ سال تجربه عملی در طراحی و توسعه وب‌اپلیکیشن‌های واکنش‌گرا، کاربرپسند و مقیاس‌پذیر. مسلط به فریم‌ورک‌های مدرن JavaScript، اصول طراحی UI/UX و بهینه‌سازی عملکرد. دارای توانایی حل مسئله و تمرکز بر نوشتن کد تمیز، قابل نگهداری و بهبود تجربه کاربری.",
      "linkedin": "https://www.linkedin.com/in/tahasabiri",
      "git": "https://github.com/Taha-sabiri",
      "email": "mailto:taha.sabiri6702@gmail.com",
      "message": "sms:+989102876702"
    }
  ],
  "skills": [
    {
      "id": 1,
      "name": "Next.js"
    },
    {
      "id": 2,
      "name": "React.js"
    },
    {
      "id": 3,
      "name": "Vue.js"
    },
    {
      "id": 4,
      "name": "TypeScript"
    },
    {
      "id": 5,
      "name": "JavaScript"
    },
    {
      "id": 6,
      "name": "Figma، Photoshop، Illustrator"
    }
  ],
  "familerWith": [
    {
      "id": 1,
      "name": "Flutter"
    },
    {
      "id": 2,
      "name": "Kotlin"
    },
    {
      "id": 3,
      "name": "SQL"
    },
    {
      "id": 4,
      "name": "Java"
    },
    {
      "id": 5,
      "name": "Dart"
    },
    {
      "id": 6,
      "name": "Node.js"
    }
  ],
  "experience": [
    {
      "id": 2,
      "title": "OnlineAdvertiser - توسعه‌دهنده Front-End و طراح UI/UX",
      "sub": "پاره‌وقت - فروردین ۱۳۹۸ تا تیر ۱۴۰۰",
      "desc": "توسعه وب‌سایت معرفی شرکت و طراحی رابط کاربری اپلیکیشن پادکست «Melango». تمرکز بر طراحی واکنش‌گرا و کاربرپسند و پیاده‌سازی استانداردهای مدرن توسعه Front-End برای پروژه‌های تبلیغاتی."
    },
    {
      "id": 1,
      "title": "EVTSP CO (عضو گروه بانک ملت) - توسعه‌دهنده Front-End",
      "sub": "مهر ۱۴۰۲ تا اکنون",
      "desc": "همکاری در تیم توسعه Front-End برای طراحی، توسعه و بهینه‌سازی وب‌اپلیکیشن‌های پلتفرم TSP (ارائه‌دهنده خدمات مالیاتی). مشارکت در توسعه فنی و پیاده‌سازی سامانه که در نهایت به دریافت مجوز رسمی TSP از سازمان امور مالیاتی کشور منجر شد."
    }
  ],
  "project": [
    {
      "id": 1,
      "title": "اختصاص مالیات به پروژه‌های ساختمانی نیمه‌تمام",
      "date": "مرداد ۱۴۰۴",
      "link": "https://mtp.evtsp.com"
    },
    {
      "id": 2,
      "title": "ارائه‌دهنده خدمات مالیاتی (TSP بانک ملت)",
      "date": "دی ۱۴۰۲",
      "link": "https://my.evtsp.com"
    },
    {
      "id": 3,
      "title": "امضای دیجیتال بانک پارسیان (PWA)",
      "date": "مرداد ۱۴۰۴",
      "link": "https://digisign.parsian-bank.ir"
    },
    {
      "id": 4,
      "title": "تأمین مالی زنجیره‌ای بانک پارسیان",
      "date": "تیر ۱۴۰۵",
      "link": "https://scf.parsian-bank.ir"
    }
  ],
  "licenses": [
    {
      "id": 1,
      "title": "Software Architecture and Clean Code Design in OOP",
      "education": "Udemy",
      "date": "Mar2025"
    },
    {
      "id": 2,
      "title": "Next.js",
      "education": "Codeyad",
      "date": "Mar2025"
    },
    {
      "id": 3,
      "title": "Learn SQL in 3 Hours: A Tutorial for Fast Learners",
      "education": "Udemy",
      "date": "Apr2024"
    },
    {
      "id": 4,
      "title": "HTML CSS Bootstrap",
      "education": "Udemy",
      "date": "Aug2022"
    },
    {
      "id": 5,
      "title": "Foundations of User Experience (UX) Design",
      "education": "Google",
      "date": "Aug2022"
    },
    {
      "id": 6,
      "title": "User Experience for Web Design",
      "education": "LinkedIn",
      "date": ""
    },
    {
      "id": 7,
      "title": "The Ultimate SQL Bootcamp: Go From Zero to Hero",
      "education": "Udemy",
      "date": ""
    },
    {
      "id": 8,
      "title": "SQL - The Complete Introduction to SQL Programming",
      "education": "Udemy",
      "date": ""
    },
    {
      "id": 9,
      "title": "JavaScript Fundamentals",
      "education": "Udemy",
      "date": ""
    },
    {
      "id": 10,
      "title": "Vue.js",
      "education": "Codeyad",
      "date": "Oct2025"
    },
    {
      "id": 11,
      "title": "Getting Started with Docker",
      "education": "Simplilearn",
      "date": "July2026"
    }
  ],
  "social": [
    {
      "id": 1,
      "title": "لینکدین",
      "link": "https://linkedin.com/in/tahasabiri"
    },
    {
      "id": 2,
      "title": "گیت‌هاب",
      "link": "https://github.com/Taha-sabiri"
    },
    {
      "id": 3,
      "title": "ایمیل",
      "link": "mailto:taha.sabiri6702@gmail.com"
    },
    {
      "id": 4,
      "title": "پیام",
      "link": "sms:+989102876702"
    }
  ]
}


const skillIcon: Record<string, any> = {
  "JavaScript": Braces, "React": Layers, "Next.js": Globe, "TypeScript": Code2, "Tailwind": Palette, "Node.js": Cpu
}

export default function Home() {
  const [data, setData] = useState<Root | null>(null)
  useEffect(() => {
    const t = setTimeout(async () => {
      try { const r = await fetch("/api/information"); const j = await r.json(); setData(!j.info?.length ? mock : j) } catch { setData(mock) }
    }, 500); return () => clearTimeout(t)
  }, [])
  if (!data) return <Loading />
  const d = data.info?.length ? data : mock

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-[720px] mx-auto px-6 md:px-8">

        <header className="flex items-center justify-between py-7 border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5 text-[10px] text-neutral-500">
            <span className="size-1.5 rounded-full bg-white animate-pulse" />
            <span>در دسترس برای پروژه</span>
          </div>
          <nav className="flex items-center gap-4 text-[11px] text-neutral-400">
            <a href="#" className="flex items-center gap-1.5 hover:text-white transition"><Linkedin className="size-3.5" /> LinkedIn</a>
            <a href="#" className="flex items-center gap-1.5 hover:text-white transition"><Github className="size-3.5" /> Github</a>
            <a href="#" className="flex items-center gap-1.5 hover:text-white transition"><Dribbble className="size-3.5" /> Dribbble</a>
          </nav>
        </header>

        <section className="py-10">
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQHBPVDyIw9VMg/profile-displayphoto-crop_800_800/B4EZ_F8dsNHsAI-/0/1785732390995?e=1789603200&v=beta&t=361lJf2dWq9KLPXsUaqt2SbFUqZ3tZFWMDloZFDqKBE" alt="avatar" className="size-20 rounded-full grayscale border border-white/10" />
          <h1 className="text-[17px] font-medium mt-4 flex items-center gap-2">سلام، من طاها صبیری هستم <Sparkles className="size-3.5 text-neutral-500" /></h1>
          <p className="text-[13px] leading-7 text-neutral-400 mt-3 max-w-[520px]">
            {d.info[0].desc}
          </p>

          <div className="mt-6">
            <p className="text-[11px] font-medium text-white flex items-center gap-1.5"><Star className="size-3 text-neutral-500" /> مهارت‌های برتر</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {d.skills.map(s => {
                const Icon = skillIcon[s.name] || Box
                return (
                  <span key={s.id} className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-neutral-300">
                    <Icon className="size-3 text-neutral-400" /> {s.name}
                  </span>
                )
              })}
              <span className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-neutral-300"><Layers className="size-3 text-neutral-400" /> Software Design</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-neutral-300"><Palette className="size-3 text-neutral-400" /> UI/UX</span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <a href="#tamass" className="inline-flex items-center gap-2 bg-white text-black text-[12px] font-medium px-5 py-2 rounded-full hover:bg-neutral-200 transition">
              <Send className="size-3.5" /> سلام بگو
            </a>
            <a href="#" className="inline-flex items-center gap-2 border border-white/15 text-[12px] px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
              <FileText className="size-3.5" /> رزومه
            </a>
          </div>
        </section>

        <section className="py-6 border-t border-white/[0.06]">
          <h2 className="text-[11px] tracking-widest text-neutral-500 flex items-center gap-2"><Box className="size-3.5" /> پروژه‌های منتخب</h2>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {d.project.slice(0, 4).map((p, i) => (
              <Link key={p.id} href={p.link} className="group relative bg-white/[0.04] border border-white/[0.06] rounded-xl p-3 hover:bg-white/[0.07] hover:border-white/10 transition">
                <div className="h-[110px] rounded-lg bg-white overflow-hidden flex p-2 gap-2">
                  <div className="flex-1 grid grid-cols-3 gap-1">
                    {[1, 2, 3, 4, 5, 6].map(k => <div key={k} className={`rounded ${i === 1 ? "bg-gradient-to-br from-violet-500 to-indigo-500" : "bg-neutral-100"}`} />)}
                  </div>
                  <div className={`w-8 rounded ${i % 2 ? "bg-neutral-900" : "bg-neutral-200"}`} />
                </div>
                <p className="text-[12px] font-medium mt-3 flex items-center justify-between">{p.title} <ArrowUpRight className="size-3.5 text-neutral-500 group-hover:text-white transition" /></p>
                <p className="text-[10px] text-neutral-500 flex items-center gap-1 mt-1"><Calendar className="size-3" /> {p.date} · مشاهده</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-6 border-t border-white/[0.06]">
          <div className="grid grid-cols-4 gap-2">
            <a href="#" className="aspect-square bg-white/[0.04] border border-white/[0.06] rounded-xl grid place-items-center gap-1 hover:bg-white hover:text-black transition group">
              <Linkedin className="size-5" /><span className="text-[9px]">LinkedIn</span>
            </a>
            <a href="#" className="aspect-square bg-white/[0.04] border border-white/[0.06] rounded-xl grid place-items-center gap-1 hover:bg-white hover:text-black transition">
              <Github className="size-5" /><span className="text-[9px]">Github</span>
            </a>
            <a href="#" className="aspect-square bg-white/[0.04] border border-white/[0.06] rounded-xl grid place-items-center gap-1 hover:bg-white hover:text-black transition">
              <AtSign className="size-5" /><span className="text-[9px]">Email</span>
            </a>
            <a href="#" className="aspect-square bg-white/[0.04] border border-white/[0.06] rounded-xl grid place-items-center gap-1 hover:bg-white hover:text-black transition">
              <Dribbble className="size-5" /><span className="text-[9px]">Dribbble</span>
            </a>
          </div>
          <div className="mt-3 bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 flex items-center justify-between hover:bg-white/[0.06] transition cursor-pointer">
            <div>
              <p className="text-[12px] font-medium flex items-center gap-2"><FileText className="size-3.5 text-neutral-400" /> نسخه چاپی رزومه</p>
              <p className="text-[11px] text-neutral-500">دانلود PDF — یک کلیک</p>
            </div>
            <span className="size-9 rounded-full bg-white text-black grid place-items-center"><ArrowUpRight className="size-4" /></span>
          </div>
        </section>

        <section className="py-6 border-t border-white/[0.06]">
          <h2 className="text-[11px] tracking-widest text-neutral-500 flex items-center gap-2"><Briefcase className="size-3.5" /> تجربه</h2>
          <p className="text-[12px] leading-6 text-neutral-400 mt-3">۳ سال تجربه فرانت‌اند — راهکارهای سریع و مقیاس‌پذیر با تمرکز بر بیزینس.</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[...d.skills, ...d.familerWith].slice(0, 8).map(s => (
              <span key={s.name} className="inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full border border-white/10 text-neutral-400">
                <span className="size-1.5 rounded-full bg-white/60" /> {s.name}
              </span>
            ))}
          </div>

          <div className="mt-6 space-y-5 border-r border-white/10 pr-5 mr-1">
            {d.experience.map(item => (
              <div key={item.id} className="relative">
                <span className="absolute -right-[26px] top-1 size-2.5 rounded-full bg-white border-4 border-black" />
                <div className="flex items-center gap-2 text-[10px] text-neutral-500"><Calendar className="size-3" /> {item.sub}</div>
                <h3 className="text-[13px] font-medium mt-1 flex items-center gap-2"><Briefcase className="size-3 text-neutral-500" /> {item.title}</h3>
                <p className="text-[11.5px] leading-6 text-neutral-400 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-6 border-t border-white/[0.06]">
          <h2 className="text-[11px] tracking-widest text-neutral-500 flex items-center gap-2"><Code2 className="size-3.5" /> پروژه‌ها</h2>
          <div className="mt-4 space-y-2">
            {d.project.map(p => (
              <Link key={p.id} href={p.link} className="flex items-center justify-between bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3 hover:bg-white/[0.07] transition group">
                <div className="flex items-center gap-3">
                  <span className="size-8 rounded-lg bg-white text-black grid place-items-center"><Code2 className="size-4" /></span>
                  <div>
                    <p className="text-[12px] font-medium">{p.title}</p>
                    <p className="text-[10px] text-neutral-500">{p.date} · Next.js · Tailwind</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] border border-white/15 rounded-full px-3 py-1 group-hover:bg-white group-hover:text-black transition"><ExternalLink className="size-3" /> مشاهده</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-6 border-t border-white/[0.06]">
          <h2 className="text-[11px] tracking-widest text-neutral-500 flex items-center gap-2"><Award className="size-3.5" /> گواهینامه‌ها <span className="mr-auto size-5 rounded-full bg-white/[0.06] grid place-items-center"><Database className="size-3" /></span></h2>
          <div className="grid gap-2 mt-4">
            {d.licenses.map(item => (
              <div key={item.id} className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.06] rounded-xl p-3">
                <span className="size-8 rounded-full bg-white text-black grid place-items-center"><Award className="size-4" /></span>
                <div>
                  <p className="text-[12px] font-medium">{item.title}</p>
                  <p className="text-[10px] text-neutral-500 flex items-center gap-1"><Calendar className="size-3" /> {item.date} · {item.education}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer id="tamass" className="py-8 border-t border-white/[0.06] flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            <a href="mailto:hello@taha.dev" className="inline-flex items-center gap-2 text-[11px] bg-white text-black px-4 py-2 rounded-full"><Mail className="size-3.5" /> hello@taha.dev</a>
            <span className="inline-flex items-center gap-1.5 text-[11px] text-neutral-500 px-3 py-2"><Globe className="size-3" /> تهران · ریموت</span>
          </div>
          <p className="text-[10px] text-neutral-600">© {new Date().getFullYear()} طه صابری — ساخته شده با <span className="text-white">Next.js</span> و کلی آیکون ♡</p>
        </footer>

      </div>
    </div>
  )
}
