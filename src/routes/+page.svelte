<script>
    import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
    import kreivilogo from '$lib/img/kreivi_logo.png';
    import cannon from '$lib/img/cannon.png'
    import castle from '$lib/img/castle.png'
    import crab from '$lib/img/crab.png'
    import heart from '$lib/img/heart.png'
    import stars from '$lib/img/stars.png'
    import horse from '$lib/img/horse.png'
    export let data;

    let text = documentToHtmlString(data.pages[0].blocksCollection.items[0].content.json)
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
        <div class="text" id="content">
            <div id="frontContent">{@html text}</div>
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
            background: #fffef0;
            z-index: 10;
            :global(*) {
                color: $color-kreivi-dark;
                max-width: 55vw;
                font-size: 1.5rem;
                text-align: center;
                font-family: 'hightower';
            }   
            :global(h2) {
                font-family: 'cardinal';
                font-size: 3rem;
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
                margin-bottom: 0;
                :global(*) {
                    max-width: 80vw;
                    font-size: 1.1rem;
                }   
                :global(h2) {
                    font-size: 2rem;
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
        top: 0;
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
</style>
