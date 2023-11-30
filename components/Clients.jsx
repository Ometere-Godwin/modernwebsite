
import familyFund from "../public/assets/familyFund.svg";
import greenLife from "../public/assets/greenLife.svg";
import homeWork from "../public/assets/homeWork.svg";
import logoPhobiaDark from "../public/assets/logoPhobiaDark.svg";
import mailSmark from "../public/assets/mailSmark.svg";
import northAdventures from "../public/assets/northAdventures.svg";
import phobia from "../public/assets/phobia.svg";
import unseal from "../public/assets/unseal.svg";
import FadeIn, { FadeInStagger } from "./FadeIn";
import Container from "./Container";
import Image from "next/image";

const clients = [
    ["Family Fund", familyFund],
    ["Green Life", greenLife],
    ["Home Work", homeWork],
    ["Phobia", logoPhobiaDark],
    ["Mail Shark", mailSmark],
    ["North Adventure", northAdventures],
    ["Unseal", unseal],
    ["Phobia", phobia],
]

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
                                <Image src={logo} alt={client} unoptimized/>
                            </FadeIn>
                        </li>
                    ))}
                </ul>
            </FadeInStagger>
        </Container>
    </div>
  )
}
