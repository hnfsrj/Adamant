
<script>

    import Buildings from './Buildings.svelte';


</script>

<div class="blocker">
<section id="about">
    <p>Who We Are</p>

    <p>
        Adamant Engineering is a new chapter in our journey, launched in 2022 with a focus on self-reliance and local production. As part of Adamant Holding, we build on years of experience in global trade and industry, but this venture is different. It’s about bringing innovation to East Africa and reducing the need for imports by growing what we can produce here at home.
        <br/><br/>
        Led by Mr. Ketema, our team is committed to changing how we view engineering and production. We’re not just creating systems; we’re shaping a future where East African industries stand strong, backed by the latest technology and international partnerships. Adamant Engineering isn’t just a business—it’s a mission to strengthen local manufacturing, push boundaries, and lead the way in building sustainable solutions for our economy.
    </p>

    <Buildings />
</section>
</div>


<style>

/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

#about{
    position:relative;
}

    section>p:first-of-type{
        margin-top:20%;
        font-size:3rem;
        font-weight:700;
        color:var(--blue);
        
    }

    section>p:last-of-type{
        color:black;
        margin-top:10%;
        margin-bottom:50%;
        font-size:1.7rem;
        font-weight:400;
    }
    




@media (min-width:401px){

    section>p:first-of-type{
        font-size:3.3rem; 
    }

    section>p:last-of-type{
        font-size:1.8rem;
        font-weight:400;
        margin-bottom:30%;
    }




}


@media (min-width:501px){

    section>p:first-of-type{
        margin-top:15%;
        
    }


}




@media (min-width:601px){

    section>p:first-of-type{
        margin-top:12%;
        
    }
    
    section>p:last-of-type{
        margin-top:7%;
    }

}








@media (min-width:801px){

    section>p:first-of-type{
        margin-top:9%;
        
    }

    section>p:last-of-type{
        margin-top:6%;
    }

}



@media (min-width:901px){


    section>p:first-of-type{
        margin-top:6%;
        font-size:3.5rem;
    }
    
    section>p:last-of-type{
        font-size:1.9rem;
    }

}







</style>