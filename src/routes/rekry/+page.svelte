<script>
    import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
    import logo from '$lib/img/logo.png';

    export let data;

    let text = documentToHtmlString(data.pages[0].blocksCollection.items[0].content.json)
</script>
<svelte:head>
    <title>Rekry - HybridiSpeksi</title>
    <meta name="description" content="Rekryn tiedot" />
</svelte:head>

<section class="wrap">
    <img class="logo" src="{logo}" alt="HybridiSpeksin logo" />
    <div class="text">
        <div id="content">{@html text}</div>
</section>


<style lang="scss">
    :global(h2) {
        color: rgb(83, 83, 83);
        font-size: large;
        font-weight: 700;
        text-align: center;
    }
    h3 {
        text-align: center;
    }
    section.wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .text {
            max-width: 50vw;
            text-align: justify;
        }
        .logo {
            width: 30vw;
            height: 30vw;
        }
        @media only screen and (max-width: 767px) {
            .text {
                max-width: 85vw;
            }
            :global(p) {
                font-size: 1rem;
            }
            .logo {
                width: 60vw;
                height: 60vw;
            }
        }
    }
</style>
