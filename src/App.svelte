<script>

	import { onMount, onDestroy, setContext } from "svelte";

	import {NavStore} from './store/Store';
	import {OtherStates} from './store/Other';
	import {ServicesState} from './store/Other';

	import Nav from './components/Nav.svelte';
	import Landing from './components/Landing.svelte';
	import About from './components/About.svelte';
	import Vision from './components/Vision.svelte';
	import Services from './components/Services.svelte';
	import Distinction from './components/Distinction.svelte';
	import Approach from './components/Approach.svelte';
	import Contact from './components/Contact.svelte';


	const nav_observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const classes = Array.from(entry.target.classList);

				entry.target.classList.remove(classes[0]);

				observer.unobserve(entry.target);
			}
			
		});
	}, {
		rootMargin: '0px',
		threshold: 0
	});



	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const classes = Array.from(entry.target.classList);

				entry.target.classList.remove(classes[0]);

				observer.unobserve(entry.target);
			}
			
		});
	}, {
		rootMargin: '-20px',
		threshold: 0
	});



	const parent_observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {

				const elements = Array.from(entry.target.children);

				elements.forEach(element=>{

					const classes = Array.from(element.classList);

					element.classList.remove(classes[0]);

				});

				observer.unobserve(entry.target);
				
			}
			
		});
	}, {
		rootMargin: '-20px',
		threshold: 0
	});



	function observeElements(elements) {
        elements.forEach((element) => {
            observer.observe(element);
        });
    }

    function unobserveElements(elements) {
        elements.forEach((element) => {
            observer.unobserve(element);
        });
    }

	setContext('nav_observer', nav_observer);
	setContext('observer', observer);
	setContext('parent_observer', parent_observer);
	setContext('observeElements', observeElements);
	setContext('unobserveElements', unobserveElements);











	function resize_handler(){
		let width = window.innerWidth;

		ServicesState.update(current_state => {
            return {...current_state};
        });

		if (width >= 771){
			NavStore.update(current_state => {
                return {...current_state, "wide":true};
            });
		}else{
			NavStore.update(current_state => {
                return {...current_state, "wide":false};
            });
		}


		if (width>=995){
			OtherStates.update(current_state => {
                return {...current_state, "split":true};
            });
		}else{
			OtherStates.update(current_state => {
                return {...current_state, "split":false};
            });
		}

	}

	onMount(()=>{
		resize_handler();
		window.addEventListener("resize", resize_handler);
	});
	
	onDestroy(()=>{
		window.removeEventListener("resize", resize_handler);
	});


</script>


<div id="container">
	<Nav/>
	<Landing/>
	<About/>
	<Vision/>
	<Services/>
	<Distinction/>
	<Approach/>
	<Contact/>
</div>


<style>

</style>