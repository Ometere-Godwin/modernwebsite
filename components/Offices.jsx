import clsx from "clsx";

function Office({name, children, invert = false}){
    return(
        <address 
        className={clsx(
            "text-sm not-italic",
            invert ? "text-neutral-300" : "text-neutral-950"
        )}>
            <strong className={invert ? "text-white" : "text-neutral-950"}>
                {name}
            </strong>
            <br />
            {children}
        </address>
    )
}

export default function Offices({invert = false, ...props}) {
  return (
    <ul role="list" {...props}>
        <li>
            <Office name="U.S.A" invert={invert}>
                in bay mark
                <br />
                Newtown City of Las Vegas
            </Office>
        </li>

        <li>
            <Office name="London" invert={invert}>
                13 Long Street
                <br />
                Downtown Allyway
            </Office>
        </li>
    </ul>
  )
}
