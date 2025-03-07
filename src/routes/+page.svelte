<script lang="ts">
     import Car from '$lib/assets/ride.png';
	import Appstore from '$lib/assets/googleplay.png';
	import Googlplay from '$lib/assets/new apple.png';
    import Phone from "$lib/assets/Annotation_2025-02-28_111717-removebg-preview.png"
    import Group from "$lib/assets/Group.svg"
	import { ClockIcon, MapIcon, ShieldCheckIcon } from "lucide-svelte";
	


	const features = [
		{
			icon: ClockIcon,
			title: "Fast Pickup",
			description: "Get picked up within minutes of booking your ride",
		},
		{
			icon: MapIcon,
			title: "Logistics",
			description: "Seamless ride coordination with AI-driven routing, real-time tracking, and optimized scheduling for fast, reliable, and eco-friendly trips",
		},
		{
			icon: ShieldCheckIcon,
			title: "Safe Rides",
			description: "Verified drivers and real-time trip monitoring for your safety",
		},
	];
</script>

<div class="flex min-h-screen flex-col items-center font-Poppins justify-center bg-orange-500">
	<!-- Main Container with Semi-Circular Background -->
	<div
		class="relative flex h-[100vh] w-full flex-col items-center rounded-t-[20rem] bg-white p-4 shadow-md sm:p-6 md:p-8"
	>
		<!-- Title -->
         <img src={Group} alt="Group"  class="md:mb-3 w-[3rem] md:w-[7rem]" />
		<h1 class=" font-bold text-gray-900 mt-1 sm:mb-4 text-lg md:text-4xl">Ride Beyond Limits</h1>
		<p class=" text-[0.8rem] font-normal text-gray-900 sm:mb-4 px-6 text-center md:text-2xl md:text-[1.5rem]">Experience urban mobility redefined with our <br/> premium motorcycle hailing service</p>

		

		<!-- App Store Badges (Car Image) -->
		<div class="mb-4 -mt-8 flex flex-col items-center sm:mb-8">
			<img src={Car} alt="Freedom Car" class="md:w-[38rem] w-[20rem] mt-8 md:mt-[2rem]" />
		</div>
		
		<!-- Benefits -->
		<div
			class="flex w-[80%] flex-col items-center justify-around rounded-lg border border-gray-300 bg-white p-2 shadow-md md:w-[80vw] sm:flex-row sm:p-4 md:space-x-5 md:rounded-full"
		>
			<!-- No Over-Pricing Section -->
			<div class="mb-2 md:w-1/3 max-w-xs text-center space-y-1 sm:mb-0 ">
				<p class="md:font-semibold font-normal text-[0.8rem] md:text-[1rem] text-gray-800">No over-pricing</p>
				<p class="text-xs text-gray-500 md:text-sm md:px-3">Cheapest costs | Competitive prices</p>
				<p class="text-xs text-gray-500 md:text-sm">Pay as you go</p>
			</div>

			<!-- Cashback Section with App Store Badges -->
			<div class="md:mb-2 w-1/3 max-w-xs text-center sm:mb-0 ">
				<p class="md:font-semibold font-normal text-[0.8rem] md:text-[1rem] text-orange-500 md:text-gray-800">Get GHC 200 voucher on mobile app download</p>
				<div class="mt-1 flex justify-center space-x-2">
					<img src={Appstore} alt="App Store" class="h-6 sm:h-8" />
					<img src={Googlplay} alt="Google Play" class="h-6 sm:h-8" />
				</div>
			</div>

			<!-- No Return Fare Section -->
			<div class="md:w-1/3 max-w-xs text-center sm:w-auto">
				<p class="mb-2 w-full max-w-xs text-center sm:mb-0 sm:w-auto">
				<p class="md:font-semibold font-normal text-[0.8rem] md:text-[1rem] text-gray-800">No return fare</p>
				<p class="text-xs text-gray-500 sm:text-sm">One-Way cab fare | No hidden charges</p>
				<p class="text-xs text-gray-500 sm:text-sm">Minimal advance</p>
			</div>
		</div>
	</div>

	<!-- Features Section -->
	<section id="features" class="container py-20 px-2 md:px-0 text-white">
		<h2 class="text-center text-3xl font-bold md:text-4xl">Why Choose Freedom</h2>
		<div class="mt-12 grid gap-8 md:grid-cols-3">
			{#each features as feature}
				<div>
					<div>
						<svelte:component this={feature.icon} class="h-12 w-12 text-primary text-white" />
						<h2 class="mt-4 text-2xl font-bold">{feature.title}</h2>
						<p>{feature.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</section>
	

	<!-- App Download Section -->
	<section class="relative mt-[1rem] flex w-full mb-[1rem] md:h-[70vh] h-[50vh] md:px-5 flex-row justify-center items-center bg-white text-center">
		<!-- Title -->
		<div class='flex flex-col items-center justify-center '>
            <h2 class="text-[1.8rem] mt-5">Ride Beyond Limits</h2>
            <p>Experience urban mobility redefined with our <br/> premium motorcycle hailing service</p>
			<h2 class="mt-[2rem] mb-4 md:text-4xl text-2xl font-bold text-black">Download Now!</h2>

			
			<!-- App Store Badges -->
			<div class="flex space-x-4 mt-8">
				<a href="/dashboard"><img src={Googlplay} alt="Get it on Google Play" class="md:w-[10rem] w-[5rem]" /></a>
				<a href="/dashboard"><img src={Appstore} alt="Download on the App Store" class="md:w-[10rem] w-[5rem]" /></a>
			</div>
		</div>
		<!-- Phone Image -->
		<div
			class="mb-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8"
		>
			<img
				src={Phone}
				alt="Mighty Taxi App on Phone 1"
				class="md:block hidden md:w-[50rem] rounded-lg sm:w-64"
			/>
		</div>
	</section>

    <!-- footer section -->

	<footer class="bg-orange-600 w-full text-white shadow-md flex flex-col items-center p-4">
		<div class="flex flex-col items-center w-full my-8">
			<!-- Social Media Icons -->
			<div class="flex space-x-4 mb-4">
				<a href="https://facebook.com/logocompany" target="_blank" class="hover:text-white">
					<span class="text-xl">
						<!-- Facebook SVG Icon -->
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
							<path fill="currentColor" d="M20 12.05a8 8 0 1 0-9.25 8v-5.67h-2v-2.33h2v-1.77a2.83 2.83 0 0 1 3-3.14a12 12 0 0 1 1.79.16v2h-1a1.16 1.16 0 0 0-1.3 1.26v1.51h2.22l-.36 2.33h-1.85V20A8 8 0 0 0 20 12.05"></path>
						</svg>
					</span>
				</a>
				<a href="https://twitter.com/logocompany" target="_blank" class="hover:text-white">
					<span class="text-xl">
						<!-- Twitter SVG Icon -->
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
							<g fill="none">
								<path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
								<path fill="currentColor" d="M4.594 4.984a1 1 0 0 1 .941.429C7.011 7.572 8.783 8.47 10.75 8.674c.096-.841.323-1.672.75-2.404c.626-1.074 1.644-1.864 3.098-2.156c2.01-.404 3.54.324 4.427 1.215l1.792-.335a1 1 0 0 1 1.053 1.478l-1.72 3.022c.157 4.361-1.055 7.405-3.639 9.502c-1.37 1.112-3.332 1.743-5.485 1.938c-2.17.196-4.623-.041-7.061-.753a1 1 0 0 1 .007-1.922c1.226-.349 2.16-.65 3.003-1.177c-1.199-.636-2.082-1.468-2.707-2.416c-.868-1.318-1.19-2.788-1.254-4.113S3.141 8 3.343 7.115c.115-.505.249-1.011.434-1.495a1 1 0 0 1 .818-.636Z"/>
							</g>
						</svg>
					</span>
				</a>
				<a href="https://instagram.com/logocompany" target="_blank" class="hover:text-white">
					<span class="text-xl">
						<!-- Instagram SVG Icon -->
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
							<path fill="currentColor" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"/>
						</svg>
					</span>
				</a>
			</div>
			<!-- Copyright Text -->
			<p class="text-white text-xs">Copyright. All rights reserved.</p>
		</div>
	</footer>
</div>
