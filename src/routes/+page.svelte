<script>
    import construction from '$lib/img/tyonnalle.png';
    
    let sponsors = [
        'aaly.svg',
        'campussport.jpg',
        'jouluristeily.png',
        'loimu.jpg',
        'punanaamio.png',
        'tek.png',
        'marilyn.png',
        'tivia_blue.png'
    ]

</script>
<svelte:head>
    <title>HybridiSpeksi</title>
    <meta name="description" content="HybridiSpeksi on Turun yliopiston luonnontieteiden ja tekniikan opiskelijoiden vuosittain toteuttama teatteriproduktio." />
</svelte:head>

<div class="wrap">
    <section class="banner">
        <h1>Rakennamme parhaillamme seuraavaa speksiä!</h1>
        <div class="welcome">
            <img src="{construction}" alt="Welcome" draggable=false />
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
    h1{
        color: white;
        text-align: center;
        font-weight: 700;
    }

    h2, h3 {
        color: rgb(172, 7, 106);
        text-align: center;
        font-weight: 700;
    }
    div.wrap {
        background-color: rgb(172, 7, 106);
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
            height: 50vh;
            padding-bottom: 50px;
            img {
                height: 100%;
            }
        }

        .text {
            background-color: white;
            border-radius: 30px;
            width: 80%;
            padding: 50px 0;
            margin: 50px 0;
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
