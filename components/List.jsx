import React from 'react'
import FadeIn, { FadeInStagger } from './FadeIn'
import Border from './Border';
import clsx from 'clsx';

export default function List({className, children}) {
  return (
    <div>
        <FadeInStagger>
            <ul role='list' className={clsx("text-base text-neutral-600", className)}>
                {children}
            </ul>
        </FadeInStagger>
    </div>
  );
};

export const ListItem = ({title, children}) => {
    return (
        <li className='group mt-10 first:mt-0'>
            <FadeIn>
                <Border className="pt-10 group-first:pt-0 group-first:before:hidden
                group-first:after:hidden">
                    {title && (
                        <strong className='font-semibold text-neutral-950'>
                            {`${title}.`}
                        </strong>
                    )}
                    {children}
                </Border>
            </FadeIn>
        </li>
    )
}
