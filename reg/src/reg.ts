let sum = 0;
const squares = [1, 2, 3, 4, 5].map(
  (x) => ((sum += x), (() => console.log("sone stuff"))(), console.log("more stuff"), x * x)
);

console.log(sum); // 15
console.log(squares); // [1, 4, 9, 16, 25]

// import Accordion from '@/ui/Accordion'
// import { faqData } from '@/utils/data/faqData'
// import { IFaqData } from '@/interfaces/IFaqData'
// const Faq = () => (
//   <section className=" pt-[40px] pb-[80px]">
//     <div className="mx-auto max-w-6xl px-4">
//       <div className="flex flex-col gap-5">
//         <h1 className="mb-11 text-2xl font-bold sm:text-4xl">
//           Популярные вопросы
//         </h1>
//         <ul>
//           {faqData.map(
//             ({ id, title, description }: IFaqData) => (
//               console.log(
//                 '🚀 ~  id, title, description :',
//                 id,
//                 title,
//                 description
//               ),
//               (<Accordion key={id} title={title} description={description} />)
//             )
//           )}
//         </ul>
//       </div>
//     </div>
//   </section>
// )
