
type Period = {
  label: string
  dateTime: number
}

type Some = {
  start: string | Period
  end: string | Period

}

type Role = Prettify<{
  company: string
  title: string
  logo: any
} & Some>

const role: Role = {
  company: "Gate Express",
  title: "CEO",
  logo: "logoPlanetaria",
  start: "September 2022",
  end: {
    label: "May 2023",
    dateTime: new Date().getFullYear(),
  },
}

const role2: Role = {
  company: "Gate Express",
  title: "CEO",
  logo: "logoPlanetaria",
  start: {
    label: "May 2023",
    dateTime: new Date().getFullYear(),
  },
  end: "September 2022",
}

if (isRoleWithExtendedPeriod(role, "start")) {
  role.start
  // role.end
}


if (isRoleWithExtendedPeriod(role2, "start")) {
  role2.start
  // role2.end
}

if (isRoleWithExtendedPeriod(role, "end")) {
  // role.start
  role.end
}

if (isRoleWithExtendedPeriod(role2, "end")) {
  // role2.start
  role2.end
}

type Obj = {
  some: "str"
  ohter: 123
}

type Res = ReplaceKeyTypes<Role, "start" , Period>
// ReplaceKeyTypes<R, Field, Period>

function isRoleWithExtendedPeriod<R extends Role, Field extends keyof Some & keyof R>(
  role: R,
  field: Field,
): role is Prettify<R & {
  company: string
  title: string
  logo: any
} & {
  [key in Field]: Period // string
  // end: string | Period
}> {

  return typeof role[field] === "object"
}

// <ol className="mt-6 space-y-4">
//         {resume.map((role, index) => (
//           <li key={index} className="flex gap-4">
//             <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-slate-800/5 ring-1 ring-slate-900/5 dark:border dark:border-slate-700/50 dark:bg-slate-800 dark:ring-0">
//               <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
//             </div>
//             <dl className="flex flex-auto flex-wrap gap-x-2">
//               <dd className="w-full flex-none text-sm font-medium text-slate-900 dark:text-slate-100">
//                 {role.company}
//               </dd>
//
//               <dd className="text-xs text-slate-500 dark:text-slate-400">
//                 {role.title}
//               </dd>
//
//               <dd
//                 className="ml-auto text-xs text-slate-400 dark:text-slate-500"
//                 aria-label={`${role.start.label ?? role.start} until ${
//                   role.end.label ?? role.end
//                 }`}
//               >
//                 {/* {isRoleWithExtendedPeriod(role, "start") ? (
//                   role.start
//                 ) : ""} */}
//                 <time dateTime={role.start["dateTime"] ?? role.start}>
//                   {role.start.label ?? role.start}
//                 </time>{" "}
//                 <span aria-hidden="true">—</span>{" "}
//                 <time dateTime={role.end.dateTime ?? role.end}>
//                   {role.end.label ?? role.end}
//                 </time>
//               </dd>
//             </dl>
//           </li>
//         ))}
//       </ol>
