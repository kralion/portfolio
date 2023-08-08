import tailwindLogo from "../assets/images/tailwindcss-tag.png";
import reactLogo from "../assets/images/react-tag.png";
import viteLogo from "../assets/images/vite-tag.png";
import graphqlLogo from "../assets/images/graphql-tag.png";
import firebaseLogo from "../assets/images/firebase-tag.png";
import cssLogo from "../assets/images/css-tag.png";
import jsLogo from "../assets/images/js-tag.png";
import NewWindowLogo from "../assets/icons/new-window.png";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
export default function Example({
  projectTitle,
  demoLink,
  description,
  usedTechnologies,
  projectImage,
  projectLink,
}) {
  const technologies = [
    {
      logo: tailwindLogo,
      alt: "tailwindcss",
      Tooltip: "TailwindCSS",
    },
    {
      logo: reactLogo,
      alt: "react",
      Tooltip: "React",
    },
    {
      logo: viteLogo,
      alt: "vite",
      Tooltip: "Vite",
    },

    {
      logo: firebaseLogo,
      alt: "firebase",
      Tooltip: "Firebase",
    },
    {
      logo: graphqlLogo,
      alt: "graphql",
      Tooltip: "GraphQL",
    },
    {
      logo: cssLogo,
      alt: "css",
      Tooltip: "CSS",
    },
    {
      logo: jsLogo,
      alt: "js",
      Tooltip: "JavaScript",
    },
  ];

  return (
    <Card className="w-full cursor-default lg:max-w-[26rem]  relative   hover:shadow-xl hover:border-slate-400 rounded-xl duration-300">
      <CardHeader
        className="flex justify-center"
        floated={false}
        color="blue-gray"
      >
        <img
          src={projectImage}
          alt="ui/ux review check"
          className="rounded-xl"
          width="90%"
          height="auto"
        />
      </CardHeader>
      <CardBody className="space-y-3">
        <div className=" flex items-baseline justify-between">
          <Typography variant="h5" color="blue-gray" className="font-semibold">
            {projectTitle}
          </Typography>

          <a
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center  font-normal text-sm text-[#eb5e28] rounded-lg px-3 py-1 border-[1px] border-orange-600 cursor-pointer  hover:bg-orange-600 hover:text-white duration-200 active:bg-orange-700 "
          >
            repo
          </a>
        </div>
        <Typography color="gray" className="text-left font-Roboto ">
          {description}
        </Typography>

        <div className="flex justify-center rounded-xl  items-center">
          {technologies.map((tech) => {
            if (usedTechnologies.includes(tech.alt)) {
              return (
                <Tooltip key={tech.alt} content={tech.Tooltip}>
                  <span className="flex justify-center items-center rounded-full border border-blue-500/5 py-[9px] transition-colors hover:border-blue-500/10 hover:bg-blue-600/10 w-10 h-10 hover:!opacity-100 group-hover:opacity-70">
                    <img className="p-[5px]" src={tech.logo} alt={tech.alt} />
                  </span>
                </Tooltip>
              );
            } else {
              return null;
            }
          })}
        </div>
      </CardBody>
      <CardFooter className="pt-3">
        <Button
          size="lg"
          fullWidth={true}
          className="flex justify-center py-3 normal-case bg-[#403d39] text-white hover:bg-black hoveR:text-white duration tracking-wider  rounded-xl"
        >
          <a
            href={projectLink}
            className="items-center flex gap-3  "
            target="_blank"
            rel="noreferrer"
          >
            View Demo
            <div>
              <img width={15} height={15} src={NewWindowLogo} alt="demo" />
            </div>
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
