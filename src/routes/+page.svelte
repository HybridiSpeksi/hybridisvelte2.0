<script>
    import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
    import kreivilogo from '$lib/img/kreivi_logo.png';
    import cannon from '$lib/img/cannon.png'
    import castle from '$lib/img/castle.png'
    import crab from '$lib/img/crab.png'
    import heart from '$lib/img/heart.png'
    import stars from '$lib/img/stars.png'
    import horse from '$lib/img/horse.png'
    import teaser from '$lib/img/teaser.png'
    export let data;

    let text = documentToHtmlString(data.pages[0].blocksCollection.items[0].content.json)
    let text2 = documentToHtmlString(data.pages[0].blocksCollection.items[1].content.json)
    
    let sponsors = [
        'aaly.svg',
        'campussport.jpg',
        'jouluristeily.png',
        'loimu.jpg',
        'punanaamio.png',
        'tek.png',
        'marilyn.png',
        'tiviagold.png'
    ]

</script>
<svelte:head>
    <title>HybridiSpeksi</title>
    <meta name="description" content="HybridiSpeksi on Turun yliopiston luonnontieteiden ja tekniikan opiskelijoiden vuosittain toteuttama teatteriproduktio." />
</svelte:head>

<div class="wrap">
    <section class="banner">
        <div class="welcome">
            <img src="{kreivilogo}" alt="Welcome" draggable=false />
        </div>
    </section>

    <div class="drawings">
        <div class="left">
            <div class="smallimg" style="margin-top: 100px; padding-left: 100px"><img src="{castle}" alt="castle doodle"/></div>
            <div class="smallimg" style="padding-bottom: 20px"><img src="{cannon}" alt="cannon doodle"/></div>
            <div class="smallimg" style=""><img src="{crab}" alt="crab doodle"/></div>
        </div>
        <div class="right">
            <div class="smallimg" style="padding-right: 50px"><img src="{heart}" alt="heart doodle"/></div>
            <div class="smallimg" style="padding-left: 150px"><img src="{stars}" alt="stars doodle"/></div>
            <div class="smallimg" style="padding-left: 150px; padding-bottom: 80px"><img src="{horse}" alt="horse doodle"/></div>
        </div>
    </div>

    <section class="wrap" >
        <div class="text">
            <div id="frontContent">{@html text}</div>
        </div>
        <div class="youtube">
            <a href="https://www.youtube.com/watch?v=c3ozXZcZhsg">
                <img src={teaser} alt="Link to teaser on Youtube" />
                <svg class="icon icon__youtube" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 202.3 141.6" height="200" width="200" >
                    <path d="M101.2.3S38 .3 22.1 4.4C13.8 6.8 6.7 13.8 4.3 22.1.2 38 .2 71.1.2 71.1s0 33.1 4.1 48.4c2.4 8.9 9.4 15.3 17.7 17.7 15.9 4.1 79.1 4.1 79.1 4.1s63.2 0 79.1-4.1c8.9-2.4 15.3-8.9 17.7-17.7 4.1-15.9 4.1-48.4 4.1-48.4s0-33.1-4.1-49c-2.4-8.9-8.9-15.3-17.7-17.7-15.9-4.1-79-4.1-79-4.1zM81.1 41l52.5 30.1-52.5 30.1V41z"/>
                </svg>
            </a>
        </div>
        <div class="text">
            <div id="frontContent">{@html text2}</div>
        </div>
    </section>
    
    <section class="wrap">
        <div class="text">
            <h2>Pääyhteistyökumppani</h2>
            <div class="sponsors">
                <img class="super" src="images/sponsors/axelhealth.png" alt="axel health logo" />
            </div>
            <h2>Yhteistyössä</h2>
            <div class="sponsors">
                {#each sponsors as sponsor}
                <img src={"/images/sponsors/"+sponsor} alt="{sponsor} logo"/>
                {/each}
            </div>
        </div>
    </section>
</div>

<style lang="scss">
    div.wrap {
        background: url('$lib/img/paper_bkg.jpg');
    }
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
        &.wrap {
            position: relative;
            width: 100%;
            height: auto;
        }
		.welcome {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: relative;
			max-width: 80%;
            z-index: 10;
            img {
				z-index: 1;
				height: 40vh;
                margin: 4rem 0;
                @media (max-width: 800px) {
                    height: 100%;
                    width: 90vw;
                }
            }
		}
        .text {
            margin-bottom: 50px;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: auto;
            width: 75%;
            margin: 2rem 0;
            padding: 4rem;
            box-shadow: 2px 3px 20px black, 0 0 125px #8f5922 inset;
            background: #fffef080;
            z-index: 10;
            :global(ul) {
                margin: auto;
                list-style: lower-roman;
            }
            :global(*) {
                color: $color-kreivi-dark;
                max-width: 55vw;
                font-size: 1.5rem;
                text-align: center;
                font-family: 'hightower';
            }   
            :global(h1) {
                font-family: 'cardinal';
                font-size: 3rem;
                font-weight: 400;
                margin: 25px;
            }
            :global(h1::first-letter) {
                // font-family:'chomsky';
                font-size: 5rem;
                text-shadow: 1px 1px 1px #000;
                margin: 0 .5rem;
            }
            :global(h2) {
                font-family: 'cardinal';
                font-size: 3rem;
                font-weight: 400;
                margin: 25px;
            }
            :global(h2::first-letter) {
                // font-family:'chomsky';
                font-size: 5rem;
                text-shadow: 1px 1px 1px #000;
                margin: 0 .5rem;
            }

            :global(p:not(:first-child)::first-letter) {
                font-family: 'cardinal';
                font-size: 3rem;
                text-shadow: 1px 1px 1px #000;
                margin: 0 .5rem;
            }

            @media (max-width: 600px){
                width: 100%;
                padding: 0;
                margin-bottom: 2rem;
                :global(*) {
                    max-width: 80vw;
                    font-size: 1.1rem;
                }   
                :global(h1) {
                    text-align: center;
                    margin: 2rem auto;
                }
                :global(h1::first-letter) {                    
                    margin-left: -0.8rem;
                    // font-size: 3rem;

                }
            }
        }
        .youtube {
            a {
                display: flex;
                justify-content: center;
                position: relative;
                margin: 2rem auto;
                img {
                    width: 720px;
                    box-shadow: 2px 3px 20px black, 0 0 125px #8f5922 inset;
                }
                svg {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    -ms-transform: translate(-50%,-50%);
                    -moz-transform:translate(-50%,-50%);
                    -webkit-transform: translate(-50%,-50%);
                    transform: translate(-50%,-50%);
                    fill: red;
                }            
                &:hover {
                    scale: 1.05;
                }
                @media (max-width: 600px) {
                    img {
                        width: 80%;
                    }
                    svg {
                        width: 100px;
                    }
                }
            }
            
        }
	}
    .drawings {
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        z-index: 1;
        top: 50px;
        .left {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .right {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .smallimg {
            margin-top: 200px;
            img {
                width: 15vw;
            }
        }
        @media (max-width: 900px) {
            display: none;
        }
    }
    .sponsors {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        img {
            padding: 30px;
            max-width: 250px;
            height: 100%;
            mix-blend-mode: multiply;
            &.super {
                max-width: 400px;
            }
            
            @media (max-width: 950px) {
                padding: 10px;
                max-width: 150px;
            }
        }

    }
</style>
