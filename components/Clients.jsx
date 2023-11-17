
 import { FaHome } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import FadeIn, { FadeInStagger } from "./FadeIn";
import Container from "./Container";
import familywork from "../public/assets/familywork.png"
import greenlife from "../public/assets/greenlife.png"
import Image from "next/image";

const clients = [
    ["Home Work", familywork],
    ["Family Fund", greenlife],
    ["Home Work", familywork],
    ["Family Fund", greenlife],
];

export default function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:py-32 lg:mt-50">
        <Container>
            <FadeIn className = "flex items-center gap-x-8">
                <h2
                className="text-center font-display text-sm font-semibold
                tracking-wider text-white sm:text-left">
                    We have worked with hundreds of people
                </h2>
                <div className="h-px flex-auto bg-neutral-800"/>
            </FadeIn>
            <FadeInStagger faster>
            <ul role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
                    {clients.map(([client, logo]) => (
                        <li key={client}>
                            <FadeIn>
                                <Image src={logo} alt={client} unoptimized className="w-7 h-7"/>
                            </FadeIn>
                        </li>
                    ))}
                </ul>
            </FadeInStagger>
        </Container>
    </div>
  )
}
