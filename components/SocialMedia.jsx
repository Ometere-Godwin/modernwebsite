import clsx from "clsx";
import Link from "next/link";
import {BsFacebook, BsTwitter, BsGithub, BsLinkedin} from "react-icons/bs";

const SocialMediaProfiles = [
    {
        title: "Github",
        href: "https://github.com/Ometere-Godwin",
        icon: BsGithub,
    },

    {
        title: "LinkedIn",
        href: "linkedin.com/in/ometere-oghene-godwin",
        icon: BsLinkedin,
    },
]
export default function SocialMedia({className, invert = false}) {
  return (
    <ul role="list"
    className = {clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
    )}>
        {SocialMediaProfiles.map((socialMediaPofile) => (
            <li key={socialMediaPofile.title}>
                <Link
                href={socialMediaPofile.href}
                aria-label={socialMediaPofile.title}
                className={clsx(
                    "transition",
                    invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
                )}>
                <socialMediaPofile.icon className= "h-6 w-6 fill-current"/>
                </Link>
            </li>
        ))}
    </ul>
  )
}
