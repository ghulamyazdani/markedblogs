/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
export default function Main() {
    return (
        <div className="text-center pt-28 backdrop-opacity-10 dark:backdrop-opacity-70 backdrop-invert dark:bg-[#000000] bg-white/30">
            <section className="bg flex flex-col">
                <img
                    className="next"
                    src="./images/logos/next.png"
                    alt="next"
                />
                <img
                    className="sass"
                    src="./images/logos/sass.png"
                    alt="next"
                />
                <img
                    className="node"
                    src="./images/logos/node.png"
                    alt="next"
                />
                <img
                    className="react"
                    src="./images/logos/react.png"
                    alt="next"
                />
                <img
                    className="python"
                    src="./images/logos/python.png"
                    alt="next"
                />
                <img
                    className="tailwind"
                    src="./images/logos/tailwind.png"
                    alt="next"
                />
                <img
                    className="typescript"
                    src="./images/logos/typescript.png"
                    alt="next"
                />
            </section>
            <div className="main-content">
                <h1 className="text-3xl font-extrabold">
                    Welcome to Community Blog
                </h1>
                <p className="text-lg opacity-70">
                    Get the latest and best of all Community blogs here
                </p>
                <p className="text-s opacity-50">
                    Want to contribute and publish some blogs?
                    <div className="border-none decoration-slice underline text-blue-400">
                        <Link href="https://github.com/ghulamyazdani/markedblogs/new/main/posts">
                            <a
                                className="text-blue-700 hover:text-blue-900"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Contribute
                            </a>
                        </Link>
                    </div>
                </p>
            </div>

            <div className="curve text-white dark:text-[#0E1A38]">
                <svg
                    preserveAspectRatio="none"
                    width="1440"
                    height="74"
                    viewBox="0 0 1440 74"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="curve-svg z-10"
                >
                    <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z" />
                </svg>
            </div>
        </div>
    )
}
