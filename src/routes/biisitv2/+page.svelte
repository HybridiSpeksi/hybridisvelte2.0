<script>
    import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
    export let data;

    let produktiot = data.produktioData.items;

    let selectedYear = 9999;
    let songs = produktiot.find(
        (p) => p.year == selectedYear).biisitCollection.items;

    let selectedSong = produktiot[0].biisitCollection.items[0]

    function updateSongList() {
        songs = produktiot.find((p) => p.year == selectedYear).biisitCollection.items;
        selectedSong = songs[0]
    }
</script>

<svelte:head>
    <title>Biisit - HybridiSpeksi</title>
    <meta name="description" content="HybridiSpeksin parhaat" />
</svelte:head>

<section class="wrap">
    <form>
        <select bind:value={selectedYear} on:change={() => updateSongList()}>
            {#each produktiot as produktio}
                <option value={produktio.year}
                    selected={produktio.year == selectedYear ? "selected" : ""}>
                    {produktio.nimi}
                </option>
            {/each}
        </select>

        <select bind:value={selectedSong}>
            {#each songs as song}
                <option value={song}
                    selected={song.nimi == selectedSong.nimi ? "selected" : ""}
                    >{song.nimi}
                </option>
            {/each}
            
        </select>
    </form>
    <div class="song">
        <h2>{selectedSong.nimi}</h2>
        <h3><em>{selectedSong.origin}</em></h3>
        <div>{@html documentToHtmlString(selectedSong.sanat.json).replace(/\n/g, `</br>`)}</div>
    </div>

</section>

<style lang="scss">
    .song {
        margin: 20px;
        display: flex;
        flex-direction: column;

        h2, h3 {
            margin-bottom: 1.5rem;
        }
    }
</style>
