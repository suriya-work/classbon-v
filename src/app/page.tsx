// import { Colors } from "./_components/colors/colors";
import Image from "next/image"

export default function Home() {
  return (
    <>
      <section className="bg-hero-pattern mt-5 xl:mt-10 xl:bg-left">
        <div className="container flex flex-col-reverse items-center xl:flex-row">
          <div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
            <h3 className="text-xl dark:text-info xl:text-2xl">خوش آمدید...</h3>
            <h1 className="text-3xl font-black gradient lg:text-4xl xl:text-4xl">مسیر صعود به قله های برنامه نویسی</h1>
            <p>هر جای مسیر برنامه نویسی که باشی با هم راهی استاد های با تجربه کلاسبن می تونی بدون محدودیت به قله های بالاتری صعود کنی  ما همیشه هواتو داریم</p>
            <Image src='/images/frameworks.png' width={412} height={39} alt="" className="grayscale mt-4 opacity-70 m-auto xl:m-0" />
          </div>
          <Image src='/images/programmer-landing.svg' width={702} height={521} alt="کلاسبن" />
        </div>
      </section>
    </>
  )
}
