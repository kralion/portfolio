import tailwindLogo from "../assets/tag-images/tailwindcss-tag.png";
import reactLogo from "../assets/tag-images/react-tag.png";
import viteLogo from "../assets/tag-images/vite-tag.png";
import materialTailwindLogo from "../assets/tag-images/material-tailwind-tag.png";
import firebaseLogo from "../assets/tag-images/firebase-tag.png";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,

} from "@material-tailwind/react";
export default function Example({ projectTitle, description, difficultLevel, technologies }) {
    return (
        <Card className="w-full max-w-[26rem] relative p-3 mx-5 shadow-xl rounded-lg">
            <CardHeader floated={false} color="blue-gray">
                <img
                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="ui/ux review check"
                    className="rounded-xl"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full rounded-xl bg-gradient-to-tr from-transparent via-transparent to-black/60 " />

            </CardHeader>
            <CardBody className="mt-5">
                <div className="mb-3 flex items-center justify-between px-3">
                    <Typography variant="h5" color="blue-gray" className="font-medium">
                        {projectTitle}
                    </Typography>
                    <Typography
                        color={
                            difficultLevel === "Easy"
                                ? "green"
                                : difficultLevel === "Medium"
                                    ? "yellow"
                                    : "red"

                        }
                        className="flex items-center gap-1.5 font-normal text-[12px] text-gray-700 bg-[#FDC738] rounded-lg px-2 py-0.5"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                        {difficultLevel}
                    </Typography>
                </div>
                <Typography color="gray" className="text-justify font-Roboto px-3">
                    {description}
                </Typography>
                {/* <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                    {technologies.map((tech) => {

                        if (tech.includes("tailwindcss")) {
                            return (
                                <Tooltip content="$129 per night">
                                    <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 py-[9px] transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 w-10 h-10 hover:!opacity-100 group-hover:opacity-70">
                                        <img src={tailwindLogo} alt="tailwindlogo" />
                                    </span>
                                </Tooltip>

                            )
                        } else if (tech.includes("react")) {
                            return (
                                <Tooltip content="Free wifi">
                                    <span className="cursor-pointer flex items-center justify-center rounded-full border border-blue-500/5 bg-blue-500/5 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 w-10 h-10 hover:!opacity-100 group-hover:opacity-70">
                                        <img src={reactLogo} alt="reactLogo" />
                                    </span>
                                </Tooltip>
                            )
                        } else if (tech.includes("vite")) {
                            return (
                                <Tooltip content="2 bedrooms">
                                    <span className="cursor-pointer flex items-center justify-center rounded-full border border-blue-500/5 bg-blue-500/5 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 w-10 h-10 hover:!opacity-100 group-hover:opacity-70">
                                        <img src={viteLogo} alt="viteLogo" />
                                    </span>
                                </Tooltip>
                            )
                        } else if (tech.includes("material-tailwind")) {
                            return (
                                <Tooltip content={`65" HDTV`}>
                                    <span className="cursor-pointer flex items-center justify-center rounded-full border border-blue-500/5 bg-blue-500/5 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 w-10 h-10 hover:!opacity-100 group-hover:opacity-70">
                                        <img src={materialTailwindLogo} alt="materialTailwinLogo" />
                                    </span>
                                </Tooltip>
                            )
                        } else if (tech.includes("firebase")) {
                            return (
                                <Tooltip content="Fire alert">
                                    <span className="cursor-pointer flex items-center justify-center rounded-full border border-blue-500/5 bg-blue-500/5 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 w-10 h-10 hover:!opacity-100 group-hover:opacity-70">
                                        <img src={firebaseLogo} width={40} alt="firebaseLogo" />
                                    </span>
                                </Tooltip>
                            )
                        }
                    })}

                    <Tooltip content="And +2 more">
                        <span className="cursor-pointer flex items-center justify-center rounded-full border border-blue-500/5 bg-blue-500/5 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 w-10 h-10 text-[#FDC738] hover:!opacity-100 group-hover:opacity-70">
                            +2
                        </span>
                    </Tooltip>
                </div> */}
            </CardBody>
            <CardFooter className="pt-3">
                <Button size="lg" fullWidth={true} className="px-12 py-2 bg-[#FDC738]  rounded-xl hover:bg-[#000] duration-500 text-black hover:text-[#FDC738]" >
                    Go to Project
                </Button>
            </CardFooter>
        </Card>
    );
}