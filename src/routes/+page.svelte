<script lang="ts">
	import "bootstrap/dist/css/bootstrap.min.css";
	import "glider-js/glider.min.css";
	import "$lib/styles/custom.css";

	import { onMount } from "svelte";
	import Glider from "glider-js";

	let testimonials: HTMLElement;
	let prevArrow: HTMLElement;
	let nextArrow: HTMLElement;

	onMount(() => {
		new Glider(testimonials, {
			skipTrack: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			scrollLock: true,
			draggable: true,
			dots: "#resp-dots",
			arrows: {
				prev: prevArrow,
				next: nextArrow
			},
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						itemWidth: 150,
						duration: 0.5
					}
				}
			]
		});
	});
</script>

<div class="container-md p-0">
	<!-- Title -->
	<div id="title" class="panel my-6 p-3 text-center">
		<div class="container-sm my-3">
			<h1 class="title">Hello,<br />I'm Uyen.</h1>
			<h2 class="subtitle">or you can call me Lily :)</h2>
		</div>
		<a class="btn-next" href="#about">↓</a>
	</div>

	<!-- About -->
	<div id="about" class="panel my-6 p-3 text-center">
		<div class="container-sm my-3">
			<img class="circle py-3" src="/images/me.jpg" alt="Potrait of me" />
			<h1 class="py-3">Get to know me</h1>
			<p class="fs-5">
				I have over two years of working experience in the UK and Vietnam, mainly in managing
				accounts and organising events and projects for clients from different industries. I pride
				myself on staying organised, prioritising, and multitasking. For client success, I always
				aim to communicate effectively with clients and key project stakeholders, offer quick
				support, and facilitate cooperation between different departments.
			</p>
			<p class="fs-5">
				Whether you need someone for a short-term project, or a long-term collaboration, Id love to
				hear from you. You're invited to explore my work and contact me so we can discuss how we can
				do some great work together.
			</p>
		</div>
		<a class="btn-next" href="#experiences">↓</a>
	</div>

	<!-- Experiences -->
	<div id="experiences" class="panel my-6 p-3 text-center">
		<div class="container-sm my-3">
			<h1>Experiences</h1>
			<div class="container-sm py-3 fs-5 text-start">
				<div class="row my-3 py-3">
					<div class="col">August 2021 - December 2022</div>
					<div class="col">
						Project Account Manager <br />
						Quadrant2design <br />
						<span class="fs-6">Poole, UK</span>
					</div>
				</div>
				<div class="row my-3 py-3">
					<div class="col">December 2017 - August 2019</div>
					<div class="col">
						Event Account Executive <br />
						Asia Pacific Talent Youth Training Centre <br />
						<span class="fs-6">Vietnam</span>
					</div>
				</div>
				<div class="row my-3 py-3">
					<div class="col">August 2021 - December 2022</div>
					<div class="col">
						Account Executive Intern <br />
						Happiness Saigon <br />
						<span class="fs-6">Vietnam</span>
					</div>
				</div>
			</div>
			<a class="btn btn-outline-primary fs-5" href=".">View my full CV here</a>
		</div>
		<a class="btn-next" href="#testimonials">↓</a>
	</div>

	<!-- Testimonials -->
	<div id="testimonials" class="panel my-6 p-3 text-center">
		<div class="container-sm my-3">
			<h1>Testimonials</h1>
			<div class="position-relative">
				<div class="mx-3">
					<div bind:this={testimonials} class="glider text-start fs-6">
						<div class="glider-track d-flex align-items-center">
							<div class="glider-slide p-3" data-gslider="0">
								"We were as always really happy with the stand - everything came together perfectly
								and the whole experience was incredibly easy. Lily was great at pulling everything
								together and the artwork team were great and gave us a little extra time when we
								needed it." <br />
								<span style="font-size: smaller;">
									Jordana OReilly, Media and Communications Manager, Asset Alliance Group</span
								>
							</div>
							<div class="glider-slide p-3" data-gslider="1">
								"I wanted to say such a big thank you for all your help with the exhibition stand at
								Ace. The feedback we had from staff, customers and visitors was that it was really
								eye catching and modern and my CEO in particular loved the design. Thank you for
								ensuring that it was all ready and set up on time. I appreciate all the help you
								gave me. I hope you've taken some time off to rest and recover from what must have
								been a busy event." <br />
								<span style="font-size: smaller;"
									>Claire Foster, Brand Marketing Manager, Aesthetic Source Ltd</span
								>
							</div>
							<div class="glider-slide p-3" data-gslider="2">
								"I worked with Lily on a couple of our tradeshow projects this year. Lily was a
								fantastic project manager, very organised, professional and has excellent
								communication skills. Always quick to reply and find a solution to any queries I
								had. It was great working with you!"<br />
								<span style="font-size: smaller;">
									Molly Walker, Digital Marketing Executive, My mHealth</span
								>
							</div>
							<div class="glider-slide p-3" data-gslider="3">
								"I have had the pleasure of working with Lily across a number of tradeshow projects
								this year. She is a competent, approachable and professional project manager who
								possesses great communication skills. As her client, I would highly recommend her yo
								any employer." <br /><span style="font-size: smaller;">
									Gamze Bastug, Marketing Manager, KSEYE</span
								>
							</div>
							<div class="glider-slide p-3" data-gslider="4">
								"Lily was a great project manager for our exhibition stand design and build. She is
								a great communicator and ensured we were kept in the loop throughout the project.
								Lily was extremely organised and we were thrilled with the end results of our
								stand."<br />
								<span style="font-size: smaller;"> Zoe Lamb, Marketing Manager, Datatag Ltd</span>
							</div>
							<div class="glider-slide p-3" data-gslider="5">
								"Lily was excellent with responding to our ideas for our exhibition stand and very
								efficient in all aspects of service. I look forward to working with her again!"<br
								/>
								<span style="font-size: smaller;">
									Alex Taylor, International Business Development Manager, Devine Chemical Ltd</span
								>
							</div>
							<div class="glider-slide p-3" data-gslider="6">
								"...The project management from Lily was again, fantastic. She kept us all on track
								and prevented any pre-show stress which is always appreciated... " <br /><span
									style="font-size: smaller;"
								>
									Emily Bartlett, Head of Luxury Sale and Marketing, Simply Cartons Ltd</span
								>
							</div>
							<div class="glider-slide p-3" data-gslider="7">
								"... Lily was our project manager, and again she made the process very easy. She was
								quick to sort any issues out and was really helpful in giving me nudges on any
								outstanding tasks that needed doing..." <br /><span style="font-size: smaller;"
									>Freddie Molyneux, Marketing and Business Development Manager, Gordian Strapping</span
								>
							</div>
							<div class="glider-slide p-3" data-gslider="8">
								"...We are very happy from our stand and the quality of it. Everything was perfect!
								Project manager is my Angel Guardian , she is absolutely amazing, very responsive,
								so polite, know her job so well and always ready to help and answer all our
								questions - even if they were repetitive 😉..." <br /><span
									style="font-size: smaller;"
								>
									Kasia Piasecka, Assistant Project Manager, Packaging Mode</span
								>
							</div>
							<div class="glider-slide p-3" data-gslider="9">
								"...And Lily was perfect she was so helpful as this was my first time doing a show
								of this nature and she really walked me through it as well as being the go-between
								myself and the builders..."<br />
								<span style="font-size: smaller;">
									Lauren Button, Marketing Executive, TISSL Ltd</span
								>
							</div>
						</div>
					</div>
				</div>
				<button
					bind:this={prevArrow}
					aria-label="Previous"
					class="position-absolute top-50 translate-middle-y h-100 p-1 glider-arrow"
					style="left: -1rem">←</button
				>
				<button
					bind:this={nextArrow}
					aria-label="Next"
					class="position-absolute top-50 translate-middle-y h-100 p-1 glider-arrow"
					style="right: -1rem">→</button
				>
			</div>
			<div id="resp-dots" role="tablist" class="glider-dots">
				<button data-index="0" aria-label="Page 1" role="tab" class="glider-dot active" /><button
					data-index="1"
					aria-label="Page 2"
					role="tab"
					class="glider-dot "
				/><button data-index="2" aria-label="Page 3" role="tab" class="glider-dot " /><button
					data-index="3"
					aria-label="Page 4"
					role="tab"
					class="glider-dot "
				/><button data-index="4" aria-label="Page 5" role="tab" class="glider-dot " />
			</div>
		</div>
		<a class="btn-next" href="#contact">↓</a>
	</div>

	<!-- Contact -->
	<div id="contact" class="panel my-6 p-3 text-center">
		<div class="container-sm my-3">
			<h1>Contact</h1>
			<form action="" method="post" class="text-start fs-5">
				<div class="mb-3">
					<label for="name" class="form-label">Name</label>
					<input type="text" class="form-control" id="name" name="name" required />
				</div>
				<div class="mb-3">
					<label for="email" class="form-label">Email</label>
					<input type="email" class="form-control" id="email" name="email" required />
				</div>
				<div class="mb-3">
					<label for="message" class="form-label">Message</label>
					<textarea
						class="form-control"
						id="message"
						name="message"
						rows="8"
						maxlength="2048"
						required
					/>
					<span id="contact-notice" class="form-text fs-6">
						Information supplied in this form is shared directly and does not go to 3rd party
						services.
					</span>
				</div>
				<button type="submit" class=" form-control-lg btn btn-primary w-100">Submit</button>
			</form>
		</div>
	</div>
</div>

<style>
	.container-sm {
		max-width: 720px;
	}

	.title {
		font-size: 6rem;
		padding: 2rem 0;
	}

	.subtitle {
		padding: 1rem 0 2rem;
	}

	.circle {
		border-radius: 50%;
	}

	.btn-next {
		color: #adc6f8;
		text-decoration: none;
	}
</style>
