export type Coach = {
  id: string;
  name: string;
  role?: string;
  experience: string[];
  image: string;
  active: boolean;
};

export const coaches: Coach[] = [
  {
    id: "trey-price",
    name: "Trey Price",
    role: "Owner / Trainer",
    image: "/images/coaches/gen.png",
    experience: [
      "Pearland High School – 2009 state semifinalist",
      "Prairie View A&M University – 2012 SWAC Champion",
      "Former Division I catcher with 15+ years of lesson experience",
      "Specializes in hitting, throwing, fielding, catching, and strength & conditioning",
      "7 years experience in personal training and sports-specific athletic training",
    ],
    active: true,
  },
  {
    id: "machon-trimm",
    name: "Machon Trimm",
    image: "/images/coaches/gen.png",
    experience: [
      "Pearland High School – 2008 First Team All-District pitcher",
      "Alvin Community College – Freshman of the Year (2009)",
      "Former Division I closer – Lamar University (2011)",
      "10+ years experience giving private lessons and coaching select baseball",
      "Specializes in pitching",
    ],
    active: true,
  },
  {
    id: "andre-oliver",
    name: "Andre Oliver",
    image: "/images/coaches/gen.png",
    experience: [
      "Westbury High School (2004–2008)",
      "Prairie View A&M University (2008–2013)",
      "2012 SWAC Champion",
      "Former Division I second baseman",
      "Specializes in batting and fielding",
      "7 years coaching select baseball and giving lessons",
    ],
    active: true,
  },
  {
    id: "sydney-gutierrez",
    name: "Sydney Gutierrez",
    image: "/images/coaches/gen.png",
    experience: [
      "Pearland High School – 4-year letterman (.424 career average)",
      "Led Blinn College in batting average (.458) and hits (66)",
      "Hit .305 at Ole Miss",
      "Led conference hitting .366 vs conference opponents",
      "Specializes in hitting lessons (not slapping)",
    ],
    active: true,
  },
  {
    id: "anthony-gutierrez",
    name: "Anthony Gutierrez",
    image: "/images/coaches/gen.png",
    experience: [
      "15+ years coaching girls softball",
      "20 years giving baseball and softball lessons",
      "Specializes in hitting, throwing, and fielding for all ages",
      "Has helped countless athletes continue their careers and play college softball",
    ],
    active: true,
  },
  {
    id: "darryl-johnson",
    name: "Darryl Johnson",
    image: "/images/coaches/gen.png",
    experience: [
      "4-year letterman at Fort Bend Hightower",
      "2007 All-District honors",
      "Holds Fort Bend Hightower single-season home run record (16)",
      "Prairie View A&M – 2012 SWAC Champion",
      "Specializes in hitting, fielding, throwing, and outfield work",
    ],
    active: true,
  },
  {
    id: "matt-maysey",
    name: "Matt Maysey",
    role: "Elite Hitting & Pitching Coach",
    image: "/images/coaches/gen.png",
    experience: [
      "4-year letterman at Alief Hastings High School",
      "Selected in the 7th round of the 1985 MLB Draft by the San Diego Padres",
      "Pitched for the Montreal Expos and Milwaukee Brewers",
      "20+ years giving lessons",
      "Specializes in elite-level hitting, fielding, and pitching",
    ],
    active: true,
  },
  {
    id: "stephen-lunsford",
    name: "Stephen Lunsford",
    image: "/images/coaches/gen.png",
    experience: [
      "Freshman Pitcher of the Year – Illinois Community College",
      "Prairie View A&M – 2012 SWAC Champion",
      "Played multiple seasons of independent baseball after college",
      "Specializes in pitching, hitting, and fielding for all ages",
    ],
    active: true,
  },
  {
    id: "tre-jones",
    name: "Tre Jones",
    image: "/images/coaches/gen.png",
    experience: [
      "2023 Texas A&M Corpus Christi – Preseason First Team All-Conference",
      "6-game hit streak – University of Houston (2024)",
      "Signed with the Texas Tailgaters (2025)",
      "Specializes in hitting, fielding, throwing, and outfield work",
    ],
    active: true,
  },
  {
    id: "levi-whitlock",
    name: "Levi Whitlock",
    image: "/images/coaches/gen.png",
    experience: [
      "Played at Alvin High School (graduated 2020)",
      "Utility player at University of Houston–Victoria (2020–2024)",
      "1 year experience giving private and group lessons",
      "Specializes in pitching, hitting, fielding, strength, and agility for all ages",
    ],
    active: true,
  },
];
