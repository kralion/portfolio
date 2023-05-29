import tailwindLogo from "../assets/tag-images/tailwindcss-tag.png";
import reactLogo from "../assets/tag-images/react-tag.png";
import viteLogo from "../assets/tag-images/vite-tag.png";
import graphqlLogo from "../assets/tag-images/graphql-tag.png";
import firebaseLogo from "../assets/tag-images/firebase-tag.png";
import cssLogo from "../assets/tag-images/css-tag.png";
import jsLogo from "../assets/tag-images/js-tag.png";


import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,

} from "@material-tailwind/react";
export default function Example({ projectTitle, description, usedTechnologies, projectImage, projectLink }) {
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
        }
        ,
        {
            logo: jsLogo,
            alt: "js",
            Tooltip: "JavaScript",
        }


    ]


    return (
        <Card className="w-full cursor-default lg:max-w-[26rem]  relative p-5 mx-5 hover:scale-105 hover:shadow-xl hover:border-slate-400 rounded-xl duration-300">
            <CardHeader floated={false} color="blue-gray">
                <img
                    src={projectImage}
                    alt="ui/ux review check"
                    className="rounded-xl"
                    width="100%"
                    height="auto"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full rounded-xl bg-gradient-to-tr from-transparent via-transparent to-black/60 " />

            </CardHeader>
            <CardBody className="mt-5">
                <div className="mb-3 flex items-center justify-between px-3">
                    <Typography variant="h5" color="blue-gray" className="font-medium">
                        {projectTitle}
                    </Typography>
                    
                        <a href={demoLink} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1.5 font-normal text-[12px] text-[#eb5e28] rounded-lg px-2 py-0.5 border-[1px] border-orange-600 cursor-pointer  hover:bg-orange-600 hover:text-white duration-200 active:bg-orange-700 ">

                        demo
                        </a>
                   
                </div>
                <Typography color="gray" className="text-left font-Roboto px-3">
                    {description}
                </Typography>
                <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
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
                <Button size="lg" fullWidth={true} className="px-12 py-2 normal-case bg-[#403d39] text-white tracking-wider  rounded-xl" >
                    <a href={projectLink} target="_blank" rel="noreferrer" >Go to Project</a>
                </Button>
            </CardFooter>
        </Card>
    );
}