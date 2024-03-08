import config from '@/config/siteConfig';
import { useEffect, useRef } from "react";

export default function Hero() {
	return (
		<div className="-mx-[max(calc(50vw-44rem+4rem),4rem)] md:-mx-[max(calc(50vw-44rem+8rem),8rem)] lg:-mx-[max(calc(50vw-44rem+18rem),18rem)] -mt-8 relative bg-gray-50 overflow-hidden">
			<div
				className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
				aria-hidden="true"
			>
				<div className="relative h-full max-w-7xl mx-auto">
					<svg
						className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
						width={404}
						height={784}
						fill="none"
						viewBox="0 0 404 784"
					>
						<defs>
							<pattern
								id="f210dbf6-a58d-4871-961e-36d5016a0f49"
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits="userSpaceOnUse"
							>
								<rect
									x={0}
									y={0}
									width={4}
									height={4}
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect
							width={404}
							height={784}
							fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
						/>
					</svg>
					<svg
						className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
						width={404}
						height={784}
						fill="none"
						viewBox="0 0 404 784"
					>
						<defs>
							<pattern
								id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits="userSpaceOnUse"
							>
								<rect
									x={0}
									y={0}
									width={4}
									height={4}
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect
							width={404}
							height={784}
							fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
						/>
					</svg>
				</div>
			</div>
			<div className="relative pt-6 pb-16 sm:pb-24">
				<main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
					<div className="text-center">
						<h1 className="flex flex-col gap-y-2 text-primary">
              <span className="text-3xl">We live in a moment of<br />civilizational crisis and awakening</span>
							<span className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">The Second Renaissance</span>
						</h1>
						<p className="mt-6 max-w-md mx-auto sm:text-lg md:mt-10 md:text-xl md:max-w-2xl">
              It is a time between worlds, as we witness the breakdown of the old paradigm and the birth of the new – moving from modernity into what comes next.
						</p>
						<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
							<div className="rounded-md shadow">
								<a
									href="#overview"
									className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-yellow-300 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10"
								>
									Learn more
								</a>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}
